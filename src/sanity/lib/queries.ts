import { groq } from "next-sanity";

// Fetch all listings that are for sale or reserved (not sold)
export const listingsQuery = groq`
  *[_type == "listing" && status in ["for-sale", "reserved"]] | order(publishedAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    price,
    status,
    propertyType,
    location,
    details,
    features,
    mainImage,
    publishedAt
  }
`;

// Fetch a single listing by slug
export const listingBySlugQuery = groq`
  *[_type == "listing" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    price,
    status,
    propertyType,
    location,
    details,
    features,
    description,
    mainImage,
    gallery,
    publishedAt
  }
`;

// Fetch featured listings (limit to 3)
export const featuredListingsQuery = groq`
  *[_type == "listing" && status == "for-sale"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    price,
    location,
    details,
    mainImage
  }
`;

// Count available listings
export const listingsCountQuery = groq`
  count(*[_type == "listing" && status == "for-sale"])
`;

// Fetch all realizacje ordered by year (newest first)
export const realizacjeQuery = groq`
  *[_type == "realizacja"] | order(year desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    images,
    projectType,
    year,
    squareMeters,
    description
  }
`;

// Fetch featured realizacje (limit to 3)
export const featuredRealizacjeQuery = groq`
  *[_type == "realizacja"] | order(year desc)[0...3] {
    _id,
    title,
    slug,
    images,
    projectType,
    year,
    squareMeters,
    description
  }
`;

// Fetch realizacje by project type
export const realizacjeByTypeQuery = groq`
  *[_type == "realizacja" && projectType == $projectType] | order(year desc) {
    _id,
    title,
    slug,
    images,
    projectType,
    year,
    squareMeters,
    description
  }
`;

// Fetch a single realizacja by slug
export const realizacjaBySlugQuery = groq`
  *[_type == "realizacja" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    images,
    projectType,
    year,
    squareMeters,
    description
  }
`;

// Count realizacje
export const realizacjeCountQuery = groq`
  count(*[_type == "realizacja"])
`;
