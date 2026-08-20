"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TEST_PRICE = 5000;

const PAYMENT_METHODS = {
  kaspi: {
    name: "Мөлдір Т",
    phone: "87023987308",
    title: "Kaspi",
    url: "https://kaspi.kz",
  },
  halyk: {
    name: "Мөлдір Т",
    phone: "87089490859",
    title: "Halyk",
    url: "https://halykbank.kz",
  },
} as const;

type PaymentMethod = keyof typeof PAYMENT_METHODS;

export default function PaymentPage() {
  const router = useRouter();

  const [method, setMethod] = useState<PaymentMethod>("kaspi");
  const [copied, setCopied] = useState(false);

  const payment = PAYMENT_METHODS[method];

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(payment.phone);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Нөмірді көшіру мүмкін болмады.");
    }
  }
  function openBank() {
    window.open(payment.url, "_blank", "noopener,noreferrer");
  }
  function submitPayment() {
    localStorage.setItem("futurepath_payment_method", method);
    localStorage.setItem(
      "futurepath_payment_amount",
      String(TEST_PRICE)
    );
    localStorage.setItem(
      "futurepath_payment_status",
      "pending"
    );

    router.push("/payment-pending");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 px-4 py-10">
      <div className="mx-auto w-full max-w-xl">
        <header className="mb-8 text-center">
          <p className="font-bold text-purple-600">
            FuturePath AI
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Career Test
          </h1>

          <p className="mt-3 text-slate-500">
            Мамандық таңдауға арналған толық тест
          </p>
        </header>

        <section className="rounded-3xl bg-white p-6 shadow-xl md:p-8">
          <div className="rounded-2xl bg-purple-50 p-6 text-center">
            <p className="text-sm text-slate-500">
              Тест бағасы
            </p>

            <p className="mt-2 text-4xl font-bold text-purple-700">
              {TEST_PRICE.toLocaleString("kk-KZ")} ₸
            </p>
          </div>

          <h2 className="mt-8 text-xl font-bold text-slate-900">
            Төлем тәсілін таңдаңыз
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setMethod("kaspi");
                setCopied(false);
              }}
              className={`rounded-2xl border-2 px-4 py-4 font-bold transition ${
                method === "kaspi"
                  ? "border-purple-600 bg-purple-50 text-purple-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-purple-300"
              }`}
            >
              Kaspi
            </button>

            <button
              type="button"
              onClick={() => {
                setMethod("halyk");
                setCopied(false);
              }}
              className={`rounded-2xl border-2 px-4 py-4 font-bold transition ${
                method === "halyk"
                  ? "border-purple-600 bg-purple-50 text-purple-700"
                  : "border-slate-200 bg-white text-slate-700 hover:border-purple-300"
              }`}
            >
              Halyk
            </button>
          </div>

          <div className="mt-6 rounded-2xl border-2 border-slate-200 p-5">
            <p className="text-sm text-slate-500">
              Алушы
            </p>

            <p className="mt-1 text-xl font-bold text-slate-900">
              {payment.name}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Телефон нөмірі
            </p>

            <div className="mt-2 flex gap-3">
              <div className="flex min-w-0 flex-1 items-center rounded-xl bg-slate-100 px-4 py-3">
                <span className="font-semibold text-slate-900">
                  {payment.phone}
                </span>
              </div>

              <button
                type="button"
                onClick={copyPhone}
                className="shrink-0 rounded-xl bg-purple-600 px-4 py-3 font-semibold text-white hover:bg-purple-700"
              >
                {copied ? "Көшірілді" : "Көшіру"}
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">
              Төлем жасау тәртібі
            </h3>

            <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <p>
                1. {payment.title} қосымшасын ашыңыз.
              </p>

              <p>
                2. {payment.phone} нөміріне{" "}
                {TEST_PRICE.toLocaleString("kk-KZ")} ₸ аударыңыз.
              </p>

              <p>
                3. Алушының аты-жөнін тексеріңіз:{" "}
                <strong>{payment.name}</strong>.
              </p>

              <p>
                4. Төлем жасалғаннан кейін
                «Төлем жасадым» батырмасын басыңыз.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={openBank}
            className="mt-6 w-full rounded-2xl bg-purple-600 px-5 py-4 font-bold text-white hover:bg-purple-700"
          >
            {payment.title} қосымшасын ашу
          </button>

          <button
            type="button"
            onClick={submitPayment}
            className="mt-3 w-full rounded-2xl border-2 border-purple-600 px-5 py-4 font-bold text-purple-700 hover:bg-purple-50"
          >
            Төлем жасадым
          </button>

          <p className="mt-5 text-center text-xs leading-5 text-slate-400">
            Төлем жасағаннан кейін өтініміңіз администратордың
            тексеруіне жіберіледі.
          </p>
        </section>
      </div>
    </main>
  );
}