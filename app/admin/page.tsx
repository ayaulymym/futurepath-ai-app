"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PaymentMethod = "kaspi" | "halyk";

export default function AdminPage() {
  const router = useRouter();

  const [approved, setApproved] = useState(false);
  const [paymentExists, setPaymentExists] = useState(false);
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number>(5000);

  function loadPayment() {
    const status = localStorage.getItem(
      "futurepath_payment_status"
    );

    const method = localStorage.getItem(
      "futurepath_payment_method"
    );

    const amount = localStorage.getItem(
      "futurepath_payment_amount"
    );

    setApproved(status === "approved");

    setPaymentExists(
      status === "pending" ||
        status === "approved"
    );

    if (method === "kaspi" || method === "halyk") {
      setPaymentMethod(method);
    } else {
      setPaymentMethod(null);
    }

    if (amount) {
      const parsedAmount = Number(amount);

      setPaymentAmount(
        Number.isFinite(parsedAmount)
          ? parsedAmount
          : 5000
      );
    } else {
      setPaymentAmount(5000);
    }
  }

  useEffect(() => {
    loadPayment();
  }, []);

  function approvePayment() {
    localStorage.setItem(
      "futurepath_payment_status",
      "approved"
    );

    localStorage.setItem(
      "futurepath_payment_approved",
      "true"
    );

    setApproved(true);
    setPaymentExists(true);
  }

  function rejectPayment() {
    localStorage.setItem(
      "futurepath_payment_status",
      "rejected"
    );

    localStorage.removeItem(
      "futurepath_payment_approved"
    );

    setApproved(false);
    setPaymentExists(false);
  }

  function clearPayment() {
    localStorage.removeItem(
      "futurepath_payment_status"
    );

    localStorage.removeItem(
      "futurepath_payment_method"
    );

    localStorage.removeItem(
      "futurepath_payment_amount"
    );

    localStorage.removeItem(
      "futurepath_payment_approved"
    );

    setApproved(false);
    setPaymentExists(false);
    setPaymentMethod(null);
    setPaymentAmount(5000);
  }

  const methodName =
    paymentMethod === "kaspi"
      ? "Kaspi"
      : paymentMethod === "halyk"
      ? "Halyk"
      : "Көрсетілмеген";

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-6xl">

        <header className="rounded-3xl bg-white p-6 shadow-lg">
          <p className="text-sm font-semibold text-purple-600">
            FuturePath AI
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Әкімші панелі
              </h1>

              <p className="mt-1 text-slate-500">
                Career Test басқару орталығы
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              Әкімші
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-slate-500">
              Пайдаланушылар
            </p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              1
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-slate-500">
              Төлемдер
            </p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              {paymentExists ? "1" : "0"}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-slate-500">
              Тест мәртебесі
            </p>

            <p
              className={`mt-2 text-xl font-bold ${
                approved
                  ? "text-green-600"
                  : "text-orange-500"
              }`}
            >
              {approved
                ? "Расталды"
                : "Күтуде"}
            </p>
          </div>

        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-slate-900">
            Career Test төлемі
          </h2>

          {!paymentExists ? (
            <div className="mt-6 rounded-2xl bg-slate-50 p-8 text-center">

              <p className="font-semibold text-slate-700">
                Қазіргі уақытта төлем өтінімі жоқ.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Пайдаланушы төлем жасағаннан кейін
                өтінім осы жерде көрсетіледі.
              </p>

              <button
                type="button"
                onClick={loadPayment}
                className="mt-5 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white hover:bg-purple-700"
              >
                Жаңарту
              </button>

            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-slate-200 p-6">

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                <div>
                  <p className="font-semibold text-slate-900">
                    Career Test
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Төлем тәсілі:{" "}
                    <strong>{methodName}</strong>
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Төлем сомасы:{" "}
                    <strong>
                      {paymentAmount.toLocaleString(
                        "kk-KZ"
                      )}{" "}
                      ₸
                    </strong>
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Мәртебесі:{" "}
                    <strong
                      className={
                        approved
                          ? "text-green-600"
                          : "text-orange-500"
                      }
                    >
                      {approved
                        ? "Расталды"
                        : "Тексерілуде"}
                    </strong>
                  </p>
                </div>

                <div className="flex flex-col gap-3">

                  {!approved ? (
                    <>
                      <button
                        type="button"
                        onClick={approvePayment}
                        className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                      >
                        ✓ Төлемді растау
                      </button>

                      <button
                        type="button"
                        onClick={rejectPayment}
                        className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
                      >
                        Төлемді қабылдамау
                      </button>
                    </>
                  ) : (
                    <div className="rounded-2xl bg-green-50 px-6 py-3 text-center font-semibold text-green-700">
                      ✓ Төлем расталды
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={clearPayment}
                    className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Деректерді тазарту
                  </button>

                </div>

              </div>

            </div>
          )}

        </section>

        {/* БАСҚАРУ БӨЛІМДЕРІ */}

        <section className="mt-8 grid gap-6 md:grid-cols-3">

          <button
            type="button"
            onClick={() => {
              if (!approved) {
                alert(
                  "Алдымен төлемді растау қажет."
                );
                return;
              }

              router.push("/career-test");
            }}
            className="rounded-3xl bg-purple-600 p-6 text-left text-white shadow-lg transition hover:bg-purple-700"
          >
            <div className="text-3xl">
              🧠
            </div>

            <h2 className="mt-4 text-xl font-bold">
              Career Test
            </h2>

            <p className="mt-2 text-purple-100">
              Төлем расталғаннан кейін тестке өту
            </p>
          </button>

          <button
            type="button"
            onClick={() =>
              router.push("/admin/universities")
            }
            className="rounded-3xl bg-white p-6 text-left shadow-lg transition hover:bg-purple-50"
          >
            <div className="text-3xl">
              🎓
            </div>

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              Университеттер
            </h2>

            <p className="mt-2 text-slate-500">
              Университеттерді қосу, өзгерту және өшіру
            </p>
          </button>

          <button
            type="button"
            onClick={() =>
              router.push("/profile")
            }
            className="rounded-3xl bg-white p-6 text-left shadow-lg transition hover:bg-slate-50"
          >
            <div className="text-3xl">
              👤
            </div>

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              Профиль
            </h2>

            <p className="mt-2 text-slate-500">
              Пайдаланушы профиліне өту
            </p>
          </button>

        </section>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={loadPayment}
            className="text-sm font-semibold text-purple-600 hover:text-purple-800"
          >
            Төлем ақпаратын жаңарту
          </button>
        </div>

      </div>
    </main>
  );
}