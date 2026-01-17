import type { Metadata } from "next";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { listingsQuery } from "@/sanity/lib/queries";
import type { Listing } from "@/sanity/types/listing";
import {
  featureTranslations,
  statusTranslations,
} from "@/sanity/types/listing";

export const metadata: Metadata = {
  title: "Domy na sprzedaż | Jeżyk Remonty",
  description:
    "Gotowe domy na sprzedaż od Jeżyk Remonty. Nowe budownictwo, wykończenie pod klucz, atrakcyjne lokalizacje.",
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function getLocationString(location: Listing["location"]): string {
  const parts = [];
  if (location.city) parts.push(location.city);
  if (location.region) parts.push(location.region);
  return parts.join(", ");
}

export default async function HousesForSalePage() {
  const { data: listings } = await sanityFetch<Listing[]>({ query: listingsQuery });
  const availableCount = listings.filter((l) => l.status === "for-sale").length;

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
                Na sprzedaż
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Gotowe domy
                <span className="block text-gray-500">na sprzedaż</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Odkryj naszą ofertę gotowych domów w atrakcyjnych lokalizacjach.
                Wszystkie nieruchomości są wykończone pod klucz i gotowe do
                natychmiastowego zamieszkania. Gwarantujemy wysoką jakość i
                profesjonalne wykonanie.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div>
                  <span className="text-3xl font-bold text-gray-900">
                    {availableCount}
                  </span>
                  <p className="text-gray-500">Dostępnych domów</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <span className="text-3xl font-bold text-gray-900">100%</span>
                  <p className="text-gray-500">Wykończenia</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <span className="text-3xl font-bold text-gray-900">5 lat</span>
                  <p className="text-gray-500">Gwarancji</p>
                </div>
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Houses Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Aktualna oferta
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Wybierz idealny dom dla siebie i swojej rodziny
            </p>
          </div>

          {listings.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Brak dostępnych ofert
              </h3>
              <p className="text-gray-600 mb-6">
                Aktualnie nie mamy domów na sprzedaż. Skontaktuj się z nami, aby
                dowiedzieć się o nadchodzących ofertach.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {listings.map((house) => (
                <Link
                  key={house._id}
                  href={`/domy-na-sprzedaz/${house.slug.current}`}
                  className="block group"
                >
                <article
                  className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="lg:col-span-1 aspect-[4/3] lg:aspect-auto bg-gray-200 relative overflow-hidden">
                      {house.mainImage ? (
                        <img
                          src={urlFor(house.mainImage)
                            .width(600)
                            .height(450)
                            .url()}
                          alt={house.title}
                          className="w-full h-full object-cover min-h-[250px]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center min-h-[250px] placeholder-image">
                          <svg
                            className="w-20 h-20 text-gray-400"
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
                      )}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            house.status === "for-sale"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {statusTranslations[house.status]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex flex-col lg:flex-row justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {getLocationString(house.location)}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {house.title}
                          </h3>

                          {/* Specs */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            {house.details?.area && (
                              <span className="flex items-center gap-1">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                  />
                                </svg>
                                {house.details.area} m²
                              </span>
                            )}
                            {house.details?.lotSize && (
                              <span className="flex items-center gap-1">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                  />
                                </svg>
                                Działka: {house.details.lotSize} m²
                              </span>
                            )}
                            {house.details?.bedrooms && (
                              <span className="flex items-center gap-1">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  />
                                </svg>
                                {house.details.bedrooms} pokoi
                              </span>
                            )}
                            {house.details?.bathrooms && (
                              <span className="flex items-center gap-1">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                  />
                                </svg>
                                {house.details.bathrooms} łazienki
                              </span>
                            )}
                          </div>

                          {/* Features */}
                          {house.features && house.features.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {house.features.map((feature) => (
                                <span
                                  key={feature}
                                  className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full"
                                >
                                  {featureTranslations[feature] || feature}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Price & CTA */}
                        <div className="lg:text-right">
                          <div className="text-3xl font-bold text-gray-900 mb-4">
                            {formatPrice(house.price)}
                          </div>
                          <span
                            className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full group-hover:bg-gray-800 transition-colors"
                          >
                            Zobacz szczegóły
                            <svg
                              className="ml-2 w-4 h-4"
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
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Dlaczego warto kupić od nas?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gray-900"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5 lat gwarancji
              </h3>
              <p className="text-gray-600">
                Na wszystkie nasze domy udzielamy 5-letniej gwarancji
                budowlanej. Twój spokój to nasz priorytet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pod klucz
              </h3>
              <p className="text-gray-600">
                Wszystkie domy są wykończone i gotowe do zamieszkania. Nie
                musisz martwić się o dodatkowe prace.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gray-900"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bez pośredników
              </h3>
              <p className="text-gray-600">
                Kupujesz bezpośrednio od dewelopera. Bez prowizji dla pośrednika
                - oszczędzasz nawet 3% wartości.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Zainteresowany którąś z nieruchomości?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby umówić się na prezentację. Chętnie
            odpowiemy na wszystkie pytania.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+48123456789"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
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
              Zadzwoń teraz
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-colors"
            >
              Wyślij zapytanie
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
