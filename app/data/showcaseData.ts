export interface ProjectDeliverable {
  title: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  role: string;
  clientOrContext: string;
  year: string;
  timeline: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  solution: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  liveLabel?: string;
  deliverables: ProjectDeliverable[];
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
  competencies?: string[];
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Design & UI/UX" | "Tools & Cloud";
  level: "Advanced" | "Proficient" | "Intermediate";
  iconType: string;
  description: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "asa-karya-alam-field-operations",
    title: "CV Asa Karya Alam — Field Operations Management System & Project Monitoring Portal",
    category: "Web Application",
    role: "Frontend & API Integration",
    clientOrContext: "CV Asa Karya Alam (Contractor)",
    year: "2024",
    timeline: "3 Bulan Pengerjaan",
    description:
      "Aplikasi web internal untuk monitoring progres lapangan, penjadwalan inspeksi proyek kontraktor, dan koordinasi logistik secara terpusat.",
    longDescription:
      "Sistem web operasional khusus yang dibangun untuk CV Asa Karya Alam guna memantau proyek konstruksi dan operasional lapangan. Menggantikan proses manual berbasis chat grup dan spreadsheet menjadi portal terpusat dengan log aktivitas real-time.",
    problemStatement:
      "Sebelumnya, pelaporan progres tim lapangan dan mandor proyek tersebar di chat WhatsApp pribadi dan file catatan manual. Kondisi ini membuat timeline inspeksi sering bentrok, dokumentasi foto fisik sulit dilacak kembali, dan kantor pusat terlambat merespons kendala teknis di lapangan.",
    solution:
      "Merancang web portal responsif yang ringan diakses via smartphone lapangan. Dilengkapi modul rekapitulasi progres milestone harian, integrasi Google Calendar API untuk jadwal visit inspeksi, dan form unggah foto log progres terstruktur.",
    image: "/projects/webgis.jpg",
    tags: ["Web Application", "React", "Google Calendar API", "Tailwind CSS", "Field Operations", "REST API"],
    githubUrl: "https://github.com/zedandot",
    liveLabel: "Source Repository",
    deliverables: [
      {
        title: "Dashboard Monitoring Milestone",
        detail: "Pelacakan progres pekerjaan harian dan mingguan dengan status approval bertingkat dari mandor ke manajemen.",
      },
      {
        title: "Sinkronisasi Google Calendar API",
        detail: "Jadwal visit inspeksi lapangan dan tenggat waktu pekerjaan tersinkronisasi otomatis ke kalender kerja tim.",
      },
      {
        title: "Log Lapangan & Dokumentasi Real-time",
        detail: "Formulir input catatan kendala lapangan beserta unggah dokumentasi foto berstempel tanggal dan lokasi.",
      },
      {
        title: "Mobile-First Responsive Interface",
        detail: "Layout dirancang ringan dan cepat dibuka lewat koneksi seluler di lokasi proyek tanpa hambatan performa.",
      },
    ],
    highlights: [
      "Dashboard monitoring progres milestone pekerjaan harian dan mingguan",
      "Sinkronisasi jadwal inspeksi via Google Calendar API",
      "Penyimpanan log dokumentasi foto progres lapangan terstruktur",
      "Antarmuka responsif yang ringan diakses mandor via smartphone",
    ],
  },
  {
    id: "153-kreatif-company-profile-cms-finance",
    title: "153 Kreatif — Company Profile, Custom CMS & Financial Management System",
    category: "Fullstack Web Application",
    role: "Fullstack Web Developer",
    clientOrContext: "PT 153 Kreatif (Creative Agency)",
    year: "2024",
    timeline: "2 Bulan Pengerjaan",
    description:
      "Platform web komprehensif yang mengintegrasikan profil agensi publik, Content Management System (CMS) custom, dan modul pembukuan kas proyek.",
    longDescription:
      "Aplikasi web terpadu untuk PT 153 Kreatif yang menggabungkan halaman profil agensi modern dengan back-office internal. Memungkinkan tim internal memperbarui showcase portofolio secara mandiri dan merekap arus kas proyek dalam satu database.",
    problemStatement:
      "PT 153 Kreatif membutuhkan website profil modern untuk kebutuhan pitching klien, sekaligus sistem internal agar tim konten tidak perlu meminta bantuan developer setiap kali ingin merilis studi kasus baru, serta pencatatan cash flow proyek yang tidak lagi mengandalkan spreadsheet terpisah.",
    solution:
      "Membangun arsitektur monolitik Laravel dengan pemisahan peran: front-facing company profile yang cepat dan SEO-ready, serta back-office admin panel terproteksi untuk manajemen konten artikel/portofolio dan pembukuan keuangan proyek.",
    image: "/projects/uiux.jpg",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Custom CMS", "Financial Records", "Multi-Role Auth"],
    githubUrl: "https://github.com/zedandot",
    liveLabel: "Source Repository",
    deliverables: [
      {
        title: "Custom Content Management System",
        detail: "Panel admin intuitif untuk publikasi studi kasus klien, artikel blog, dan katalog layanan agensi secara mandiri.",
      },
      {
        title: "Modul Pencatatan Finansial Proyek",
        detail: "Pencatatan invoice masuk, biaya operasional produksi kreatif, dan rekapitulasi laba bersih tiap kontrak klien.",
      },
      {
        title: "Multi-Role Authentication",
        detail: "Hak akses terpisah antara Content Creator (editor portofolio) dan Manajemen (keuangan & data sensitif agensi).",
      },
      {
        title: "High-Performance Agency Landing Page",
        detail: "Desain antarmuka berkarakter kuat dengan interaksi halus, tipografi editorial, dan form lead inquiry klien.",
      },
    ],
    highlights: [
      "Arsitektur Laravel monolitik terstruktur dengan autentikasi multi-role",
      "Custom CMS dinamis untuk publikasi studi kasus dan artikel agensi",
      "Modul pencatatan pemasukan & pengeluaran operasional per proyek",
      "Desain landing page modern berfokus pada conversion klien",
    ],
  },
  {
    id: "sudin-jakarta-utara-design-competition",
    title: "Juara 1 Desain Grafis — Kreatifitas Pemuda Jakarta Utara 2026",
    category: "Visual Design & Competition",
    role: "Visual & Graphic Designer",
    clientOrContext: "Sudinpora Jakarta Utara (Pemprov DKI)",
    year: "2026",
    timeline: "Kompetisi Tingkat Kota",
    description:
      "Karya poster desain grafis bertema pemuda kreatif yang berhasil meraih Penghargaan Juara 1 pada ajang Kreatifitas Pemuda Jakarta Utara 2026.",
    longDescription:
      "Karya visual kompetisi yang dirancang untuk menyampaikan narasi pergerakan generasi muda pesisir Jakarta Utara dalam berinovasi dan berkontribusi nyata. Berhasil meraih Juara 1 setelah melalui penilaian ketat oleh dewan juri Sudinpora DKI Jakarta.",
    problemStatement:
      "Kompetisi menuntut peserta merumuskan narasi visual yang mampu menggugah kesadaran generasi muda mengenai peran aktif di era modern, dengan batasan waktu pengerjaan ketat serta penilaian pada orisinalitas ide, kekuatan komposisi, dan keterbacaan pesan.",
    solution:
      "Mengeksplorasi gaya editorial kontemporer dengan perpaduan tipografi dinamis, photo-manipulation simbolik di Adobe Photoshop, dan pemilihan warna kontras tinggi yang merefleksikan energi anak muda.",
    image: "/projects/branding.jpg",
    tags: ["Graphic Design", "Adobe Photoshop", "Typography", "Visual Identity", "Digital Imaging", "Award Winner"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    liveLabel: "Lihat Bukti Prestasi (LinkedIn)",
    deliverables: [
      {
        title: "Peringkat Juara 1 Tingkat Kota",
        detail: "Karya terpilih sebagai pemenang pertama dari puluhan perwakilan peserta se-wilayah Jakarta Utara.",
      },
      {
        title: "Eksplorasi Tipografi Editorial",
        detail: "Hierarki tipografi huruf besar yang berani dan berfungsi sebagai jangkar komposisi visual utama.",
      },
      {
        title: "Digital Imaging & Compositing",
        detail: "Teknik manipulasi foto berlapis, lighting adjustment presisi, dan grading tekstur berkarakter di Adobe Photoshop.",
      },
      {
        title: "High-Resolution Print Production",
        detail: "Finalisasi file siap cetak format besar standar 300 DPI dengan profil warna CMYK presisi untuk pameran fisik.",
      },
    ],
    highlights: [
      "Meraih Juara 1 dari puluhan peserta perwakilan institusi dan komunitas di Jakarta Utara",
      "Eksplorasi tipografi editorial berani yang dipadukan dengan manipulasi foto simbolik",
      "Penerapan hierarki visual kontras tinggi agar narasi poster langsung terbaca",
      "Eksekusi color grading dan vector assets terstruktur untuk standar cetak 300 DPI",
    ],
  },
  {
    id: "153-creative-design-assets",
    title: "PT 153 Creative — Digital Visual Assets & Marketing Collaterals",
    category: "Brand & Commercial Design",
    role: "Freelance Graphic Designer",
    clientOrContext: "PT 153 Creative (Remote)",
    year: "2026",
    timeline: "Freelance Contract",
    description:
      "Produksi aset desain visual reguler untuk kebutuhan kampanye media sosial, materi presentasi pitch deck, dan materi visual klien agensi.",
    longDescription:
      "Kolaborasi freelance remote bersama PT 153 Creative untuk menangani volume kebutuhan desain visual harian dan materi komersial klien agensi di berbagai sektor industri.",
    problemStatement:
      "Agensi membutuhkan eksekusi materi visual yang konsisten dan cepat untuk memenuhi jadwal posting konten harian serta materi visual presentasi untuk pitching calon klien baru tanpa menurunkan standar kualitas brand.",
    solution:
      "Membangun sistem template desain modular, panduan tipografi, serta workflow produksi aset cepat menggunakan Adobe Photoshop dan Canva sehingga setiap output tetap mematuhi brand guideline agensi.",
    image: "/projects/socialmedia.jpg",
    tags: ["Brand Assets", "Adobe Photoshop", "Canva", "Social Media Design", "Deck Design", "Typography"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    liveLabel: "Lihat Profil & Portofolio (LinkedIn)",
    deliverables: [
      {
        title: "30+ Aset Visual Media Sosial",
        detail: "Format carousel edukasi, promotional banner, dan infografis engagement dengan tone visual seragam.",
      },
      {
        title: "Pitch Deck & Proposal Styling",
        detail: "Perancangan layout slide presentasi bisnis dengan data visualisasi yang bersih dan profesional.",
      },
      {
        title: "Asset Kit & Brand Guidelines",
        detail: "Pembuatan kit elemen grafis reusable (icon, shape, palette) untuk efisiensi tim marketing internal.",
      },
      {
        title: "Workflow Kolaborasi Remote",
        detail: "Koordinasi berkala berbasis brief dan revisi cepat sesuai kalender konten bulanan yang dinamis.",
      },
    ],
    highlights: [
      "Merancang 30+ aset visual media sosial dengan grid layout dan tone warna konsisten",
      "Pembuatan materi presentasi dan deck pitching klien dengan tata letak data yang bersih",
      "Kolaborasi remote berbasis sprint untuk revisi cepat aset promosi",
      "Workflow terorganisir dengan asset kit siap pakai untuk tim marketing",
    ],
  },
  {
    id: "himavo-micro-it-community-design",
    title: "Himavo Micro IT — Community Multimedia & Event Branding",
    category: "Multimedia & Community Branding",
    role: "Multimedia Designer",
    clientOrContext: "Himavo Micro IT (IPB University)",
    year: "2024 — 2025",
    timeline: "1 Tahun Periode Kepengurusan",
    description:
      "Pengembangan identitas visual acara, desain materi promosi seminar teknologi, dan infografis edukatif seputar rekayasa perangkat lunak.",
    longDescription:
      "Menjabat sebagai staf divisi Multimedia di organisasi mahasiswa keilmuan teknologi informasi IPB University. Bertanggung jawab atas seluruh kebutuhan visual acara, seminar nasional, workshop pemrograman, dan publikasi digital.",
    problemStatement:
      "Sebagai organisasi mahasiswa di bidang teknologi informasi, Himavo Micro IT membutuhkan peremajaan visual agar publikasi workshop, seminar nasional, dan rekrutmen terlihat lebih modern, kredibel, dan menarik bagi mahasiswa gen-Z.",
    solution:
      "Mengembangkan bahasa visual modern bergaya neo-brutalism dan tech-minimalism untuk feed Instagram organisasi, backdrop panggung, ID card kepanitiaan, hingga virtual background.",
    image: "/projects/branding.jpg",
    tags: ["Event Branding", "Photoshop", "Canva", "Community", "Infographic Design", "Social Media"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    liveLabel: "Lihat Dokumentasi Kegiatan",
    deliverables: [
      {
        title: "Key Visual Acara & Seminar Nasional",
        detail: "Materi visual komprehensif mulai dari poster pengumuman, backdrop panggung, hingga e-certificate resmi.",
      },
      {
        title: "Infografis Edukasi Rekayasa Perangkat Lunak",
        detail: "Penyederhanaan materi teknis pemrograman dan tren industri IT menjadi konten carousel visual yang mudah dipahami.",
      },
      {
        title: "Rebranding Feed Media Sosial",
        detail: "Standardisasi grid template Instagram yang menaikkan konsistensi visual dan interaksi follower secara terukur.",
      },
      {
        title: "Kolaborasi Tim Lintas Divisi",
        detail: "Bekerja sama secara intensif bersama tim Humas dan Acara dalam memenuhi kebutuhan materi publikasi tepat waktu.",
      },
    ],
    highlights: [
      "Merancang identitas visual acara: logo event, backdrop panggung, dan merchandise",
      "Memproduksi konten infografis edukasi seputar rekayasa perangkat lunak",
      "Standardisasi format visual media sosial yang meningkatkan interaksi follower",
      "Kerja sama lintas divisi dengan tim humas dalam tenggat waktu rilis yang ketat",
    ],
  },
  {
    id: "suarinara-vol-1-graphic-design",
    title: "Suarinara Vol. 1 — Community Service Visual Identity & Field Campaign",
    category: "Volunteering & Visual Identity",
    role: "Head of Visual Design",
    clientOrContext: "Ekspedisi Pengabdian Desa Argosari (Lumajang)",
    year: "2024",
    timeline: "7 Hari Program Lapangan",
    description:
      "Perancangan identitas visual program pengabdian masyarakat, modul edukasi kreatif anak-anak suku Tengger, dan materi dokumentasi lapangan di Desa Argosari, Lumajang.",
    longDescription:
      "Selama program pengabdian masyarakat 7 hari di lereng Gunung Bromo, memimpin perancangan materi visual kampanye sosial, buku modul ajar anak-anak, identitas seragam relawan, serta media dokumentasi publikasi.",
    problemStatement:
      "Program pengabdian di pelosok desa pegunungan membutuhkan media komunikasi visual yang ramah bagi warga lokal suku Tengger, materi belajar yang menarik untuk anak-anak pedesaan, serta dokumentasi yang representatif bagi pihak sponsor dan donatur.",
    solution:
      "Menyusun konsep visual yang terinspirasi dari kehangatan alam lereng Bromo dan keramahan masyarakat suku Tengger, diaplikasikan pada modul literasi bergambar, plang informasi desa, dan kampanye media sosial.",
    image: "/projects/socialmedia.jpg",
    tags: ["Identity System", "Editorial Layout", "Social Impact", "Field Campaign", "Print Media", "Community Service"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    liveLabel: "Lihat Dokumentasi Pengabdian (LinkedIn)",
    deliverables: [
      {
        title: "Sistem Identitas Visual Suarinara",
        detail: "Desain logo kegiatan, tema palet warna bumi (earthy-warm), dan sistem tipografi yang merefleksikan nilai kepedulian sosial.",
      },
      {
        title: "Buku Saku & Modul Literasi Anak",
        detail: "Layout materi ajar interaktif bergambar yang digunakan relawan saat sesi belajar mengajar di SDN Argosari.",
      },
      {
        title: "Media Komunikasi Lapangan & Fisik",
        detail: "Produksi spanduk selamat datang, signage titik kegiatan desa, dan seragam lapangan relawan ekspedisi.",
      },
      {
        title: "Dokumentasi & Laporan Dampak",
        detail: "Kurasi foto harian dan penyusunan buklet laporan pertanggungjawaban untuk pihak kampus dan sponsor program.",
      },
    ],
    highlights: [
      "Bertanggung jawab atas konsep visual program pengabdian masyarakat",
      "Membuat sistem visual untuk kebutuhan publikasi dan dokumentasi kegiatan",
      "Merancang modul ajar literasi kreatif untuk siswa sekolah dasar setempat",
      "Mendukung identitas visual kegiatan agar terlihat konsisten dan informatif",
    ],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-sudinpora-jakarta-utara",
    title: "Penghargaan Juara 1 Desain Grafis — Kreatifitas Pemuda Jakarta Utara",
    issuer: "Suku Dinas Pemuda dan Olahraga (Sudinpora) Jakarta Utara",
    date: "Juli 2026",
    credentialId: "2446/P0.01.03",
    image: "/projects/uiux.jpg",
    credentialUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    skills: ["Graphic Design", "Editorial Poster", "Adobe Photoshop", "Visual Direction", "Layout & Typography"],
    description:
      "Sertifikat penghargaan resmi Juara 1 tingkat kota administrasi Jakarta Utara dalam ajang kompetisi Kreatifitas Pemuda bidang Desain Grafis, diselenggarakan oleh Pemprov DKI Jakarta melalui Sudinpora.",
    competencies: [
      "Penguasaan komposisi visual tingkat mahir untuk media poster publik",
      "Penerapan hierarki tipografi editorial dan manipulasi foto digital",
      "Kemampuan problem-solving konsep visual dalam batasan waktu kompetisi",
      "Ketepatan teknis separasi warna dan resolusi standar cetak",
    ],
  },
  {
    id: "cert-bnsp-junior-operator-desain-grafis",
    title: "Sertifikasi Kompetensi BNSP: Junior Operator Desain Grafis",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "Mei 2024 — Mei 2027",
    credentialId: "741302166000000222024",
    image: "/projects/branding.jpg",
    credentialUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    skills: ["Standar SKKNI Desain", "Komposisi & Tata Rupa", "Adobe Creative Suite", "Preparasi Output Cetak", "Manajemen Aset Desain"],
    description:
      "Sertifikasi kompetensi kerja nasional Republik Indonesia (SKKNI) bidang desain grafis, menguji penguasaan perangkat lunak desain industri, prinsip dasar tata rupa, manajemen aset, dan etika profesi desain.",
    competencies: [
      "Mengoperasikan perangkat lunak desain grafis berbasis vektor dan bitmap",
      "Menerapkan prinsip dasar desain komunikasi visual secara profesional",
      "Menyusun tata letak (layout) dan manajemen aset visual terstruktur",
      "Mempersiapkan materi final artwork (FA) untuk kebutuhan cetak maupun digital",
    ],
  },
];

export const techStackData: TechItem[] = [
  {
    name: "HTML",
    category: "Frontend",
    level: "Advanced",
    iconType: "html",
    description: "Fondasi semantik web modern dan struktur halaman standar W3C.",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Advanced",
    iconType: "css",
    description: "Styling modern, Flexbox, Grid, animasi CSS3, dan responsive design.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Advanced",
    iconType: "javascript",
    description: "Bahasa pemrograman inti web, manipulasi DOM dinamis, ES6+ features.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced",
    iconType: "tailwind",
    description: "Utility-first CSS framework untuk crafting antarmuka modern yang presisi.",
  },
  {
    name: "ReactJS",
    category: "Frontend",
    level: "Advanced",
    iconType: "react",
    description: "Library utama untuk pembuatan UI berbasis komponen interaktif dan dinamis.",
  },
  {
    name: "Vite",
    category: "Frontend",
    level: "Advanced",
    iconType: "vite",
    description: "Next generation frontend tooling dengan hot module replacement super cepat.",
  },
  {
    name: "Node JS",
    category: "Backend",
    level: "Proficient",
    iconType: "nodejs",
    description: "JavaScript runtime environment untuk backend services dan script automasi.",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    level: "Advanced",
    iconType: "bootstrap",
    description: "CSS framework responsif untuk pembuatan layout grid dan komponen cepat.",
  },
  {
    name: "Firebase",
    category: "Backend",
    level: "Intermediate",
    iconType: "firebase",
    description: "Backend-as-a-Service dari Google untuk auth, realtime DB, dan cloud hosting.",
  },
  {
    name: "Material UI",
    category: "Frontend",
    level: "Proficient",
    iconType: "mui",
    description: "React component library implementasi prinsip Google Material Design.",
  },
  {
    name: "Vercel",
    category: "Tools & Cloud",
    level: "Advanced",
    iconType: "vercel",
    description: "Platform deployment cloud dengan CI/CD otomatis untuk proyek web modern.",
  },
  {
    name: "SweetAlert2",
    category: "Frontend",
    level: "Advanced",
    iconType: "sweetalert",
    description: "Library popup dialog modal dan alert yang responsif, elegan, dan interaktif.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    iconType: "nextjs",
    description: "React framework untuk SSR, SSG, App Router, dan performa tinggi.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Proficient",
    iconType: "typescript",
    description: "Static typing untuk pengembangan kode yang aman, scalable, dan maintainable.",
  },
  {
    name: "Figma",
    category: "Design & UI/UX",
    level: "Advanced",
    iconType: "figma",
    description: "Alat utama untuk wireframing, design system, prototyping, dan handoff dev.",
  },
  {
    name: "Adobe Photoshop",
    category: "Design & UI/UX",
    level: "Advanced",
    iconType: "photoshop",
    description: "Manipulasi foto digital, retouching, poster promosi, dan social media assets.",
  },
  {
    name: "Adobe Illustrator",
    category: "Design & UI/UX",
    level: "Advanced",
    iconType: "illustrator",
    description: "Perancangan logo vektor, ilustrasi teknis, ikonografi, dan identitas visual.",
  },
  {
    name: "PHP & Laravel",
    category: "Backend",
    level: "Proficient",
    iconType: "laravel",
    description: "Backend framework tangguh untuk arsitektur MVC dan RESTful APIs.",
  },
];
