"use client";

import { useMemo, useState } from "react";

type University = {
  id: number;
  name: string;
  country: string;
  city: string;
  website: string;
};

const universities: University[] = [
  { id: 1, name: "Nazarbayev University", country: "Қазақстан", city: "Астана", website: "https://nu.edu.kz" },
  { id: 2, name: "Al-Farabi Kazakh National University", country: "Қазақстан", city: "Алматы", website: "https://farabi.university" },
  { id: 3, name: "L.N. Gumilyov Eurasian National University", country: "Қазақстан", city: "Астана", website: "https://enu.kz" },
  { id: 4, name: "Satbayev University", country: "Қазақстан", city: "Алматы", website: "https://satbayev.university" },
  { id: 5, name: "Karaganda Buketov University", country: "Қазақстан", city: "Қарағанды", website: "https://buketov.edu.kz" },
  { id: 6, name: "South Kazakhstan State University", country: "Қазақстан", city: "Шымкент", website: "https://auezov.edu.kz" },
  { id: 7, name: "Korkyt Ata Kyzylorda University", country: "Қазақстан", city: "Қызылорда", website: "https://korkyt.edu.kz" },
  { id: 8, name: "S. Seifullin Kazakh Agrotechnical Research University", country: "Қазақстан", city: "Астана", website: "https://kazatu.edu.kz" },
  { id: 9, name: "Alikhan Bokeikhan University", country: "Қазақстан", city: "Семей", website: "https://abu.edu.kz" },
  { id: 10, name: "D. Serikbayev East Kazakhstan Technical University", country: "Қазақстан", city: "Өскемен", website: "https://www.ektu.kz" },
  { id: 11, name: "Karaganda Technical University", country: "Қазақстан", city: "Қарағанды", website: "https://www.kstu.kz" },
  { id: 12, name: "Toraighyrov University", country: "Қазақстан", city: "Павлодар", website: "https://tou.edu.kz" },
  { id: 13, name: "Atyrau University", country: "Қазақстан", city: "Атырау", website: "https://asu.edu.kz" },
  { id: 14, name: "West Kazakhstan Marat Ospanov Medical University", country: "Қазақстан", city: "Ақтөбе", website: "https://zkgmu.kz" },
  { id: 15, name: "Astana Medical University", country: "Қазақстан", city: "Астана", website: "https://amu.edu.kz" },
  { id: 16, name: "Kazakh National Medical University", country: "Қазақстан", city: "Алматы", website: "https://kaznmu.edu.kz" },
  { id: 17, name: "Kokshetau University", country: "Қазақстан", city: "Көкшетау", website: "https://ku.edu.kz" },
  { id: 18, name: "M. Kozybayev North Kazakhstan University", country: "Қазақстан", city: "Петропавл", website: "https://ku.edu.kz" },
  { id: 19, name: "Zhetysu University", country: "Қазақстан", city: "Талдықорған", website: "https://zhetysu.edu.kz" },
  { id: 20, name: "Caspian University", country: "Қазақстан", city: "Алматы", website: "https://cu.edu.kz" },

  { id: 21, name: "Harvard University", country: "АҚШ", city: "Cambridge", website: "https://www.harvard.edu" },
  { id: 22, name: "Stanford University", country: "АҚШ", city: "Stanford", website: "https://www.stanford.edu" },
  { id: 23, name: "Massachusetts Institute of Technology", country: "АҚШ", city: "Cambridge", website: "https://www.mit.edu" },
  { id: 24, name: "Princeton University", country: "АҚШ", city: "Princeton", website: "https://www.princeton.edu" },
  { id: 25, name: "Yale University", country: "АҚШ", city: "New Haven", website: "https://www.yale.edu" },
  { id: 26, name: "Columbia University", country: "АҚШ", city: "New York", website: "https://www.columbia.edu" },
  { id: 27, name: "University of Chicago", country: "АҚШ", city: "Chicago", website: "https://www.uchicago.edu" },
  { id: 28, name: "University of Pennsylvania", country: "АҚШ", city: "Philadelphia", website: "https://www.upenn.edu" },
  { id: 29, name: "Cornell University", country: "АҚШ", city: "Ithaca", website: "https://www.cornell.edu" },
  { id: 30, name: "California Institute of Technology", country: "АҚШ", city: "Pasadena", website: "https://www.caltech.edu" },

  { id: 31, name: "University of Oxford", country: "Ұлыбритания", city: "Oxford", website: "https://www.ox.ac.uk" },
  { id: 32, name: "University of Cambridge", country: "Ұлыбритания", city: "Cambridge", website: "https://www.cam.ac.uk" },
  { id: 33, name: "Imperial College London", country: "Ұлыбритания", city: "London", website: "https://www.imperial.ac.uk" },
  { id: 34, name: "University College London", country: "Ұлыбритания", city: "London", website: "https://www.ucl.ac.uk" },
  { id: 35, name: "King's College London", country: "Ұлыбритания", city: "London", website: "https://www.kcl.ac.uk" },
  { id: 36, name: "London School of Economics", country: "Ұлыбритания", city: "London", website: "https://www.lse.ac.uk" },
  { id: 37, name: "University of Edinburgh", country: "Ұлыбритания", city: "Edinburgh", website: "https://www.ed.ac.uk" },
  { id: 38, name: "University of Manchester", country: "Ұлыбритания", city: "Manchester", website: "https://www.manchester.ac.uk" },
  { id: 39, name: "University of Bristol", country: "Ұлыбритания", city: "Bristol", website: "https://www.bristol.ac.uk" },
  { id: 40, name: "University of Warwick", country: "Ұлыбритания", city: "Coventry", website: "https://warwick.ac.uk" },

  { id: 41, name: "University of Toronto", country: "Канада", city: "Toronto", website: "https://www.utoronto.ca" },
  { id: 42, name: "McGill University", country: "Канада", city: "Montreal", website: "https://www.mcgill.ca" },
  { id: 43, name: "University of British Columbia", country: "Канада", city: "Vancouver", website: "https://www.ubc.ca" },
  { id: 44, name: "University of Alberta", country: "Канада", city: "Edmonton", website: "https://www.ualberta.ca" },
  { id: 45, name: "University of Waterloo", country: "Канада", city: "Waterloo", website: "https://uwaterloo.ca" },

  { id: 46, name: "University of Melbourne", country: "Австралия", city: "Melbourne", website: "https://www.unimelb.edu.au" },
  { id: 47, name: "University of Sydney", country: "Австралия", city: "Sydney", website: "https://www.sydney.edu.au" },
  { id: 48, name: "Australian National University", country: "Австралия", city: "Canberra", website: "https://www.anu.edu.au" },
  { id: 49, name: "University of Queensland", country: "Австралия", city: "Brisbane", website: "https://www.uq.edu.au" },
  { id: 50, name: "Monash University", country: "Австралия", city: "Melbourne", website: "https://www.monash.edu" },

  { id: 51, name: "University of Tokyo", country: "Жапония", city: "Tokyo", website: "https://www.u-tokyo.ac.jp" },
  { id: 52, name: "Kyoto University", country: "Жапония", city: "Kyoto", website: "https://www.kyoto-u.ac.jp" },
  { id: 53, name: "Osaka University", country: "Жапония", city: "Osaka", website: "https://www.osaka-u.ac.jp" },
  { id: 54, name: "Tohoku University", country: "Жапония", city: "Sendai", website: "https://www.tohoku.ac.jp" },
  { id: 55, name: "Nagoya University", country: "Жапония", city: "Nagoya", website: "https://www.nagoya-u.ac.jp" },

  { id: 56, name: "Seoul National University", country: "Оңтүстік Корея", city: "Seoul", website: "https://en.snu.ac.kr" },
  { id: 57, name: "KAIST", country: "Оңтүстік Корея", city: "Daejeon", website: "https://www.kaist.ac.kr" },
  { id: 58, name: "Yonsei University", country: "Оңтүстік Корея", city: "Seoul", website: "https://www.yonsei.ac.kr" },
  { id: 59, name: "Korea University", country: "Оңтүстік Корея", city: "Seoul", website: "https://www.korea.edu" },
  { id: 60, name: "POSTECH", country: "Оңтүстік Корея", city: "Pohang", website: "https://www.postech.ac.kr" },

  { id: 61, name: "National University of Singapore", country: "Сингапур", city: "Singapore", website: "https://www.nus.edu.sg" },
  { id: 62, name: "Nanyang Technological University", country: "Сингапур", city: "Singapore", website: "https://www.ntu.edu.sg" },

  { id: 63, name: "ETH Zurich", country: "Швейцария", city: "Zurich", website: "https://ethz.ch" },
  { id: 64, name: "EPFL", country: "Швейцария", city: "Lausanne", website: "https://www.epfl.ch" },

  { id: 65, name: "Technical University of Munich", country: "Германия", city: "Munich", website: "https://www.tum.de" },
  { id: 66, name: "LMU Munich", country: "Германия", city: "Munich", website: "https://www.lmu.de" },
  { id: 67, name: "Heidelberg University", country: "Германия", city: "Heidelberg", website: "https://www.uni-heidelberg.de" },
  { id: 68, name: "Humboldt University of Berlin", country: "Германия", city: "Berlin", website: "https://www.hu-berlin.de" },
  { id: 69, name: "Free University of Berlin", country: "Германия", city: "Berlin", website: "https://www.fu-berlin.de" },

  { id: 70, name: "University of Amsterdam", country: "Нидерланд", city: "Amsterdam", website: "https://www.uva.nl" },
  { id: 71, name: "Delft University of Technology", country: "Нидерланд", city: "Delft", website: "https://www.tudelft.nl" },
  { id: 72, name: "Eindhoven University of Technology", country: "Нидерланд", city: "Eindhoven", website: "https://www.tue.nl" },

  { id: 73, name: "Sorbonne University", country: "Франция", city: "Paris", website: "https://www.sorbonne-universite.fr" },
  { id: 74, name: "Université Paris-Saclay", country: "Франция", city: "Paris", website: "https://www.universite-paris-saclay.fr" },
  { id: 75, name: "École Polytechnique", country: "Франция", city: "Palaiseau", website: "https://www.polytechnique.edu" },

  { id: 76, name: "University of Bologna", country: "Италия", city: "Bologna", website: "https://www.unibo.it" },
  { id: 77, name: "Sapienza University of Rome", country: "Италия", city: "Rome", website: "https://www.uniroma1.it" },
  { id: 78, name: "University of Milan", country: "Италия", city: "Milan", website: "https://www.unimi.it" },

  { id: 79, name: "Tsinghua University", country: "Қытай", city: "Beijing", website: "https://www.tsinghua.edu.cn" },
  { id: 80, name: "Peking University", country: "Қытай", city: "Beijing", website: "https://english.pku.edu.cn" },
  { id: 81, name: "Fudan University", country: "Қытай", city: "Shanghai", website: "https://www.fudan.edu.cn" },
  { id: 82, name: "Shanghai Jiao Tong University", country: "Қытай", city: "Shanghai", website: "https://en.sjtu.edu.cn" },
  { id: 83, name: "Zhejiang University", country: "Қытай", city: "Hangzhou", website: "https://www.zju.edu.cn" },

  { id: 84, name: "Indian Institute of Technology Bombay", country: "Үндістан", city: "Mumbai", website: "https://www.iitb.ac.in" },
  { id: 85, name: "Indian Institute of Technology Delhi", country: "Үндістан", city: "Delhi", website: "https://home.iitd.ac.in" },
  { id: 86, name: "Indian Institute of Science", country: "Үндістан", city: "Bengaluru", website: "https://iisc.ac.in" },

  { id: 87, name: "Lomonosov Moscow State University", country: "Ресей", city: "Moscow", website: "https://www.msu.ru" },
  { id: 88, name: "Saint Petersburg State University", country: "Ресей", city: "Saint Petersburg", website: "https://english.spbu.ru" },
  { id: 89, name: "Moscow Institute of Physics and Technology", country: "Ресей", city: "Dolgoprudny", website: "https://mipt.ru" },

  { id: 90, name: "Middle East Technical University", country: "Түркия", city: "Ankara", website: "https://www.metu.edu.tr" },
  { id: 91, name: "Istanbul Technical University", country: "Түркия", city: "Istanbul", website: "https://www.itu.edu.tr" },

  { id: 92, name: "University of Copenhagen", country: "Дания", city: "Copenhagen", website: "https://www.ku.dk" },
  { id: 93, name: "Karolinska Institute", country: "Швеция", city: "Stockholm", website: "https://ki.se" },
  { id: 94, name: "University of Helsinki", country: "Финляндия", city: "Helsinki", website: "https://www.helsinki.fi" },
  { id: 95, name: "University of Oslo", country: "Норвегия", city: "Oslo", website: "https://www.uio.no" },
  { id: 96, name: "University of Vienna", country: "Австрия", city: "Vienna", website: "https://www.univie.ac.at" },

  { id: 97, name: "Tel Aviv University", country: "Израиль", city: "Tel Aviv", website: "https://english.tau.ac.il" },
  { id: 98, name: "Hebrew University of Jerusalem", country: "Израиль", city: "Jerusalem", website: "https://new.huji.ac.il" },

  { id: 99, name: "University of Cape Town", country: "Оңтүстік Африка", city: "Cape Town", website: "https://www.uct.ac.za" },
  { id: 100, name: "University of São Paulo", country: "Бразилия", city: "São Paulo", website: "https://www5.usp.br" },
];

export default function UniversitiesPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("Барлығы");

  const countries = useMemo(
    () => [
      "Барлығы",
      ...Array.from(
        new Set(
          universities.map(
            (university) => university.country
          )
        )
      ),
    ],
    []
  );

  const filteredUniversities = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    return universities.filter((university) => {
      const matchesSearch =
        query === "" ||
        university.name
          .toLowerCase()
          .includes(query) ||
        university.city
          .toLowerCase()
          .includes(query) ||
        university.country
          .toLowerCase()
          .includes(query);

      const matchesCountry =
        country === "Барлығы" ||
        university.country === country;

      return (
        matchesSearch &&
        matchesCountry
      );
    });
  }, [search, country]);

  return (
    <main className="min-h-screen bg-slate-50">

      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-bold text-purple-600">
                FuturePath AI
              </p>

              <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
                Университеттер
              </h1>

              <p className="mt-2 text-slate-500">
                Қазақстан және әлем бойынша университеттер
              </p>
            </div>

            <a
              href="/"
              className="rounded-xl bg-purple-600 px-5 py-3 text-center font-bold text-white hover:bg-purple-700"
            >
              ← Басты бет
            </a>

          </div>

        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-6">

        {/* ЕНДІ 5 ЕМЕС — 100 */}
        <div className="mb-6 rounded-3xl bg-purple-50 p-6">

          <p className="text-sm font-semibold text-purple-600">
            FuturePath AI университеттер базасы
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Базада 100 университет тіркелген
          </h2>

          <p className="mt-2 text-slate-600">
            Қазақстандағы және шетелдегі университеттердің
            толық тізімін қарап, қала немесе ел бойынша
            қажетті оқу орнын іздей аласыз.
          </p>

        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_250px_180px]">

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Университет, қала немесе ел іздеу..."
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm outline-none focus:border-purple-500"
          />

          <select
            value={country}
            onChange={(event) =>
              setCountry(event.target.value)
            }
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm outline-none"
          >
            {countries.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          <div className="flex items-center justify-center rounded-2xl bg-white px-4 py-3 font-bold text-purple-700 shadow-sm">
            {filteredUniversities.length} университет
          </div>

        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredUniversities.map(
            (university) => (
              <article
                key={university.id}
                className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                  🎓
                </div>

                <h2 className="mt-4 min-h-[56px] text-lg font-bold text-slate-900">
                  {university.name}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  📍 {university.city},{" "}
                  {university.country}
                </p>

                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-semibold text-purple-600 hover:text-purple-800"
                >
                  Ресми сайт →
                </a>

              </article>
            )
          )}

        </div>

        {filteredUniversities.length === 0 && (
          <div className="mt-8 rounded-3xl bg-white p-12 text-center shadow-sm">

            <div className="text-5xl">
              🔎
            </div>

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              Университет табылмады
            </h2>

            <p className="mt-2 text-slate-500">
              Іздеу сөзін немесе ел сүзгісін өзгертіп көріңіз.
            </p>

          </div>
        )}

      </section>

    </main>
  );
}