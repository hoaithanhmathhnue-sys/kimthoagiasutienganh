export interface LessonSlide {
    title: string;
    content: string[];
}

export interface Lesson {
    id: string;
    unitNumber: string;
    title: string;
    part: 'A' | 'B';
    slides: LessonSlide[];
}

export const LESSONS: Lesson[] = [
    // ===== PART A =====
    {
        id: 'unit-1a',
        unitNumber: 'UNIT 1A',
        title: 'Opening',
        part: 'A',
        slides: [
            {
                title: 'GIỚI THIỆU KHOÁ HỌC',
                content: [
                    'Chào mừng bạn đến với khoá học **Tiếng Anh Giao Tiếp** - New York English Center',
                    'Mục tiêu: Giúp bạn tự tin giao tiếp tiếng Anh trong các tình huống thường ngày',
                    'Phương pháp: Học qua hội thoại, từ vựng, ngữ pháp và thực hành'
                ]
            }
        ]
    },
    {
        id: 'unit-2a',
        unitNumber: 'UNIT 2A',
        title: 'The School',
        part: 'A',
        slides: [
            {
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS: /e/ vs /æ/',
                content: [
                    'ten → tan | lend → land | head → had | net → nat',
                    'Tad lent Nat ten tan nets.'
                ]
            },
            {
                title: 'VOCABULARY – NOUNS (School Items)',
                content: [
                    'A PEN | A HOLE PUNCH | A BOX | A TAPE | A PENCIL | A COMPUTER',
                    'A CLOCK | A RECORDER | A MARKER | A TABLE | A WATCH | A RADIO',
                    'A RULER | A CHAIR | A PICTURE | A TELEVISION | AN ERASER | A SHELF',
                    'A MAP | A LIGHT | A BOOK | A DESK | A FAN | A BALL',
                    'A NOTE BOOK | A BOARD | A TELEPHONE | A WALL'
                ]
            },
            {
                title: 'GRAMMAR – NOUN (Danh từ)',
                content: [
                    '**Danh từ** là từ dùng để gọi tên người, vật, nơi chốn, hoặc ý tưởng.',
                    'Mạo từ **A/AN** đứng trước danh từ số ít.',
                    'Dùng **A** trước phụ âm: A pen, A book',
                    'Dùng **AN** trước nguyên âm: AN eraser, AN apple'
                ]
            },
            {
                title: 'CONVERSATION',
                content: [
                    'A: What is this?',
                    'B: This is **a pen**.',
                    'A: And what is that?',
                    'B: That is **a clock**.'
                ]
            }
        ]
    },
    {
        id: 'unit-3a',
        unitNumber: 'UNIT 3A',
        title: 'What Is It?',
        part: 'A',
        slides: [
            {
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS',
                content: [
                    'Luyện phát âm các nguyên âm dễ nhầm lẫn',
                    'Phân biệt: /ɑː/ vs /ʌ/ vs /æ/'
                ]
            },
            {
                title: 'CONVERSATION – WHAT IS IT?',
                content: [
                    'A: What is this?',
                    'B: This is a book.',
                    'A: What is that?',
                    'B: That is a map.',
                    '**This** = cái này (gần) | **That** = cái kia (xa)'
                ]
            },
            {
                title: 'GRAMMAR – THIS / THAT',
                content: [
                    '**This is** + danh từ số ít (vật ở gần)',
                    '**That is** + danh từ số ít (vật ở xa)',
                    'VD: This is a pen. / That is a clock.',
                    'Câu hỏi: **What is this?** / **What is that?**'
                ]
            }
        ]
    },
    {
        id: 'unit-4a',
        unitNumber: 'UNIT 4A',
        title: 'The House',
        part: 'A',
        slides: [
            {
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS',
                content: [
                    'Luyện phát âm các nguyên âm dễ nhầm lẫn',
                    'Phân biệt: /ɒ/ vs /ɔː/'
                ]
            },
            {
                title: 'VOCABULARY – THE HOUSE (Ngôi nhà)',
                content: [
                    'A LIVING ROOM | A BEDROOM | A KITCHEN | A BATHROOM',
                    'A DINING ROOM | A GARAGE | A GARDEN | A YARD',
                    'A DOOR | A WINDOW | A ROOF | A FLOOR | A WALL',
                    'A SOFA | A BED | A LAMP | A REFRIGERATOR | A STOVE',
                    'A SINK | A TOILET | A SHOWER | A MIRROR | A CURTAIN'
                ]
            },
            {
                title: 'CONVERSATION',
                content: [
                    'A: What is this?',
                    'B: This is **a living room**.',
                    'A: And what is that?',
                    'B: That is **a kitchen**.'
                ]
            }
        ]
    },
    {
        id: 'unit-5a',
        unitNumber: 'UNIT 5A',
        title: 'This Is My House',
        part: 'A',
        slides: [
            {
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS',
                content: [
                    'Luyện phát âm âm /ʃ/ (sh) và các nguyên âm',
                    'ship, she, shop, shoe, shower, shelf'
                ]
            },
            {
                title: 'CONVERSATION – THIS IS MY HOUSE',
                content: [
                    'A: Is this your house?',
                    'B: Yes, **this is my house**.',
                    'A: Is that your car?',
                    'B: No, **that is not my car**. That is his car.'
                ]
            },
            {
                title: 'GRAMMAR – POSSESSIVE ADJECTIVES (Tính từ sở hữu)',
                content: [
                    '**my** (của tôi) | **your** (của bạn) | **his** (của anh ấy)',
                    '**her** (của cô ấy) | **its** (của nó) | **our** (của chúng tôi)',
                    '**their** (của họ)',
                    'VD: This is **my** book. That is **her** pen.'
                ]
            }
        ]
    },
    {
        id: 'unit-6a',
        unitNumber: 'UNIT 6A',
        title: 'The Food',
        part: 'A',
        slides: [
            {
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS: /æ/ vs /ɒ/',
                content: [
                    'Luyện phát âm nguyên âm dễ nhầm lẫn',
                    'cat → cot | hat → hot | bat → bot'
                ]
            },
            {
                title: 'VOCABULARY – THE FOOD (Thức ăn)',
                content: [
                    '**Fruits**: an apple, a banana, an orange, a mango, a grape',
                    '**Vegetables**: a tomato, a potato, a carrot, an onion, a cabbage',
                    '**Meat**: chicken, beef, pork, fish, shrimp',
                    '**Drinks**: water, milk, juice, coffee, tea, soda',
                    '**Others**: rice, bread, eggs, cheese, butter, sugar, salt'
                ]
            },
            {
                title: 'CONVERSATION',
                content: [
                    'A: What is this?',
                    'B: This is **an apple**.',
                    'A: What is that?',
                    'B: That is **a tomato**.'
                ]
            }
        ]
    },
    {
        id: 'unit-7a',
        unitNumber: 'UNIT 7A',
        title: 'The Shop',
        part: 'A',
        slides: [
            {
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS',
                content: [
                    'Luyện phát âm: /ɪ/ vs /iː/',
                    'ship → sheep | bit → beat | sit → seat | hit → heat'
                ]
            },
            {
                title: 'VOCABULARY – THE SHOP (Cửa hàng)',
                content: [
                    '**Clothes**: a shirt, a T-shirt, a dress, a skirt, a coat, a tie',
                    '**Accessories**: a hat, a belt, a necklace, a bracelet, a ring, a watch',
                    '**Shoes**: shoes, boots, sandals, sneakers',
                    '**Colors**: red, blue, green, yellow, white, black, pink, purple, orange, brown'
                ]
            },
            {
                title: 'CONVERSATION',
                content: [
                    'A: What is this?',
                    'B: This is **a shirt**.',
                    'A: What color is it?',
                    'B: It is **blue**.'
                ]
            }
        ]
    },
    {
        id: 'unit-8a',
        unitNumber: 'UNIT 8A',
        title: 'These / Those Are (Plural)',
        part: 'A',
        slides: [
            {
                title: 'PRONUNCIATION – CONFUSING CONSONANT SOUNDS: /f/ vs /p/',
                content: [
                    'fast → past | foot → put | fork → pork | fan → pan'
                ]
            },
            {
                title: 'GRAMMAR – PLURAL NOUNS (Danh từ số nhiều)',
                content: [
                    '**These are** + danh từ số nhiều (ở gần)',
                    '**Those are** + danh từ số nhiều (ở xa)',
                    'Thêm **-s** hoặc **-es** để tạo số nhiều:',
                    'pen → pens | box → boxes | tomato → tomatoes'
                ]
            },
            {
                title: 'NUMBER (Số đếm)',
                content: [
                    '1 one | 2 two | 3 three | 4 four | 5 five',
                    '6 six | 7 seven | 8 eight | 9 nine | 10 ten',
                    '11 eleven | 12 twelve | ... 20 twenty'
                ]
            },
            {
                title: 'CONVERSATION',
                content: [
                    'A: What are these?',
                    'B: **These are 5 apples.**',
                    'A: And what are those?',
                    'B: **Those are 3 tomatoes.**'
                ]
            }
        ]
    },
    {
        id: 'unit-9a',
        unitNumber: 'UNIT 9A',
        title: 'Do You Want a Car? (Question Model 1.1)',
        part: 'A',
        slides: [
            {
                title: 'VOCABULARY – TRANSITIVE VERBS',
                content: [
                    'to want | to have | to iron | to peel | to need',
                    'to wash | to open | to keep | to like | to clean',
                    'to close | to mend | to hate | to carry | to cook',
                    'to brush | to love | to sweep | to feed | to comb'
                ]
            },
            {
                title: 'QUESTION MODEL 1.1',
                content: [
                    '**Do you want a car?**',
                    'Yes, I want a car.',
                    'No, I don\'t want a car.',
                    '',
                    '**Cấu trúc**: Do you + WANT/LIKE/NEED/HAVE + a/an + noun?',
                    '**Trả lời**: Yes, I + verb + a/an + noun.',
                    'No, I don\'t + verb + a/an + noun.'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    'A: Do you want a car?         → B: Yes, I want a car.',
                    'A: Do you need a computer?    → B: No, I don\'t need a computer.',
                    'A: Do you like a bicycle?      → B: Yes, I like a bicycle.',
                    'A: Do you have a watch?        → B: No, I don\'t have a watch.'
                ]
            }
        ]
    },
    {
        id: 'unit-10a',
        unitNumber: 'UNIT 10A',
        title: 'Practice – Question Model 1.1',
        part: 'A',
        slides: [
            {
                title: 'QUESTION MODEL 1.1 – REVIEW',
                content: [
                    '**Do you** + want/like/need/have + **a/an** + noun?',
                    'Yes, I + verb + a/an + noun.',
                    'No, I don\'t + verb + a/an + noun.'
                ]
            },
            {
                title: 'PAIR WORK PRACTICE',
                content: [
                    'Luyện tập theo cặp:',
                    'A: Do you want **a pen**?         → B: Yes / No...',
                    'A: Do you like **a computer**?    → B: Yes / No...',
                    'A: Do you need **a telephone**?   → B: Yes / No...',
                    'A: Do you have **a bicycle**?     → B: Yes / No...'
                ]
            }
        ]
    },
    {
        id: 'unit-11a',
        unitNumber: 'UNIT 11A',
        title: 'Review (Part A)',
        part: 'A',
        slides: [
            {
                title: 'TỔNG ÔN PART A',
                content: [
                    '**Ngữ pháp đã học:**',
                    '• Mạo từ A/AN + danh từ số ít',
                    '• This is / That is + danh từ số ít',
                    '• These are / Those are + danh từ số nhiều',
                    '• Tính từ sở hữu: my, your, his, her, its, our, their',
                    '• Question Model 1.1: Do you want/like/need/have + a/an + noun?'
                ]
            },
            {
                title: 'VOCABULARY REVIEW',
                content: [
                    '**Chủ đề đã học:**',
                    '• The School (Đồ dùng học tập)',
                    '• The House (Ngôi nhà & Nội thất)',
                    '• The Food (Thức ăn & Đồ uống)',
                    '• The Shop (Quần áo & Phụ kiện)',
                    '• Numbers (Số đếm 1-28)'
                ]
            }
        ]
    },

    // ===== PART B =====
    {
        id: 'unit-1b',
        unitNumber: 'UNIT 1B',
        title: 'American Accent Training',
        part: 'B',
        slides: [
            {
                title: 'AMERICAN ACCENT TRAINING',
                content: [
                    'Giới thiệu cách phát âm theo giọng Mỹ',
                    '• Nguyên âm Mỹ vs Anh',
                    '• Âm /r/ đặc trưng trong tiếng Anh Mỹ',
                    '• Âm nối (linking sounds)',
                    '• Ngữ điệu (intonation) trong câu hỏi và câu trần thuật'
                ]
            }
        ]
    },
    {
        id: 'unit-2b',
        unitNumber: 'UNIT 2B',
        title: 'What Do You Build? (Question Model 1.2)',
        part: 'B',
        slides: [
            {
                title: 'VOCABULARY – TRANSITIVE VERBS',
                content: [
                    'to build | to fix | to drive | to design | to install',
                    'to repair | to paint | to construct | to deliver | to produce',
                    'to measure | to plan | to test | to manage | to check'
                ]
            },
            {
                title: 'QUESTION MODEL 1.2',
                content: [
                    '**What do you build?**',
                    'I build **a house**.',
                    '',
                    '**Cấu trúc**: What do you + verb?',
                    '**Trả lời**: I + verb + object.',
                    'NOTE: "want" có thể thay bằng "like", "need", "have".'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    'build → a house, a bridge | fix → a car, a computer',
                    'cook → rice, soup | wash → the car, the dishes',
                    'clean → the house, the room | read → a book, the newspaper',
                    'drive → a Honda, a Toyota | paint → the wall, a picture'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'A: What do you build?         → B: I build a house.',
                    'A: What do you cook?          → B: I cook rice.',
                    'A: What do you drive?         → B: I drive a Toyota.',
                    'A: What do you read?          → B: I read the newspaper.'
                ]
            }
        ]
    },
    {
        id: 'unit-3b',
        unitNumber: 'UNIT 3B',
        title: 'Practice – Question Model 1.2',
        part: 'B',
        slides: [
            {
                title: 'QUESTION MODEL 1.2 – REVIEW',
                content: [
                    '**What do you** + verb?',
                    'I + verb + object.',
                    'NOTE: "want" có thể thay bằng "like", "need", "have".'
                ]
            },
            {
                title: 'PAIR WORK PRACTICE',
                content: [
                    'build → a house, a bridge | drive → a Honda, a Toyota',
                    'cook → rice, soup | fix → a car, a computer',
                    'wash → the car, the dishes | clean → the house, the room',
                    'Homework: Write 20 questions and answers using Question Model 1.2'
                ]
            }
        ]
    },
    {
        id: 'unit-4b',
        unitNumber: 'UNIT 4B',
        title: 'Sorry! Can You Repeat That, Please?',
        part: 'B',
        slides: [
            {
                title: 'USEFUL EXPRESSIONS (Cụm từ hữu ích)',
                content: [
                    '**Sorry! Can you repeat that, please?** — Xin lỗi, bạn có thể nhắc lại không?',
                    '**Can you speak more slowly?** — Bạn có thể nói chậm hơn không?',
                    '**What does it mean?** — Nó có nghĩa là gì?',
                    '**How do you spell that?** — Bạn đánh vần từ đó như thế nào?',
                    '**I don\'t understand.** — Tôi không hiểu.',
                    '**Could you explain that again?** — Bạn có thể giải thích lại không?'
                ]
            },
            {
                title: 'CONVERSATION',
                content: [
                    'A: Do you like to listen to music?',
                    'B: Sorry! Can you repeat that, please?',
                    'A: Do you like to listen to music?',
                    'B: Oh, yes! I like to listen to music.',
                    'A: What kind of music do you like?',
                    'B: I like pop music.'
                ]
            }
        ]
    },
    {
        id: 'unit-5b',
        unitNumber: 'UNIT 5B',
        title: 'Do You Want to Listen to Music? (Question Model 1.3)',
        part: 'B',
        slides: [
            {
                title: 'QUESTION MODEL 1.3',
                content: [
                    '**Do you want to listen to music?**',
                    'Yes, I want to listen to music.',
                    'No, I don\'t want to listen to music.',
                    '',
                    '**Cấu trúc**: Do you + want/like/need/have + **to** + verb + object?',
                    'NOTE: "want" có thể thay bằng "like", "need", "have".'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    'Want to / Like to: listen to music, the radio | draw flowers, animals',
                    'watch a movie, a play | make cakes, toys | show photos, videos',
                    'conduct music, a class | observe the stars, the moon',
                    'have a bicycle, a car | pass the TOEIC, the TOEFL',
                    'turn on the fan, the light | play the guitar, the piano',
                    'Have to / Need to: store meat, rice | submit homework, a report',
                    'do the housework, homework'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'A: Do you want to listen to music?',
                    'B: Yes, I want to listen to music.',
                    'A: Do you like to watch TV?',
                    'B: No, I don\'t like to watch TV.'
                ]
            }
        ]
    },
    {
        id: 'unit-6b',
        unitNumber: 'UNIT 6B',
        title: 'Practice – Question Model 1.3',
        part: 'B',
        slides: [
            {
                title: 'QUESTION MODEL 1.3 – REVIEW',
                content: [
                    '**Do you want to** + verb + object?',
                    'Yes, I want to + verb + object.',
                    'No, I don\'t want to + verb + object.',
                    'NOTE: "want" có thể thay bằng "like", "need", "have".'
                ]
            },
            {
                title: 'PAIR WORK PRACTICE',
                content: [
                    'listen to music, the radio | draw flowers, animals',
                    'watch a movie, a play | make cakes, toys',
                    'play the guitar, the piano | turn on the fan, the light',
                    'Homework: Write 20 questions and answers using Question Model 1.3'
                ]
            }
        ]
    },
    {
        id: 'unit-7b',
        unitNumber: 'UNIT 7B',
        title: 'How Do You Say This Word in English?',
        part: 'B',
        slides: [
            {
                title: 'CONVERSATION',
                content: [
                    'A: Excuse me! How do you say this word in English?',
                    'B: Oh, "**MUSIC**".',
                    'A: What does it mean?',
                    'B: It means "ÂM NHẠC".',
                    'A: I see. By the way, do you like to listen to music?',
                    'B: Yes, I like to listen to music.'
                ]
            },
            {
                title: 'USEFUL EXPRESSIONS',
                content: [
                    '**How do you say this word in English?** — Từ này nói bằng tiếng Anh như thế nào?',
                    '**What does it mean?** — Nó có nghĩa là gì?',
                    '**How do you spell it?** — Đánh vần như thế nào?',
                    '**Can you use it in a sentence?** — Bạn có thể đặt câu được không?'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'Luyện hỏi và trả lời từ vựng mới:',
                    'A: How do you say "bàn" in English? → B: "Table".',
                    'A: What does "chair" mean? → B: It means "ghế".',
                    'A: Do you like to sit on a chair? → B: Yes, I do.'
                ]
            }
        ]
    },
    {
        id: 'unit-8b',
        unitNumber: 'UNIT 8B',
        title: 'What Do You Want to Buy? (Question Model 1.4)',
        part: 'B',
        slides: [
            {
                title: 'VOCABULARY – TRANSITIVE VERBS',
                content: [
                    'to write | to eat | to wear | to count | to tease',
                    'to read | to drink | to buy | to save | to cut',
                    'to paint | to teach | to sell | to waste | to look at',
                    'to drive | to study | to use | to lend | to throw',
                    'to ride | to learn | to record | to borrow | to hug'
                ]
            },
            {
                title: 'QUESTION MODEL 1.4',
                content: [
                    '**What do you want to buy?**',
                    'I want to buy **a dress**.',
                    '',
                    '**Cấu trúc**: What do you + want/like/need/have + **to** + verb?',
                    '**Trả lời**: I + want/like/need/have + to + verb + object.',
                    'NOTE: "want" có thể thay bằng "like", "need", "have".'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    'Want to / Like to: buy a tie, a coat | eat beef, pork',
                    'drink soda, milk | wear a necklace, a bracelet',
                    'play the piano, the guitar | teach English, Vietnamese',
                    'drive a Honda, a Toyota | study math, computer science',
                    'use a pencil, a marker | ride a motorcycle, a horse',
                    'learn grammar, pronunciation | borrow books, money',
                    'Have to / Need to: write a report, a letter | read the textbook, the news',
                    'count the chairs, the people | save money, water'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'A: What do you want to buy?',
                    'B: I want to buy a dress.',
                    'A: Do you want to buy a skirt?',
                    'B: No, I don\'t want to buy a skirt.'
                ]
            }
        ]
    },
    {
        id: 'unit-9b',
        unitNumber: 'UNIT 9B',
        title: 'Practice – Question Model 1.4',
        part: 'B',
        slides: [
            {
                title: 'QUESTION MODEL 1.4 – REVIEW',
                content: [
                    '**What do you want to** + verb?',
                    'I want to + verb + object.',
                    'NOTE: "want" có thể thay bằng "like", "need", "have".'
                ]
            },
            {
                title: 'PAIR WORK PRACTICE',
                content: [
                    'buy a tie, a coat | eat beef, pork | drink soda, milk',
                    'wear a necklace, a bracelet | play the piano, the guitar',
                    'teach English, Vietnamese | study math, computer science',
                    'Homework: Write 20 questions and answers using Question Model 1.4'
                ]
            }
        ]
    },
    {
        id: 'unit-10b',
        unitNumber: 'UNIT 10B',
        title: 'So Do I / Me Neither',
        part: 'B',
        slides: [
            {
                title: 'CONVERSATION',
                content: [
                    'A: What do you like to listen to, Peter?',
                    'B: I like to listen to rock music. And you, Sandra?',
                    'A: **So do I.** I really love rock.',
                    'But I don\'t like to listen to opera.',
                    'B: **Me neither**, Sandra.'
                ]
            },
            {
                title: 'GRAMMAR – SO DO I / ME NEITHER',
                content: [
                    '**So do I** = Tôi cũng vậy (đồng ý với câu khẳng định)',
                    'A: I like pizza. → B: **So do I.** (Tôi cũng vậy)',
                    '',
                    '**Me neither** = Tôi cũng không (đồng ý với câu phủ định)',
                    'A: I don\'t like opera. → B: **Me neither.** (Tôi cũng không)',
                    '',
                    '**Neither do I** cũng có thể dùng thay **Me neither**.'
                ]
            }
        ]
    },
    {
        id: 'unit-11b',
        unitNumber: 'UNIT 11B',
        title: 'Review (Part B)',
        part: 'B',
        slides: [
            {
                title: 'GRAMMAR – ADVERBS OF FREQUENCY',
                content: [
                    'Trạng từ chỉ tần suất thường đứng **trước động từ**:',
                    '**always** (luôn luôn) | **usually** (thường xuyên) | **often** (thường)',
                    '**sometimes** (thỉnh thoảng) | **seldom** (hiếm khi) | **never** (không bao giờ)',
                    '',
                    'VD: Do you play games in your free time?',
                    'Yes, I **sometimes** play games in my free time.',
                    'No, I **never** play games in my free time.'
                ]
            },
            {
                title: 'TỔNG ÔN QUESTION MODELS',
                content: [
                    '**Model 1.1**: Do you want/like/need/have + a/an + noun?',
                    '**Model 1.2**: What do you + verb?',
                    '**Model 1.3**: Do you want/like/need/have + to + verb + object?',
                    '**Model 1.4**: What do you want/like/need/have + to + verb?',
                    '',
                    '**So do I** (đồng ý khẳng định) | **Me neither** (đồng ý phủ định)',
                    '',
                    '**Useful expressions**: Sorry! Can you repeat that, please? / How do you say this word in English? / What does it mean?'
                ]
            }
        ]
    }
];
