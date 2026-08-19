"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    localStorage.setItem(
      "futurepath_user",
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    router.push("/profile");
  }

  return (
    <main className="min-h-screen bg-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-purple-700">
          FuturePath AI
        </h1>

        <h2 className="mt-6 text-2xl font-bold">
          Тіркелу
        </h2>

        <p className="mt-2 text-gray-500">
          Болашағыңды бүгіннен баста.
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Аты-жөнің"
            required
            className="w-full rounded-2xl border p-4"
          />

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

          <button
            type="submit"
            className="w-full rounded-2xl bg-purple-600 p-4 font-semibold text-white hover:bg-purple-700"
          >
            Тіркелу →
          </button>
        </form>

        <button
          onClick={() => router.push("/login")}
          className="mt-6 w-full text-purple-600"
        >
          Аккаунтың бар ма? Кіру
        </button>
      </div>
    </main>
  );
}