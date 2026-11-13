import CONSTITUENCIES_DATA from "@/data/constituencies.js";
//  Search

/**
 * Global full-text search across constituencies.
 */
export async function globalSearch(query) {
  await delay(150);
  const q = query.toLowerCase();
  return CONSTITUENCIES_DATA.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.district.toLowerCase().includes(q) ||
      c.leading.name.toLowerCase().includes(q) ||
      c.leading.party.toLowerCase().includes(q),
  );
}
