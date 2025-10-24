import { sanityOffre } from "../data/destination";
import { sanityDestination } from "../data/destination";

export const getProjectByDestination = async (destination) => {
  const sanityDestinations = await sanityDestination();
  const formattedDestination = destination?.trim();
  if (!formattedDestination) return {};
  return sanityDestinations.find(
    (p) => p.slug?.current?.toLowerCase()?.trim() === formattedDestination,
  );
};
export const getOffersBySlug = async (slug) => {
  const sanityOffres = await sanityOffre();
  const formattedSlug = slug?.trim();
  if (!formattedSlug) return {};
  return sanityOffres.filter(
    (p) => p.destinationSlug?.toLowerCase()?.trim() === formattedSlug,
  );
};
export const getAboutOffer = async (slug) => {
  const sanityAboutOffer = await sanityOffre();
  const formattedSlug = slug?.trim();
  if (!formattedSlug) return {};
  return sanityAboutOffer.find(
    (p) => p.slug?.current?.toLowerCase()?.trim() === formattedSlug,
  );
};
