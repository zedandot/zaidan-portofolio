export interface ProjectDeliverable {
  title: string;
  detail: string;
}

export interface LocalizedProject {
  id: string;
  title: string;
  category: { id: string; en: string };
  role: { id: string; en: string };
  clientOrContext: string;
  year: string;
  timeline: { id: string; en: string };
  description: { id: string; en: string };
  longDescription: { id: string; en: string };
  problemStatement: { id: string; en: string };
  solution: { id: string; en: string };
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  liveLabel?: { id: string; en: string };
  deliverables: {
    id: ProjectDeliverable[];
    en: ProjectDeliverable[];
  };
  highlights: {
    id: string[];
    en: string[];
  };
}

export interface LocalizedCertificate {
  id: string;
  title: { id: string; en: string };
  issuer: string;
  date: { id: string; en: string };
  credentialId?: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
  description: { id: string; en: string };
  competencies?: {
    id: string[];
    en: string[];
  };
}

export interface LocalizedExperienceItem {
  id: string;
  date: { id: string; en: string };
  title: { id: string; en: string };
  description: { id: string; en: string };
}

export const translations = {
  id: {
    // Navbar
    nav: {
      work: "KARYA",
      about: "TENTANG",
      experience: "PENGALAMAN",
      gallery: "GALERI",
      contact: "KONTAK",
      letsTalk: "Hubungi Saya",
      langSwitchLabel: "Pilih Bahasa",
      navigation: "Navigasi",
      mainLabel: "Navigasi Utama",
    },
    // Hero
    hero: {
      status: "Terbuka untuk pekerjaan freelance & rekayasa fokus",
      location: "Berbasis di Bogor, ID (GMT+7)",
      discipline: "Rekayasa Antarmuka × Desain Visual",
      greeting: "Halo, saya",
      directionKicker: "Direksi",
      directionTitle: "Visual Designer",
      directionDesc: "Branding & Sistem UI/UX",
      engineeringKicker: "Rekayasa",
      engineeringTitle: "Creative Developer",
      engineeringDesc: "Frontend & Aplikasi Web",
      exploreBtn: "Jelajahi Karya ↓",
      contactBtn: "Hubungi Saya",
      availableTag: "Tersedia untuk proyek pilihan",
      capabilities: "UI/UX · Identitas Visual · Pengembangan Web & Aplikasi",
      scrollPrompt: "Scroll untuk eksplorasi",
    },
    // About
    about: {
      kicker: "Latar Belakang & Filosofi",
      title: "TENTANG",
      bioHighlight: "Saya Muhamad Zaidan, seorang interface engineer dan visual designer yang membangun produk digital yang terasa membumi, taktil, dan berkinerja tinggi.",
      bioP1: "Praktik saya berada di titik temu antara desain grafis, perancangan pengalaman pengguna (UX), dan rekayasa perangkat lunak. Perpaduan ini memungkinkan saya membawa visi estetika dari kanvas Figma langsung ke dalam kode produksi yang tangguh tanpa kehilangan nuansa tipografi maupun ritme interaksi.",
      bioP2: "Saya mengutamakan aksesibilitas, ruang putih yang terarah, keluwesan responsif, dan arsitektur komponen yang bersih di atas tren sekilas atau template instan AI.",
      highlights: [
        { kicker: "Pendidikan", title: "Rekayasa Perangkat Lunak", desc: "Mahasiswa IPB University" },
        { kicker: "Penghargaan", title: "Juara 1 Desain Grafis", desc: "Sudinpora Jakarta Utara 2026" },
        { kicker: "Fokus Utama", title: "Desain × Rekayasa", desc: "Produk & antarmuka digital bespoke" },
      ],
      skillsVisualTitle: "Visual & UI/UX",
      skillsEngineeringTitle: "Rekayasa & Stack",
    },
    // Project Showcase
    showcase: {
      kicker: "Spesimen Portofolio",
      titleLine1: "KARYA",
      titleLine2: "TERPILIH",
      subtitle: "Kompilasi proyek terkurasi, sertifikasi kompetensi teruji, dan ekosistem teknologi yang digunakan dalam perancangan antarmuka & rekayasa perangkat lunak.",
      tabs: {
        projects: "Proyek",
        certificates: "Sertifikat",
        tech: "Teknologi",
      },
      carouselLabelProjects: "Karusel proyek portofolio",
      carouselLabelCerts: "Karusel sertifikat",
      viewDetails: "Lihat detail project",
      viewCertDetails: "Lihat detail sertifikat",
      viewLiveDefault: "Lihat Project",
      viewCredential: "Lihat Kredensial",
      swipeHint: "Geser atau seret untuk menjelajahi",
    },
    // Project Modal
    modal: {
      close: "Tutup",
      pressEsc: "ESC",
      overview: "Ikhtisar",
      challengeSolution: "Tantangan & Solusi",
      challenge: "Tantangan",
      solution: "Solusi",
      featuresDeliverables: "Fitur Utama & Deliverables",
      competenciesTitle: "Kompetensi yang Teruji",
      techUsed: "Teknologi & Alat yang Digunakan",
      openLive: "Buka Tautan Langsung",
      viewCode: "Lihat Source Code",
      done: "Selesai Melihat",
      copyId: "Salin ID",
      copied: "Tersalin!",
    },
    // Experience
    experience: {
      kicker: "Karier & Milestones",
      title: "PENGALAMAN",
      subtitle: "Rekam jejak profesional, kompetisi desain, dan pengalaman pengembangan teknologi antarmuka.",
      ariaLabel: "Garis waktu pengalaman kerja dan organisasi",
    },
    // Gallery
    gallery: {
      kicker: "Momen & Eksplorasi Visual",
      title: "CERITA DALAM LENSA",
    },
    // Contact
    contact: {
      kicker: "Mulai Kolaborasi",
      headlineLine1: "MARI KITA",
      headlineLine2: "BUAT SESUATU YANG",
      headlineAccent: "BERDAMPAK.",
      subtitle: "Tersedia untuk proyek freelance, perancangan antarmuka & design system, serta rekayasa frontend di mana desain dan kode perlu dieksekusi dengan standar tinggi.",
      copyEmail: "Salin",
      copiedEmail: "Tersalin!",
      emailDesc: "Komunikasi langsung & pertanyaan proyek",
      igDesc: "Visual diary, eksperimen kreatif & kehidupan",
      linkedinDesc: "Latar belakang profesional & rekam jejak",
      githubDesc: "Kode sumber terbuka, repositori & kreasi",
    },
    // Footer
    footer: {
      copyright: "Muhamad Zaidan. Seluruh hak cipta dilindungi.",
      location: "Bogor, ID (GMT+7)",
      craftedWith: "Dibuat dengan Next.js & Tailwind CSS",
      backToTop: "Kembali ke Atas ↑",
    },
    // Welcome Intro
    welcome: {
      skip: "Lewati Intro ✕",
      line1: "Selamat Datang di",
      line2: "Website Portofolio",
      hint: "Tekan ESC atau klik di mana saja untuk masuk",
    },
  },
  en: {
    // Navbar
    nav: {
      work: "WORK",
      about: "ABOUT",
      experience: "EXPERIENCE",
      gallery: "GALLERY",
      contact: "CONTACT",
      letsTalk: "Let's Talk",
      langSwitchLabel: "Select Language",
      navigation: "Navigation",
      mainLabel: "Main Navigation",
    },
    // Hero
    hero: {
      status: "Open for focused freelance & engineering work",
      location: "Based in Bogor, ID (GMT+7)",
      discipline: "Interface Engineering × Visual Systems",
      greeting: "Hello, I'm",
      directionKicker: "Direction",
      directionTitle: "Visual Designer",
      directionDesc: "Branding & UI/UX Systems",
      engineeringKicker: "Engineering",
      engineeringTitle: "Creative Developer",
      engineeringDesc: "Frontend & Web Applications",
      exploreBtn: "Explore Work ↓",
      contactBtn: "Contact Me",
      availableTag: "Available for select projects",
      capabilities: "UI/UX · Visual Identity · Web & App Development",
      scrollPrompt: "Scroll to explore",
    },
    // About
    about: {
      kicker: "Background & Philosophy",
      title: "ABOUT",
      bioHighlight: "I'm Muhamad Zaidan, an interface engineer and visual designer building digital products that feel grounded, tactile, and performant.",
      bioP1: "My practice sits at the convergence of graphic design, user experience design, and software engineering. That blend enables me to carry an aesthetic vision from initial Figma artboards straight into robust, production-ready code without losing typographic subtlety or interaction rhythm.",
      bioP2: "I prioritize accessibility, intentional white space, responsive fluidity, and clean component architecture over ephemeral trends or generic AI templates.",
      highlights: [
        { kicker: "Education", title: "Software Engineering", desc: "IPB University Student" },
        { kicker: "Recognition", title: "1st Place Graphic Design", desc: "Sudinpora Jakarta Utara 2026" },
        { kicker: "Core Focus", title: "Design × Engineering", desc: "Bespoke digital products & interfaces" },
      ],
      skillsVisualTitle: "Visual & UI/UX",
      skillsEngineeringTitle: "Engineering & Stack",
    },
    // Project Showcase
    showcase: {
      kicker: "Portfolio Specimen",
      titleLine1: "SELECTED",
      titleLine2: "WORK",
      subtitle: "A curated compilation of projects, verified competency certifications, and the modern technology ecosystem used in interface design & software engineering.",
      tabs: {
        projects: "Projects",
        certificates: "Certificates",
        tech: "Tech",
      },
      carouselLabelProjects: "Portfolio project carousel",
      carouselLabelCerts: "Certificates carousel",
      viewDetails: "View project details",
      viewCertDetails: "View certificate details",
      viewLiveDefault: "View Project",
      viewCredential: "View Credential",
      swipeHint: "Drag or swipe to explore",
    },
    // Project Modal
    modal: {
      close: "Close",
      pressEsc: "ESC",
      overview: "Overview",
      challengeSolution: "Challenge & Solution",
      challenge: "Challenge",
      solution: "Solution",
      featuresDeliverables: "Key Features & Deliverables",
      competenciesTitle: "Verified Competencies",
      techUsed: "Technologies & Tools Used",
      openLive: "Open Live Demo",
      viewCode: "View Source Code",
      done: "Done Viewing",
      copyId: "Copy ID",
      copied: "Copied!",
    },
    // Experience
    experience: {
      kicker: "Career & Milestones",
      title: "EXPERIENCE",
      subtitle: "Professional trajectory, design competitions, and modern interface development experiences.",
      ariaLabel: "Career and organization timeline",
    },
    // Gallery
    gallery: {
      kicker: "Moments & Visual Exploration",
      title: "LIFE IN FRAMES",
    },
    // Contact
    contact: {
      kicker: "Initiate Collaboration",
      headlineLine1: "LET'S MAKE",
      headlineLine2: "SOMETHING",
      headlineAccent: "IMPACTFUL.",
      subtitle: "Available for freelance projects, interface design & design systems, and frontend engineering where design and code must be executed to high standards.",
      copyEmail: "Copy",
      copiedEmail: "Copied!",
      emailDesc: "Direct communication & project inquiries",
      igDesc: "Visual diary, creative experiments & life",
      linkedinDesc: "Professional background & career history",
      githubDesc: "Open source code, repositories & builds",
    },
    // Footer
    footer: {
      copyright: "Muhamad Zaidan. All rights reserved.",
      location: "Bogor, ID (GMT+7)",
      craftedWith: "Crafted with Next.js & Tailwind CSS",
      backToTop: "Back to Top ↑",
    },
    // Welcome Intro
    welcome: {
      skip: "Skip Intro ✕",
      line1: "Welcome To My",
      line2: "Portfolio Website",
      hint: "Press ESC or click anywhere to enter",
    },
  },
};

export const localizedExperienceData: LocalizedExperienceItem[] = [
  {
    id: "ipb-student",
    date: { id: "2024 — Sekarang", en: "2024 — Present" },
    title: { id: "Mahasiswa Rekayasa Perangkat Lunak", en: "Software Engineering Student" },
    description: {
      id: "IPB University · Menempuh studi rekayasa perangkat lunak dengan fokus aktif pada pengembangan web, rekayasa antarmuka modern, dan implementasi produk digital yang tangguh.",
      en: "IPB University · Studying software engineering with an active focus on web development, modern interface engineering, and robust digital product implementation.",
    },
  },
  {
    id: "sudinpora-designer",
    date: { id: "Jul 2026 · 1 bln", en: "Jul 2026 · 1 mo" },
    title: { id: "Desainer Grafis (Juara 1 Kompetisi)", en: "Graphic Designer (1st Place Winner)" },
    description: {
      id: "Sudinpora Jakarta Utara · Peraih Juara 1 dalam ajang kompetisi Kreatifitas Pemuda Jakarta Utara 2026 bidang Desain Grafis tingkat kota.",
      en: "Sudinpora Jakarta Utara · 1st Place Winner in the 2026 North Jakarta youth creativity competition in the Graphic Design category.",
    },
  },
  {
    id: "153-creative-designer",
    date: { id: "Jun 2026 · 1 bln", en: "Jun 2026 · 1 mo" },
    title: { id: "Desainer Grafis Lepas", en: "Freelance Graphic Designer" },
    description: {
      id: "PT 153 Creative · Pekerjaan freelance jarak jauh mengembangkan aset visual digital dan sistem identitas kreatif menggunakan Adobe Photoshop & Figma.",
      en: "PT 153 Creative · Remote freelance design work developing digital visual assets and creative identity systems using Adobe Photoshop & Figma.",
    },
  },
  {
    id: "himavo-multimedia",
    date: { id: "Des 2024 — Des 2025 · 1 thn 1 bln", en: "Dec 2024 — Dec 2025 · 1 yr 1 mo" },
    title: { id: "Desainer Multimedia", en: "Multimedia Designer" },
    description: {
      id: "Himavo Micro IT Community · Merancang sistem visual dan multimedia untuk kegiatan komunitas tingkat kampus, publikasi teknis, dan kampanye acara.",
      en: "Himavo Micro IT Community · Designed multimedia and visual systems for campus-wide community activities, technical publications, and event campaigns.",
    },
  },
  {
    id: "immigration-junior-designer",
    date: { id: "Apr 2023 — Jun 2023 · 3 bln", en: "Apr 2023 — Jun 2023 · 3 mos" },
    title: { id: "Junior Graphic Designer (PKL)", en: "Junior Graphic Designer (Intern)" },
    description: {
      id: "Kantor Imigrasi Kelas I TPI Tanjung Priok · Menyelesaikan praktik kerja lapangan di bagian multimedia memproduksi media pelayanan publik resmi.",
      en: "Kantor Imigrasi Kelas I TPI Tanjung Priok · Completed practical internship in the multimedia department producing official public service media.",
    },
  },
];

