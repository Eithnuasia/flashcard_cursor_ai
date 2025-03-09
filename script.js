const words = [
  {
    word: "Indescribable",
    translation: "Tidak terkira",
    explanation: `
            <h3>Adjective</h3>
            <p>Used when something is too intense or complex for words.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The beauty of the aurora was indescribable."</li>
                <li>ID: "Keindahan aurora itu tidak terkira."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Common in travel blogs and emotional stories.</p>
        `,
    mastered: false,
  },
  {
    word: "Grinning",
    translation: "Menyeringai",
    explanation: `
            <h3>Verb/Adjective</h3>
            <p>To smile broadly, showing the teeth; having a wide smile.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He was grinning from ear to ear after hearing the good news."</li>
                <li>ID: "Dia menyeringai lebar setelah mendengar kabar baik itu."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used to describe expressions of delight or satisfaction.</p>
        `,
    mastered: false,
  },
  {
    word: "Wrinkles",
    translation: "Kerutan",
    explanation: `
            <h3>Noun</h3>
            <p>Small furrows or creases in the skin, especially those that appear with age.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She had laugh wrinkles around her eyes."</li>
                <li>ID: "Dia memiliki kerutan tawa di sekitar matanya."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can also refer to creases in fabric or paper.</p>
        `,
    mastered: false,
  },
  {
    word: "Puckering",
    translation: "Mengerut",
    explanation: `
            <h3>Verb</h3>
            <p>To gather into small wrinkles or folds; to contract into ridges and furrows.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "Her lips were puckering as if she had tasted something sour."</li>
                <li>ID: "Bibirnya mengerut seolah-olah dia telah mencicipi sesuatu yang asam."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used to describe facial expressions or fabric gathering.</p>
        `,
    mastered: false,
  },
  {
    word: "Wizened",
    translation: "Keriput",
    explanation: `
            <h3>Adjective</h3>
            <p>Shriveled or wrinkled with age; withered.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The wizened old man sat quietly in the corner."</li>
                <li>ID: "Orang tua yang keriput itu duduk dengan tenang di sudut."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Primarily used to describe elderly people or dried fruits/vegetables.</p>
        `,
    mastered: false,
  },
  {
    word: "Hideous",
    translation: "Mengerikan",
    explanation: `
            <h3>Adjective</h3>
            <p>Extremely ugly or revolting; frightful.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She heard a hideous scream coming from the basement."</li>
                <li>ID: "Dia mendengar teriakan yang mengerikan dari ruang bawah tanah."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can describe appearance, sounds, or situations that cause horror or disgust.</p>
        `,
    mastered: false,
  },
  {
    word: "Inexplicably",
    translation: "Secara tidak dapat dijelaskan",
    explanation: `
            <h3>Adverb</h3>
            <p>In a way that cannot be explained or accounted for.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He inexplicably disappeared during the night."</li>
                <li>ID: "Dia menghilang secara tidak dapat dijelaskan selama malam hari."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Used when something happens without obvious cause or reason.</p>
        `,
    mastered: false,
  },
  {
    word: "Artificiality",
    translation: "Kebuatan",
    explanation: `
            <h3>Noun</h3>
            <p>The quality of being unnatural or fake.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The artificiality of her smile was obvious to everyone."</li>
                <li>ID: "Kebuatan senyumannya terlihat jelas oleh semua orang."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Used to describe something that lacks authenticity or naturalness.</p>
        `,
    mastered: false,
  },
  {
    word: "Foreboding",
    translation: "Firasat buruk",
    explanation: `
            <h3>Noun/Adjective</h3>
            <p>A feeling that something bad will happen; ominous.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She had a sense of foreboding as she entered the abandoned house."</li>
                <li>ID: "Dia memiliki firasat buruk saat memasuki rumah yang ditinggalkan itu."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used in thriller or horror contexts to build suspense.</p>
        `,
    mastered: false,
  },
  {
    word: "Avert",
    translation: "Mencegah",
    explanation: `
            <h3>Verb</h3>
            <p>To prevent or ward off (an undesirable occurrence); to turn away.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "Quick action helped avert a disaster."</li>
                <li>ID: "Tindakan cepat membantu mencegah bencana."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can also mean to turn one's eyes or attention away from something.</p>
        `,
    mastered: false,
  },
  {
    word: "Remotest",
    translation: "Paling terpencil",
    explanation: `
            <h3>Adjective (Superlative)</h3>
            <p>Furthest away; most distant or isolated.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "They explored the remotest parts of the Amazon rainforest."</li>
                <li>ID: "Mereka menjelajahi bagian paling terpencil dari hutan Amazon."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can also refer to the slightest possibility ("not the remotest chance").</p>
        `,
    mastered: false,
  },
  {
    word: "Peculiar",
    translation: "Aneh",
    explanation: `
            <h3>Adjective</h3>
            <p>Strange or odd; unusual.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He has a peculiar way of walking."</li>
                <li>ID: "Dia memiliki cara berjalan yang aneh."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can also mean distinctive or special to a particular person or place.</p>
        `,
    mastered: false,
  },
  {
    word: "Invariably",
    translation: "Selalu",
    explanation: `
            <h3>Adverb</h3>
            <p>Never changing; always.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She invariably arrives ten minutes late."</li>
                <li>ID: "Dia selalu tiba sepuluh menit terlambat."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Used to emphasize that something happens without fail every time.</p>
        `,
    mastered: false,
  },
  {
    word: "Aroused",
    translation: "Membangkitkan",
    explanation: `
            <h3>Verb</h3>
            <p>To evoke or awaken (a feeling, emotion, or response).</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The speech aroused strong emotions in the audience."</li>
                <li>ID: "Pidato itu membangkitkan emosi yang kuat pada penonton."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can also mean to awaken from sleep or to stimulate interest.</p>
        `,
    mastered: false,
  },
  {
    word: "Apprehension",
    translation: "Kekhawatiran",
    explanation: `
            <h3>Noun</h3>
            <p>Anxiety or fear about the future; understanding or grasp of something.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She felt a sense of apprehension before the interview."</li>
                <li>ID: "Dia merasakan kekhawatiran sebelum wawancara."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can also refer to the arrest of a criminal ("the apprehension of the suspect").</p>
        `,
    mastered: false,
  },
  {
    word: "Renounce",
    translation: "Melepaskan",
    explanation: `
            <h3>Verb</h3>
            <p>To formally reject or abandon (a claim, right, or possession).</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She renounced her claim to the throne."</li>
                <li>ID: "Dia melepaskan klaimnya atas tahta."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used in legal or formal contexts.</p>
        `,
    mastered: false,
  },
  {
    word: "Reprimands",
    translation: "Teguran",
    explanation: `
            <h3>Noun/Verb</h3>
            <p>A formal expression of disapproval; to rebuke or scold someone.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He received several reprimands for being late."</li>
                <li>ID: "Dia menerima beberapa teguran karena terlambat."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used in workplace or educational contexts.</p>
        `,
    mastered: false,
  },
  {
    word: "Prerequisites",
    translation: "Prasyarat",
    explanation: `
            <h3>Noun</h3>
            <p>Something required as a prior condition for something else to happen or exist.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "Basic math is a prerequisite for studying physics."</li>
                <li>ID: "Matematika dasar adalah prasyarat untuk mempelajari fisika."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Common in academic and professional contexts.</p>
        `,
    mastered: false,
  },
  {
    word: "Solitary",
    translation: "Menyendiri",
    explanation: `
            <h3>Adjective</h3>
            <p>Done or existing alone; single; lone.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "A solitary figure stood at the edge of the cliff."</li>
                <li>ID: "Sosok yang menyendiri berdiri di tepi tebing."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can describe a person who prefers to be alone or an isolated location.</p>
        `,
    mastered: false,
  },
  {
    word: "Agonies",
    translation: "Penderitaan",
    explanation: `
            <h3>Noun (Plural)</h3>
            <p>Extreme physical or mental suffering.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He endured the agonies of terminal illness."</li>
                <li>ID: "Dia menanggung penderitaan penyakit terminal."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used in literature to emphasize intense suffering.</p>
        `,
    mastered: false,
  },
  {
    word: "Agitation",
    translation: "Kegelisahan",
    explanation: `
            <h3>Noun</h3>
            <p>A state of anxiety or nervous excitement; the action of stirring or disturbing something.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He paced the floor in agitation while waiting for news."</li>
                <li>ID: "Dia mondar-mandir dengan kegelisahan sambil menunggu berita."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can refer to emotional state or physical movement/disturbance.</p>
        `,
    mastered: false,
  },
  {
    word: "Feigned",
    translation: "Pura-pura",
    explanation: `
            <h3>Verb/Adjective</h3>
            <p>Simulated or pretended; not genuine.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He feigned interest in her story while thinking about something else."</li>
                <li>ID: "Dia pura-pura tertarik dengan ceritanya sambil memikirkan hal lain."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used to describe insincere emotions or behaviors.</p>
        `,
    mastered: false,
  },
  {
    word: "Congenitally",
    translation: "Sejak lahir",
    explanation: `
            <h3>Adverb</h3>
            <p>In a way that is present from birth; by birth.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She is congenitally blind."</li>
                <li>ID: "Dia buta sejak lahir."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Most commonly used in medical contexts.</p>
        `,
    mastered: false,
  },
  {
    word: "Convalescent",
    translation: "Sedang dalam pemulihan",
    explanation: `
            <h3>Adjective/Noun</h3>
            <p>A person recovering from illness; relating to convalescence (recovery).</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "After the surgery, he spent two weeks in a convalescent home."</li>
                <li>ID: "Setelah operasi, dia menghabiskan dua minggu di rumah pemulihan."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used in medical contexts to describe recovery period.</p>
        `,
    mastered: false,
  },
  {
    word: "Recess",
    translation: "Istirahat",
    explanation: `
            <h3>Noun</h3>
            <p>A temporary break or rest from activity; a small, secluded space.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The children eagerly awaited the recess bell."</li>
                <li>ID: "Anak-anak dengan antusias menunggu bel istirahat."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>In schools, it refers to break time; can also mean a small alcove or niche.</p>
        `,
    mastered: false,
  },
  {
    word: "Admonished",
    translation: "Menegur",
    explanation: `
            <h3>Verb</h3>
            <p>To warn or reprimand someone firmly.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The teacher admonished the students for their poor behavior."</li>
                <li>ID: "Guru menegur para siswa karena perilaku buruk mereka."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>More formal than "scold" or "warn," often with moral overtones.</p>
        `,
    mastered: false,
  },
  {
    word: "Particularly",
    translation: "Khususnya",
    explanation: `
            <h3>Adverb</h3>
            <p>To a higher degree than is usual or average; especially.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The garden looks particularly beautiful in spring."</li>
                <li>ID: "Taman itu terlihat khususnya indah di musim semi."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Used to emphasize one item or aspect above others.</p>
        `,
    mastered: false,
  },
  {
    word: "Snickering",
    translation: "Terkekeh-kekeh",
    explanation: `
            <h3>Verb</h3>
            <p>To laugh in a partially suppressed, disrespectful manner.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The children were snickering at the back of the classroom."</li>
                <li>ID: "Anak-anak terkekeh-kekeh di belakang kelas."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Usually implies mockery or derision.</p>
        `,
    mastered: false,
  },
  {
    word: "Mischievous",
    translation: "Nakal",
    explanation: `
            <h3>Adjective</h3>
            <p>Showing a fondness for causing trouble in a playful way.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The mischievous child put salt in the sugar bowl."</li>
                <li>ID: "Anak yang nakal itu menaruh garam di wadah gula."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Implies playful rather than malicious intent.</p>
        `,
    mastered: false,
  },
  {
    word: "Lamentable",
    translation: "Menyedihkan",
    explanation: `
            <h3>Adjective</h3>
            <p>Regrettable, unfortunate, or deplorable.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The condition of the roads is in a lamentable state."</li>
                <li>ID: "Kondisi jalan-jalan berada dalam keadaan yang menyedihkan."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>More formal than "sad" or "regrettable," expressing stronger disapproval.</p>
        `,
    mastered: false,
  },
  {
    word: "Perpetrate",
    translation: "Melakukan (kejahatan)",
    explanation: `
            <h3>Verb</h3>
            <p>To carry out or commit (a harmful, illegal, or immoral action).</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The fraud was perpetrated by a group of insiders."</li>
                <li>ID: "Penipuan itu dilakukan oleh sekelompok orang dalam."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Almost always used in negative contexts, usually with crimes or deceptions.</p>
        `,
    mastered: false,
  },
  {
    word: "Unbashedly",
    translation: "Tanpa malu",
    explanation: `
            <h3>Adverb</h3>
            <p>In a manner showing no shame or embarrassment.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He unbashedly admitted that he had lied."</li>
                <li>ID: "Dia mengakui tanpa malu bahwa dia telah berbohong."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Used when someone does something potentially embarrassing without showing shame.</p>
        `,
    mastered: false,
  },
  {
    word: "Confide",
    translation: "Mempercayakan",
    explanation: `
            <h3>Verb</h3>
            <p>To tell someone secrets or personal matters with trust and confidence.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She confided her fears to her closest friend."</li>
                <li>ID: "Dia mempercayakan ketakutannya kepada teman terdekatnya."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often followed by "in" (to confide in someone) or "to" (to confide something to someone).</p>
        `,
    mastered: false,
  },
  {
    word: "Expedient",
    translation: "Bermanfaat",
    explanation: `
            <h3>Adjective/Noun</h3>
            <p>Convenient and practical although possibly improper or immoral; a means to an end.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "They took the expedient option rather than the moral one."</li>
                <li>ID: "Mereka mengambil pilihan yang bermanfaat daripada yang bermoral."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often implies a compromise of principles for practical advantage.</p>
        `,
    mastered: false,
  },
  {
    word: "Deride",
    translation: "Mengejek",
    explanation: `
            <h3>Verb</h3>
            <p>To express contempt for; to ridicule or mock.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "Critics derided his early paintings as amateur."</li>
                <li>ID: "Para kritikus mengejek lukisan awalnya sebagai amatir."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Stronger than "tease" and implies public humiliation or scorn.</p>
        `,
    mastered: false,
  },
  {
    word: "Inept",
    translation: "Tidak cakap",
    explanation: `
            <h3>Adjective</h3>
            <p>Having or showing no skill; clumsy.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "His inept handling of the crisis made things worse."</li>
                <li>ID: "Penanganannya yang tidak cakap terhadap krisis membuat semuanya lebih buruk."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Describes lack of competence or skill, stronger than "clumsy."</p>
        `,
    mastered: false,
  },
  {
    word: "Serene",
    translation: "Tenang",
    explanation: `
            <h3>Adjective</h3>
            <p>Calm, peaceful, and untroubled; tranquil.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The lake looked serene in the morning light."</li>
                <li>ID: "Danau itu terlihat tenang dalam cahaya pagi."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can describe places, expressions, or emotional states.</p>
        `,
    mastered: false,
  },
  {
    word: "Deceit",
    translation: "Tipu daya",
    explanation: `
            <h3>Noun</h3>
            <p>The action or practice of deceiving someone by concealing or misrepresenting the truth.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "Their relationship was built on deceit and lies."</li>
                <li>ID: "Hubungan mereka dibangun atas tipu daya dan kebohongan."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>More formal than "lying" and can refer to an ongoing pattern of behavior.</p>
        `,
    mastered: false,
  },
  {
    word: "Abstruse",
    translation: "Sulit dipahami",
    explanation: `
            <h3>Adjective</h3>
            <p>Difficult to understand; obscure.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The professor's lecture was full of abstruse philosophical concepts."</li>
                <li>ID: "Kuliah profesor itu penuh dengan konsep filosofis yang sulit dipahami."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used for complex academic or technical subjects.</p>
        `,
    mastered: false,
  },
  {
    word: "Beguiling",
    translation: "Memikat",
    explanation: `
            <h3>Adjective</h3>
            <p>Charming or enchanting, sometimes in a deceptive way.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "She had a beguiling smile that won everyone over."</li>
                <li>ID: "Dia memiliki senyum yang memikat yang memenangkan hati semua orang."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can imply both attractiveness and subtle deception.</p>
        `,
    mastered: false,
  },
  {
    word: "Stupefy",
    translation: "Membuat tercengang",
    explanation: `
            <h3>Verb</h3>
            <p>To make someone unable to think or feel properly; astonish or shock greatly.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The news of his sudden promotion stupefied everyone in the office."</li>
                <li>ID: "Berita tentang promosinya yang tiba-tiba membuat tercengang semua orang di kantor."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Stronger than "surprise" or "shock," implying inability to react coherently.</p>
        `,
    mastered: false,
  },
  {
    word: "Vigilance",
    translation: "Kewaspadaan",
    explanation: `
            <h3>Noun</h3>
            <p>The action or state of keeping careful watch for possible danger or difficulties.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The security guard maintained vigilance throughout the night."</li>
                <li>ID: "Penjaga keamanan mempertahankan kewaspadaan sepanjang malam."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used in security or safety contexts.</p>
        `,
    mastered: false,
  },
  {
    word: "Squalor",
    translation: "Kekumuhan",
    explanation: `
            <h3>Noun</h3>
            <p>The state of being extremely dirty and unpleasant, especially as a result of poverty.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The family lived in squalor in a small, dilapidated apartment."</li>
                <li>ID: "Keluarga itu hidup dalam kekumuhan di apartemen kecil yang rusak."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used in descriptions of extreme poverty or neglect.</p>
        `,
    mastered: false,
  },
  {
    word: "Bashful",
    translation: "Pemalu",
    explanation: `
            <h3>Adjective</h3>
            <p>Reluctant to draw attention to oneself; shy.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "He was too bashful to ask her to dance."</li>
                <li>ID: "Dia terlalu pemalu untuk mengajaknya berdansa."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>More literary than "shy" and often has a gentle or endearing connotation.</p>
        `,
    mastered: false,
  },
  {
    word: "Swarthy",
    translation: "Berkulit gelap",
    explanation: `
            <h3>Adjective</h3>
            <p>Dark-skinned; having a dark complexion.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The swarthy sailor had spent years working under the sun."</li>
                <li>ID: "Pelaut berkulit gelap itu telah menghabiskan bertahun-tahun bekerja di bawah matahari."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Typically describes naturally dark or tanned skin; somewhat old-fashioned term.</p>
        `,
    mastered: false,
  },
  {
    word: "Profound",
    translation: "Mendalam",
    explanation: `
            <h3>Adjective</h3>
            <p>Very great or intense; having or showing great knowledge or insight.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The book had a profound impact on her thinking."</li>
                <li>ID: "Buku itu memiliki dampak yang mendalam pada pemikirannya."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Can refer to depth of emotion, impact, or intellectual understanding.</p>
        `,
    mastered: false,
  },
  {
    word: "Procrastinate",
    translation: "Menunda-nunda",
    explanation: `
            <h3>Verb</h3>
            <p>To delay or postpone action; to put off doing something.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "I always procrastinate when it comes to doing taxes."</li>
                <li>ID: "Saya selalu menunda-nunda ketika harus mengerjakan pajak."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used with "on" or "about" to specify what is being delayed.</p>
        `,
    mastered: false,
  },
  {
    word: "Serendipity",
    translation: "Penemuan yang tidak disengaja",
    explanation: `
            <h3>Noun</h3>
            <p>The occurrence of events by chance in a happy or beneficial way.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "Meeting my future business partner was pure serendipity."</li>
                <li>ID: "Bertemu calon rekan bisnis saya adalah penemuan yang tidak disengaja."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>A sophisticated word that implies a fortunate coincidence.</p>
        `,
    mastered: false,
  },
  {
    word: "Ambiguous",
    translation: "Ambigu",
    explanation: `
            <h3>Adjective</h3>
            <p>Open to more than one interpretation; having multiple meanings.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "The instructions were ambiguous, so I wasn't sure what to do."</li>
                <li>ID: "Instruksinya ambigu, jadi saya tidak yakin apa yang harus dilakukan."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often used in formal writing and academic contexts.</p>
        `,
    mastered: false,
  },
  {
    word: "Perseverance",
    translation: "Ketekunan",
    explanation: `
            <h3>Noun</h3>
            <p>Persistence in doing something despite difficulty or delay in achieving success.</p>
            <h4>Example:</h4>
            <ul>
                <li>EN: "Her perseverance finally paid off when she got the promotion."</li>
                <li>ID: "Ketekunannya akhirnya membuahkan hasil ketika dia mendapatkan promosi."</li>
            </ul>
            <h4>Usage Tip:</h4>
            <p>Often associated with overcoming challenges and achieving goals.</p>
        `,
    mastered: false,
  },
  // Add more words here...
];

// Global variables for tracking user progress
let currentCardIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let studyMode = "normal";
let currentTheme = "default";
let filteredWords = [...words];
let searchTerm = "";
let selectedCategory = "all";

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  // Load saved progress from localStorage if available
  loadProgress();

  // Initialize the UI
  updateCard();
  updateProgressBar();
  updateStats();

  // Add event listeners
  document
    .getElementById("searchInput")
    .addEventListener("input", handleSearch);

  // Add event listeners to category pills
  const categoryPills = document.querySelectorAll(".category-pill");
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      // Remove active class from all pills
      categoryPills.forEach((p) => p.classList.remove("active"));
      // Add active class to clicked pill
      this.classList.add("active");
      // Filter cards by category
      selectedCategory = this.dataset.category;
      filterCards();
    });
  });

  // Add event listeners to study modes
  const studyModes = document.querySelectorAll(".study-mode");
  studyModes.forEach((mode) => {
    mode.addEventListener("click", function () {
      // Remove active class from all modes
      studyModes.forEach((m) => m.classList.remove("active"));
      // Add active class to clicked mode
      this.classList.add("active");
      // Set study mode
      studyMode = this.dataset.mode;
      // Reset current card index
      currentCardIndex = 0;
      // Update card
      updateCard();
    });
  });

  // Add event listeners to theme options
  const themeOptions = document.querySelectorAll(".theme-option");
  themeOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove active class from all options
      themeOptions.forEach((o) => o.classList.remove("active"));
      // Add active class to clicked option
      this.classList.add("active");
      // Set theme
      setTheme(this.dataset.theme);
    });
  });

  // Add event listeners to toggle switches
  document
    .getElementById("pronunciationToggle")
    .addEventListener("change", function () {
      const audioBtns = document.querySelectorAll(".audio-btn");
      audioBtns.forEach((btn) => {
        btn.style.display = this.checked ? "flex" : "none";
      });
    });

  document
    .getElementById("autoFlipToggle")
    .addEventListener("change", function () {
      // Will be used in the flipCard function
    });

  document
    .getElementById("animationToggle")
    .addEventListener("change", function () {
      const card = document.getElementById("flashcard");
      if (!this.checked) {
        card.style.transition = "none";
      } else {
        card.style.transition =
          "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      }
    });

  // Add card entrance animation
  const card = document.getElementById("flashcard");
  card.classList.add("card-entrance");

  // Remove animation class after animation completes
  card.addEventListener("animationend", function () {
    this.classList.remove("card-entrance");
  });
}

// Filter cards based on search term and category
function filterCards() {
  // Start with all words
  let filtered = [...words];

  // Filter by search term if it exists
  if (searchTerm) {
    filtered = filtered.filter(
      (word) =>
        word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.translation.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Filter by category
  if (selectedCategory !== "all") {
    if (selectedCategory === "mastered") {
      filtered = filtered.filter((word) => word.mastered);
    } else if (selectedCategory === "new") {
      filtered = filtered.filter((word) => !word.mastered && !word.seen);
    } else if (selectedCategory === "learning") {
      filtered = filtered.filter((word) => !word.mastered && word.seen);
    }
  }

  // Update filtered words
  filteredWords = filtered;

  // Reset current card index if it's out of bounds
  if (currentCardIndex >= filteredWords.length) {
    currentCardIndex = 0;
  }

  // Update card and progress
  updateCard();
  updateProgressBar();
}

// Handle search input
function handleSearch(event) {
  searchTerm = event.target.value.trim();
  filterCards();
}

// Update the card with current word
function updateCard() {
  // If no cards match the filter, show a message
  if (filteredWords.length === 0) {
    document.getElementById("englishWord").textContent =
      "No cards match your filter";
    document.getElementById("indonesianTranslation").textContent =
      "Try a different search or category";
    document.getElementById("progressText").textContent = "0/0";
    document.getElementById("progressBarFill").style.width = "0%";
    return;
  }

  // Get current card based on study mode
  let currentCard;

  if (studyMode === "random") {
    // Random mode: pick a random card
    currentCardIndex = Math.floor(Math.random() * filteredWords.length);
    currentCard = filteredWords[currentCardIndex];
  } else if (studyMode === "spaced") {
    // Spaced repetition: prioritize cards that were marked as unknown
    const unknownCards = filteredWords.filter(
      (word) => word.seen && !word.mastered
    );
    if (unknownCards.length > 0) {
      currentCard = unknownCards[currentCardIndex % unknownCards.length];
      currentCardIndex = filteredWords.indexOf(currentCard);
    } else {
      currentCard = filteredWords[currentCardIndex];
    }
  } else {
    // Normal mode: sequential order
    currentCard = filteredWords[currentCardIndex];
  }

  // Update the card content
  document.getElementById("englishWord").textContent = currentCard.word;
  document.getElementById("indonesianTranslation").textContent =
    currentCard.translation;
  document.getElementById("explanationText").innerHTML =
    currentCard.explanation;

  // Mark the card as seen
  if (!currentCard.seen) {
    currentCard.seen = true;
    saveProgress();
  }

  // Reset card flip
  const card = document.getElementById("flashcard");
  card.classList.remove("flipped");

  // Add entrance animation
  card.classList.add("card-entrance");

  // Update progress text
  document.getElementById("progressText").textContent = `${
    currentCardIndex + 1
  }/${filteredWords.length}`;

  // Auto-flip if enabled
  const autoFlip = document.getElementById("autoFlipToggle").checked;
  if (autoFlip) {
    setTimeout(flipCard, 2000);
  }
}

// Update the progress bar
function updateProgressBar() {
  const progressPercentage =
    filteredWords.length > 0
      ? ((currentCardIndex + 1) / filteredWords.length) * 100
      : 0;
  document.getElementById(
    "progressBarFill"
  ).style.width = `${progressPercentage}%`;

  // Update mastered count
  const masteredCount = words.filter((word) => word.mastered).length;
  document.getElementById("masteredCount").textContent = masteredCount;
}

// Update statistics
function updateStats() {
  // Update total cards
  document.getElementById("totalCards").textContent = words.length;

  // Update mastered cards
  const masteredCount = words.filter((word) => word.mastered).length;
  document.getElementById("masteredCards").textContent = masteredCount;

  // Update accuracy rate
  const totalAttempts = correctAnswers + incorrectAnswers;
  const accuracyRate =
    totalAttempts > 0 ? Math.round((correctAnswers / totalAttempts) * 100) : 0;
  document.getElementById("accuracyRate").textContent = `${accuracyRate}%`;
}

// Flip the card
function flipCard() {
  const card = document.getElementById("flashcard");
  card.classList.toggle("flipped");

  // If card is flipped to back, mark as seen
  if (card.classList.contains("flipped")) {
    const currentCard = filteredWords[currentCardIndex];
    if (!currentCard.seen) {
      currentCard.seen = true;
      saveProgress();
    }
  }
}

// Show explanation modal
function showExplanation(event) {
  event.stopPropagation();
  const modal = document.getElementById("explanationModal");
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("visible");
  }, 10);
}

// Close explanation modal
function closeExplanation() {
  const modal = document.getElementById("explanationModal");
  modal.classList.remove("visible");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Play audio pronunciation
function playAudio(event) {
  event.stopPropagation();
  const word = filteredWords[currentCardIndex].word;

  // Use the Web Speech API for pronunciation
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);

  // Add animation to the button
  const button = event.currentTarget;
  button.classList.add("playing");
  setTimeout(() => {
    button.classList.remove("playing");
  }, 1000);
}

// Navigate to next card
function nextCard() {
  if (currentCardIndex < filteredWords.length - 1) {
    currentCardIndex++;
  } else {
    currentCardIndex = 0;
  }
  updateCard();
  updateProgressBar();
}

// Navigate to previous card
function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
  } else {
    currentCardIndex = filteredWords.length - 1;
  }
  updateCard();
  updateProgressBar();
}

// Mark current card as known
function markAsKnown() {
  if (filteredWords.length === 0) return;

  const currentCard = filteredWords[currentCardIndex];
  currentCard.mastered = true;
  correctAnswers++;

  // Save progress
  saveProgress();

  // Update stats
  updateStats();

  // Show confetti animation
  showConfetti();

  // Go to next card
  setTimeout(() => {
    nextCard();
  }, 1000);
}

// Mark current card as unknown
function markAsUnknown() {
  if (filteredWords.length === 0) return;

  const currentCard = filteredWords[currentCardIndex];
  currentCard.mastered = false;
  incorrectAnswers++;

  // Save progress
  saveProgress();

  // Update stats
  updateStats();

  // Go to next card
  nextCard();
}

// Toggle settings panel
function toggleSettings() {
  const settingsPanel = document.getElementById("settingsPanel");
  const overlay = document.getElementById("overlay");

  settingsPanel.classList.toggle("open");
  overlay.classList.toggle("visible");
}

// Set theme
function setTheme(theme) {
  const root = document.documentElement;
  currentTheme = theme;

  // Save theme preference
  localStorage.setItem("flashcardTheme", theme);

  // Apply theme colors
  switch (theme) {
    case "green":
      root.style.setProperty("--primary-color", "#11998e");
      root.style.setProperty("--secondary-color", "#38ef7d");
      break;
    case "red":
      root.style.setProperty("--primary-color", "#f12711");
      root.style.setProperty("--secondary-color", "#f5af19");
      break;
    case "blue":
      root.style.setProperty("--primary-color", "#4e54c8");
      root.style.setProperty("--secondary-color", "#8f94fb");
      break;
    case "dark":
      root.style.setProperty("--primary-color", "#232526");
      root.style.setProperty("--secondary-color", "#414345");
      root.style.setProperty("--dark-bg", "#121212");
      root.style.setProperty("--card-bg", "#1e1e1e");
      break;
    case "pink":
      root.style.setProperty("--primary-color", "#ff0084");
      root.style.setProperty("--secondary-color", "#33001b");
      break;
    default:
      // Default theme
      root.style.setProperty("--primary-color", "#6a11cb");
      root.style.setProperty("--secondary-color", "#2575fc");
      root.style.setProperty("--dark-bg", "#1e1e2f");
      root.style.setProperty("--card-bg", "#27293d");
      break;
  }
}

// Show confetti animation for mastered cards
function showConfetti() {
  const container = document.querySelector(".card-container");

  // Create confetti pieces
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    confetti.style.animation = `confetti ${
      Math.random() * 3 + 1
    }s linear forwards`;
    confetti.style.animationDelay = `${Math.random() * 0.5}s`;

    container.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

// Get random color for confetti
function getRandomColor() {
  const colors = [
    "#6a11cb",
    "#2575fc",
    "#00bf9a",
    "#fd5d93",
    "#ff0084",
    "#33001b",
    "#f12711",
    "#f5af19",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Save progress to localStorage
function saveProgress() {
  const progress = {
    words: words.map((word) => ({
      word: word.word,
      mastered: word.mastered,
      seen: word.seen || false,
    })),
    correctAnswers,
    incorrectAnswers,
    theme: currentTheme,
    studyMode,
  };

  localStorage.setItem("flashcardProgress", JSON.stringify(progress));
}

// Load progress from localStorage
function loadProgress() {
  const savedProgress = localStorage.getItem("flashcardProgress");

  if (savedProgress) {
    const progress = JSON.parse(savedProgress);

    // Update word mastery status
    progress.words.forEach((savedWord) => {
      const word = words.find((w) => w.word === savedWord.word);
      if (word) {
        word.mastered = savedWord.mastered;
        word.seen = savedWord.seen || false;
      }
    });

    // Update stats
    correctAnswers = progress.correctAnswers || 0;
    incorrectAnswers = progress.incorrectAnswers || 0;

    // Set theme if saved
    if (progress.theme) {
      setTheme(progress.theme);
      // Update active theme in UI
      const themeOptions = document.querySelectorAll(".theme-option");
      themeOptions.forEach((option) => {
        option.classList.remove("active");
        if (option.dataset.theme === progress.theme) {
          option.classList.add("active");
        }
      });
    }

    // Set study mode if saved
    if (progress.studyMode) {
      studyMode = progress.studyMode;
      // Update active study mode in UI
      const studyModes = document.querySelectorAll(".study-mode");
      studyModes.forEach((mode) => {
        mode.classList.remove("active");
        if (mode.dataset.mode === progress.studyMode) {
          mode.classList.add("active");
        }
      });
    }
  }

  // Initialize words with seen property if not present
  words.forEach((word) => {
    if (word.seen === undefined) {
      word.seen = false;
    }
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("flashcardTheme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
}

// Reset all progress
function resetProgress() {
  if (
    confirm(
      "Are you sure you want to reset all progress? This cannot be undone."
    )
  ) {
    // Reset all words
    words.forEach((word) => {
      word.mastered = false;
      word.seen = false;
    });

    // Reset stats
    correctAnswers = 0;
    incorrectAnswers = 0;

    // Reset current card index
    currentCardIndex = 0;

    // Save reset progress
    saveProgress();

    // Update UI
    updateCard();
    updateProgressBar();
    updateStats();

    // Show confirmation
    alert("Progress has been reset successfully.");
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextCard();
  if (e.key === "ArrowLeft") prevCard();
  if (e.key === " " || e.key === "Spacebar") flipCard();
  if (e.key === "Escape") closeExplanation();
});

// Initialize
updateCard();
