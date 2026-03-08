import { GradeConfig, ThemeConfig, EducationLevel, DifficultyConfig } from './types';

export const LEVELS: Record<EducationLevel, string> = {
  primary: 'CƠ BẢN 🌱',
  middle: 'TRUNG CẤP 📚',
  high: 'NÂNG CAO 🎯',
};

export const THEMES: Record<EducationLevel, ThemeConfig> = {
  primary: {
    bg: 'bg-[#E8F5E9]', // Soft green
    primary: 'bg-[#4CAF50]',
    primaryHover: 'hover:bg-[#66BB6A]',
    text: 'text-green-800',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700',
    gradient: 'from-[#4CAF50] to-[#81C784]',
  },
  middle: {
    bg: 'bg-[#E3F2FD]', // Blue
    primary: 'bg-[#2196F3]',
    primaryHover: 'hover:bg-[#42A5F5]',
    text: 'text-blue-800',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    gradient: 'from-[#2196F3] to-[#03A9F4]',
  },
  high: {
    bg: 'bg-[#F3E5F5]', // Purple
    primary: 'bg-[#9C27B0]',
    primaryHover: 'hover:bg-[#AB47BC]',
    text: 'text-purple-800',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
    gradient: 'from-[#673AB7] to-[#9C27B0]',
  },
};

export const DIFFICULTY_CONFIG: Record<string, DifficultyConfig> = {
  beginner: { id: 'beginner', label: 'Cơ bản', color: 'bg-[#66BB6A]', textColor: 'text-white' },
  intermediate: { id: 'intermediate', label: 'Trung bình', color: 'bg-[#FFA726]', textColor: 'text-white' },
  advanced: { id: 'advanced', label: 'Nâng cao', color: 'bg-[#EF5350]', textColor: 'text-white' },
};

export const CURRICULUM: Record<EducationLevel, GradeConfig[]> = {
  primary: [
    {
      grade: 1,
      label: 'Level 1 - Starter',
      topics: [
        'Greetings & Farewells (Chào hỏi & Tạm biệt)',
        'Self-Introduction (Giới thiệu bản thân)',
        'Numbers, Colors & Basic Vocabulary (Số đếm, Màu sắc & Từ vựng cơ bản)',
        'Family Members (Thành viên gia đình)',
        'Daily Routines (Thói quen hàng ngày)',
        'Asking & Telling Time (Hỏi và nói giờ)',
        'Weather & Seasons (Thời tiết & Mùa trong năm)'
      ]
    },
    {
      grade: 2,
      label: 'Level 2 - Elementary',
      topics: [
        'Shopping & Buying Things (Mua sắm)',
        'Ordering Food & Drinks (Gọi đồ ăn & thức uống)',
        'Asking for Directions (Hỏi đường)',
        'At the Doctor / Pharmacy (Ở bệnh viện / Nhà thuốc)',
        'Hobbies & Free Time (Sở thích & Thời gian rảnh)',
        'Describing People & Appearance (Mô tả ngoại hình)',
        'Making Plans & Invitations (Lên kế hoạch & Mời bạn bè)',
        'At the Restaurant (Tại nhà hàng)'
      ]
    },
    {
      grade: 3,
      label: 'Level 3 - Pre-Intermediate',
      topics: [
        'Talking About Past Experiences (Kể về trải nghiệm)',
        'Making Appointments (Đặt lịch hẹn)',
        'Describing Your Hometown (Mô tả quê hương)',
        'Transportation & Travel Basics (Phương tiện & Du lịch cơ bản)',
        'Phone Conversations (Gọi điện thoại)',
        'Expressing Opinions (Bày tỏ ý kiến)',
        'Giving & Receiving Compliments (Khen ngợi)'
      ]
    },
    {
      grade: 4,
      label: 'Level 4 - Intermediate Foundation',
      topics: [
        'Job Interview Basics (Phỏng vấn xin việc cơ bản)',
        'Email & Letter Writing (Viết email & thư)',
        'Talking About Movies & Books (Nói về phim & sách)',
        'Health & Fitness Conversations (Sức khỏe & Thể dục)',
        'Making Complaints Politely (Khiếu nại lịch sự)',
        'At the Airport & Hotel (Tại sân bay & Khách sạn)',
        'Cultural Differences (Khác biệt văn hóa)'
      ]
    },
    {
      grade: 5,
      label: 'Level 5 - Intermediate',
      topics: [
        'Storytelling & Narration (Kể chuyện)',
        'Discussing Current Events (Thảo luận thời sự)',
        'Workplace Communication (Giao tiếp nơi làm việc)',
        'Negotiating & Persuading (Thương lượng & Thuyết phục)',
        'Social Media & Technology Talk (Mạng xã hội & Công nghệ)',
        'Idioms & Common Expressions (Thành ngữ & Cụm từ thông dụng)',
        'Formal vs Informal Language (Ngôn ngữ trang trọng vs thân mật)'
      ]
    }
  ],
  middle: [
    {
      grade: 6,
      label: 'Level 6 - Upper-Intermediate',
      topics: [
        'Business Meetings & Presentations (Họp & Thuyết trình)',
        'Debating & Arguing Points (Tranh luận)',
        'Giving Advice & Suggestions (Đưa ra lời khuyên)',
        'Discussing Environmental Issues (Vấn đề môi trường)',
        'Travel & Adventure Stories (Du lịch & Phiêu lưu)',
        'Phrasal Verbs in Context (Cụm động từ trong ngữ cảnh)'
      ]
    },
    {
      grade: 7,
      label: 'Level 7 - Advanced Foundation',
      topics: [
        'Academic Discussions (Thảo luận học thuật)',
        'Conflict Resolution (Giải quyết xung đột)',
        'Public Speaking Skills (Kỹ năng nói trước đám đông)',
        'Expressing Complex Emotions (Diễn đạt cảm xúc phức tạp)',
        'Cross-Cultural Communication (Giao tiếp đa văn hóa)',
        'Sarcasm, Humor & Tone (Châm biếm, Hài hước & Giọng điệu)',
        'Conditional & Hypothetical Situations (Tình huống giả định)'
      ]
    },
    {
      grade: 8,
      label: 'Level 8 - Advanced',
      topics: [
        'Business Negotiation & Deal Making (Đàm phán kinh doanh)',
        'Critical Thinking & Analysis (Tư duy phản biện)',
        'Media Literacy & News Discussion (Phân tích truyền thông)',
        'Discussing Art, Music & Literature (Nghệ thuật & Văn học)',
        'Advanced Idioms & Slang (Thành ngữ & Tiếng lóng nâng cao)',
        'Diplomatic & Tactful Language (Ngôn ngữ ngoại giao)',
        'Discussing Ethics & Moral Dilemmas (Đạo đức & Tình huống khó xử)'
      ]
    },
    {
      grade: 9,
      label: 'Level 9 - Proficiency',
      topics: [
        'TED Talk Style Presentations (Thuyết trình TED)',
        'Philosophical Discussions (Thảo luận triết học)',
        'Global Politics & Economy (Chính trị & Kinh tế toàn cầu)',
        'Scientific Communication (Giao tiếp khoa học)',
        'Creative Writing & Storytelling (Sáng tác & Kể chuyện sáng tạo)',
        'Nuances of British vs American English (Khác biệt Anh-Anh vs Anh-Mỹ)',
        'Advanced Grammar in Conversation (Ngữ pháp nâng cao trong hội thoại)',
        'IELTS Speaking Practice (Luyện nói IELTS)'
      ]
    }
  ],
  high: [
    {
      grade: 10,
      label: 'Level 10 - IELTS 5.0-6.0',
      topics: [
        'IELTS Speaking Part 1: Personal Topics (Chủ đề cá nhân)',
        'IELTS Speaking Part 2: Cue Card Practice (Luyện thẻ gợi ý)',
        'IELTS Speaking Part 3: Abstract Discussion (Thảo luận trừu tượng)',
        'Common IELTS Topics: Education & Learning (Giáo dục & Học tập)',
        'Common IELTS Topics: Technology & Society (Công nghệ & Xã hội)',
        'Common IELTS Topics: Environment & Nature (Môi trường & Thiên nhiên)',
        'Fluency & Coherence Practice (Luyện lưu loát & Mạch lạc)',
        'Lexical Resource Building (Mở rộng vốn từ vựng)',
        'Pronunciation & Intonation (Phát âm & Ngữ điệu)'
      ]
    },
    {
      grade: 11,
      label: 'Level 11 - IELTS 6.0-7.0',
      topics: [
        'Advanced IELTS Speaking Strategies (Chiến lược nói IELTS nâng cao)',
        'Paraphrasing & Vocabulary Range (Diễn đạt lại & Đa dạng từ vựng)',
        'Discussing Trends & Changes (Xu hướng & Thay đổi)',
        'Agreeing & Disagreeing Skillfully (Đồng ý & Phản đối khéo léo)',
        'Describing Graphs & Charts Orally (Mô tả biểu đồ bằng lời)',
        'Discussing Health & Wellbeing (Sức khỏe & Đời sống)',
        'Urbanization & Modern Life (Đô thị hóa & Cuộc sống hiện đại)',
        'Media, Advertising & Consumerism (Truyền thông & Tiêu dùng)',
        'Crime, Law & Justice (Tội phạm, Luật pháp & Công lý)',
        'Space, Science & Innovation (Vũ trụ, Khoa học & Đổi mới)'
      ]
    },
    {
      grade: 12,
      label: 'Level 12 - IELTS 7.0+',
      topics: [
        'Master-Level IELTS Speaking (Nói IELTS cấp độ master)',
        'Complex Opinion Essays Speaking (Bài nói quan điểm phức tạp)',
        'Discussing Global Challenges (Thách thức toàn cầu)',
        'Philosophy of Language & Communication (Triết lý ngôn ngữ)',
        'Advanced Academic Vocabulary (Từ vựng học thuật nâng cao)',
        'Spontaneous Speaking & Improvisation (Nói ứng biến)',
        'Cultural Intelligence & Global Mindset (Trí tuệ văn hóa)',
        'Business English: Leadership & Strategy (Tiếng Anh thương mại)',
        'Debate: Controversial Topics (Tranh biện chủ đề nóng)',
        'Native-Like Expressions & Collocations (Cách nói tự nhiên)',
        'Interview Skills for International Roles (Phỏng vấn quốc tế)',
        'Public Relations & Crisis Communication (Quan hệ công chúng)',
        'Humor, Wit & Wordplay in English (Hài hước & Chơi chữ tiếng Anh)'
      ]
    }
  ]
};