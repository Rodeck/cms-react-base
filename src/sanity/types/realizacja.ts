import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ProjectType = "budowa" | "remont" | "wykonczenia";

export type RealizacjaImage = SanityImageSource & {
  _key: string;
  alt?: string;
};

export interface Realizacja {
  _id: string;
  _type: "realizacja";
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  images: RealizacjaImage[];
  projectType: ProjectType;
  year: number;
  squareMeters?: number;
  description: string;
}

// Project type translations for Polish UI
export const projectTypeTranslations: Record<ProjectType, string> = {
  budowa: "Budowa",
  remont: "Remont",
  wykonczenia: "Wykończenia",
};
