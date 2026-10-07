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
  credentialId?: string;
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
    title: "Field Operations & Project Monitoring",
    category: "Web Application",
    role: "Frontend & API Integration",
    clientOrContext: "CV Asa Karya Alam (Contractor)",
    year: "2025",
    timeline: "3 Bulan Pengerjaan",
    description:
      "Portal internal untuk mencatat progres pekerjaan, jadwal inspeksi, dan laporan lapangan CV Asa Karya Alam.",
    longDescription:
      "Portal ini merangkum pembaruan proyek dan laporan tim lapangan dalam satu tempat.",
    problemStatement:
      "Laporan progres dan jadwal inspeksi tersebar di chat dan spreadsheet, sehingga pembaruan proyek sulit dipantau dari satu tempat.",
    solution:
      "Membuat portal responsif dengan ringkasan progres, jadwal inspeksi yang terhubung ke Google Calendar, dan formulir laporan lapangan dengan unggahan foto.",
    image: "/projectserti/cvasa.jpg",
    tags: ["Web Application", "React", "Google Calendar API", "Tailwind CSS", "Field Operations", "REST API"],
    githubUrl: "https://github.com/zedandot",
    liveLabel: "Source Repository",
    deliverables: [
      {
        title: "Ringkasan progres",
        detail: "Melihat status pekerjaan harian dan mingguan.",
      },
      {
        title: "Jadwal inspeksi",
        detail: "Jadwal kunjungan lapangan terhubung ke Google Calendar.",
      },
      {
        title: "Laporan lapangan",
        detail: "Mencatat kendala dan mengunggah foto progres pekerjaan.",
      },
      {
        title: "Tampilan responsif",
        detail: "Portal dapat digunakan melalui ponsel maupun desktop.",
      },
    ],
    highlights: [
      "Ringkasan progres pekerjaan harian dan mingguan",
      "Jadwal inspeksi terhubung ke Google Calendar",
      "Catatan kendala dan foto progres lapangan",
      "Tampilan untuk ponsel dan desktop",
    ],
  },
  {
    id: "153-kreatif-company-profile-cms-finance",
    title: "Company Profile, CMS & Project Finance",
    category: "Fullstack Web Application",
    role: "Fullstack Web Developer",
    clientOrContext: "PT 153 Kreatif (Creative Agency)",
    year: "2025",
    timeline: "2 Bulan Pengerjaan",
    description:
      "Website profil PT 153 Kreatif dengan CMS portofolio dan pencatatan keuangan proyek.",
    longDescription:
      "Satu aplikasi untuk mengelola konten website dan catatan keuangan proyek.",
    problemStatement:
      "Tim membutuhkan website profil untuk calon klien, cara memperbarui konten sendiri, dan pencatatan keuangan proyek yang lebih rapi.",
    solution:
      "Membangun aplikasi Laravel berisi halaman profil publik, panel CMS, dan fitur pencatatan pemasukan serta pengeluaran proyek.",
    image: "/projectserti/153kreatif.jpg",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Custom CMS", "Financial Records", "Multi-Role Auth"],
    githubUrl: "https://github.com/zedandot",
    liveLabel: "Source Repository",
    deliverables: [
      {
        title: "CMS portofolio",
        detail: "Tim dapat mengelola studi kasus, artikel, dan layanan melalui panel admin.",
      },
      {
        title: "Catatan keuangan proyek",
        detail: "Mencatat pemasukan dan pengeluaran setiap proyek.",
      },
      {
        title: "Hak akses pengguna",
        detail: "Akses admin disesuaikan dengan peran pengguna.",
      },
      {
        title: "Website profil agensi",
        detail: "Halaman publik untuk memperkenalkan agensi dan layanannya.",
      },
    ],
    highlights: [
      "Website profil agensi",
      "CMS untuk portofolio, artikel, dan layanan",
      "Pencatatan pemasukan dan pengeluaran proyek",
      "Hak akses admin berdasarkan peran pengguna",
    ],
  },
  {
    id: "sudin-jakarta-utara-design-competition",
    title: "Juara 1 Desain Grafis Jakarta Utara 2026",
    category: "Visual Design & Competition",
    role: "Visual & Graphic Designer",
    clientOrContext: "Sudinpora Jakarta Utara (Pemprov DKI)",
    year: "2026",
    timeline: "Kompetisi Tingkat Kota",
    description:
      "Poster bertema kreativitas pemuda yang meraih Juara 1 di kompetisi Jakarta Utara 2026.",
    longDescription:
      "Poster ini dibuat untuk kompetisi Desain Grafis Kreatifitas Pemuda Jakarta Utara 2026.",
    problemStatement:
      "Poster perlu menyampaikan tema kompetisi dengan jelas dalam satu komposisi visual.",
    solution:
      "Menggabungkan tipografi editorial, olah foto, dan warna kontras menggunakan Adobe Photoshop.",
    image: "/projectserti/Juara 1 Desain Grafis.jpg",
    tags: ["Graphic Design", "Adobe Photoshop", "Typography", "Visual Identity", "Digital Imaging", "Award Winner"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    liveLabel: "Lihat Bukti Prestasi (LinkedIn)",
    deliverables: [
      {
        title: "Juara 1",
        detail: "Pemenang pertama kategori Desain Grafis di tingkat Jakarta Utara.",
      },
      {
        title: "Tipografi",
        detail: "Tipografi editorial sebagai bagian utama komposisi poster.",
      },
      {
        title: "Olah foto",
        detail: "Penggabungan dan penyesuaian foto di Adobe Photoshop.",
      },
      {
        title: "File final",
        detail: "File poster disiapkan untuk kebutuhan kompetisi.",
      },
    ],
    highlights: [
      "Juara 1 Desain Grafis Kreatifitas Pemuda Jakarta Utara 2026",
      "Tipografi editorial dan olah foto",
      "Komposisi poster dengan warna kontras",
      "Dibuat menggunakan Adobe Photoshop",
    ],
  },
  {
    id: "153-creative-design-assets",
    title: "Visual Assets & Marketing Materials",
    category: "Brand & Commercial Design",
    role: "Freelance Graphic Designer",
    clientOrContext: "PT 153 Creative (Remote)",
    year: "2025",
    timeline: "Freelance Contract",
    description:
      "Membuat materi visual untuk media sosial, presentasi, dan kebutuhan promosi klien PT 153 Creative.",
    longDescription:
      "Pekerjaan freelance jarak jauh untuk kebutuhan desain PT 153 Creative.",
    problemStatement:
      "Agensi memerlukan materi promosi dan presentasi yang mengikuti brief serta panduan visualnya.",
    solution:
      "Mengerjakan desain berdasarkan brief dan panduan visual agensi menggunakan Adobe Photoshop dan Canva.",
    image: "/projectserti/153design.jpg",
    tags: ["Brand Assets", "Adobe Photoshop", "Canva", "Social Media Design", "Deck Design", "Typography"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    liveLabel: "Lihat Profil & Portofolio (LinkedIn)",
    deliverables: [
      {
        title: "Materi media sosial",
        detail: "Desain untuk konten, promosi, dan informasi agensi.",
      },
      {
        title: "Materi presentasi",
        detail: "Merapikan tata letak slide pitch deck dan proposal.",
      },
      {
        title: "Aset visual",
        detail: "Menyiapkan elemen desain yang dapat digunakan kembali.",
      },
      {
        title: "Kolaborasi jarak jauh",
        detail: "Mengerjakan revisi berdasarkan brief dan masukan tim.",
      },
    ],
    highlights: [
      "Desain konten dan promosi media sosial",
      "Tata letak pitch deck dan proposal",
      "Aset visual untuk kebutuhan agensi",
      "Kolaborasi dan revisi berdasarkan brief",
    ],
  },
  {
    id: "himavo-micro-it-community-design",
    title: "Multimedia & Event Branding",
    category: "Multimedia & Community Branding",
    role: "Multimedia Designer",
    clientOrContext: "Himavo Micro IT (IPB University)",
    year: "2024 — 2025",
    timeline: "1 Tahun Periode Kepengurusan",
    description:
      "Membuat materi publikasi dan visual acara sebagai anggota Divisi Multimedia Himavo Micro IT.",
    longDescription:
      "Berkontribusi di Divisi Multimedia Himavo Micro IT selama periode 2024/2025.",
    problemStatement:
      "Materi acara, workshop, dan rekrutmen membutuhkan format visual yang konsisten.",
    solution:
      "Mendesain poster, konten media sosial, backdrop, dan materi pendukung bersama tim acara dan humas.",
    image: "/projectserti/himavomicroit.jpg",
    tags: ["Event Branding", "Photoshop", "Canva", "Community", "Infographic Design", "Social Media"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    liveLabel: "Lihat Dokumentasi Kegiatan",
    deliverables: [
      {
        title: "Materi acara",
        detail: "Poster, backdrop, dan sertifikat kegiatan.",
      },
      {
        title: "Konten edukasi",
        detail: "Infografis seputar teknologi informasi dan rekayasa perangkat lunak.",
      },
      {
        title: "Publikasi media sosial",
        detail: "Template dan konten untuk kanal media sosial organisasi.",
      },
      {
        title: "Kolaborasi tim",
        detail: "Koordinasi materi publikasi bersama divisi terkait.",
      },
    ],
    highlights: [
      "Poster, backdrop, dan sertifikat acara",
      "Infografis teknologi informasi",
      "Konten dan template media sosial",
      "Koordinasi dengan tim acara dan humas",
    ],
  },
  {
    id: "suarinara-vol-1-graphic-design",
    title: "SuariNara Vol. 1 Visual Identity & Field Campaign",
    category: "Volunteering & Visual Identity",
    role: "Head of Visual Design",
    clientOrContext: "Ekspedisi Pengabdian Desa Argosari (Lumajang)",
    year: "2026",
    timeline: "7 Hari Program Lapangan",
    description:
      "Menyiapkan materi visual SuariNara Vol. 1 di Desa Argosari, Lumajang, termasuk modul anak dan kebutuhan komunikasi lapangan.",
    longDescription:
      "Bertugas sebagai Head of Visual Design selama program pengabdian masyarakat SuariNara Vol. 1.",
    problemStatement:
      "Program membutuhkan materi edukasi untuk anak dan media informasi yang dapat digunakan selama kegiatan lapangan.",
    solution:
      "Membuat identitas visual, modul literasi bergambar, signage, dan materi publikasi kegiatan.",
    image: "/projectserti/Suarinara Vol. 1 Community.jpg",
    tags: ["Identity System", "Editorial Layout", "Social Impact", "Field Campaign", "Print Media", "Community Service"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    liveLabel: "Lihat Dokumentasi Pengabdian (LinkedIn)",
    deliverables: [
      {
        title: "Identitas visual",
        detail: "Logo, warna, dan tipografi untuk kegiatan SuariNara.",
      },
      {
        title: "Modul anak",
        detail: "Materi literasi bergambar untuk kegiatan belajar di SDN Argosari.",
      },
      {
        title: "Materi lapangan",
        detail: "Spanduk dan penanda lokasi kegiatan.",
      },
      {
        title: "Publikasi kegiatan",
        detail: "Materi visual untuk dokumentasi dan publikasi program.",
      },
    ],
    highlights: [
      "Identitas visual SuariNara Vol. 1",
      "Modul literasi bergambar untuk anak-anak",
      "Spanduk dan penanda kegiatan lapangan",
      "Materi publikasi dan dokumentasi program",
    ],
  },
  {
    id: "cirval-circular-valorization-platform",
    title: "CIRVAL Circular Valorization Platform",
    category: "Competition Prototype",
    role: "Perancangan & Pengembangan",
    clientOrContext: "Proyek Lomba · CIRVAL",
    year: "2026",
    timeline: "Prototipe 2026",
    description:
      "Prototipe untuk lomba yang memetakan opsi pemanfaatan sisa pangan, mencocokkan mitra pengolah, dan menelusuri transaksi. Data dampak pada demo masih simulasi.",
    longDescription:
      "CIRVAL menghubungkan industri pangan dengan mitra pengolah melalui alur profiling residu, rekomendasi jalur, pencocokan, dan pelacakan.",
    problemStatement:
      "Informasi tentang jenis residu, opsi pengolahan, dan calon mitra perlu dilihat bersama sebelum jalur pemanfaatan dipilih.",
    solution:
      "Membuat prototipe yang merangkum profil residu, lima jalur valorisasi, pencocokan mitra, dan jejak transaksi dalam satu platform.",
    image: "/projectserti/cirval.png",
    tags: ["Circular Economy", "Food Residuals", "Decision Engine", "Pathway Matching", "Traceability"],
    liveUrl: "https://cirval-platform.vercel.app/",
    liveLabel: "Lihat Prototipe CIRVAL",
    deliverables: [
      {
        title: "Profil residu",
        detail: "Mencatat karakteristik sisa pangan dalam Resource Passport.",
      },
      {
        title: "Decision Engine",
        detail: "Membandingkan lima jalur pemanfaatan residu.",
      },
      {
        title: "Pencocokan mitra",
        detail: "Menampilkan mitra pengolah sesuai jalur yang dipilih.",
      },
      {
        title: "Jejak transaksi",
        detail: "Mencatat proses pemanfaatan hingga menjadi sumber daya sekunder.",
      },
    ],
    highlights: [
      "Profiling residu dan Resource Passport",
      "Lima jalur rekomendasi pemanfaatan",
      "Pencocokan industri dengan mitra pengolah",
      "Pelacakan transaksi dalam prototipe",
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
    image: "/projectserti/serifikatsudin.jpg",
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
    image: "/projectserti/sertibnsp.jpg",
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
  {
    id: "cert-himavo-micro-it-multimedia",
    title: "Sertifikat Keanggotaan Himavo Micro IT Divisi Multimedia",
    issuer: "Himavo Micro IT · IPB University",
    date: "Periode 2024/2025",
    credentialId: "072/A.1/MICRO/XII/25",
    image: "/projectserti/sertifikatmicroit.jpg",
    skills: ["Multimedia", "Event Branding", "Visual Design", "Community Activities"],
    description:
      "Sertifikat keanggotaan atas dedikasi selama satu tahun sebagai anggota Divisi Multimedia Himavo Micro IT periode 2024/2025.",
    competencies: [
      "Mendukung kebutuhan multimedia dan visual komunitas",
      "Berkontribusi dalam publikasi dan kegiatan Himavo Micro IT",
      "Menjalankan tanggung jawab sebagai anggota Divisi Multimedia",
    ],
  },
  {
    id: "cert-suarinara-vol-1-volunteer",
    title: "Sertifikat Penghargaan Relawan SuariNara Vol. 1",
    issuer: "SuariNara Vol. 1",
    date: "23 Juli 2026",
    credentialId: "01.012/YBEI/SN/VII/2026",
    image: "/projectserti/sertifikatsuarinara.jpg",
    skills: ["Community Service", "Volunteer Work", "Community Empowerment", "Field Campaign"],
    description:
      "Sertifikat penghargaan atas dedikasi dan kontribusi sebagai relawan dalam kegiatan pemberdayaan masyarakat SuariNara Vol. 1 pada 23–29 Juli 2026.",
    competencies: [
      "Berpartisipasi dalam kegiatan pemberdayaan masyarakat",
      "Berkontribusi sebagai relawan selama program lapangan",
      "Mendukung pelaksanaan kegiatan sosial SuariNara Vol. 1",
    ],
  },
  {
    id: "cert-portal-7-digital-poster-semifinalist",
    title: "Semifinalis Digital Poster Portal 7 International Competition",
    issuer: "BEM Sekolah Vokasi IPB University · Portal 7",
    date: "11 Oktober 2025",
    credentialId: "021/A/BEM SV IPB/X/2025",
    image: "/projectserti/sertifikatportal7.jpeg",
    skills: ["Digital Poster", "Graphic Design", "Visual Communication", "Competition"],
    description:
      "Penghargaan sebagai semifinalis kategori Digital Poster di Portal 7 International Competition, diselenggarakan BEM Sekolah Vokasi IPB pada 11 Oktober 2025.",
  },
  {
    id: "cert-praktik-kerja-lapangan-imigrasi",
    title: "Praktik Kerja Lapangan Kantor Imigrasi Jakarta Utara",
    issuer: "Kantor Imigrasi Kelas I TPI Jakarta Utara",
    date: "3 April – 8 Juni 2023",
    image: "/projectserti/sertifikatpkl.jpg",
    skills: ["Praktik Kerja Lapangan", "Administrasi", "Keimigrasian"],
    description:
      "Menyelesaikan praktik kerja lapangan selama dua bulan di Kantor Imigrasi Kelas I TPI Jakarta Utara.",
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
