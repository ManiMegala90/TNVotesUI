import { useState, useEffect, useMemo } from "react";
import { constituencyService } from "@/services/constituencyService.jsx";

const ITEMS_PER_PAGE = 9;

export function useDirectory() {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Pagination
  const [page, setPage] = useState(1);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    constituencyService
      .getDirectoryData()
      .then((d) => {
        if (!cancelled) {
          setAll(d);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [search, region, sortBy]);

  const filtered = useMemo(() => {
    return all
      .filter((c) => {
        const q = search.toLowerCase();
        if (
          q &&
          !c.name.toLowerCase().includes(q) &&
          !c.district.toLowerCase().includes(q)
        )
          return false;
        if (region !== "All" && c.region !== region) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "voters")
          return (b.totalVoters || 0) - (a.totalVoters || 0);
        if (sortBy === "id") return a.id - b.id;
        return 0;
      });
  }, [all, search, region, sortBy]);

  // Paginated slice — windowed, not cumulative
  const paginated = useMemo(
    () => filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE),
    [filtered, page],
  );

  const resetFilters = () => {
    setSearch("");
    setRegion("All");
    setSortBy("name");
  };

  const hasActive = search !== "" || region !== "All";

  return {
    all,
    filtered,
    paginated,
    loading,
    error,
    search,
    setSearch,
    region,
    setRegion,
    sortBy,
    setSortBy,
    page,
    setPage,
    resetFilters,
    hasActive,
    total: filtered.length,
    grandTotal: all.length,
  };
}
