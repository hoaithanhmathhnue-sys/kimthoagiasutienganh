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
        title: 'Opening – Khai giảng',
        part: 'A',
        slides: [
            {
                title: 'WELCOME TO NEW YORK SCHOOL',
                content: [
                    'KHAI GIẢNG LỚP QR1 — AMERICAN ACCENT TRAINING',
                    'Chào mừng bạn đến với **New York English Center**!'
                ]
            },
            {
                title: 'THE ALPHABET',
                content: [
                    '| A | B | C | — | D | E | F | — | G | H | I |',
                    '| J | K | L | — | M | N | O | — | P | Q | R |',
                    '| S | T | U | — | V | W | — | — | X | Y | Z |'
                ]
            },
            {
                title: 'SYLLABLES – Nguyên âm (Vowels)',
                content: [
                    '**Vowels (Nguyên âm):** A, E, I, O, U',
                    '',
                    'ɔː → call, four | ɜː → turn, learn',
                    'eɪ → say, eight | aɪ → five, eye',
                    'ɔɪ → boy, join | əʊ → go, home',
                    'aʊ → now, out | ɪə → ear, here',
                    'eə → hair, air | ʊə → sure, tourist',
                    'ə → again, cinema | ʌ → love, butter',
                    'e → met, bed | æ → cat, black',
                    'ɒ → lot, boss | ɑː → arm, father',
                    'ɪ → hit, visit | iː → see, eat',
                    'ʊ → put, could | uː → blue, food'
                ]
            },
            {
                title: 'SYLLABLES – Phụ âm (Consonants)',
                content: [
                    '**Semi-vowels (Bán nguyên âm):** R, W, Y → yes, we, right',
                    '',
                    '**Lips (Âm từ môi):** M (ME), B (BE), P (PE), V (VE), F (FE, GH)',
                    '→ time, bee, pea, live, life',
                    '',
                    '**Throat (Âm từ cuống họng):** H, K (KE), G, NG',
                    '→ hi, like, dog, sing',
                    '',
                    '**Behind the teeth (Lưỡi sau răng):** T (TE), D (DE), L (LE), N (NE)',
                    '→ bat, bad, file, fine',
                    'S (CE, X, SE), Z (ZE, SE), SH, CH, J (GE)',
                    '→ rice, rise, wash, watch, cage',
                    '',
                    '**Between the teeth (Lưỡi giữa hai răng):** TH, THE',
                    '→ bath, bathe'
                ]
            },
            {
                title: 'CONVERSATION – HOW ARE YOU?',
                content: [
                    'A: Hello. How are you?',
                    'B: Fine, thank you. And you?',
                    'A: I\'m fine, thank you.',
                    '... ... ...',
                    'B: Goodbye.',
                    'A: Goodbye.',
                    'B: See you later.',
                    'A: See you later.',
                    '',
                    '**Greetings:** Good morning! | Good afternoon! | Good evening! | Hi!',
                    '**Farewells:** Bye! | Good night! | See you later!'
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
                    '/e/ → /æ/',
                    'ten → tan | lend → land',
                    'head → had | net → nat',
                    '',
                    '**Practice:** Tad lent Nat ten tan nets.'
                ]
            },
            {
                title: 'VOCABULARY – NOUNS (School Items)',
                content: [
                    '| A PEN | A HOLE PUNCH | A BOX | A TAPE |',
                    '| A PENCIL | A COMPUTER | A CLOCK | A RECORDER |',
                    '| A MARKER | A TABLE | A WATCH | A RADIO |',
                    '| A RULER | A CHAIR | A PICTURE | A TELEVISION |',
                    '| AN ERASER | A SHELF | A MAP | A LIGHT |',
                    '| A BOOK | A DESK | A FAN | A BALL |',
                    '| A NOTE BOOK | A BOARD | A TELEPHONE | A WALL |'
                ]
            },
            {
                title: 'GRAMMAR – NOUN (Danh từ)',
                content: [
                    '**Noun (Danh từ):** tiếng chỉ tên người, vật hay đồ vật.',
                    'Ví dụ: a man, a dog, a table',
                    '',
                    '**Plural form (Số nhiều):**',
                    '• Thêm **S**: a book → books, a pen → pens',
                    '• Thêm **(E)S** sau S, X, CE, SE, Z, CH, SH, GE → đọc /iz/: a box → boxes, an orange → oranges',
                    '• Thêm **ES** khi tận cùng O (trừ trước O là nguyên âm): a tomato → tomatoes — Nhưng: a radio → radios',
                    '• Đổi **Y → IES** (trừ trước Y là nguyên âm): a city → cities — Nhưng: a toy → toys',
                    '• Đổi **F, FE → VES**: a knife → knives, a leaf → leaves'
                ]
            },
            {
                title: 'CONVERSATION – NICE TO MEET YOU',
                content: [
                    'Jack: Hi. My name is Jack. What\'s your name?',
                    'Kate: I\'m Kate.',
                    'Jack: It\'s nice to meet you, Kate.',
                    'Kate: Nice to meet you, too.',
                    '',
                    '**Homework:** Chép tất cả các danh từ trong phần vocabulary, mỗi chữ 2 dòng. Viết 1 dòng số ít, 1 dòng số nhiều.'
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
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS: /ɑː/ vs /ɜː/',
                content: [
                    '/ɑː/ → /ɜː/',
                    'bath → berth | far → fir',
                    'ha → her | hard → heard',
                    'heart → hurt | pass → purse'
                ]
            },
            {
                title: 'CONVERSATION – WHAT IS IT?',
                content: [
                    'A: Hey, what is it?',
                    'B: Oh, it is a **PEN**.',
                    'A: A pen? How do you spell it?',
                    'B: P - E - N.',
                    'A: I see. Thanks a lot!'
                ]
            },
            {
                title: 'GRAMMAR REVIEW – Plural Nouns',
                content: [
                    '**Plural form (Số nhiều):**',
                    '• Thêm **S**: a book → books',
                    '• Thêm **(E)S** sau S, X, CE, SE, Z, CH, SH, GE: a box → boxes',
                    '• Thêm **ES** khi tận cùng O: a tomato → tomatoes',
                    '• Đổi **Y → IES**: a city → cities',
                    '• Đổi **F, FE → VES**: a knife → knives'
                ]
            },
            {
                title: 'CONVERSATION – NICE TO MEET YOU',
                content: [
                    'Jack: Hi. My name is Jack. What\'s your name?',
                    'Kate: I\'m Kate.',
                    'Jack: It\'s nice to meet you, Kate.',
                    'Kate: Nice to meet you, too.',
                    '',
                    '**Homework:** Chép tất cả các danh từ, mỗi chữ 2 dòng. Viết 1 dòng số ít, 1 dòng số nhiều.'
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
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS: /ɒ/ vs /ʌ/',
                content: [
                    '/ɒ/ → /ʌ/',
                    'cop → cup | pop → pup',
                    'not → nut | hot → hut',
                    '',
                    '**Practice:** John got the hot nuts, not the hot huts.'
                ]
            },
            {
                title: 'VOCABULARY – NOUNS (The House)',
                content: [
                    '| A CAR | A BED | A DOOR | DINNER |',
                    '| A MOTORCYCLE | A ROOM | A WINDOW | A PAN |',
                    '| A BICYCLE | A BEDROOM | A CURTAIN | A CUP |',
                    '| A CAT | A BATHROOM | A FLOOR | A PLATE |',
                    '| A DOG | A LIVING ROOM | A CEILING | A SPOON |',
                    '| A GARDEN | A KITCHEN | BREAKFAST | A KNIFE |',
                    '| A LAMP | A GATE | LUNCH | A FORK |'
                ]
            },
            {
                title: 'GRAMMAR – IRREGULAR PLURAL NOUNS (Số nhiều đặc biệt)',
                content: [
                    'A mouse → mice (chuột) | A child → children (trẻ em)',
                    'A tooth → teeth (răng) | A goose → geese (con ngỗng)',
                    'A man → men (đàn ông) | A woman → women (phụ nữ)',
                    'A foot → feet (bàn chân) | An ox → oxen (bò đực)',
                    'A sheep → sheep (cừu) | A salmon → salmon (cá hồi)',
                    'A person → persons/people (người)'
                ]
            },
            {
                title: 'CONVERSATION – I\'M IN A HURRY',
                content: [
                    'JACK: Hi! How are you?',
                    'KATE: Not bad. And you?',
                    'JACK: Fine. Thanks. A cup of coffee?',
                    'KATE: No, thanks. I\'m in a hurry. See you later.',
                    'JACK: See you.',
                    '',
                    '**Homework:** Chép tất cả các danh từ, mỗi chữ 2 dòng. Viết 1 dòng số ít, 1 dòng số nhiều.'
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
                title: 'PRONUNCIATION – CONFUSING SOUNDS: /s/ vs /ʃ/',
                content: [
                    '/s/ → /ʃ/',
                    'C → she | sea → she',
                    'seat → sheet | see → she',
                    'sock → shock'
                ]
            },
            {
                title: 'CONVERSATION – THIS IS MY HOUSE',
                content: [
                    'A: What\'s this?',
                    'B: **This is my house.**',
                    'A: And what\'s that?',
                    'B: **That is the living room.**'
                ]
            },
            {
                title: 'GRAMMAR – THIS IS / THAT IS',
                content: [
                    '**This is** + danh từ số ít (vật ở gần)',
                    '**That is** + danh từ số ít (vật ở xa)',
                    '',
                    'VD: This is my house. That is the living room.'
                ]
            },
            {
                title: 'PRACTICE',
                content: [
                    'Sử dụng tất cả từ vựng đã học (28 từ về school + 28 từ về house) để luyện tập:',
                    'A: What\'s this? → B: This is a _____.',
                    'A: What\'s that? → B: That is a _____.'
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
                    '/æ/ → /ɒ/',
                    'bat → bought | lack → lock',
                    'pad → pod | map → mop',
                    '',
                    '**Practice:** Pat bought an Ipad and an Ipod.'
                ]
            },
            {
                title: 'VOCABULARY – NOUNS (The Food)',
                content: [
                    '| BREAD | SUGAR | MEAT | AN ORANGE | COFFEE |',
                    '| RICE | BEEF | AN EGG | AN APPLE | SODA |',
                    '| CORN | PORK | AN ICE-CREAM | A TOMATO | WATER |',
                    '| SALT | CHICKEN | A CAKE | A POTATO | BEER |',
                    '| PEPPER | FISH | A BANANA | TEA | MILK |'
                ]
            },
            {
                title: 'GRAMMAR – COUNTABLE & UNCOUNTABLE NOUNS + ARTICLES',
                content: [
                    '**1. NOUNS (Danh từ):** tiếng chỉ tên người, đồ vật, con vật. Có 2 loại:',
                    '• **Countable noun** (đếm được): a man, a table, a cat',
                    '• **Uncountable noun** (không đếm được): water, coffee',
                    '',
                    '**2. ARTICLES (Mạo từ):** Có 2 loại:',
                    '• **Indefinite article** (không xác định): A, AN',
                    '• **Definite article** (xác định): THE',
                    '',
                    '**Cách đo danh từ không đếm được:**',
                    'Bread → A LOAF OF BREAD | Rice → A BOWL OF RICE',
                    'Coffee → A CUP OF COFFEE | Beer → A BOTTLE OF BEER',
                    'Water → A GLASS OF WATER'
                ]
            },
            {
                title: 'CONVERSATION – MEET KATE',
                content: [
                    'JACK: Hi! How are you doing?',
                    'KATE: Very well. How about you?',
                    'JACK: Good. By the way, this is John. And John, meet Kate – my friend.',
                    'JOHN: Good to see you, Kate.',
                    'KATE: Good to see you, too.',
                    '',
                    '**Homework:** Chép tất cả danh từ, mỗi chữ 2 dòng. Viết 1 dòng số ít, 1 dòng số nhiều (nếu đếm được).'
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
                title: 'PRONUNCIATION – CONFUSING VOWEL SOUNDS: /ɪ/ vs /iː/',
                content: [
                    '/ɪ/ → /iː/',
                    'slip → sleep | ship → sheep',
                    'fit → feet | gin → jean',
                    '',
                    '**Practice:** Rick sits in his seat and speaks to the teacher.'
                ]
            },
            {
                title: 'VOCABULARY – NOUNS (The Shop)',
                content: [
                    '| A TOY | A DRUM | A DRESS | SHOES |',
                    '| A DOLL | A GUITAR | A COAT | GLOVES |',
                    '| A BELL | A PIANO | A TIE | GLASSES |',
                    '| A SOFA | A SHIRT | A SCARF | CLOTHES |',
                    '| A FLOWER | A T-SHIRT | TROUSERS | A BRACELET |',
                    '| A FLOWER VASE | A BLOUSE | JEANS | A NECKLACE |',
                    '| MONEY | A SKIRT | SLIPPERS | A RING |'
                ]
            },
            {
                title: 'GRAMMAR – PRONOUNS (Đại từ)',
                content: [
                    '| | SUBJECT | OBJECT | POSSESSIVE ADJ. |',
                    '|---|---|---|---|',
                    '| Tôi | I | ME | MY house |',
                    '| Bạn | YOU | YOU | YOUR house |',
                    '| Anh ấy | HE | HIM | HIS house |',
                    '| Cô ấy | SHE | HER | HER house |',
                    '| Nó | IT | IT | ITS house |',
                    '| Chúng tôi | WE | US | OUR house |',
                    '| Họ | THEY | THEM | THEIR house |'
                ]
            },
            {
                title: 'CONVERSATION – WHERE ARE YOU FROM?',
                content: [
                    'JOHN: Hi! My name is John. What\'s your name?',
                    'MAI: I\'m MAI.',
                    'JOHN: My? How do you spell that?',
                    'MAI: M.A.I.',
                    'JOHN: Oh. Nice to meet you, Mai.',
                    'MAI: Glad to see you, John.',
                    'JOHN: So, where are you from, Mai?',
                    'MAI: I\'m from Dalat, Vietnam. How about you, John?',
                    'JOHN: Oh. I\'m from Texas, U.S.A.',
                    '',
                    '**Homework:** Chép tất cả danh từ, mỗi chữ 2 dòng. Viết 1 dòng số ít, 1 dòng số nhiều.'
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
                    '/f/ → /p/',
                    'fast → past | foot → put',
                    'fork → pork | fan → pan'
                ]
            },
            {
                title: 'NUMBER (Số đếm)',
                content: [
                    '1 one | 2 two | 3 three | 4 four | 5 five',
                    '6 six | 7 seven | 8 eight | 9 nine | 10 ten',
                    '11 eleven | 12 twelve | 13 thirteen | 14 fourteen | 15 fifteen',
                    '16 sixteen | 17 seventeen | 18 eighteen | 19 nineteen | 20 twenty'
                ]
            },
            {
                title: 'CONVERSATION – THESE / THOSE',
                content: [
                    'A: What are **these**?',
                    'B: **These are 5 apples.**',
                    'A: And what are **those**?',
                    'B: **Those are 3 tomatoes.**'
                ]
            },
            {
                title: 'GRAMMAR REVIEW – Plural Nouns',
                content: [
                    '**Plural form (Số nhiều):**',
                    '• Thêm **S**: book → books',
                    '• Thêm **(E)S**: box → boxes, orange → oranges',
                    '• Thêm **ES** khi tận cùng O: tomato → tomatoes',
                    '• Đổi **Y → IES**: city → cities',
                    '• Đổi **F, FE → VES**: knife → knives',
                    '',
                    '**Homework:** Chép tất cả danh từ, viết 1 dòng số ít, 1 dòng số nhiều.'
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
                title: 'VOCABULARY – TRANSITIVE VERBS (Động từ ngoại lai)',
                content: [
                    '| TO WANT | TO HAVE | TO IRON | TO PEEL |',
                    '| TO NEED | TO WASH | TO OPEN | TO KEEP |',
                    '| TO LIKE | TO CLEAN | TO CLOSE | TO MEND |',
                    '| TO HATE | TO CARRY | TO COOK | TO BRUSH |',
                    '| TO LOVE | TO SWEEP | TO FEED | TO COMB |'
                ]
            },
            {
                title: 'QUESTION MODEL 1.1',
                content: [
                    '**DO YOU WANT A CAR?**',
                    'Yes, I want a car.',
                    'No, I don\'t want a car.',
                    '',
                    '**Cấu trúc:** Do you + want/like/need/have + a/an + noun?',
                    '**NOTE:** Ta có thể thay "want" bằng "like", "need", "have".'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    '| want | a car, a bicycle | have | a watch, a bracelet |',
                    '| need | a computer, a telephone | like | a flower, a flower vase |',
                    '| love | a dog, a cat | hate | a sofa, a drum |',
                    '| wash | a shirt, a T-shirt | clean | a kitchen, a chair |',
                    '| iron | a dress, a tie | cook | rice, soup |',
                    '| open | a box, the windows | close | a book, a notebook |'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'A: **Do you want a car?** → B: Yes, I want a car.',
                    'A: **Do you like a bicycle?** → B: No, I don\'t like a bicycle.',
                    'A: **Do you need a computer?** → B: Yes, I need a computer.',
                    '',
                    '**Homework:** Write 20 questions and answers using Question Model 1.1'
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
                    '**DO YOU WANT A CAR?**',
                    'Yes, I want a car.',
                    'No, I don\'t want a car.',
                    '',
                    '**Cấu trúc:** Do you + want/like/need/have + a/an + noun?',
                    '**NOTE:** Ta có thể thay "want" bằng "like", "need", "have".'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    '| want | a car, a bicycle | iron | the T-shirts, the ties |',
                    '| need | a computer, radio | open | a box, the windows |',
                    '| like | a flower, a cat | close | a book, a notebook |',
                    '| have | a watch, a bracelet | cook | rice, soup |',
                    '| love | animals, flowers | feed | the dog, the cat |',
                    '| wash | the coat, the dress | peel | tomatoes, potatoes |'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'A: Do you want a pen?            → B: Yes, I want a pen.',
                    'A: Do you like a computer?      → B: No, I don\'t like a computer.',
                    'A: Do you need a telephone?     → B: Yes, I need a telephone.',
                    'A: Do you have a bicycle?        → B: Yes, I have a bicycle.',
                    '',
                    '**Homework:** Write 20 questions and answers using Question Model 1.1'
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
                title: 'VOCABULARY REVIEW – All Topics',
                content: [
                    '**The School (28 từ):** pen, hole punch, box, tape, pencil, computer, clock, recorder, marker, table, watch, radio, ruler, chair, picture, television, eraser, shelf, map, light, book, desk, fan, ball, notebook, board, telephone, wall',
                    '',
                    '**The House (28 từ):** car, bed, door, dinner, motorcycle, room, window, pan, bicycle, bedroom, curtain, cup, cat, bathroom, floor, plate, dog, living room, ceiling, spoon, garden, kitchen, breakfast, knife, lamp, gate, lunch, fork',
                    '',
                    '**The Food (25 từ):** bread, sugar, meat, orange, coffee, rice, beef, egg, apple, soda, corn, pork, ice-cream, tomato, water, salt, chicken, cake, potato, beer, pepper, fish, banana, tea, milk',
                    '',
                    '**The Shop (28 từ):** toy, drum, dress, shoes, doll, guitar, coat, gloves, bell, piano, tie, glasses, sofa, shirt, scarf, clothes, flower, T-shirt, trousers, bracelet, flower vase, blouse, jeans, necklace, money, skirt, slippers, ring'
                ]
            },
            {
                title: 'GRAMMAR REVIEW – Part A',
                content: [
                    '**1. Noun (Danh từ):** Countable vs Uncountable',
                    '**2. Plural forms:** +S, +ES, Y→IES, F→VES, Irregular',
                    '**3. Articles:** A/AN (không xác định), THE (xác định)',
                    '**4. This is / That is** (số ít) | **These are / Those are** (số nhiều)',
                    '**5. Pronouns:** I/me/my, you/you/your, he/him/his, she/her/her, it/it/its, we/us/our, they/them/their',
                    '**6. Question Model 1.1:** Do you want/like/need/have + a/an + noun?'
                ]
            },
            {
                title: 'CONVERSATION REVIEW',
                content: [
                    '**Greetings:** Hello / Hi / Good morning / Good afternoon / Good evening',
                    '**Introductions:** My name is... / Nice to meet you / Glad to see you',
                    '**Spelling:** How do you spell it? → P-E-N',
                    '**Location:** Where are you from? → I\'m from...',
                    '**Farewell:** Goodbye / See you later / Good night'
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
                    '',
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
                    '| TO BUILD | TO FIX | TO STORE | TO SIGN |',
                    '| TO CATCH | TO UNLOCK | TO SERVE | TO OBSERVE |',
                    '| TO SHOW | TO CONDUCT | TO REVIEW | TO SMOKE |',
                    '| TO PUT ON | TO TAKE OFF | TO TURN ON | TO TURN OFF |'
                ]
            },
            {
                title: 'QUESTION MODEL 1.2',
                content: [
                    '**WHAT DO YOU BUILD?**',
                    'I build **a house**.',
                    '',
                    '**Cấu trúc:** What do you + verb?',
                    '**Trả lời:** I + verb + object.',
                    '**NOTE:** Ta có thể thay "want" bằng "like", "need", "have".'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    'build → houses, bridges | fix → a car, a computer',
                    'cook → rice, soup | wash → the car, the dishes',
                    'clean → the house, the room | read → a book, the newspaper',
                    'drive → a Honda, a Toyota | paint → the wall, a picture',
                    'iron → the shirts, the ties | sweep → the wall, the floor'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'A: **What do you build?** → B: I build a house.',
                    'A: **What do you cook?** → B: I cook rice.',
                    'A: **What do you drive?** → B: I drive a Toyota.',
                    '',
                    '**Homework:** Write 20 questions and answers using Question Model 1.2'
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
                    '**WHAT DO YOU** + verb?',
                    'I + verb + object.',
                    '**NOTE:** Ta có thể thay "want" bằng "like", "need", "have".'
                ]
            },
            {
                title: 'PAIR WORK PRACTICE',
                content: [
                    'build → houses, bridges | drive → a Honda, a Toyota',
                    'cook → rice, soup | fix → a car, a computer',
                    'wash → the car, the dishes | clean → the house, the room',
                    '',
                    '**Homework:** Write 20 questions and answers using Question Model 1.2'
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
                    '**DO YOU WANT TO LISTEN TO MUSIC?**',
                    'Yes, I want to listen to music.',
                    'No, I don\'t want to listen to music.',
                    '',
                    '**Cấu trúc:** Do you + want/like/need/have + **to** + verb + object?',
                    '**NOTE:** Ta có thể thay "want" bằng "like", "need", "have".'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    '**Want to / Like to:**',
                    'listen to music, the radio | draw flowers, animals',
                    'watch a movie, a play | make cakes, toys',
                    'show photos, videos | conduct music, a class',
                    'observe the stars, the moon | have a bicycle, a car',
                    'pass the TOEIC, the TOEFL | turn on the fan, the light',
                    'play the guitar, the piano',
                    '',
                    '**Have to / Need to:**',
                    'store meat, rice | submit homework, a report',
                    'do the housework, homework'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'A: **Do you want to listen to music?**',
                    'B: Yes, I want to listen to music.',
                    'A: **Do you like to watch TV?**',
                    'B: No, I don\'t like to watch TV.',
                    '',
                    '**Homework:** Write 20 questions and answers using Question Model 1.3'
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
                    '**DO YOU WANT TO** + verb + object?',
                    'Yes, I want to + verb + object.',
                    'No, I don\'t want to + verb + object.',
                    '**NOTE:** Ta có thể thay "want" bằng "like", "need", "have".'
                ]
            },
            {
                title: 'PAIR WORK PRACTICE',
                content: [
                    'listen to music, the radio | draw flowers, animals',
                    'watch a movie, a play | make cakes, toys',
                    'play the guitar, the piano | turn on the fan, the light',
                    '',
                    '**Homework:** Write 20 questions and answers using Question Model 1.3'
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
                    '**How do you say this word in English?** — Từ này nói bằng tiếng Anh là gì?',
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
                    '| TO WRITE | TO EAT | TO WEAR | TO COUNT | TO TEASE |',
                    '| TO READ | TO DRINK | TO BUY | TO SAVE | TO CUT |',
                    '| TO PAINT | TO TEACH | TO SELL | TO WASTE | TO LOOK AT |',
                    '| TO DRIVE | TO STUDY | TO USE | TO LEND | TO THROW |',
                    '| TO RIDE | TO LEARN | TO RECORD | TO BORROW | TO HUG |'
                ]
            },
            {
                title: 'QUESTION MODEL 1.4',
                content: [
                    '**WHAT DO YOU WANT TO BUY?**',
                    'I want to buy **a dress**.',
                    '',
                    '**Cấu trúc:** What do you + want/like/need/have + **to** + verb?',
                    '**Trả lời:** I + want/like/need/have + to + verb + object.',
                    '**NOTE:** Ta có thể thay "want" bằng "like", "need", "have".'
                ]
            },
            {
                title: 'QUICK REACTION PRACTICE',
                content: [
                    '**Want to / Like to:**',
                    'buy a tie, a coat | eat beef, pork | drink soda, milk',
                    'wear a necklace, a bracelet | play the piano, the guitar',
                    'teach English, Vietnamese | drive a Honda, a Toyota',
                    'study math, computer science | use a pencil, a marker',
                    'ride a motorcycle, a horse | learn grammar, pronunciation',
                    'borrow books, money',
                    '',
                    '**Have to / Need to:**',
                    'write a report, a letter | read the textbook, the news',
                    'count the chairs, the people | save money, time',
                    'cut oranges, potatoes | paint the door, the wall',
                    'sell the car, the house | feed the dog, the cat'
                ]
            },
            {
                title: 'PAIR WORK',
                content: [
                    'A: **What do you want to buy?**',
                    'B: I want to buy a dress.',
                    'A: **Do you want to buy a skirt?**',
                    'B: No, I don\'t want to buy a skirt.',
                    '',
                    '**Homework:** Write 20 questions and answers using Question Model 1.4'
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
                    '**WHAT DO YOU WANT TO** + verb?',
                    'I want to + verb + object.',
                    '**NOTE:** Ta có thể thay "want" bằng "like", "need", "have".'
                ]
            },
            {
                title: 'PAIR WORK PRACTICE',
                content: [
                    'buy a tie, a coat | eat beef, pork | drink soda, milk',
                    'wear a necklace, a bracelet | play the piano, the guitar',
                    'teach English, Vietnamese | study math, computer science',
                    '',
                    '**Homework:** Write 20 questions and answers using Question Model 1.4'
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
                    'But I don\'t like to listen to opera. It\'s so boring.',
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
                title: 'GRAMMAR – ADVERBS OF FREQUENCY (Trạng từ chỉ tần suất)',
                content: [
                    'Trạng từ chỉ tần suất thường đứng **trước động từ**:',
                    '**always** (luôn luôn) | **usually** (thường xuyên) | **often** (thường)',
                    '**sometimes** (thỉnh thoảng) | **seldom** (hiếm khi) | **never** (không bao giờ)',
                    '',
                    'VD: Do you play games in your free time?',
                    'Yes, I **sometimes** play games in my free time.',
                    'No, I **never** play games in my free time.',
                    '',
                    'Do you like to read books in your free time?',
                    'Yes, I **always** read books in my free time.',
                    'No, I **seldom** read books in my free time.'
                ]
            },
            {
                title: 'TỔNG ÔN QUESTION MODELS',
                content: [
                    '**Model 1.1:** Do you want/like/need/have + a/an + noun?',
                    '**Model 1.2:** What do you + verb?',
                    '**Model 1.3:** Do you want/like/need/have + to + verb + object?',
                    '**Model 1.4:** What do you want/like/need/have + to + verb?',
                    '',
                    '**So do I** (đồng ý khẳng định) | **Me neither** (đồng ý phủ định)',
                    '',
                    '**Useful expressions:**',
                    'Sorry! Can you repeat that, please?',
                    'How do you say this word in English?',
                    'What does it mean?'
                ]
            },
            {
                title: 'PRACTICE – All Question Models',
                content: [
                    '| iron | the T-shirts, the ties | open | a box, the windows |',
                    '| close | a book, a notebook | cook | rice, soup |',
                    '| feed | the dog, the cat | peel | tomatoes, potatoes |',
                    '| love | animals, flowers | have | a watch, a bracelet |',
                    '| wash | the coat, the dress | clean | the kitchen, the chair |',
                    '| carry | a picture, a map | sweep | the wall, the floor |',
                    '| build | houses, bridges | store | rice, meat |',
                    '| clean | the desk, the TV | sign | a contract, a letter |',
                    '| review | the vowels, the consonants |',
                    '',
                    '**HOMEWORK: NO HOMEWORK TODAY. 🎉**'
                ]
            }
        ]
    }
];
