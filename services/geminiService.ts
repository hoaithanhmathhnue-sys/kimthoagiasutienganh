import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Question, EducationLevel, Difficulty, DifficultyMode } from "../types";

// --- CONFIGURATION & HELPERS ---

const FALLBACK_ORDER = [
  'gemini-3-flash-preview',
  'gemini-3-pro-preview',
  'gemini-2.5-flash',
  'gemini-2.5-pro'
];

const getApiKey = (): string => {
  const localKey = localStorage.getItem('gemini_api_key');
  if (localKey) return localKey;

  // Fallback to env if available
  return process.env.REACT_APP_GEMINI_API_KEY || (import.meta.env?.VITE_GEMINI_API_KEY as string) || '';
};

const getModel = (): string => {
  return localStorage.getItem('gemini_model') || 'gemini-3-flash-preview';
};

const getDifficultyLabel = (diff: Difficulty): string => {
  switch (diff) {
    case 'beginner': return 'Cơ bản';
    case 'intermediate': return 'Trung bình';
    case 'advanced': return 'Nâng cao';
  }
};

interface Distribution {
  beginner: number;
  intermediate: number;
  advanced: number;
}

const getDistribution = (level: EducationLevel, grade: number): Distribution => {
  if (level === 'primary') {
    if (grade === 1 || grade === 2) {
      return { beginner: 12, intermediate: 6, advanced: 2 };
    }
    return { beginner: 10, intermediate: 6, advanced: 4 };
  }

  if (level === 'middle') {
    return { beginner: 6, intermediate: 8, advanced: 6 };
  }

  return { beginner: 4, intermediate: 8, advanced: 8 };
};

const questionSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING, description: "Nội dung câu hỏi tiếng Anh giao tiếp (bao gồm đoạn hội thoại nếu có)" },
    options: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "4 lựa chọn A, B, C, D",
    },
    correctAnswer: { type: Type.STRING, description: "Đáp án đúng (chỉ ký tự 'A', 'B', 'C' hoặc 'D')" },
    explanation: { type: Type.STRING, description: "Giải thích chi tiết bằng tiếng Việt, kèm bài học giao tiếp" },
    difficulty: { type: Type.STRING, description: "'beginner', 'intermediate', hoặc 'advanced'" }
  },
  required: ["text", "options", "correctAnswer", "explanation", "difficulty"]
};

const arraySchema: Schema = {
  type: Type.ARRAY,
  items: questionSchema
};

// --- CORE GENERATION LOGIC ---

export const generateQuizQuestions = async (
  level: EducationLevel,
  grade: number,
  topic: string,
  difficultyMode: DifficultyMode = 'mixed'
): Promise<Question[]> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("API Key not found. Please set it in Settings.");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Determine distribution based on difficulty mode
  let dist: Distribution;
  if (difficultyMode === 'mixed') {
    dist = getDistribution(level, grade);
  } else if (difficultyMode === 'beginner') {
    dist = { beginner: 20, intermediate: 0, advanced: 0 };
  } else if (difficultyMode === 'intermediate') {
    dist = { beginner: 0, intermediate: 20, advanced: 0 };
  } else {
    dist = { beginner: 0, intermediate: 0, advanced: 20 };
  }

  // Helper with Fallback/Retry Logic
  const generateBatch = async (count: number, difficulty: Difficulty, difficultyLabel: string): Promise<Question[]> => {
    if (count === 0) return [];

    // Start with selected model, then fallback through the list
    const preferredModel = getModel();
    // Create a list starting with preferred, then others in order, filtering duplicates
    const modelChain = [preferredModel, ...FALLBACK_ORDER].filter((v, i, a) => a.indexOf(v) === i);

    const prompt = `
      You are an English Communication Tutor from "New York English Center" (Trung tâm Vạn Hạnh) creating quiz questions for Vietnamese learners.
      IMPORTANT: Every question set is branded as "New York English" — include "New York" in the header/intro of the first question.
      
      Generate ${count} [${difficulty}] level ENGLISH COMMUNICATION questions on topic '${topic}' for Level ${grade}.
      
      QUESTION TYPES (mix these types for variety):
      1. **Dialogue Completion**: Give a short conversation with a blank, student picks the best response.
         Example: "A: How are you doing today? — B: ___"
      2. **Situation Response**: Describe a situation, student picks the most appropriate English expression.
         Example: "You want to ask a stranger for directions to the museum. What do you say?"
      3. **Error Detection**: Present 4 sentences, one has a common grammar/usage mistake. Student identifies the correct one.
      4. **Vocabulary in Context**: Give a sentence with a word/phrase, student picks the closest meaning.
      5. **Idiom / Expression**: Present an idiom or common expression, student picks what it means or when to use it.
      6. **Pronunciation / Stress**: Which word has different stress pattern or pronunciation.
      
      FORMATTING RULES:
      1. Questions should contain English text. Use **bold** for key words or phrases.
      2. For dialogues, format like: "A: Hello! — B: ___" or use line breaks.
      3. Explanations MUST be in Vietnamese to help learners understand.
      4. Include useful tips about pronunciation, cultural context, or common mistakes in the explanation.
      5. Use natural, real-life English (not textbook-stiff language).
      
      CONTENT RULES:
      1. All English used must be natural and commonly used by native speakers.
      2. Questions and options are in English.
      3. Explanations are in Vietnamese with English examples highlighted in **bold**.
      4. CORRECT ANSWER: Must be one of A, B, C, D.
      
      ANSWER DISTRIBUTION (IMPORTANT):
      - Ensure that the correct answers are evenly distributed among A, B, C, and D.
      - Avoid making 'A' the correct answer too frequently.
      - For ${count} questions, aim for approximately ${Math.ceil(count / 4)} of each option.
      
      Difficulty Definition for ${difficultyLabel} (${difficulty}):
      - Beginner (Cơ bản): Simple greetings, basic vocabulary, straightforward expressions. Short dialogues.
      - Intermediate (Trung bình): More complex situations, phrasal verbs, nuanced expressions. Longer dialogues.
      - Advanced (Nâng cao): Idioms, formal/informal register, subtle differences, cultural nuances. Complex scenarios.
      
      Output JSON format:
      [
        { 
          "text": "Question text with dialogue or situation...", 
          "options": ["A. ...", "B. ...", "C. ...", "D. ..."], 
          "correctAnswer": "A", 
          "explanation": "- Đáp án đúng là A vì...\\n- **Expression** này thường dùng khi...\\n- 💡 Mẹo: ...", 
          "difficulty": "${difficulty}" 
        }
      ]
    `;

    for (const model of modelChain) {
      try {
        const response = await ai.models.generateContent({
          model: model,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: arraySchema,
            temperature: 0.7,
          }
        });

        const rawQuestions = JSON.parse(response.text || "[]");
        if (!Array.isArray(rawQuestions) || rawQuestions.length === 0) {
          throw new Error("Empty or invalid JSON response");
        }

        return rawQuestions.map((q: any, index: number) => ({
          id: `${difficulty}-${index}-${Date.now()}-${Math.random()}`,
          text: q.text,
          options: q.options,
          correctAnswer: q.correctAnswer ? q.correctAnswer.replace(/[^ABCD]/g, '').trim() : 'A',
          explanation: q.explanation,
          difficulty: difficulty,
          difficultyLabel: getDifficultyLabel(difficulty)
        }));

      } catch (error: any) {
        console.warn(`Model ${model} failed for ${difficulty}:`, error);
        // Continue to next model in chain
        if (model === modelChain[modelChain.length - 1]) {
          const errorMsg = error.toString();
          if (errorMsg.includes("429")) throw new Error("429 RESOURCE_EXHAUSTED");
          throw error;
        }
      }
    }

    return [];
  };

  // Run in parallel for speed
  try {
    const [beginnerQs, intermediateQs, advancedQs] = await Promise.all([
      generateBatch(dist.beginner, 'beginner', 'Cơ bản'),
      generateBatch(dist.intermediate, 'intermediate', 'Trung bình'),
      generateBatch(dist.advanced, 'advanced', 'Nâng cao')
    ]);

    const allQuestions = [...beginnerQs, ...intermediateQs, ...advancedQs];

    if (allQuestions.length === 0) {
      throw new Error("Không thể tạo câu hỏi. Tất cả các model đều thất bại. Vui lòng kiểm tra API Key và Quota.");
    }

    return allQuestions.sort(() => Math.random() - 0.5);
  } catch (e: any) {
    throw e;
  }
};

// --- CHAT TUTOR SERVICE ---

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string;
}

export const getChatTutorResponse = async (history: ChatMessage[], newMessage: string, imageBase64?: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) return "Vui lòng nhập API Key trong Settings để sử dụng Chat.";

  const ai = new GoogleGenAI({ apiKey });

  const preferredModel = getModel();
  const modelChain = [preferredModel, ...FALLBACK_ORDER].filter((v, i, a) => a.indexOf(v) === i);

  const systemInstruction = `
    VAI TRÒ:
    - Bạn là "Thầy Tiếng Anh AI", một gia sư tiếng Anh giao tiếp thân thiện, kiên nhẫn và am hiểu.
    - Nhiệm vụ: Giúp học viên người Việt luyện tiếng Anh giao tiếp, sửa lỗi ngữ pháp, mở rộng từ vựng, và thực hành hội thoại.
    - Đối tượng: Học viên người Việt từ trình độ cơ bản đến nâng cao.

    PHONG CÁCH GIẢNG DẠY:
    - Giải thích bằng tiếng Việt, ví dụ bằng tiếng Anh.
    - Highlight từ vựng/cụm từ quan trọng bằng **bold**.
    - Cung cấp phiên âm khi cần: /fəˈnetɪk/
    - Luôn đưa ra ví dụ thực tế, ngôn ngữ tự nhiên.
    
    CÁC CHỨC NĂNG CHÍNH:
    1. **Luyện hội thoại (Role-play)**: Đóng vai các tình huống giao tiếp thực tế.
       - Khi học viên muốn luyện hội thoại, đóng vai người đối thoại.
       - Sau mỗi lượt, sửa lỗi và gợi ý cách nói tự nhiên hơn.
    
    2. **Sửa lỗi & Cải thiện**: 
       - Khi học viên viết/nói tiếng Anh, phát hiện lỗi và sửa nhẹ nhàng.
       - Format: ❌ Câu sai → ✅ Câu đúng + giải thích ngắn gọn.
    
    3. **Giải thích ngữ pháp & từ vựng**:
       - Giải thích rõ ràng, cho ví dụ cụ thể, so sánh với tiếng Việt khi hữu ích.
    
    4. **Dịch & Phân tích** (từ ảnh hoặc text):
       - Dịch đoạn văn tiếng Anh sang tiếng Việt và giải thích từ vựng/ngữ pháp.
       - Hoặc dịch tiếng Việt sang tiếng Anh tự nhiên.
    
    5. **Mẹo giao tiếp & Văn hóa**:
       - Chia sẻ mẹo phát âm, ngữ điệu, cách dùng tự nhiên.
       - Giải thích khác biệt văn hóa trong cách giao tiếp.

    QUY TẮC ĐỊNH DẠNG:
    - Dùng **bold** cho từ vựng/cụm từ tiếng Anh quan trọng.
    - Dùng headers (## hoặc ###) để tổ chức nội dung.
    - Dùng bullet points (-) cho danh sách.
    - Emoji phù hợp: 👋😊💡🎯📝🗣️
    - KHÔNG dùng LaTeX hay MathJax.

    WORKFLOW XỬ LÝ ẢNH:
    1. Trích xuất văn bản tiếng Anh từ ảnh.
    2. Nếu mờ -> yêu cầu chụp lại.
    3. Nếu đọc được -> Trả lời theo cấu trúc: 
       ## 📷 Nội dung nhận dạng: ...
       ## 📝 Dịch nghĩa: ...
       ## 📖 Phân tích từ vựng & ngữ pháp: ...
       ## 💡 Mẹo giao tiếp: ...
  `;

  const chatHistory = history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.text }]
  }));

  let contentParts: any[] = [];
  if (imageBase64) {
    const mimeMatch = imageBase64.match(/^data:([^;]+);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";
    const cleanBase64 = imageBase64.replace(/^data:([^;]+);base64,/, '');
    contentParts.push({ inlineData: { data: cleanBase64, mimeType: mimeType } });
  }
  contentParts.push({ text: newMessage || "Hãy giúp em luyện tiếng Anh giao tiếp nhé." });

  for (const model of modelChain) {
    try {
      const chat = ai.chats.create({
        model: model,
        config: { systemInstruction, temperature: 0.7 },
        history: chatHistory
      });

      const result = await chat.sendMessage({ message: { parts: contentParts } });
      return result.text;

    } catch (error) {
      console.warn(`Chat Model ${model} failed:`, error);
      if (model === modelChain[modelChain.length - 1]) {
        const errStr = String(error);
        if (errStr.includes("429") || errStr.includes("RESOURCE_EXHAUSTED")) {
          return "⚠️ Hệ thống đang quá tải (Lỗi 429). Vui lòng thử lại sau giây lát hoặc đổi API Key.";
        }
        return `⚠️ Lỗi kết nối: ${errStr}. Vui lòng kiểm tra API Key.`;
      }
    }
  }

  return "Xin lỗi, thầy không thể kết nối ngay lúc này. 😔";
};
