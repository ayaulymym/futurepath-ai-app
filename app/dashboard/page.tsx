"use client";

import Link from "next/link";

const menu = [
  ["🏠", "Dashboard"],
  ["🎯", "Career Test"],
  ["🤖", "AI Analysis"],
  ["💼", "Мамандықтар"],
  ["🎓", "Университеттер"],
  ["💰", "Стипендиялар"],
  ["🗺️", "Roadmap"],
  ["🏆", "Achievements"],
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#08000f] text-white">

      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-72 border-r border-white/10 bg-[#0d0118] p-5 lg:block">

          <Link href="/" className="mb-10 flex items-center gap-3 px-3 pt-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 font-bold">
              F
            </div>

            <span className="text-xl font-bold">
              FuturePath<span className="text-purple-400"> AI</span>
            </span>
          </Link>

          <nav className="space-y-2">
            {menu.map(([icon, title], index) => (
              <Link
                key={title}
                href={index === 0 ? "/dashboard" : "#"}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm transition ${
                  index === 0
                    ? "bg-purple-600/20 text-purple-300"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{icon}</span>
                {title}
              </Link>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5">
            <p className="text-sm font-semibold text-purple-300">
              Career Test
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-400">
              Жеке мансап бағытыңды анықтау үшін тесттен өт.
            </p>

            <Link
              href="#"
              className="mt-4 block rounded-xl bg-purple-600 px-4 py-2.5 text-center text-sm font-semibold hover:bg-purple-500"
            >
              Тестті бастау
            </Link>
          </div>

        </aside>

        {/* MAIN */}
        <div className="flex-1">

          {/* TOPBAR */}
          <header className="flex items-center justify-between border-b border-white/10 bg-[#08000f]/90 px-6 py-5 backdrop-blur">

            <div>
              <p className="text-sm text-gray-500">
                FuturePath AI
              </p>

              <h1 className="mt-1 text-2xl font-bold">
                Қош келдің! 👋
              </h1>
            </div>

            <div className="flex items-center gap-4">

              <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                🔔
              </button>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 font-bold">
                  A
                </div>

                <div className="hidden sm:block">
                  <p className="text-sm font-semibold">
                    Student
                  </p>

                  <p className="text-xs text-gray-500">
                    FuturePath ID: FP-000001
                  </p>
                </div>
              </div>

            </div>
          </header>

          {/* CONTENT */}
          <div className="mx-auto max-w-7xl p-6 lg:p-10">

            {/* WELCOME */}
            <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/40 via-[#160024] to-[#0d0118] p-8">

              <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="relative max-w-2xl">

                <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300">
                  YOUR FUTURE STARTS HERE
                </span>

                <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                  Болашағыңды бірге
                  <span className="text-purple-400">
                    {" "}жоспарлайық.
                  </span>
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  Профиліңді толықтыр, Career Test тапсыр және
                  FuturePath AI арқылы өзіңе сәйкес оқу мен мансап
                  бағытын анықта.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <Link
                    href="#"
                    className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold hover:bg-purple-500"
                  >
                    Career Test → 
                  </Link>

                  <Link
                    href="#"
                    className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-white/10"
                  >
                    Профильді толтыру
                  </Link>

                </div>
              </div>

            </section>

            {/* STATS */}
            <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <Stat
                icon="🎯"
                title="Career Test"
                value="Locked"
                text="Төлемді күтуде"
              />

              <Stat
                icon="📊"
                title="Profile"
                value="20%"
                text="Толықтыру қажет"
              />

              <Stat
                icon="🏆"
                title="Achievements"
                value="0"
                text="Жетістіктер"
              />

              <Stat
                icon="🗺️"
                title="Roadmap"
                value="Not started"
                text="Жоспар құрылмаған"
              />

            </section>

            {/* QUICK ACCESS */}
            <section className="mt-10">

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-purple-400">
                    EXPLORE
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Саған қолжетімді бөлімдер
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                <DashboardCard
                  icon="🎯"
                  title="Career Test"
                  description="Қызығушылықтарың мен қабілеттеріңді анықта."
                  status="🔒 Төлем қажет"
                />

                <DashboardCard
                  icon="🎓"
                  title="Университеттер"
                  description="Әлемдегі университеттерді зертте."
                  status="Explore →"
                />

                <DashboardCard
                  icon="💼"
                  title="Мамандықтар"
                  description="Өзіңе сәйкес мамандықтарды тап."
                  status="Explore →"
                />

                <DashboardCard
                  icon="💰"
                  title="Стипендиялар"
                  description="Гранттар мен халықаралық мүмкіндіктерді зертте."
                  status="Explore →"
                />

                <DashboardCard
                  icon="🤖"
                  title="AI Analysis"
                  description="Жеке AI талдауыңды ал."
                  status="🔒 Career Test қажет"
                />

                <DashboardCard
                  icon="🗺️"
                  title="Personal Roadmap"
                  description="Болашағыңа арналған жеке жоспар құр."
                  status="🔒 AI Analysis қажет"
                />

              </div>
            </section>

            {/* PROFILE */}
            <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                  <p className="text-sm text-gray-500">
                    PROFILE COMPLETION
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Профиліңді толықтыр
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Толық профиль жақсырақ AI нәтижесін алуға көмектеседі.
                  </p>
                </div>

                <Link
                  href="#"
                  className="rounded-xl border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-300 hover:bg-purple-500/20"
                >
                  Профильге өту →
                </Link>

              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[20%] rounded-full bg-purple-600" />
              </div>

              <p className="mt-2 text-right text-xs text-gray-500">
                20%
              </p>

            </section>

          </div>
        </div>
      </div>

    </main>
  );
}

function Stat({
  icon,
  title,
  value,
  text,
}: {
  icon: string;
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span className="text-xs text-gray-500">{title}</span>
      </div>

      <p className="mt-5 text-2xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {text}
      </p>
    </div>
  );
}

function DashboardCard({
  icon,
  title,
  description,
  status,
}: {
  icon: string;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/[0.05]">

      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
          {icon}
        </div>

        <span className="text-xs text-gray-500">
          {status}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>

    </div>
  );
}