// src/hooks/useConstituencies.js
import { useState, useEffect, useMemo, useCallback } from "react";
import { constituencyService } from "@/services/constituencyService.jsx";

export function useConstituencies() {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter state
  const [search, setSearch] = useState("");
  const [filterDistrict, setFilterDistrict] = useState("District (38)");
  const [filterRegion, setFilterRegion] = useState("Region (All)");
  const [filterParty, setFilterParty] = useState("Party (All)");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortBy, setSortBy] = useState("number");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    constituencyService
      .getConstituencies()
      .then((data) => {
        if (!cancelled) {
          setAll(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    return all
      .filter((c) => {
        const q = search.toLowerCase();
        if (
          q &&
          !c.name.toLowerCase().includes(q) &&
          !c.district.toLowerCase().includes(q) &&
          !c.leading.name.toLowerCase().includes(q) &&
          !c.leading.party.toLowerCase().includes(q)
        )
          return false;
        if (filterDistrict !== "District (38)" && c.district !== filterDistrict)
          return false;
        if (filterRegion !== "Region (All)" && c.region !== filterRegion)
          return false;
        if (filterParty !== "Party (All)" && c.leading.party !== filterParty)
          return false;
        if (filterStatus !== "All" && c.status !== filterStatus) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "number") return a.id - b.id;
        if (sortBy === "alpha") return a.name.localeCompare(b.name);
        if (sortBy === "candidates") return b.candidates - a.candidates;
        if (sortBy === "votes") return b.votes - a.votes;
        return 0;
      });
  }, [
    all,
    search,
    filterDistrict,
    filterRegion,
    filterParty,
    filterStatus,
    sortBy,
  ]);

  const resetFilters = useCallback(() => {
    setSearch("");
    setFilterDistrict("District (38)");
    setFilterRegion("Region (All)");
    setFilterParty("Party (All)");
    setFilterStatus("All");
    setSortBy("number");
  }, []);

  const hasActiveFilters =
    search !== "" ||
    filterDistrict !== "District (38)" ||
    filterRegion !== "Region (All)" ||
    filterParty !== "Party (All)" ||
    filterStatus !== "All";

  return {
    all,
    filtered,
    total: all.length,
    loading,
    error,
    search,
    setSearch,
    filterDistrict,
    setFilterDistrict,
    filterRegion,
    setFilterRegion,
    filterParty,
    setFilterParty,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
    resetFilters,
    hasActiveFilters,
  };
}

export function useSpotlight() {
  const [spotlight, setSpotlight] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    constituencyService
      .getSpotlightConstituencies()
      .then((data) => {
        if (!cancelled) {
          setSpotlight(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { spotlight, loading };
}
