import { Destination } from "../data/destination";
import { Offers } from "../data/destination";
export const getProjectByDestination = (destination) => {
  const formattedDestination = destination?.trim();
  if (!formattedDestination) return {};
  return Destination().find(
    (p) => p.slug?.toLowerCase()?.trim() === formattedDestination,
  );
};
export const getOffersBySlug = (slug) => {
  const formattedSlug = slug?.trim();
  if (!formattedSlug) return {};
  return Offers().filter(
    (p) => p.destinationSlug?.toLowerCase()?.trim() === formattedSlug,
  );
};
export const getAboutOffer = (slug) => {
  const formattedSlug = slug?.trim();
  if (!formattedSlug) return {};
  return Offers().find((p) => p.slug?.toLowerCase()?.trim() === formattedSlug);
};
