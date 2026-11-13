// src/api/index.js
// API SERVICE LAYER — single source of all data access.

import CONSTITUENCIES_DATA from "@/data/constituencies.js";
import DIRECTORY_DATA from "@/data/constituenciesDirectory.js";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.tnvotes.in/v1";

// Helpers

async function fetchJSON(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  return res.json();
}

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

//  Results

//  Rich Constituency Detail (Phase 1: mock, Phase 2: REST)
