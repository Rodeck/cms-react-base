import Link from "next/link";

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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Budowa domów",
    description:
      "Kompleksowa budowa domów jednorodzinnych od fundamentów po dach. Nowoczesne technologie i sprawdzone materiały.",
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
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Remonty generalne",
    description:
      "Kompleksowe remonty mieszkań i domów. Modernizacja instalacji, wymiana okien, docieplenia i więcej.",
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
    title: "Wykończenia wnętrz",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Sprzedaż domów",
    description:
      "Gotowe domy na sprzedaż w atrakcyjnych lokalizacjach. Nowe budownictwo z gwarancją jakości.",
  },
];

const featuredProjects = [
  {
    id: 1,
    title: "Dom jednorodzinny w Warszawie",
    category: "Budowa",
    area: "180 m²",
  },
  {
    id: 2,
    title: "Remont kamienicy na Starym Mieście",
    category: "Remont",
    area: "320 m²",
  },
  {
    id: 3,
    title: "Nowoczesna willa podmiejska",
    category: "Budowa",
    area: "250 m²",
  },
];

const stats = [
  { number: "15+", label: "Lat doświadczenia" },
  { number: "200+", label: "Zrealizowanych projektów" },
  { number: "150+", label: "Zadowolonych klientów" },
  { number: "50+", label: "Sprzedanych domów" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-1/2 h-full placeholder-image opacity-30 rounded-l-3xl">
            <svg
              className="w-32 h-32 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
              Budujemy z pasją od 2009 roku
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Twój wymarzony dom
              <span className="block text-gray-500">w profesjonalnych rękach</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Specjalizujemy się w budowie domów, kompleksowych remontach oraz
              sprzedaży gotowych nieruchomości. Każdy projekt realizujemy z
              najwyższą starannością i dbałością o detale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
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
                href="/realizacje"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
              >
                Zobacz realizacje
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
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
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Nasze usługi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Co oferujemy
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Kompleksowa obsługa w zakresie budownictwa i remontów. Od projektu
              po wykończenie pod klucz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-black transition-all duration-300"
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

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Wybrane realizacje
              </h2>
            </div>
            <Link
              href="/realizacje"
              className="mt-4 md:mt-0 inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
            >
              Zobacz wszystkie
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

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href="/realizacje"
                className="group block"
              >
                <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden mb-4 placeholder-image">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.area}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Houses for Sale Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Oferta specjalna
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Gotowe domy na sprzedaż
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Odkryj naszą ofertę gotowych domów w atrakcyjnych lokalizacjach.
                  Wszystkie nieruchomości są wykończone pod klucz i gotowe do
                  zamieszkania.
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
                <div className="aspect-square bg-gray-700 rounded-2xl placeholder-image">
                  <svg
                    className="w-12 h-12 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="aspect-square bg-gray-700 rounded-2xl placeholder-image mt-8">
                  <svg
                    className="w-12 h-12 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
              </div>
            </div>
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
              href="tel:+48123456789"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
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
              +48 123 456 789
            </a>
            <Link
              href="/kontakt"
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
