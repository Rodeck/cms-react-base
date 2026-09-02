import Link from "next/link";
import PromoVideo from "@/components/PromoVideo";

const services = [
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Sprzedaż domów",
    description:
      "Gotowe domy na sprzedaż w atrakcyjnych lokalizacjach. Nowe budownictwo z gwarancją jakości.",
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
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Wykończenia pod klucz",
    description:
      "Profesjonalne wykończenia pod klucz. Malowanie, układanie podłóg, montaż kuchni i łazienek.",
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Budowa domów",
    description:
      "Kompleksowa budowa domów jednorodzinnych od fundamentów po dach. Nowoczesne technologie i sprawdzone materiały.",
  },
];

const stats = [
  { number: "30+", label: "Lat doświadczenia" },
  { number: "200+", label: "Zrealizowanych projektów" },
  { number: "150+", label: "Zadowolonych klientów" },
  { number: "50+", label: "Sprzedanych domów" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-gray-100">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-7">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <span className="inline-flex items-center text-sm font-medium text-amber-700 uppercase tracking-wide mb-6">
                Budujemy z pasją od 1995 roku
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Twój wymarzony dom
                <span className="block text-gray-500">w profesjonalnych rękach</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Specjalizujemy się w budowie i sprzedaży domów oraz wykończeniach
                pod klucz. Każdy projekt realizujemy z najwyższą starannością
                i dbałością o detale — od fundamentów po gotowy do zamieszkania dom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt?service=Wycena%20prac&message=Dzie%C5%84%20dobry%2C%20prosz%C4%99%20o%20bezp%C5%82atn%C4%85%20wycen%C4%99%20prac."
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors"
                >
                  Bezpłatna wycena
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
                <Link
                  href="/domy-na-sprzedaz"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Zobacz ofertę
                </Link>
              </div>
            </div>
            <div className="hidden lg:block rounded-3xl overflow-hidden">
              <img
                src="/main-page-image.jpg"
                alt="Nowoczesny dom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Houses for Sale Preview */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Oferta specjalna
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  Gotowe domy na sprzedaż
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Odkryj naszą ofertę domów w atrakcyjnych lokalizacjach —
                  gotowych do zamieszkania lub do samodzielnego wykończenia.
                </p>
                <Link
                  href="/domy-na-sprzedaz"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  Zobacz ofertę
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
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/domy-na-sprzedaz"
                  className="block aspect-[4/3] bg-gray-700 rounded-2xl overflow-hidden"
                >
                  <img
                    src="/dom-1.jpg"
                    alt="Dom na sprzedaż 1"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link
                  href="/domy-na-sprzedaz"
                  className="block aspect-[4/3] bg-gray-700 rounded-2xl overflow-hidden"
                >
                  <img
                    src="/image-blizniak.webp"
                    alt="Dom na sprzedaż 2"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Endorsement Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-3xl overflow-hidden bg-black">
              <PromoVideo />
            </div>
            <div>
              <span className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full mb-6">
                Rekomendacja
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Polecana przez znanego
                <span className="block text-gray-500">żużlowca – Mistrza Polski</span>
              </h2>
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 italic mb-6">
                &ldquo;Jeżyk buduje, Pawełczak rekomenduje&rdquo;
              </blockquote>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nasza firma cieszy się zaufaniem znanych sportowców. Jakość
                naszych domów i profesjonalizm wykonania doceniają nawet
                najbardziej wymagający klienci.
              </p>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <p className="font-semibold text-gray-900 text-lg">
                  Maks Pawełczak
                </p>
                <p className="text-gray-500">Żużlowiec</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-700 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-400">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">
              Nasze usługi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Co oferujemy
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Budujemy, wykańczamy i sprzedajemy domy gotowe do zamieszkania.
              Od projektu po klucze w Twojej ręce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-amber-600 transition-all duration-300"
              >
                <div className="text-gray-900 group-hover:text-white transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Masz pytania? Skontaktuj się z nami
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Chętnie odpowiemy na wszystkie pytania i przygotujemy bezpłatną wycenę
            dla Twojego projektu. Zadzwoń lub napisz do nas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+48530222266"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +48 530-222-266
            </a>
            <Link
              href="/kontakt?service=Inne&message=Dzie%C5%84%20dobry%2C%20prosz%C4%99%20o%20kontakt%20w%20sprawie%20mojego%20zapytania."
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
