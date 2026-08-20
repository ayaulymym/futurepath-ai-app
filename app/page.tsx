"use client";

import Link from "next/link";
import { useState } from "react";

type Language = "kz" | "ru" | "en";

const content = {
  kz: {
    navFeatures: "Мүмкіндіктер",
    navHow: "Қалай жұмыс істейді?",
    navAbout: "Біз туралы",
    login: "Кіру",
    register: "Тіркелу",
    badge: "AI-powered education & career platform",
    title1: "Болашағыңды",
    title2: "AI арқылы құр.",
    description:
      "FuturePath AI сенің қызығушылықтарыңды, қабілеттеріңді, оқу үлгеріміңді және мақсаттарыңды талдап, саған жеке білім мен мансап жолын ұсынады.",
    start: "Career Test бастау →",
    learn: "Толығырақ",
    universities: "🎓 Университеттер",
    globalMap: "🌍 Global Map",
    featureLabel: "FUTUREPATH AI",
    featureTitle: "Болашағыңды бір жерде жоспарла",
    featureDescription:
      "Университеттен бастап мансапқа дейінгі барлық маңызды шешімді бір платформада басқар.",
    features: [
      [
        "🎯",
        "Career Test",
        "Қабілеттерің мен қызығушылықтарыңа сәйкес мансап бағыттарын анықта.",
      ],
      [
        "🎓",
        "Университеттер",
        "Әлемдегі университеттерді зерттеп, өзіңе сәйкес оқу орнын тап.",
      ],
      [
        "📚",
        "Мамандықтар",
        "Өзіңе сәйкес мамандықтарды салыстырып, қажетті дағдыларды біл.",
      ],
      [
        "💰",
        "Стипендиялар",
        "Гранттар мен халықаралық стипендияларды зертте.",
      ],
      [
        "🤖",
        "AI Analysis",
        "AI нәтижелеріңді талдап, жеке ұсыныстар береді.",
      ],
      [
        "🗺️",
        "Жеке Roadmap",
        "Мақсатыңа жетуге арналған нақты қадамдар жоспарын құр.",
      ],
    ],
    howLabel: "ҚАЛАЙ ЖҰМЫС ІСТЕЙДІ?",
    howTitle: "Төрт қадам. Бір үлкен мақсат.",
    steps: [
      ["01", "Профиль", "Өзің туралы ақпарат енгіз."],
      ["02", "Career Test", "Қызығушылықтарыңды анықта."],
      ["03", "AI Analysis", "Жеке талдау нәтижесін ал."],
      ["04", "Roadmap", "Болашақ жоспарыңды құр."],
    ],
    ctaTitle: "Болашағыңды бүгіннен баста.",
    ctaDescription:
      "FuturePath AI саған дұрыс бағытты таңдауға және халықаралық мүмкіндіктерге дайындалуға көмектеседі.",
    footer: "© 2026 FuturePath AI",
  },

  ru: {
    navFeatures: "Возможности",
    navHow: "Как это работает?",
    navAbout: "О нас",
    login: "Войти",
    register: "Регистрация",
    badge: "AI-powered education & career platform",
    title1: "Создай своё",
    title2: "будущее с AI.",
    description:
      "FuturePath AI анализирует твои интересы, способности, академический профиль и цели, чтобы создать персональный образовательный и карьерный путь.",
    start: "Начать Career Test →",
    learn: "Подробнее",
    universities: "🎓 Университеты",
    globalMap: "🌍 Global Map",
    featureLabel: "FUTUREPATH AI",
    featureTitle: "Планируй будущее в одном месте",
    featureDescription:
      "От университета до карьеры — управляй всеми важными решениями на одной платформе.",
    features: [
      [
        "🎯",
        "Career Test",
        "Определи карьерные направления на основе своих интересов и способностей.",
      ],
      [
        "🎓",
        "Университеты",
        "Исследуй университеты мира и найди подходящие для себя.",
      ],
      [
        "📚",
        "Специальности",
        "Сравнивай специальности и узнавай необходимые навыки.",
      ],
      [
        "💰",
        "Стипендии",
        "Находи гранты и международные стипендии.",
      ],
      [
        "🤖",
        "AI Analysis",
        "AI анализирует результаты и создаёт персональные рекомендации.",
      ],
      [
        "🗺️",
        "Персональный Roadmap",
        "Получи пошаговый план достижения своих целей.",
      ],
    ],
    howLabel: "КАК ЭТО РАБОТАЕТ?",
    howTitle: "Четыре шага. Одна большая цель.",
    steps: [
      ["01", "Профиль", "Добавь информацию о себе."],
      ["02", "Career Test", "Определи свои интересы и способности."],
      ["03", "AI Analysis", "Получи персональный анализ."],
      ["04", "Roadmap", "Создай план своего будущего."],
    ],
    ctaTitle: "Начни строить будущее сегодня.",
    ctaDescription:
      "FuturePath AI поможет выбрать правильное направление и подготовиться к международным возможностям.",
    footer: "© 2026 FuturePath AI",
  },

  en: {
    navFeatures: "Features",
    navHow: "How it works",
    navAbout: "About",
    login: "Log in",
    register: "Sign up",
    badge: "AI-powered education & career platform",
    title1: "Build your",
    title2: "future with AI.",
    description:
      "FuturePath AI analyzes your interests, strengths, academic profile and goals to create a personalized education and career roadmap.",
    start: "Start Career Test →",
    learn: "Learn more",
    universities: "🎓 Universities",
    globalMap: "🌍 Global Map",
    featureLabel: "FUTUREPATH AI",
    featureTitle: "Plan your future in one place",
    featureDescription:
      "From university to career, manage every important decision on one platform.",
    features: [
      [
        "🎯",
        "Career Test",
        "Discover career paths based on your interests and strengths.",
      ],
      [
        "🎓",
        "Universities",
        "Explore universities around the world and find the right fit.",
      ],
      [
        "📚",
        "Majors",
        "Compare majors and discover the skills you need.",
      ],
      [
        "💰",
        "Scholarships",
        "Explore grants and international scholarship opportunities.",
      ],
      [
        "🤖",
        "AI Analysis",
        "AI analyzes your results and creates personalized recommendations.",
      ],
      [
        "🗺️",
        "Personal Roadmap",
        "Get a step-by-step plan to achieve your goals.",
      ],
    ],
    howLabel: "HOW IT WORKS",
    howTitle: "Four steps. One big goal.",
    steps: [
      ["01", "Profile", "Tell us about yourself."],
      ["02", "Career Test", "Discover your interests and strengths."],
      ["03", "AI Analysis", "Receive your personalized analysis."],
      ["04", "Roadmap", "Build your future plan."],
    ],
    ctaTitle: "Start building your future today.",
    ctaDescription:
      "FuturePath AI helps you choose the right direction and prepare for global opportunities.",
    footer: "© 2026 FuturePath AI",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("kz");

  const t = content[language];

  return (
    <main className="min-h-screen bg-[#090014] text-white">

      {/* NAVBAR */}
      <nav className="border-b border-purple-500/10 bg-[#090014]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">

          <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 font-bold sm:h-10 sm:w-10">
              F
            </div>

            <span className="text-lg font-bold sm:text-xl">
              FuturePath<span className="text-purple-400"> AI</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a
              href="#features"
              className="hover:text-purple-300"
            >
              {t.navFeatures}
            </a>

            <a
              href="#how"
              className="hover:text-purple-300"
            >
              {t.navHow}
            </a>

            <a
              href="#about"
              className="hover:text-purple-300"
            >
              {t.navAbout}
            </a>

            <Link
              href="/universities"
              className="hover:text-purple-300"
            >
              {t.universities}
            </Link>

            <Link
              href="/map"
              className="hover:text-purple-300"
            >
              {t.globalMap}
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">

            {/* LANGUAGE SWITCHER */}
            <div className="flex shrink-0 rounded-xl border border-white/10 bg-white/5 p-1">
              {(["kz", "ru", "en"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`rounded-lg px-2 py-1.5 text-[10px] font-medium transition sm:px-3 sm:text-xs ${
                    language === lang
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {lang === "kz"
                    ? "ҚАЗ"
                    : lang === "ru"
                    ? "РУС"
                    : "ENG"}
                </button>
              ))}
            </div>

            {/* LOGIN */}
            <Link
              href="/auth/login"
              className="hidden rounded-xl px-3 py-2 text-sm text-gray-300 hover:bg-white/5 sm:block sm:px-4"
            >
              {t.login}
            </Link>

            {/* REGISTER */}
            <Link
              href="/auth/register"
              className="hidden rounded-xl bg-purple-600 px-3 py-2 text-xs font-semibold hover:bg-purple-500 sm:block sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {t.register}
            </Link>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:px-6 sm:py-28">

          <div className="mx-auto mb-6 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-300 sm:px-5 sm:text-sm">
            ✨ {t.badge}
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-7xl">
            {t.title1}

            <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            {/* CAREER TEST */}
            <Link
              href="/payment"
              className="rounded-2xl bg-purple-600 px-8 py-4 font-semibold shadow-xl shadow-purple-900/30 hover:bg-purple-500"
            >
              {t.start}
            </Link>

            {/* UNIVERSITIES */}
            <Link
              href="/universities"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-gray-300 hover:bg-white/10"
            >
              {t.universities}
            </Link>

            {/* GLOBAL MAP */}
            <Link
              href="/map"
              className="rounded-2xl border border-purple-500/30 bg-purple-500/10 px-8 py-4 font-semibold text-purple-200 hover:bg-purple-500/20"
            >
              {t.globalMap}
            </Link>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="border-t border-white/5 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-purple-400">
              {t.featureLabel}
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t.featureTitle}
            </h2>

            <p className="mt-4 text-gray-400">
              {t.featureDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {t.features.map(([icon, title, text]) => (
              <Feature
                key={title}
                icon={icon}
                title={title}
                text={text}
              />
            ))}

          </div>
        </div>
      </section>

      {/* UNIVERSITY + GLOBAL MAP */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-2">

          <Link
            href="/universities"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-purple-500/40 hover:bg-purple-500/[0.05] sm:p-8"
          >
            <div className="text-4xl">
              🎓
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              {t.universities}
            </h2>

            <p className="mt-3 leading-7 text-gray-400">
              Қазақстандағы және шетелдегі университеттерді қарап,
              өзіңе сәйкес оқу орындарын зертте.
            </p>

            <div className="mt-6 font-semibold text-purple-400">
              Университеттерді ашу →
            </div>
          </Link>

          <Link
            href="/map"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-purple-500/40 hover:bg-purple-500/[0.05] sm:p-8"
          >
            <div className="text-4xl">
              🌍
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              {t.globalMap}
            </h2>

            <p className="mt-3 leading-7 text-gray-400">
              Әлем университеттерін картадан қарап, елдер мен
              қалалар бойынша оқу орындарын зертте.
            </p>

            <div className="mt-6 font-semibold text-purple-400">
              Global Map ашу →
            </div>
          </Link>

        </div>
      </section>

      {/* HOW */}
      <section
        id="how"
        className="bg-purple-950/20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">

          <p className="text-sm font-semibold text-purple-400">
            {t.howLabel}
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t.howTitle}
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-4">

            {t.steps.map(([number, title, text]) => (
              <Step
                key={number}
                number={number}
                title={title}
                text={text}
              />
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="about"
        className="py-20 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">

          <div className="rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-purple-900/40 to-violet-950/20 p-8 sm:p-12">

            <h2 className="text-3xl font-bold sm:text-4xl">
              {t.ctaTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-400">
              {t.ctaDescription}
            </p>

            <Link
              href="/payment"
              className="mt-8 inline-block rounded-2xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-500"
            >
              {t.start}
            </Link>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-gray-500 sm:flex-row sm:justify-between sm:px-6">

          <span>
            {t.footer}
          </span>

          <div className="flex flex-wrap gap-3">

            <Link
              href="/universities"
              className="hover:text-purple-400"
            >
              {t.universities}
            </Link>

            <span>·</span>

            <Link
              href="/map"
              className="hover:text-purple-400"
            >
              {t.globalMap}
            </Link>

            <span>·</span>

            <Link
              href="/profile"
              className="hover:text-purple-400"
            >
              Profile
            </Link>

            <span>·</span>

            <Link
              href="/admin"
              className="text-purple-400 hover:text-purple-300"
            >
              Admin
            </Link>

            <span>·</span>

            <button onClick={() => setLanguage("kz")}>
              Қазақша
            </button>

            <span>·</span>

            <button onClick={() => setLanguage("ru")}>
              Русский
            </button>

            <span>·</span>

            <button onClick={() => setLanguage("en")}>
              English
            </button>

          </div>
        </div>
      </footer>

    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-purple-500/30 hover:bg-purple-500/[0.05]">

      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {text}
      </p>

    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">

      <div className="text-sm font-bold text-purple-400">
        {number}
      </div>

      <h3 className="mt-4 font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {text}
      </p>

    </div>
  );
}