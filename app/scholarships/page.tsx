"use client";

import { useMemo, useState } from "react";

type Scholarship = {
  id: number;
  name: string;
  university: string;
  country: string;
  degree: string;
  field: string;
  amount: string;
  deadline: string;
  description: string;
  requirements: string[];
  applyUrl: string;
};

const scholarships: Scholarship[] = [
  {
    id: 1,
    name: "Türkiye Scholarships",
    university: "Turkish Government",
    country: "Turkey",
    degree: "Bachelor / Master / PhD",
    field: "All fields",
    amount: "Full funding",
    deadline: "2027-02-20",
    description:
      "Түркиядағы университеттерде оқуға арналған мемлекеттік толық стипендиялық бағдарлама.",
    requirements: [
      "Жақсы академиялық үлгерім",
      "Тиісті білім деңгейі",
      "Бағдарлама талаптарына сәйкестік",
    ],
    applyUrl: "https://www.turkiyeburslari.gov.tr/",
  },
  {
    id: 2,
    name: "Stipendium Hungaricum",
    university: "Government of Hungary",
    country: "Hungary",
    degree: "Bachelor / Master / PhD",
    field: "All fields",
    amount: "Full / Partial funding",
    deadline: "2027-01-15",
    description:
      "Венгрияда халықаралық студенттерге арналған танымал мемлекеттік scholarship.",
    requirements: [
      "Академиялық құжаттар",
      "Тіл талаптарын орындау",
      "Бағдарлама талаптарына сәйкестік",
    ],
    applyUrl: "https://stipendiumhungaricum.hu/",
  },
  {
    id: 3,
    name: "Chevening Scholarship",
    university: "UK Universities",
    country: "United Kingdom",
    degree: "Master",
    field: "All fields",
    amount: "Fully funded",
    deadline: "2026-11-04",
    description:
      "Ұлыбританияда магистратура оқуға арналған халықаралық scholarship бағдарламасы.",
    requirements: [
      "Бакалавр дәрежесі",
      "Жұмыс тәжірибесі талаптары",
      "Көшбасшылық қабілет",
    ],
    applyUrl: "https://www.chevening.org/",
  },
  {
    id: 4,
    name: "Erasmus Mundus Joint Masters",
    university: "European Universities",
    country: "European Union",
    degree: "Master",
    field: "Various",
    amount: "Fully funded",
    deadline: "2027-01-10",
    description:
      "Бірнеше Еуропа университетінде оқуға мүмкіндік беретін халықаралық магистрлік бағдарлама.",
    requirements: [
      "Бакалавр дипломы",
      "Академиялық үлгерім",
      "Бағдарламаға сәйкес құжаттар",
    ],
    applyUrl: "https://erasmus-plus.ec.europa.eu/",
  },
  {
    id: 5,
    name: "DAAD Scholarships",
    university: "German Universities",
    country: "Germany",
    degree: "Master / PhD",
    field: "Various",
    amount: "Funding available",
    deadline: "Varies",
    description:
      "Германияда оқу мен зерттеуге арналған көптеген scholarship бағдарламалары.",
    requirements: [
      "Академиялық дайындық",
      "Бағдарлама талаптары",
      "Тіл талаптары",
    ],
    applyUrl: "https://www.daad.de/en/",
  },
  {
    id: 6,
    name: "MEXT Scholarship",
    university: "Japanese Universities",
    country: "Japan",
    degree: "Bachelor / Master / PhD",
    field: "Various",
    amount: "Fully funded",
    deadline: "Varies",
    description:
      "Жапония үкіметінің халықаралық студенттерге арналған scholarship бағдарламасы.",
    requirements: [
      "Академиялық талаптар",
      "Жас және білім талаптары",
      "Қажетті құжаттар",
    ],
    applyUrl: "https://www.studyinjapan.go.jp/en/",
  },
  {
    id: 7,
    name: "Global Korea Scholarship",
    university: "Korean Universities",
    country: "South Korea",
    degree: "Bachelor / Master / PhD",
    field: "Various",
    amount: "Fully funded",
    deadline: "Varies",
    description:
      "Оңтүстік Кореяда оқуға арналған мемлекеттік scholarship.",
    requirements: [
      "Академиялық үлгерім",
      "Білім деңгейіне сәйкестік",
      "Қажетті құжаттар",
    ],
    applyUrl: "https://www.studyinkorea.go.kr/",
  },
  {
    id: 8,
    name: "Fulbright Foreign Student Program",
    university: "US Universities",
    country: "United States",
    degree: "Master / PhD",
    field: "Various",
    amount: "Funding available",
    deadline: "Varies",
    description:
      "АҚШ-та халықаралық студенттерге арналған беделді scholarship бағдарламасы.",
    requirements: [
      "Бакалавр дәрежесі",
      "Академиялық дайындық",
      "Бағдарлама талаптары",
    ],
    applyUrl: "https://foreign.fulbrightonline.org/",
  },
  {
    id: 9,
    name: "Australia Awards",
    university: "Australian Universities",
    country: "Australia",
    degree: "Master",
    field: "Development fields",
    amount: "Fully funded",
    deadline: "Varies",
    description:
      "Австралия үкіметінің халықаралық студенттерге арналған scholarship бағдарламасы.",
    requirements: [
      "Академиялық талаптар",
      "Ел талаптарына сәйкестік",
      "Бағдарлама талаптары",
    ],
    applyUrl: "https://www.australiaawards.gov.au/",
  },
  {
    id: 10,
    name: "Gates Cambridge Scholarship",
    university: "University of Cambridge",
    country: "United Kingdom",
    degree: "Master / PhD",
    field: "Various",
    amount: "Fully funded",
    deadline: "Varies",
    description:
      "Cambridge университетіндегі postgraduate бағдарламаларына арналған толық scholarship.",
    requirements: [
      "Жоғары академиялық деңгей",
      "Бағдарлама талаптарына сәйкестік",
      "Қосымша құжаттар",
    ],
    applyUrl: "https://www.gatescambridge.org/",
  },
  {
    id: 11,
    name: "Clarendon Scholarship",
    university: "University of Oxford",
    country: "United Kingdom",
    degree: "Master / PhD",
    field: "Various",
    amount: "Fully funded",
    deadline: "Varies",
    description:
      "Oxford университетіндегі graduate студенттерге арналған scholarship.",
    requirements: [
      "Жоғары академиялық көрсеткіш",
      "Oxford бағдарламасына өтініш",
      "Қажетті құжаттар",
    ],
    applyUrl: "https://www.ox.ac.uk/clarendon",
  },
  {
    id: 12,
    name: "Swiss Government Excellence Scholarships",
    university: "Swiss Universities",
    country: "Switzerland",
    degree: "Master / PhD",
    field: "Research / Various",
    amount: "Funding available",
    deadline: "Varies",
    description:
      "Швейцария университеттері мен зерттеу институттарына арналған мемлекеттік scholarship.",
    requirements: [
      "Академиялық талаптар",
      "Зерттеу жоспары",
      "Бағдарлама талаптары",
    ],
    applyUrl: "https://www.sbfi.admin.ch/",
  },
];

const countries = [
  "All",
  ...Array.from(new Set(scholarships.map((item) => item.country))),
];

const degrees = [
  "All",
  ...Array.from(new Set(scholarships.map((item) => item.degree))),
];

const fields = [
  "All",
  ...Array.from(new Set(scholarships.map((item) => item.field))),
];

export default function ScholarshipsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");
  const [degree, setDegree] = useState("All");
  const [field, setField] = useState("All");
  const [selected, setSelected] = useState<Scholarship | null>(null);

  const filteredScholarships = useMemo(() => {
    const query = search.toLowerCase().trim();

    return scholarships.filter((item) => {
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.university.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query) ||
        item.field.toLowerCase().includes(query);

      const matchesCountry =
        country === "All" || item.country === country;

      const matchesDegree =
        degree === "All" || item.degree === degree;

      const matchesField =
        field === "All" || item.field === field;

      return (
        matchesSearch &&
        matchesCountry &&
        matchesDegree &&
        matchesField
      );
    });
  }, [search, country, degree, field]);

  return (
    <main className="min-h-screen bg-[#090014] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* HEADER */}
        <div className="mb-10">
          <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            💰 FuturePath AI
          </div>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Scholarships
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Әлемдегі университеттер мен халықаралық бағдарламалардан
            стипендияларды ізде және өзіңе сәйкес мүмкіндікті тап.
          </p>
        </div>

        {/* SEARCH */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Университет, ел, scholarship немесе мамандық іздеу..."
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-purple-500"
          />

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="rounded-2xl border border-white/10 bg-[#160b25] px-4 py-3 text-white outline-none"
            >
              {countries.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "Барлық елдер" : item}
                </option>
              ))}
            </select>

            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="rounded-2xl border border-white/10 bg-[#160b25] px-4 py-3 text-white outline-none"
            >
              {degrees.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "Барлық деңгей" : item}
                </option>
              ))}
            </select>

            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="rounded-2xl border border-white/10 bg-[#160b25] px-4 py-3 text-white outline-none"
            >
              {fields.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "Барлық бағыт" : item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* RESULT COUNT */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            Стипендиялар
          </h2>

          <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            {filteredScholarships.length} нәтиже
          </span>
        </div>

        {/* CARDS */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredScholarships.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600/20 text-2xl">
                  🎓
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  {item.amount}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-purple-300">
                {item.university}
              </p>

              <div className="mt-5 space-y-2 text-sm text-gray-400">
                <p>🌍 {item.country}</p>
                <p>📚 {item.degree}</p>
                <p>🗓️ Deadline: {item.deadline}</p>
              </div>

              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                {item.description}
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10"
                >
                  Толығырақ
                </button>

                <a
                  href={item.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-purple-600 px-4 py-3 text-center text-sm font-semibold hover:bg-purple-500"
                >
                  Apply →
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredScholarships.length === 0 && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-12 text-center">
            <div className="text-5xl">🔎</div>
            <h3 className="mt-5 text-xl font-bold">
              Стипендия табылмады
            </h3>
            <p className="mt-2 text-gray-400">
              Іздеу немесе фильтр параметрлерін өзгертіп көр.
            </p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#12081d] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-purple-400">
                  {selected.country}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {selected.name}
                </h2>

                <p className="mt-2 text-purple-300">
                  {selected.university}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-xl bg-white/5 px-4 py-2 text-gray-400 hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/[0.04] p-4">
                <p className="text-xs text-gray-500">
                  Degree
                </p>
                <p className="mt-2 font-semibold">
                  {selected.degree}
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.04] p-4">
                <p className="text-xs text-gray-500">
                  Funding
                </p>
                <p className="mt-2 font-semibold text-green-400">
                  {selected.amount}
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.04] p-4">
                <p className="text-xs text-gray-500">
                  Deadline
                </p>
                <p className="mt-2 font-semibold">
                  {selected.deadline}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold">
                Бағдарлама туралы
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {selected.description}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold">
                Негізгі талаптар
              </h3>

              <ul className="mt-4 space-y-3">
                {selected.requirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="rounded-xl bg-white/[0.04] px-4 py-3 text-gray-300"
                  >
                    ✓ {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={selected.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-2xl bg-purple-600 px-6 py-4 text-center font-bold hover:bg-purple-500"
            >
              Ресми сайтқа өту →
            </a>
          </div>
        </div>
      )}
    </main>
  );
}