// hooks/useCandidate.js
// ─── Filter, search, sort, and paginate candidate data ────────────────────────

import { useState, useMemo } from "react";
import ALL_CANDIDATES from "../../mocks/candidates.json";

const PAGE_SIZE = 9;

export const PARTIES = ["All Parties", "DMK", "AIADMK", "BJP", "INC"];

export function useCandidate() {
  const [search, setSearch] = useState("");
  const [party, setParty] = useState("All Parties");
  const [page, setPage] = useState(1);

  // ── Derived ───────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ALL_CANDIDATES.filter((c) => {
      const matchesParty = party === "All Parties" || c.party === party;
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.constituency.toLowerCase().includes(q) ||
        c.party.toLowerCase().includes(q);
      return matchesParty && matchesSearch;
    });
  }, [search, party]);

  const total = filtered.length;
  const grandTotal = ALL_CANDIDATES.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const hasActive = search !== "" || party !== "All Parties";

  function resetFilters() {
    setSearch("");
    setParty("All Parties");
    setPage(1);
  }

  // Reset to page 1 whenever filters change
  function handleSetSearch(val) {
    setSearch(val);
    setPage(1);
  }

  function handleSetParty(val) {
    setParty(val);
    setPage(1);
  }

  return {
    paginated,
    filtered,
    total,
    grandTotal,
    search,
    setSearch: handleSetSearch,
    party,
    setParty: handleSetParty,
    page,
    setPage,
    totalPages,
    resetFilters,
    hasActive,
  };
}
