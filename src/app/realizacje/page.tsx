import { sanityFetch } from "@/sanity/lib/live";
import { realizacjeQuery } from "@/sanity/lib/queries";
import type { Realizacja } from "@/sanity/types/realizacja";
import { RealizacjeContent } from "./RealizacjeContent";

export const metadata = {
  title: "Realizacje | Język Remonty",
  description:
    "Zobacz nasze najlepsze projekty budowlane, remontowe i wykończeniowe. Portfolio realizacji firmy Język Remonty.",
};

export const dynamic = "force-dynamic";

export default async function RealizacjePage() {
  const { data: realizacje } = await sanityFetch<Realizacja[]>({
    query: realizacjeQuery,
  });

  return <RealizacjeContent realizacje={realizacje} />;
}
