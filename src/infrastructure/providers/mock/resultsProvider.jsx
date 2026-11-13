import CONSTITUENCIES_DATA from "@/data/constituencies.js";

/**
 * Get overall results summary for a given year.
 */
export async function getResultsSummary(year = 2026) {
  await delay(200);
  const declared = CONSTITUENCIES_DATA.filter((c) => c.status === "Won").length;
  const partyWise = CONSTITUENCIES_DATA.filter(
    (c) => c.status === "Won",
  ).reduce((acc, c) => {
    acc[c.leading.party] = (acc[c.leading.party] || 0) + 1;
    return acc;
  }, {});
  return {
    year,
    totalSeats: 234,
    declared,
    pending: CONSTITUENCIES_DATA.filter((c) => c.status === "Pending").length,
    live: CONSTITUENCIES_DATA.filter((c) => c.status === "Live").length,
    partyWise,
  };
}
