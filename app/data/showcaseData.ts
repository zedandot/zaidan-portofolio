export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
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
    category: "Web Development",
    description:
      "Aplikasi web untuk manajemen operasional lapangan dan pemantauan proyek secara real-time untuk kebutuhan kontraktor.",
    longDescription:
      "Mengembangkan aplikasi web sistem manajemen operasional dan pemantauan proyek lapangan untuk CV Asa Karya Alam. Sistem ini dirancang agar proses koordinasi pekerjaan, pencatatan progres, dan monitoring proyek dapat berjalan lebih rapi, transparan, dan mudah dipantau oleh tim.",
    image: "/projects/webgis.jpg",
    tags: ["Web Development", "Google Calendar API", "Project Monitoring", "Operational System"],
    liveUrl: "https://github.com/zedandot",
    githubUrl: "https://github.com/zedandot",
    highlights: [
      "Membangun portal monitoring proyek lapangan berbasis web",
      "Membantu pencatatan progres dan koordinasi pekerjaan secara lebih terstruktur",
      "Integrasi kebutuhan penjadwalan menggunakan Google Calendar API",
      "Menyusun alur sistem untuk operasional kontraktor dan tim lapangan",
    ],
  },
  {
    id: "153-kreatif-company-profile-cms-finance",
    title: "153 Kreatif — Company Profile, Custom CMS & Financial Management System",
    category: "Web Development",
    description:
      "Platform web komprehensif untuk PT 153 Kreatif yang mengintegrasikan website profil perusahaan dengan sistem CMS dan manajemen finansial.",
    longDescription:
      "Mengembangkan platform web untuk PT 153 Kreatif yang mencakup company profile, custom content management system, dan sistem financial management. Proyek ini dibuat untuk membantu perusahaan mengelola konten website serta kebutuhan operasional finansial dalam satu sistem yang lebih terpusat.",
    image: "/projects/uiux.jpg",
    tags: ["Web Development", "Laravel", "Custom CMS", "Financial Management", "Company Profile"],
    liveUrl: "https://github.com/zedandot",
    githubUrl: "https://github.com/zedandot",
    highlights: [
      "Membangun company profile untuk kebutuhan digital presence perusahaan",
      "Mengembangkan custom CMS agar konten dapat dikelola mandiri",
      "Membuat sistem manajemen finansial internal",
      "Mengintegrasikan kebutuhan publikasi konten dan operasional dalam satu platform",
    ],
  },
  {
    id: "sudin-jakarta-utara-design-competition",
    title: "Sudinpora Jakarta Utara — Graphic Design Competition Winner",
    category: "Graphic Design",
    description:
      "Karya desain grafis yang berhasil menjadi juara 1 pada ajang Kreatifitas Pemuda Jakarta Utara 2026.",
    longDescription:
      "Berpartisipasi dalam ajang Kreatifitas Pemuda Jakarta Utara 2026 pada bidang desain grafis dan berhasil meraih juara 1. Karya ini berfokus pada penyampaian pesan visual yang kuat, komposisi layout yang rapi, dan eksekusi desain yang sesuai dengan konteks kompetisi.",
    image: "/projects/branding.jpg",
    tags: ["Graphic Design", "Canva", "Adobe Photoshop", "Visual Communication"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    githubUrl: "https://github.com/zedandot",
    highlights: [
      "Juara 1 bidang desain grafis pada Kreatifitas Pemuda Jakarta Utara 2026",
      "Mengolah konsep visual menjadi desain kompetisi yang komunikatif",
      "Menggunakan pendekatan layout, warna, dan tipografi yang terarah",
      "Mewakili kemampuan desain grafis dalam konteks kompetisi publik",
    ],
  },
  {
    id: "153-creative-design-assets",
    title: "PT 153 Creative — Graphic Design Works",
    category: "Graphic Design",
    description:
      "Pekerjaan desain grafis freelance untuk kebutuhan visual PT 153 Creative secara remote.",
    longDescription:
      "Mengerjakan kebutuhan desain grafis untuk PT 153 Creative sebagai freelance designer. Pekerjaan mencakup pembuatan aset visual, pengolahan materi desain, dan penyesuaian kebutuhan kreatif perusahaan dengan tools seperti Canva dan Adobe Photoshop.",
    image: "/projects/socialmedia.jpg",
    tags: ["Canva", "Adobe Photoshop", "Graphic Design", "Remote Work"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    githubUrl: "https://github.com/zedandot",
    highlights: [
      "Mengerjakan kebutuhan visual untuk PT 153 Creative secara freelance",
      "Menggunakan Canva dan Adobe Photoshop untuk produksi aset desain",
      "Menyesuaikan desain dengan arahan visual dan kebutuhan brand",
      "Berpengalaman bekerja remote untuk kebutuhan desain perusahaan",
    ],
  },
  {
    id: "himavo-micro-it-community-design",
    title: "Himavo Micro IT Community — Multimedia Design",
    category: "Multimedia Design",
    description:
      "Kontribusi desain multimedia untuk kebutuhan komunitas, publikasi, dan visual kegiatan Himavo Micro IT Community.",
    longDescription:
      "Berperan sebagai Multimedia Designer di Himavo Micro IT Community. Pekerjaan meliputi pembuatan aset visual, materi publikasi, dan kebutuhan desain untuk kegiatan komunitas dengan pendekatan yang rapi dan konsisten.",
    image: "/projects/branding.jpg",
    tags: ["Canva", "Adobe Photoshop", "Multimedia Design", "Community Branding"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    githubUrl: "https://github.com/zedandot",
    highlights: [
      "Membuat visual publikasi untuk kebutuhan komunitas",
      "Mendukung kegiatan komunitas melalui materi desain multimedia",
      "Menggunakan Canva dan Adobe Photoshop dalam proses produksi desain",
      "Menjaga konsistensi visual pada output desain kegiatan",
    ],
  },
  {
    id: "suarinara-vol-1-graphic-design",
    title: "Suarinara Vol 1 — Community Service Visual System",
    category: "Volunteering / Graphic Design",
    description:
      "Desain visual untuk program pengabdian masyarakat di Desa Argosari, Kecamatan Senduro, Kabupaten Lumajang.",
    longDescription:
      "Selama 7 hari program pengabdian masyarakat Suarinara Vol 1, bertanggung jawab sebagai Graphic Designer dalam merancang konsep visual dan sistem desain untuk kebutuhan kegiatan di Desa Argosari, Kecamatan Senduro, Kabupaten Lumajang.",
    image: "/projects/socialmedia.jpg",
    tags: ["Graphic Design", "Visual System", "Community Service", "Campaign Assets"],
    liveUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    githubUrl: "https://github.com/zedandot",
    highlights: [
      "Bertanggung jawab atas konsep visual program pengabdian masyarakat",
      "Membuat sistem visual untuk kebutuhan publikasi dan dokumentasi kegiatan",
      "Beradaptasi dengan kebutuhan desain lapangan selama program berlangsung",
      "Mendukung identitas visual kegiatan agar terlihat konsisten dan informatif",
    ],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-sudinpora-jakarta-utara",
    title: "Certificate",
    issuer: "Sudinpora Jakarta Utara",
    date: "Jul 2026",
    credentialId: "ID 2446/P0.01.03",
    image: "/projects/uiux.jpg",
    credentialUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    skills: ["Graphic Design"],
    description:
      "Certificate dari Sudinpora Jakarta Utara dengan credential ID 2446/P0.01.03. Sertifikat ini berkaitan dengan bidang Graphic Design dan diterbitkan pada Juli 2026.",
  },
  {
    id: "cert-bnsp-junior-operator-desain-grafis",
    title: "Junior Operator Desain Grafis",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "May 2024",
    credentialId: "ID 741302166000000222024",
    image: "/projects/branding.jpg",
    credentialUrl: "https://www.linkedin.com/in/muhamad-zaidan30/",
    skills: ["Graphic Design"],
    description:
      "Sertifikasi BNSP untuk kompetensi Junior Operator Desain Grafis. Diterbitkan pada Mei 2024 dan berlaku sampai Mei 2027 dengan credential ID 741302166000000222024.",
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
