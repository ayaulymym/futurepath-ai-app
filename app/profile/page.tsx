"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("futurepath_user");
    const loggedIn = localStorage.getItem("futurepath_logged_in");

    if (!savedUser || loggedIn !== "true") {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(savedUser));
  }, [router]);

  function logout() {
    localStorage.removeItem("futurepath_logged_in");
    router.push("/login");
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-purple-50">
        <p>Жүктелуде...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-purple-50 p-6">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-lg">
          <div>
            <p className="text-sm font-semibold text-purple-600">
              FuturePath AI
            </p>

            <h1 className="mt-1 text-2xl font-bold">
              Сәлем, {user.name}! 👋
            </h1>
          </div>

          <button
            onClick={logout}
            className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
          >
            Шығу
          </button>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-3xl">🧠</div>
            <h2 className="mt-4 text-xl font-bold">
              Career Test
            </h2>
            <p className="mt-2 text-gray-500">
              50 сұрақ арқылы өзіңе сәйкес бағыттарды анықта.
            </p>

            <button
              onClick={() => router.push("/career-test")}
              className="mt-6 w-full rounded-2xl bg-purple-600 p-3 font-semibold text-white"
            >
              Тестті бастау →
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-3xl">🎓</div>
            <h2 className="mt-4 text-xl font-bold">
              Университеттер
            </h2>
            <p className="mt-2 text-gray-500">
              Қазақстан және әлем университеттерін зертте.
            </p>

            <button
              onClick={() => router.push("/universities")}
              className="mt-6 w-full rounded-2xl border border-purple-200 p-3 font-semibold text-purple-600"
            >
              Университеттер →
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-3xl">🌍</div>
            <h2 className="mt-4 text-xl font-bold">
              World Map
            </h2>
            <p className="mt-2 text-gray-500">
              Әлемдегі университеттерді картадан көр.
            </p>

            <button
              className="mt-6 w-full rounded-2xl border border-purple-200 p-3 font-semibold text-purple-600"
            >
              World Map →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}