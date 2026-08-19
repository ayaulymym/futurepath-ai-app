"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPendingPage() {
  const router = useRouter();

  const [status, setStatus] = useState<
    "pending" | "approved" | "rejected" | "none"
  >("pending");

  function checkPaymentStatus() {
    const paymentStatus = localStorage.getItem(
      "futurepath_payment_status"
    );

    if (paymentStatus === "approved") {
      setStatus("approved");
      return;
    }

    if (paymentStatus === "rejected") {
      setStatus("rejected");
      return;
    }

    if (paymentStatus === "pending") {
      setStatus("pending");
      return;
    }

    setStatus("none");
  }

  useEffect(() => {
    checkPaymentStatus();
  }, []);

  function startTest() {
    const paymentStatus = localStorage.getItem(
      "futurepath_payment_status"
    );

    if (paymentStatus === "approved") {
      router.push("/career-test");
      return;
    }

    checkPaymentStatus();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 px-4 py-10">
      <div className="mx-auto flex min-h-[80vh] max-w-xl items-center">
        <section className="w-full rounded-3xl bg-white p-7 text-center shadow-xl md:p-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-4xl">
            {status === "approved"
              ? "✓"
              : status === "rejected"
              ? "!"
              : "⏳"}
          </div>

          {status === "pending" && (
            <>
              <h1 className="mt-6 text-2xl font-bold text-slate-900 md:text-3xl">
                Төлеміңіз тексерілуде
              </h1>

              <p className="mt-4 leading-7 text-slate-500">
                Төлеміңіз қабылданды. Қазір әкімші
                төлемді тексеріп жатыр.
              </p>

              <p className="mt-2 leading-7 text-slate-500">
                Тестті бастау үшін әкімшінің
                растауын күтіңіз.
              </p>

              <button
                type="button"
                onClick={checkPaymentStatus}
                className="mt-7 w-full rounded-2xl bg-purple-600 px-5 py-4 font-bold text-white transition hover:bg-purple-700"
              >
                Төлем мәртебесін тексеру
              </button>
            </>
          )}

          {status === "approved" && (
            <>
              <h1 className="mt-6 text-2xl font-bold text-green-600 md:text-3xl">
                Төлем расталды
              </h1>

              <p className="mt-4 leading-7 text-slate-500">
                Төлеміңіз әкімші тарапынан расталды.
                Енді Career Test тестін бастай аласыз.
              </p>

              <button
                type="button"
                onClick={startTest}
                className="mt-7 w-full rounded-2xl bg-purple-600 px-5 py-4 font-bold text-white transition hover:bg-purple-700"
              >
                Career Test-ті бастау
              </button>
            </>
          )}

          {status === "rejected" && (
            <>
              <h1 className="mt-6 text-2xl font-bold text-red-600 md:text-3xl">
                Төлем қабылданбады
              </h1>

              <p className="mt-4 leading-7 text-slate-500">
                Төлеміңіз әкімші тарапынан расталмады.
                Төлем деректерін тексеріп, қайта
                әрекет жасаңыз.
              </p>

              <button
                type="button"
                onClick={() => router.push("/payment")}
                className="mt-7 w-full rounded-2xl bg-purple-600 px-5 py-4 font-bold text-white transition hover:bg-purple-700"
              >
                Төлем бетіне оралу
              </button>
            </>
          )}

          {status === "none" && (
            <>
              <h1 className="mt-6 text-2xl font-bold text-slate-900 md:text-3xl">
                Төлем туралы ақпарат табылмады
              </h1>

              <p className="mt-4 leading-7 text-slate-500">
                Төлемді қайта бастау үшін төлем
                бетіне өтіңіз.
              </p>

              <button
                type="button"
                onClick={() => router.push("/payment")}
                className="mt-7 w-full rounded-2xl bg-purple-600 px-5 py-4 font-bold text-white transition hover:bg-purple-700"
              >
                Төлем бетіне өту
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-3 w-full rounded-2xl border-2 border-slate-200 bg-white px-5 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Басты бетке оралу
          </button>
        </section>
      </div>
    </main>
  );
}