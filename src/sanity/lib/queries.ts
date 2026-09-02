import { groq } from "next-sanity";

// Fetch all listings ordered by status: for-sale first, then coming-soon, reserved, pending, sold last
export const listingsQuery = groq`
  *[_type == "listing"] | order(
    select(
      status == "for-sale" => 0,
      status == "coming-soon" => 1,
      status == "reserved" => 2,
      status == "pending" => 3,
      status == "sold" => 4
    ) asc,
    publishedAt desc
  ) {
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
    "videos": videos[]{
      _key,
      title,
      "url": file.asset->url,
      youtubeUrl
    },
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
