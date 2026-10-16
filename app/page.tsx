"use client";

import { useState } from "react";

type Language = "en" | "id";

const content = {
  en: {
    nav: ["About", "Experience", "Skills", "Education"],
    eyebrow: "WEB DEVELOPER · BANKING APPLICATIONS",
    greeting: "Hello, I’m",
    name: "Mohamad Arif Maulana",
    headline: "Building useful, responsive web experiences.",
    intro:
      "A web developer with experience supporting the development, maintenance, debugging, and feature analysis of BRISPOT banking applications across Consumer, SME, and Commercial products.",
    contact: "Get in touch",
    experienceLabel: "Professional experience",
    years: "5+ years",
    location: "DKI Jakarta, Indonesia",
    aboutTitle: "About me",
    about:
      "I focus on web application development, especially frontend experiences that are responsive and user-friendly. I work with PHP, JavaScript, and frameworks including CodeIgniter, Laravel, and Next.js. I value clear communication, attention to detail, and collaboration within a squad to deliver features.",
    experienceTitle: "Experience",
    jobs: [
      {
        company: "PT Prima Karya Sarana Sejahtera",
        role: "IT Project Officer",
        period: "2026 – Present",
        bullets: [
          "Develop web applications for BRISPOT Commercial products.",
          "Debug and maintain BRISPOT web applications for SME and Commercial products.",
          "Plan and analyze feature development for BRISPOT Commercial.",
          "Coordinate and collaborate with the squad to deliver features.",
          "Explore technologies that support application development."
        ]
      },
      {
        company: "PT Mitra Integrasi Informatika",
        role: "Application Developer",
        period: "2022 – 2025",
        bullets: [
          "Developed and maintained BRISPOT web applications for SME products.",
          "Debugged applications and analyzed feature development needs.",
          "Supported feature piloting with business units.",
          "Collaborated with the squad to deliver features."
        ]
      },
      {
        company: "PT Satkomindo Mediyasa",
        role: "IT Officer",
        period: "2020 – 2022",
        bullets: [
          "Developed and maintained BRISPOT web applications for Consumer products.",
          "Analyzed application feature development needs."
        ]
      }
    ],
    projectsTitle: "Selected domain experience",
    projectsIntro:
      "My work has focused on banking application development. The descriptions below summarize areas of responsibility without disclosing confidential systems, source code, or customer information.",
    projects: [
      {
        title: "BRISPOT · Consumer",
        tag: "Banking application",
        description:
          "Web application development, maintenance, debugging, and feature analysis for Consumer products."
      },
      {
        title: "BRISPOT · SME",
        tag: "Banking application",
        description:
          "Feature development and maintenance, issue debugging, requirements analysis, and support for feature piloting."
      },
      {
        title: "BRISPOT · Commercial",
        tag: "Banking application",
        description:
          "Feature planning and analysis, web application development, maintenance, and squad collaboration."
      }
    ],
    skillsTitle: "Technologies & tools",
    skillsIntro: "Technologies and tools listed in my professional profile.",
    educationTitle: "Education",
    degree: "Bachelor’s Degree in Informatics Engineering",
    school: "Universitas Gunadarma",
    period: "2015 – 2019",
    gpa: "GPA: 3.60 / 4.00",
    organizationTitle: "Organization",
    organization: "Laboratory Assistant · LePKom, Universitas Gunadarma",
    organizationPeriod: "2018 – 2019",
    coursesTitle: "Courses",
    courses: [
      "Fundamental Web Programming",
      "Java for Beginner",
      "Oracle for Intermediate",
      "XML Programming Language"
    ],
    contactTitle: "Let’s connect",
    contactText:
      "Interested in discussing web development, application engineering, or professional opportunities? Feel free to reach out.",
    email: "Email me",
    footer: "Designed as a professional overview. Project details are intentionally kept non-confidential.",
    language: "ID"
  },
  id: {
    nav: ["Tentang", "Pengalaman", "Keahlian", "Pendidikan"],
    eyebrow: "WEB DEVELOPER · APLIKASI PERBANKAN",
    greeting: "Halo, saya",
    name: "Mohamad Arif Maulana",
    headline: "Membangun pengalaman web yang responsif dan bermanfaat.",
    intro:
      "Web developer berpengalaman dalam mendukung pengembangan, pemeliharaan, debugging, dan analisis fitur aplikasi perbankan BRISPOT untuk produk Konsumer, SME, dan Commercial.",
    contact: "Hubungi saya",
    experienceLabel: "Pengalaman profesional",
    years: "5+ tahun",
    location: "DKI Jakarta, Indonesia",
    aboutTitle: "Tentang saya",
    about:
      "Saya berfokus pada pengembangan aplikasi web, terutama antarmuka frontend yang responsif dan mudah digunakan. Saya menggunakan PHP, JavaScript, serta framework seperti CodeIgniter, Laravel, dan Next.js. Saya menghargai komunikasi yang jelas, ketelitian, dan kolaborasi dalam squad untuk menyelesaikan fitur.",
    experienceTitle: "Pengalaman kerja",
    jobs: [
      {
        company: "PT Prima Karya Sarana Sejahtera",
        role: "IT Project Officer",
        period: "2026 – Sekarang",
        bullets: [
          "Mengembangkan aplikasi website BRISPOT produk Commercial.",
          "Melakukan debugging dan maintenance aplikasi BRISPOT produk SME dan Commercial.",
          "Merencanakan dan menganalisis pengembangan fitur BRISPOT Commercial.",
          "Berkoordinasi dan berkolaborasi dengan squad untuk mendeliver fitur.",
          "Mempelajari teknologi yang menunjang pengembangan aplikasi."
        ]
      },
      {
        company: "PT Mitra Integrasi Informatika",
        role: "Application Developer",
        period: "2022 – 2025",
        bullets: [
          "Mengembangkan dan memelihara aplikasi website BRISPOT produk SME.",
          "Melakukan debugging aplikasi dan menganalisis kebutuhan pengembangan fitur.",
          "Mendukung piloting fitur ke unit kerja.",
          "Berkolaborasi dengan squad untuk mendeliver fitur."
        ]
      },
      {
        company: "PT Satkomindo Mediyasa",
        role: "IT Officer",
        period: "2020 – 2022",
        bullets: [
          "Mengembangkan dan memelihara aplikasi website BRISPOT produk Konsumer.",
          "Menganalisis kebutuhan pengembangan fitur aplikasi."
        ]
      }
    ],
    projectsTitle: "Pengalaman domain",
    projectsIntro:
      "Pengalaman saya berfokus pada pengembangan aplikasi perbankan. Ringkasan berikut menjelaskan area tanggung jawab tanpa membagikan sistem internal, source code, atau informasi nasabah yang bersifat rahasia.",
    projects: [
      {
        title: "BRISPOT · Konsumer",
        tag: "Aplikasi perbankan",
        description:
          "Pengembangan aplikasi web, maintenance, debugging, dan analisis fitur untuk produk Konsumer."
      },
      {
        title: "BRISPOT · SME",
        tag: "Aplikasi perbankan",
        description:
          "Pengembangan dan pemeliharaan fitur, debugging masalah, analisis kebutuhan, serta dukungan piloting fitur."
      },
      {
        title: "BRISPOT · Commercial",
        tag: "Aplikasi perbankan",
        description:
          "Perencanaan dan analisis fitur, pengembangan aplikasi web, maintenance, dan kolaborasi squad."
      }
    ],
    skillsTitle: "Teknologi & tools",
    skillsIntro: "Teknologi dan tools yang tercantum dalam profil profesional saya.",
    educationTitle: "Pendidikan",
    degree: "S1 Teknik Informatika",
    school: "Universitas Gunadarma",
    period: "2015 – 2019",
    gpa: "IPK: 3,60 / 4,00",
    organizationTitle: "Organisasi",
    organization: "Asisten Laboratorium · LePKom, Universitas Gunadarma",
    organizationPeriod: "2018 – 2019",
    coursesTitle: "Kursus",
    courses: [
      "Fundamental Web Programming",
      "Java for Beginner",
      "Oracle for Intermediate",
      "XML Programming Language"
    ],
    contactTitle: "Mari terhubung",
    contactText:
      "Ingin berdiskusi tentang web development, pengembangan aplikasi, atau peluang profesional? Silakan hubungi saya.",
    email: "Kirim email",
    footer: "Portofolio profesional. Detail proyek dijaga agar tidak mengungkap informasi rahasia.",
    language: "EN"
  }
};

const skills = [
  "PHP",
  "CodeIgniter",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "MySQL",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Microsoft Office"
];

function ArrowIcon() {
  return <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-1">↗</span>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("id");
  const t = content[language];

  return (
    <main className="min-h-screen bg-paper">
      <header className="sticky top-0 z-20 border-b border-line/90 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-sm font-bold tracking-tight text-ink sm:text-base">
            AM<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={["#about", "#experience", "#skills", "#education"][index]}
                className="text-sm text-muted transition hover:text-accent"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="rounded-full border border-line px-4 py-2 text-xs font-bold tracking-wide text-ink transition hover:border-accent hover:text-accent"
            aria-label="Switch language"
          >
            {t.language}
          </button>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-20 lg:pb-28">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="text-xs font-bold tracking-[0.2em] text-accent">{t.eyebrow}</p>
          </div>
          <p className="mb-2 text-lg text-muted">{t.greeting}</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t.name}
            <span className="text-accent">.</span>
          </h1>
          <h2 className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            {t.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{t.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#193a69]">
              {t.contact}<ArrowIcon />
            </a>
            <a href="#experience" className="inline-flex items-center rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent">
              {t.experienceTitle}
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-line bg-white p-7 shadow-soft sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{t.experienceLabel}</p>
          <p className="mt-3 text-4xl font-bold tracking-tight text-ink">{t.years}</p>
          <div className="my-6 h-px bg-line" />
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-muted">{language === "id" ? "Fokus" : "Focus"}</p>
              <p className="mt-1 font-semibold text-ink">{language === "id" ? "Pengembangan aplikasi web" : "Web application development"}</p>
            </div>
            <div>
              <p className="text-muted">{language === "id" ? "Industri" : "Industry"}</p>
              <p className="mt-1 font-semibold text-ink">{language === "id" ? "Perbankan" : "Banking"}</p>
            </div>
            <div>
              <p className="text-muted">{language === "id" ? "Lokasi" : "Location"}</p>
              <p className="mt-1 font-semibold text-ink">{t.location}</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="about" className="section-anchor border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">01 / {t.nav[0]}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{t.aboutTitle}</h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-muted">{t.about}</p>
        </div>
      </section>

      <section id="experience" className="section-anchor mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">02 / {t.nav[1]}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{t.experienceTitle}</h2>
        </div>
        <div className="space-y-5">
          {t.jobs.map((job, index) => (
            <article key={job.company} className="grid gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{job.period}</p>
                <h3 className="mt-3 text-lg font-bold text-ink">{job.role}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{job.company}</p>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">03 / {language === "id" ? "Domain" : "Domain"}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{t.projectsTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{t.projectsIntro}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {t.projects.map((project, index) => (
              <article key={project.title} className="rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-sm font-bold text-accent">
                  0{index + 1}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{project.tag}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-anchor mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">04 / {t.nav[2]}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{t.skillsTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{t.skillsIntro}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="education" className="section-anchor border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">05 / {t.nav[3]}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{t.educationTitle}</h2>
            <div className="mt-6 border-l-2 border-accent pl-5">
              <h3 className="font-bold text-ink">{t.degree}</h3>
              <p className="mt-1 text-sm text-muted">{t.school}</p>
              <p className="mt-2 text-sm text-muted">{t.period} · {t.gpa}</p>
            </div>
            <h3 className="mt-8 font-bold text-ink">{t.organizationTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{t.organization}</p>
            <p className="mt-1 text-sm text-muted">{t.organizationPeriod}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-ink">{t.coursesTitle}</h2>
            <ul className="mt-5 space-y-3">
              {t.courses.map((course) => (
                <li key={course} className="flex items-center gap-3 text-sm text-muted">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-xs text-accent">✓</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="rounded-2xl bg-ink px-6 py-10 text-white sm:px-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">06 / CONTACT</p>
          <div className="mt-4 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.contactTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{t.contactText}</p>
            </div>
            <a href="mailto:rifmaulana5w@gmail.com" className="inline-flex w-fit items-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-blue-50">
              {t.email}<ArrowIcon />
            </a>
          </div>
          <div className="mt-8 border-t border-white/15 pt-5 text-sm text-slate-300">
            <a className="transition hover:text-white" href="mailto:rifmaulana5w@gmail.com">rifmaulana5w@gmail.com</a>
            <span className="mx-3 text-white/30">/</span>
            <a className="transition hover:text-white" href="tel:+6287875851901">+62 878-7585-1901</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mohamad Arif Maulana</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </main>
  );
}
