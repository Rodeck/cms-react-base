import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { listingBySlugQuery, listingsQuery } from "@/sanity/lib/queries";
import type { Listing } from "@/sanity/types/listing";
import {
  featureTranslations,
  statusTranslations,
  propertyTypeTranslations,
} from "@/sanity/types/listing";
import ImageGallery from "@/components/ImageGallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Revalidate every 60 seconds
export const revalidate = 60;

// Generate static params for all listings
export async function generateStaticParams() {
  const listings = await client.fetch<Listing[]>(listingsQuery);
  return listings.map((listing) => ({
    slug: listing.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = await client.fetch<Listing | null>(listingBySlugQuery, { slug });

  if (!listing) {
    return {
      title: "Nie znaleziono | Jeżyk Remonty",
    };
  }

  return {
    title: `${listing.title} | Domy na sprzedaż | Jeżyk Remonty`,
    description: `${listing.title} - ${listing.location.city}. ${listing.details?.area ? `${listing.details.area} m²` : ""} ${formatPrice(listing.price)}. Gotowy dom na sprzedaż od Jeżyk Remonty.`,
  };
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function getFullLocation(location: Listing["location"]): string {
  const parts = [];
  if (location.street) parts.push(location.street);
  if (location.city) parts.push(location.city);
  if (location.region) parts.push(location.region);
  return parts.join(", ");
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = await client.fetch<Listing | null>(listingBySlugQuery, { slug });

  if (!listing) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
              Strona główna
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/domy-na-sprzedaz" className="text-gray-500 hover:text-gray-900 transition-colors">
              Domy na sprzedaż
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium truncate max-w-[200px]">
              {listing.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Images & Description */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <ImageGallery
                mainImage={listing.mainImage}
                gallery={listing.gallery}
                title={listing.title}
              />

              {/* Title & Location (Mobile) */}
              <div className="lg:hidden">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      listing.status === "for-sale"
                        ? "bg-green-100 text-green-800"
                        : listing.status === "sold"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {statusTranslations[listing.status]}
                  </span>
                  {listing.propertyType && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {propertyTypeTranslations[listing.propertyType]}
                    </span>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {listing.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {getFullLocation(listing.location)}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  {formatPrice(listing.price)}
                </div>
              </div>

              {/* Description */}
              {listing.description && listing.description.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Opis</h2>
                  <div className="prose prose-gray max-w-none">
                    <PortableText value={listing.description} />
                  </div>
                </div>
              )}

              {/* Features */}
              {listing.features && listing.features.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Udogodnienia</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {listing.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl"
                      >
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">
                          {featureTranslations[feature] || feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Details Grid */}
              {listing.details && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Szczegóły nieruchomości
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {listing.details.area && (
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-sm text-gray-500 mb-1">Powierzchnia</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {listing.details.area} m²
                        </div>
                      </div>
                    )}
                    {listing.details.lotSize && (
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-sm text-gray-500 mb-1">Działka</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {listing.details.lotSize} m²
                        </div>
                      </div>
                    )}
                    {listing.details.bedrooms && (
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-sm text-gray-500 mb-1">Pokoje</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {listing.details.bedrooms}
                        </div>
                      </div>
                    )}
                    {listing.details.bathrooms && (
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-sm text-gray-500 mb-1">Łazienki</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {listing.details.bathrooms}
                        </div>
                      </div>
                    )}
                    {listing.details.floors && (
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-sm text-gray-500 mb-1">Piętra</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {listing.details.floors}
                        </div>
                      </div>
                    )}
                    {listing.details.yearBuilt && (
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-sm text-gray-500 mb-1">Rok budowy</div>
                        <div className="text-lg font-semibold text-gray-900">
                          {listing.details.yearBuilt}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                {/* Price Card (Desktop) */}
                <div className="hidden lg:block bg-gray-50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        listing.status === "for-sale"
                          ? "bg-green-100 text-green-800"
                          : listing.status === "sold"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {statusTranslations[listing.status]}
                    </span>
                    {listing.propertyType && (
                      <span className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full">
                        {propertyTypeTranslations[listing.propertyType]}
                      </span>
                    )}
                  </div>
                  <h1 className="text-xl font-bold text-gray-900 mb-2">
                    {listing.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {getFullLocation(listing.location)}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                    {formatPrice(listing.price)}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {listing.details?.area && (
                      <div className="text-center p-3 bg-white rounded-xl">
                        <div className="text-lg font-bold text-gray-900">
                          {listing.details.area} m²
                        </div>
                        <div className="text-xs text-gray-500">Powierzchnia</div>
                      </div>
                    )}
                    {listing.details?.bedrooms && (
                      <div className="text-center p-3 bg-white rounded-xl">
                        <div className="text-lg font-bold text-gray-900">
                          {listing.details.bedrooms}
                        </div>
                        <div className="text-xs text-gray-500">Pokoje</div>
                      </div>
                    )}
                  </div>

                  {listing.status !== "sold" && (
                    <Link
                      href="/kontakt"
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                    >
                      Zapytaj o nieruchomość
                    </Link>
                  )}
                </div>

                {/* Contact Card */}
                <div className="bg-gray-900 text-white rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Zainteresowany?
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Skontaktuj się z nami, aby umówić się na prezentację nieruchomości.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+48123456789"
                      className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Zadzwoń</div>
                        <div className="font-medium">+48 123 456 789</div>
                      </div>
                    </a>
                    <a
                      href="mailto:kontakt@jezykremonty.pl"
                      className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Email</div>
                        <div className="font-medium">kontakt@jezykremonty.pl</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Fixed CTA */}
      {listing.status !== "sold" && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-gray-500">Cena</div>
              <div className="text-xl font-bold text-gray-900">
                {formatPrice(listing.price)}
              </div>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Zapytaj o dom
            </Link>
          </div>
        </div>
      )}

      {/* Back Link */}
      <section className="py-8 bg-gray-50 lg:mb-0 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/domy-na-sprzedaz"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Wróć do listy domów na sprzedaż
          </Link>
        </div>
      </section>
    </>
  );
}
