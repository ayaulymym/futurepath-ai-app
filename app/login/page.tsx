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
    <main className="min-h-screen bg-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-purple-700">
          FuturePath AI
        </h1>

        <h2 className="mt-6 text-2xl font-bold">
          Кіру
        </h2>

        <p className="mt-2 text-gray-500">
          Аккаунтыңа кір.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full rounded-2xl border p-4"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Құпиясөз"
            required
            className="w-full rounded-2xl border p-4"
          />

          {error && (
            <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-purple-600 p-4 font-semibold text-white hover:bg-purple-700"
          >
            Кіру →
          </button>
        </form>

        <button
          onClick={() => router.push("/register")}
          className="mt-6 w-full text-purple-600"
        >
          Аккаунтың жоқ па? Тіркелу
        </button>
      </div>
    </main>
  );
}