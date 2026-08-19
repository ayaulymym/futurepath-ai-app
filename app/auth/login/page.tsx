"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const savedUser = localStorage.getItem("futurepath_user");

    if (!savedUser) {
      setError("Аккаунт табылмады. Алдымен тіркеліңіз.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (user.email !== email || user.password !== password) {
      setError("Email немесе құпиясөз қате.");
      return;
    }

    localStorage.setItem("futurepath_logged_in", "true");

    router.push("/profile");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 px-6 py-12">
      <div className="mx-auto flex min-h-[85vh] max-w-md items-center">
        <div className="w-full rounded-[32px] bg-white p-8 shadow-2xl md:p-10">
          
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              FuturePath AI
            </div>

            <h1 className="mt-6 text-3xl font-bold text-slate-900">
              Қайта қош келдің!
            </h1>

            <p className="mt-2 text-slate-500">
              Аккаунтыңа кір.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Құпиясөз
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Құпиясөз"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />
            </div>

            {error && (
              <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-2xl bg-purple-600 py-4 font-semibold text-white shadow-lg transition hover:bg-purple-700"
            >
              Кіру →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Аккаунтың жоқ па?{" "}
            <button
              onClick={() => router.push("/register")}
              className="font-semibold text-purple-600 hover:underline"
            >
              Тіркелу
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}