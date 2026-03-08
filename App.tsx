import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, School, Brain, Sparkles, Languages, PenTool, History, Settings, User } from 'lucide-react';
import { EducationLevel, QuizState, GradeConfig, QuizResult, StudentInfo, DifficultyMode } from './types';
import { LEVELS, CURRICULUM, THEMES } from './constants';
import { generateQuizQuestions } from './services/geminiService';
import { submitQuizResult, buildSheetResult } from './services/googleSheetService';
import QuizInterface from './components/QuizInterface';
import ResultScreen from './components/ResultScreen';
import HistoryModal from './components/HistoryModal';
import ChatWidget from './components/ChatWidget';
import SettingsModal from './components/SettingsModal';
import StudentLoginModal from './components/StudentLoginModal';
import LessonViewer from './components/LessonViewer';

const App: React.FC = () => {
  // Setup State
  const [level, setLevel] = useState<EducationLevel>('primary');
  const [grade, setGrade] = useState<number>(1);
  const [topic, setTopic] = useState<string>('');
  const [customTopic, setCustomTopic] = useState<string>('');
  const [difficultyMode, setDifficultyMode] = useState<DifficultyMode>('mixed');

  // History State
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isLessonOpen, setIsLessonOpen] = useState(false);

  // Settings State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [model, setModel] = useState(localStorage.getItem('gemini_model') || 'gemini-3-flash-preview');
  const [sheetUrl, setSheetUrl] = useState(localStorage.getItem('google_sheet_url') || '');

  // Student Info State
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [isStudentLoginOpen, setIsStudentLoginOpen] = useState(false);
  const [sheetNotification, setSheetNotification] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  useEffect(() => {
    // Load student info from localStorage
    const savedName = localStorage.getItem('student_name');
    const savedClass = localStorage.getItem('student_class');
    if (savedName && savedClass) {
      setStudentInfo({ name: savedName, className: savedClass });
    } else {
      setIsStudentLoginOpen(true);
    }

    if (!localStorage.getItem('gemini_api_key')) {
      setIsSettingsOpen(true);
    }
  }, []);

  const handleSaveSettings = (key: string, newModel: string, newSheetUrl: string) => {
    localStorage.setItem('gemini_api_key', key);
    localStorage.setItem('gemini_model', newModel);
    if (newSheetUrl) {
      localStorage.setItem('google_sheet_url', newSheetUrl);
    } else {
      localStorage.removeItem('google_sheet_url');
    }
    setApiKey(key);
    setModel(newModel);
    setSheetUrl(newSheetUrl);
    setIsSettingsOpen(false);
  };

  const handleSaveStudentInfo = (info: StudentInfo) => {
    localStorage.setItem('student_name', info.name);
    localStorage.setItem('student_class', info.className);
    setStudentInfo(info);
    setIsStudentLoginOpen(false);
  };

  // Quiz State
  const [quizState, setQuizState] = useState<QuizState>({
    status: 'setup',
    level: 'primary',
    grade: 1,
    topic: '',
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: {},
    score: 0,
    startTime: 0,
    endTime: null,
  });

  const [loadingMsg, setLoadingMsg] = useState('Đang chuẩn bị...');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Load history from local storage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('english_quiz_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  // Update default grade/topic when level changes
  useEffect(() => {
    const defaultGrade = CURRICULUM[level][0].grade;
    setGrade(defaultGrade);
    setTopic(CURRICULUM[level][0].topics[0]);
    setCustomTopic(''); // Reset custom topic on level change
  }, [level]);

  // Update default topic when grade changes
  useEffect(() => {
    const gradeConfig = CURRICULUM[level].find(g => g.grade === grade);
    if (gradeConfig && gradeConfig.topics.length > 0) {
      setTopic(gradeConfig.topics[0]);
    }
  }, [grade, level]);

  const currentTheme = THEMES[level];

  const handleStartQuiz = async () => {
    // Determine which topic to use
    const finalTopic = customTopic.trim() ? customTopic.trim() : topic;

    // Validation for custom topic
    if (customTopic.trim().length > 0) {
      if (customTopic.trim().length < 5 || customTopic.trim().length > 100) {
        setErrorMsg("⚠️ Vui lòng nhập chủ đề từ 5-100 ký tự");
        return;
      }
    }

    setQuizState(prev => ({ ...prev, status: 'loading' }));
    setErrorMsg(null);
    setLoadingMsg(customTopic.trim()
      ? `Đang tạo 20 câu hỏi về: ${finalTopic}...`
      : "AI đang soạn bài luyện cho bạn..."
    );

    try {
      // Simulate loading steps for better UX
      setTimeout(() => setLoadingMsg("Đang phân bổ câu hỏi theo cấp độ..."), 1000);
      setTimeout(() => setLoadingMsg("Đang chuẩn bị hội thoại & tình huống..."), 2500);

      const questions = await generateQuizQuestions(level, grade, finalTopic, difficultyMode);

      setQuizState({
        status: 'active',
        level,
        grade,
        topic: finalTopic,
        questions,
        currentQuestionIndex: 0,
        userAnswers: {},
        score: 0,
        startTime: Date.now(),
        endTime: null,
      });
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Đã có lỗi xảy ra khi tạo câu hỏi. Vui lòng kiểm tra API Key.");
      setQuizState(prev => ({ ...prev, status: 'setup' }));
    }
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setQuizState(prev => {
      const question = prev.questions.find(q => q.id === questionId);
      const isCorrect = question?.correctAnswer === answer;

      return {
        ...prev,
        userAnswers: { ...prev.userAnswers, [questionId]: answer },
        score: isCorrect ? prev.score + 1 : prev.score
      }
    });
  };

  const handleNext = () => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: Math.min(prev.currentQuestionIndex + 1, prev.questions.length - 1)
    }));
  };

  const handleFinish = () => {
    const finishTime = Date.now();

    // Create Result Object
    const result: QuizResult = {
      id: finishTime.toString(),
      date: finishTime,
      grade: quizState.grade,
      topic: quizState.topic,
      score: quizState.score,
      totalQuestions: quizState.questions.length,
      level: quizState.level
    };

    // Update State and LocalStorage
    const updatedHistory = [result, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('english_quiz_history', JSON.stringify(updatedHistory));

    setQuizState(prev => ({
      ...prev,
      status: 'finished',
      endTime: finishTime
    }));

    // Send to Google Sheets (async, non-blocking)
    if (sheetUrl && studentInfo) {
      const sheetResult = buildSheetResult(
        studentInfo,
        quizState.level,
        quizState.grade,
        quizState.topic,
        quizState.questions,
        quizState.userAnswers,
        quizState.score,
        quizState.startTime,
        finishTime
      );

      submitQuizResult(sheetUrl, sheetResult).then(res => {
        if (res.success) {
          setSheetNotification({ type: 'success', msg: '✅ Đã đồng bộ kết quả lên Google Sheets!' });
        } else {
          setSheetNotification({ type: 'error', msg: `⚠️ ${res.message}` });
        }
        // Auto-hide notification after 5s
        setTimeout(() => setSheetNotification(null), 5000);
      });
    }
  };

  const handleRetry = () => {
    setQuizState(prev => ({
      ...prev,
      status: 'setup',
      questions: [],
      userAnswers: {},
      score: 0
    }));
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem('english_quiz_history');
    setIsHistoryOpen(false);
  };

  // --- RENDER HELPERS ---

  if (quizState.status === 'loading') {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${currentTheme.bg}`}>
        <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center max-w-sm w-full text-center">
          <div className="w-24 h-24 mb-6 relative">
            <div className={`absolute inset-0 rounded-full border-4 border-t-transparent animate-spin ${currentTheme.border.replace('border-', 'border-t-').replace('200', '500')}`}></div>
            <Brain className={`absolute inset-0 m-auto w-10 h-10 ${currentTheme.text} animate-pulse`} />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{loadingMsg}</h2>
          <p className="text-gray-500 text-sm">Vui lòng đợi trong giây lát...</p>
        </div>
      </div>
    );
  }

  // --- MAIN RENDER ---

  const renderContent = () => {
    if (quizState.status === 'active') {
      return (
        <QuizInterface
          state={quizState}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onFinish={handleFinish}
        />
      );
    }

    if (quizState.status === 'finished') {
      return (
        <ResultScreen state={quizState} onRetry={handleRetry} />
      );
    }

    // SETUP SCREEN
    return (
      <div className={`min-h-screen flex flex-col font-sans ${currentTheme.bg} transition-colors duration-500`}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${currentTheme.primary} text-white shadow-md`}>
                <Languages className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                  GIA SƯ TIẾNG ANH GIAO TIẾP
                </h1>
                <span className="text-xs text-gray-500 font-medium tracking-wider">English Communication Tutor by Nguyễn Khắc Phi</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              {/* Student Info Badge */}
              {studentInfo && (
                <button
                  onClick={() => setIsStudentLoginOpen(true)}
                  className="flex items-center gap-2 text-xs md:text-sm px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold border border-indigo-200 rounded-xl transition-all shadow-sm active:scale-95"
                  title="Đổi thông tin học sinh"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline">{studentInfo.name} ({studentInfo.className})</span>
                  <span className="md:hidden">{studentInfo.name.split(' ').pop()}</span>
                </button>
              )}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="flex items-center gap-2 text-xs md:text-sm px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold border border-red-200 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden md:inline">Settings (API Key)</span>
              </button>
              <button
                onClick={() => setIsLessonOpen(true)}
                className="flex items-center gap-2 text-xs md:text-sm px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold border border-purple-200 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden md:inline">Học Tiếng Anh</span>
              </button>
              <button
                onClick={() => setIsHistoryOpen(true)}
                className="flex items-center gap-2 text-xs md:text-sm px-3 py-2 bg-white hover:bg-gray-50 text-gray-600 font-bold border border-gray-200 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <History className="w-4 h-4" />
                <span className="hidden md:inline">Lịch sử</span>
              </button>
              <span className="hidden md:flex items-center gap-2 text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-500 font-medium border border-gray-200">
                <Sparkles className="w-3 h-3" />
                AI Powered
              </span>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <div className="bg-white rounded-[2rem] shadow-xl border border-white/50 overflow-hidden backdrop-blur-sm">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {(Object.keys(LEVELS) as EducationLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`flex-1 py-6 text-sm md:text-base font-bold transition-all flex items-center justify-center gap-2 relative overflow-hidden group
                      ${level === lvl
                      ? `bg-white ${THEMES[lvl].text}`
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                    }`}
                >
                  {/* Active Indicator Line */}
                  {level === lvl && (
                    <div className={`absolute bottom-0 left-0 w-full h-1 ${THEMES[lvl].primary}`}></div>
                  )}

                  {lvl === 'primary' && <School className={`w-5 h-5 transition-transform group-hover:scale-110 ${level === lvl ? 'animate-bounce-short' : ''}`} />}
                  {lvl === 'middle' && <BookOpen className={`w-5 h-5 transition-transform group-hover:scale-110 ${level === lvl ? 'animate-bounce-short' : ''}`} />}
                  {lvl === 'high' && <GraduationCap className={`w-5 h-5 transition-transform group-hover:scale-110 ${level === lvl ? 'animate-bounce-short' : ''}`} />}
                  {LEVELS[lvl]}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-10 space-y-8">
              <div className="text-center space-y-2">
                <h2 className={`text-2xl md:text-3xl font-bold ${currentTheme.text}`}>
                  Chào mừng bạn đến với lớp Tiếng Anh! 👋
                </h2>
                <p className="text-gray-500 font-medium">Chọn cấp độ và chủ đề để bắt đầu hành trình chinh phục Tiếng Anh giao tiếp.</p>
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center text-sm font-medium animate-bounce-short">
                  {errorMsg}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Grade Selector */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Chọn Cấp Độ</label>
                  <div className="relative group">
                    <select
                      value={grade}
                      onChange={(e) => setGrade(Number(e.target.value))}
                      className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-opacity-20 focus:border-transparent outline-none appearance-none font-bold text-gray-700 transition-all cursor-pointer hover:border-gray-300"
                      style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)' }}
                    >
                      {CURRICULUM[level].map((g) => (
                        <option key={g.grade} value={g.grade}>
                          {g.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors">▼</div>
                  </div>
                </div>

                {/* Topic Selector & Custom Input */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Chọn Chủ Đề</label>
                    <div className={`relative group transition-opacity duration-300 ${customTopic.trim() ? 'opacity-50 grayscale' : 'opacity-100'}`}>
                      <select
                        value={topic}
                        onChange={(e) => {
                          setTopic(e.target.value);
                          setCustomTopic(''); // Clear custom input when choosing dropdown
                        }}
                        disabled={customTopic.trim().length > 0}
                        className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-opacity-20 focus:border-transparent outline-none appearance-none font-bold text-gray-700 transition-all cursor-pointer hover:border-gray-300 disabled:cursor-not-allowed"
                        style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)' }}
                      >
                        {CURRICULUM[level]
                          .find((g) => g.grade === grade)
                          ?.topics.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors">▼</div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-100"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-300 text-xs font-bold uppercase">Hoặc</span>
                    <div className="flex-grow border-t border-gray-100"></div>
                  </div>

                  {/* Custom Topic Input */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 flex items-center gap-1">
                      <PenTool className="w-3 h-3" />
                      Nhập chủ đề tự do
                    </label>
                    <input
                      type="text"
                      value={customTopic}
                      onChange={(e) => {
                        setCustomTopic(e.target.value);
                      }}
                      placeholder="VD: Ordering food at restaurant, Job interview..."
                      className={`w-full p-4 bg-white border-2 rounded-2xl focus:ring-4 focus:ring-opacity-20 outline-none font-medium text-gray-700 transition-all placeholder:text-gray-300
                                ${customTopic.trim()
                          ? `${currentTheme.border} ring-${currentTheme.primary.split('-')[1]}-200`
                          : 'border-gray-100 hover:border-gray-300'
                        }
                            `}
                    />
                  </div>
                </div>
              </div>

              {/* Difficulty Mode Selector */}
              <div className={`p-6 rounded-2xl border ${currentTheme.border} bg-opacity-50`}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${currentTheme.primary} flex items-center justify-center text-white shadow-lg transform rotate-3`}>
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${currentTheme.text}`}>Cấu trúc bài luyện</h3>
                      <p className="text-sm opacity-80 text-gray-600 font-medium mt-1">
                        20 câu hỏi • {difficultyMode === 'mixed' ? '3 cấp độ' : '1 cấp độ'} • Tự luyện tập
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    <button
                      onClick={() => setDifficultyMode('mixed')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all transform active:scale-95
                        ${difficultyMode === 'mixed'
                          ? 'bg-blue-500 text-white border-blue-500 shadow-md shadow-blue-200 scale-105'
                          : 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100'}`}
                    >
                      Hỗn hợp
                    </button>
                    <button
                      onClick={() => setDifficultyMode('beginner')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all transform active:scale-95
                        ${difficultyMode === 'beginner'
                          ? 'bg-green-500 text-white border-green-500 shadow-md shadow-green-200 scale-105'
                          : 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100'}`}
                    >
                      Cơ bản
                    </button>
                    <button
                      onClick={() => setDifficultyMode('intermediate')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all transform active:scale-95
                        ${difficultyMode === 'intermediate'
                          ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200 scale-105'
                          : 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100'}`}
                    >
                      Trung bình
                    </button>
                    <button
                      onClick={() => setDifficultyMode('advanced')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all transform active:scale-95
                        ${difficultyMode === 'advanced'
                          ? 'bg-red-500 text-white border-red-500 shadow-md shadow-red-200 scale-105'
                          : 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'}`}
                    >
                      Nâng cao
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleStartQuiz}
                className={`w-full py-5 rounded-2xl font-bold text-xl text-white shadow-xl shadow-gray-200 transform transition-all hover:scale-[1.02] active:scale-[0.98] ${currentTheme.primary} ${currentTheme.primaryHover} flex items-center justify-center gap-3 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                {customTopic.trim() ? 'BẮT ĐẦU VỚI CHỦ ĐỀ NÀY 🚀' : 'BẮT ĐẦU LUYỆN TẬP 🚀'}
              </button>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8 font-medium">
            Được hỗ trợ bởi Google Gemini AI • Giúp bạn tự tin giao tiếp tiếng Anh mỗi ngày
          </p>
        </main>

        {/* Author Section */}
        <footer className="bg-slate-800 text-slate-300 py-10 px-4 mt-auto border-t border-slate-700 no-print">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-3xl border border-slate-600/30 shadow-xl">
              {/* Author Photo */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-lg shadow-blue-900/30 flex-shrink-0">
                <img
                  src="/data/author.jpg"
                  alt="Nguyễn Khắc Phi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="text-center md:text-left flex-1">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Tác giả</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Nguyễn Khắc Phi</h3>
                <p className="text-base md:text-lg text-blue-300 font-semibold mb-1">Trung tâm Vạn Hạnh</p>
                <p className="text-sm text-slate-400 mb-3">📍 40 Thành Thái, phường Hưng Hòa, TP. Hồ Chí Minh</p>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full shadow-md">
                    ✨ New York English
                  </span>
                  <span className="px-4 py-1.5 bg-slate-600/50 text-slate-300 text-xs font-bold rounded-full border border-slate-500/30">
                    AI Powered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  return (
    <>
      {renderContent()}

      {/* Sheet Notification Toast */}
      {sheetNotification && (
        <div className={`fixed top-4 right-4 z-[200] px-4 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in max-w-xs
          ${sheetNotification.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-orange-50 text-orange-700 border border-orange-200'}`}
        >
          {sheetNotification.msg}
        </div>
      )}

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onClearHistory={handleClearHistory}
      />

      <ChatWidget />

      <LessonViewer
        isOpen={isLessonOpen}
        onClose={() => setIsLessonOpen(false)}
      />

      <StudentLoginModal
        isOpen={isStudentLoginOpen}
        onClose={() => setIsStudentLoginOpen(false)}
        onSave={handleSaveStudentInfo}
        currentInfo={studentInfo}
        isMandatory={!studentInfo}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={handleSaveSettings}
        currentApiKey={apiKey}
        currentModel={model}
        currentSheetUrl={sheetUrl}
        isMandatory={!apiKey}
      />
    </>
  );
};

export default App;
