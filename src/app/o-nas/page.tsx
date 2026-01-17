import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nas | Jeżyk Remonty",
  description:
    "Poznaj firmę Jeżyk Remonty. Ponad 15 lat doświadczenia w budownictwie i remontach. Profesjonalizm i jakość na każdym etapie.",
};

const values = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Jakość",
    description:
      "Stawiamy na najwyższą jakość wykonania. Używamy tylko sprawdzonych materiałów od renomowanych producentów.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Terminowość",
    description:
      "Dotrzymujemy ustalonych terminów. Każdy projekt planujemy precyzyjnie, aby uniknąć niepotrzebnych opóźnień.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Doświadczenie",
    description:
      "Nasz zespół to wykwalifikowani specjaliści z wieloletnim doświadczeniem w branży budowlanej.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Komunikacja",
    description:
      "Jesteśmy zawsze w kontakcie. Regularnie informujemy o postępach prac i odpowiadamy na wszystkie pytania.",
  },
];

const team = [
  {
    name: "Jan Kowalski",
    role: "Właściciel, Kierownik budowy",
    description:
      "Ponad 20 lat doświadczenia w budownictwie. Absolwent Politechniki Warszawskiej.",
  },
  {
    name: "Anna Nowak",
    role: "Projektantka wnętrz",
    description:
      "Specjalistka w projektowaniu nowoczesnych wnętrz. Certyfikowany designer.",
  },
  {
    name: "Piotr Wiśniewski",
    role: "Główny majster",
    description:
      "15 lat doświadczenia w remontach i wykończeniach. Ekspert od instalacji.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
                O firmie
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Jeżyk Remonty
                <span className="block text-gray-500 text-3xl md:text-4xl mt-2">
                  Budujemy z pasją od 2009 roku
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Jesteśmy rodzinną firmą z wieloletnim doświadczeniem w branży
                budowlanej. Specjalizujemy się w budowie domów, remontach
                generalnych oraz sprzedaży gotowych nieruchomości. Naszym celem
                jest dostarczanie usług najwyższej jakości, które spełniają
                oczekiwania nawet najbardziej wymagających klientów.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/realizacje"
                  className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Zobacz nasze realizacje
                </Link>
                <Link
                  href="/kontakt?service=Inne&message=Dzie%C5%84%20dobry%2C%20prosz%C4%99%20o%20kontakt%20w%20sprawie%20wsp%C3%B3%C5%82pracy."
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-3xl placeholder-image">
              <svg
                className="w-24 h-24 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Nasze wartości
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Dlaczego my?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Stawiamy na profesjonalizm, uczciwość i pełne zaangażowanie w
              każdy realizowany projekt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gray-900">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Nasza historia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Ponad 15 lat budowania zaufania
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Firma Jeżyk Remonty została założona w 2009 roku przez rodzinę
                  z wielopokoleniowymi tradycjami budowlanymi. Od samego
                  początku stawialiśmy na jakość i indywidualne podejście do
                  każdego klienta.
                </p>
                <p>
                  Przez lata zrealizowaliśmy ponad 200 projektów - od małych
                  remontów po kompleksowe budowy domów jednorodzinnych. Każdy
                  projekt traktujemy jako wyzwanie i okazję do pokazania naszych
                  umiejętności.
                </p>
                <p>
                  Dziś jesteśmy rozpoznawalną marką w regionie, kojarzoną z
                  profesjonalizmem i solidnością. Nasi klienci polecają nas
                  znajomym i rodzinie, co jest dla nas najlepszą rekomendacją.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">2009</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Początek działalności
                </h3>
                <p className="text-gray-600">
                  Założenie firmy i pierwsze projekty remontowe w Warszawie.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">2015</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Rozszerzenie działalności
                </h3>
                <p className="text-gray-600">
                  Rozpoczęcie budowy domów jednorodzinnych i sprzedaży
                  nieruchomości.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-gray-900 mb-2">2024</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  15 lat na rynku
                </h3>
                <p className="text-gray-600">
                  Ponad 200 zrealizowanych projektów i setki zadowolonych
                  klientów.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na współpracę?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić Twój projekt. Bezpłatnie
            przygotujemy wycenę i przedstawimy propozycję współpracy.
          </p>
          <Link
            href="/kontakt?service=Inne&message=Dzie%C5%84%20dobry%2C%20chcia%C5%82bym%2Fchcia%C5%82abym%20om%C3%B3wi%C4%87%20m%C3%B3j%20projekt."
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Skontaktuj się z nami
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
