import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { PortableTextBlock } from "@portabletext/types";

export interface ListingLocation {
  street?: string;
  city: string;
  postCode?: string;
  region?: string;
  country?: string;
}

export interface ListingDetails {
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  lotSize?: number;
  yearBuilt?: number;
  floors?: number;
}

export type ListingStatus =
  | "for-sale"
  | "coming-soon"
  | "sold"
  | "pending"
  | "reserved";
export type PropertyType = "house" | "apartment" | "townhouse" | "land" | "commercial";

export type ListingFeature =
  | "garage"
  | "garden"
  | "balcony"
  | "terrace"
  | "basement"
  | "air-conditioning"
  | "central-heating"
  | "fireplace"
  | "security-system"
  | "heat-pump"
  | "floor-heating"
  | "water-softener";

export interface ListingVideo {
  _key: string;
  url?: string;
  youtubeUrl?: string;
  title?: string;
}

export interface Listing {
  _id: string;
  _type: "listing";
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  price: number;
  status: ListingStatus;
  propertyType?: PropertyType;
  location: ListingLocation;
  details?: ListingDetails;
  features?: ListingFeature[];
  description?: PortableTextBlock[];
  mainImage?: SanityImageSource;
  gallery?: SanityImageSource[];
  videos?: ListingVideo[];
  publishedAt?: string;
}

// Feature translations for Polish UI
export const featureTranslations: Record<ListingFeature, string> = {
  garage: "Garaż",
  garden: "Ogród",
  balcony: "Balkon",
  terrace: "Taras",
  basement: "Piwnica",
  "air-conditioning": "Klimatyzacja",
  "central-heating": "Ogrzewanie centralne",
  fireplace: "Kominek",
  "security-system": "System alarmowy",
  "heat-pump": "Pompa ciepła",
  "floor-heating": "Ogrzewanie podłogowe",
  "water-softener": "Zmiękczacz wody",
};

// Status translations for Polish UI
export const statusTranslations: Record<ListingStatus, string> = {
  "for-sale": "Dostępny",
  "coming-soon": "Wkrótce dostępny",
  sold: "Sprzedany",
  pending: "W trakcie",
  reserved: "Rezerwacja",
};

// Property type translations for Polish UI
export const propertyTypeTranslations: Record<PropertyType, string> = {
  house: "Dom",
  apartment: "Mieszkanie",
  townhouse: "Bliźniak",
  land: "Działka",
  commercial: "Komercyjny",
};
