"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PaymentMethod = "kaspi" | "halyk";

type AdminUniversity = {
  id: number;
  name: string;
  country: string;
  city: string;
  website: string;
};

const initialUniversities: AdminUniversity[] = [
  {
    id: 1,
    name: "Nazarbayev University",
    country: "Қазақстан",
    city: "Астана",
    website: "https://nu.edu.kz",
  },
  {
    id: 2,
    name: "Әл-Фараби атындағы Қазақ ұлттық университеті",
    country: "Қазақстан",
    city: "Алматы",
    website: "https://farabi.university",
  },
  {
    id: 3,
    name: "Л.Н. Гумилев атындағы Еуразия ұлттық университеті",
    country: "Қазақстан",
    city: "Астана",
    website: "https://enu.kz",
  },
  {
    id: 4,
    name: "Satbayev University",
    country: "Қазақстан",
    city: "Алматы",
    website: "https://satbayev.university",
  },
  {
    id: 5,
    name: "KIMEP University",
    country: "Қазақстан",
    city: "Алматы",
    website: "https://kimep.kz",
  },
];

export default function AdminPage() {
  const router = useRouter();

  const [approved, setApproved] = useState(false);
  const [paymentExists, setPaymentExists] = useState(false);
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod | null>(null);
  const [paymentAmount, setPaymentAmount] = useState(5000);

  const [universities, setUniversities] =
    useState<AdminUniversity[]>(initialUniversities);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");

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
      setPaymentAmount(Number(amount));
    } else {
      setPaymentAmount(5000);
    }
  }

  useEffect(() => {
    loadPayment();

    const savedUniversities =
      localStorage.getItem(
        "futurepath_admin_universities"
      );

    if (savedUniversities) {
      try {
        setUniversities(
          JSON.parse(savedUniversities)
        );
      } catch {
        setUniversities(initialUniversities);
      }
    }
  }, []);

  function saveUniversities(
    data: AdminUniversity[]
  ) {
    setUniversities(data);

    localStorage.setItem(
      "futurepath_admin_universities",
      JSON.stringify(data)
    );
  }

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

  function addUniversity() {
    if (
      !name.trim() ||
      !country.trim() ||
      !city.trim()
    ) {
      alert(
        "Университет атауын, елін және қаласын толтырыңыз."
      );
      return;
    }

    const newUniversity: AdminUniversity = {
      id: Date.now(),
      name: name.trim(),
      country: country.trim(),
      city: city.trim(),
      website: website.trim(),
    };

    saveUniversities([
      ...universities,
      newUniversity,
    ]);

    setName("");
    setCountry("");
    setCity("");
    setWebsite("");

    alert(
      "Университет сәтті қосылды."
    );
  }

  function deleteUniversity(id: number) {
    const confirmed = confirm(
      "Бұл университетті өшіруге сенімдісіз бе?"
    );

    if (!confirmed) {
      return;
    }

    const updated = universities.filter(
      (university) =>
        university.id !== id
    );

    saveUniversities(updated);
  }

  const methodName =
    paymentMethod === "kaspi"
      ? "Kaspi"
      : paymentMethod === "halyk"
      ? "Halyk"
      : "Көрсетілмеген";

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">

        <header className="rounded-3xl bg-white p-6 shadow-lg md:p-8">
          <p className="text-sm font-semibold text-purple-600">
            FuturePath AI
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Әкімші панелі
              </h1>

              <p className="mt-1 text-slate-500">
                Career Test және университеттерді басқару орталығы
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

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-lg md:p-8">

          <h2 className="text-2xl font-bold text-slate-900">
            Career Test төлемі
          </h2>

          {!paymentExists ? (
            <div className="mt-6 rounded-2xl bg-slate-50 p-8 text-center">
              <p className="font-semibold text-slate-700">
                Қазіргі уақытта төлем өтінімі жоқ.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Пайдаланушы төлем жасағаннан кейін өтінім осы жерде көрсетіледі.
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

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-lg md:p-8">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Университеттерді басқару
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Қазір базада {universities.length} университет бар.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                router.push("/universities")
              }
              className="rounded-2xl bg-purple-600 px-5 py-3 font-semibold text-white hover:bg-purple-700"
            >
              🎓 Университеттерді көру
            </button>

          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5">

            <h3 className="text-xl font-bold text-slate-900">
              Жаңа университет қосу
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">

              <input
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder="Университет атауы"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-purple-500"
              />

              <input
                type="text"
                value={country}
                onChange={(event) =>
                  setCountry(event.target.value)
                }
                placeholder="Ел"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-purple-500"
              />

              <input
                type="text"
                value={city}
                onChange={(event) =>
                  setCity(event.target.value)
                }
                placeholder="Қала"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-purple-500"
              />

              <input
                type="url"
                value={website}
                onChange={(event) =>
                  setWebsite(event.target.value)
                }
                placeholder="Сайт мекенжайы"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-purple-500"
              />

            </div>

            <button
              type="button"
              onClick={addUniversity}
              className="mt-5 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              + Университет қосу
            </button>

          </div>

          <div className="mt-8">

            <h3 className="text-xl font-bold text-slate-900">
              Қосылған университеттер
            </h3>

            <div className="mt-4 space-y-3">

              {universities.map(
                (university) => (
                  <div
                    key={university.id}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:flex-row md:items-center"
                  >

                    <div>
                      <p className="font-bold text-slate-900">
                        {university.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {university.city},{" "}
                        {university.country}
                      </p>

                      {university.website && (
                        <p className="mt-1 text-sm text-purple-600">
                          {university.website}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        deleteUniversity(
                          university.id
                        )
                      }
                      className="rounded-xl bg-red-50 px-4 py-2 font-semibold text-red-600 hover:bg-red-100"
                    >
                      Өшіру
                    </button>

                  </div>
                )
              )}

            </div>

          </div>

        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">

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
            className="rounded-3xl bg-purple-600 p-6 text-left text-white shadow-lg hover:bg-purple-700"
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
              router.push("/profile")
            }
            className="rounded-3xl bg-white p-6 text-left shadow-lg hover:bg-slate-50"
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

        <div className="mt-8 pb-8 text-center">

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