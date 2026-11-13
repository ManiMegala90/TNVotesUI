import CONSTITUENCIES_DATA from "@/data/constituencies.js";
import DIRECTORY_DATA from "@/data/constituenciesDirectory.js";

const detailModules = import.meta.glob("../../../../mocks/constituencies/*.json", {
  eager: true,
  import: "default",
});

const DETAIL_INDEX = Object.values(detailModules).reduce((acc, moduleData) => {
  const payload = Array.isArray(moduleData) ? moduleData[0] : moduleData;
  if (payload?.id != null) {
    acc[Number(payload.id)] = payload;
  }
  return acc;
}, {});

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

function normalizeCandidate(candidate, fallbackConstituency) {
  if (!candidate || typeof candidate !== "object") return null;

  const criminalCasesValue =
    candidate.criminalCasesCount ??
    candidate.criminalCases ??
    0;
  const criminalCases =
    typeof criminalCasesValue === "number"
      ? criminalCasesValue
      : Number(String(criminalCasesValue).match(/\d+/)?.[0] || 0);

  return {
    ...candidate,
    id: candidate.id,
    name: candidate.name || "Candidate",
    party: candidate.party || candidate.partyShort || "IND",
    partyShort: candidate.partyShort || candidate.party || "IND",
    partyFull: candidate.partyFull || candidate.party || "Independent",
    partyColor: candidate.partyColor || "#94a3b8",
    photoUrl: candidate.photoUrl || null,
    movableAssets: candidate.movableAssets || candidate.assets || "Not Declared",
    immovableAssets: candidate.immovableAssets || "Not Declared",
    assets: candidate.assets || candidate.movableAssets || "Not Declared",
    assetsRaw: candidate.assetsRaw || 0,
    criminalCases,
    criminalCasesCount: criminalCases,
    education: candidate.education || "Not Declared",
    age: candidate.age || null,
    gender: candidate.gender || null,
    symbol: candidate.symbol || null,
    verificationStatus: candidate.verificationStatus || "pending",
    constituency: candidate.constituency || fallbackConstituency || "Tamil Nadu",
  };
}

function normalizeConstituencyDetail(detail, base) {
  if (!detail || typeof detail !== "object") return null;

  return {
    ...base,
    ...detail,
    id: Number(detail.id ?? base?.id),
    number: detail.number || String(base?.id || detail.id).padStart(3, "0"),
    name: detail.name || base?.name || "Constituency",
    nameTamil: detail.nameTamil || detail.name || base?.name || "Constituency",
    district: detail.district || base?.district,
    region: detail.region || base?.region,
    classification: detail.classification || base?.tag || "Mixed Urban-Rural",
    totalVoters: detail.totalVoters ?? base?.votes ?? null,
    genderRatio: detail.genderRatio || null,
    pollingStations: detail.pollingStations ?? null,
    incumbent: detail.incumbent || null,
    demographics: detail.demographics || null,
    candidates: (detail.candidates || []).map((candidate) =>
      normalizeCandidate(candidate, detail.name || base?.name)
    ),
    history: Array.isArray(detail.history) ? detail.history : [],
  };
}

function getConstituencyRecord(id) {
  const numericId = Number(id);
  const base = CONSTITUENCIES_DATA.find((c) => c.id === numericId);
  if (!base) return null;

  const detail = normalizeConstituencyDetail(DETAIL_INDEX[numericId], base);
  if (!detail) return base;

  return {
    ...base,
    ...detail,
    id: base.id,
    name: detail.name || base.name,
    district: detail.district || base.district,
    region: detail.region || base.region,
    candidates: detail.candidates || [],
  };
}

export async function getConstituencies() {
  await delay(280);
  return CONSTITUENCIES_DATA.map((item) => getConstituencyRecord(item.id));
}

export async function getConstituencyById(id) {
  await delay(200);
  const item = getConstituencyRecord(id);
  if (!item) throw new Error(`Constituency #${id} not found`);
  return item;
}

export async function getSpotlightConstituencies() {
  await delay(180);
  return CONSTITUENCIES_DATA.filter((c) => c.isSpotlight).map((item) => getConstituencyRecord(item.id));
}

/**
 * Get rich detail data for a constituency (incumbent, demographics, candidates, history).
 * Phase 2: return fetchJSON(`/constituencies/${id}/detail`);
 */
export async function getConstituencyDetail(id) {
  await delay(300);
  const numericId = Number(id);
  const detail = DETAIL_INDEX[numericId];

  if (!detail) {
    const base = CONSTITUENCIES_DATA.find((c) => c.id === numericId);
    if (!base) throw new Error(`Constituency ${id} not found`);
    return {
      ...base,
      number: String(base.id).padStart(3, "0"),
      nameTamil: base.name,
      classification: base.region,
      totalVoters: null,
      genderRatio: null,
      pollingStations: null,
      incumbent: null,
      demographics: null,
      candidates: [],
      history: [],
    };
  }

  return detail;
}

export async function getDirectoryData() {
  await delay(250);
  return DIRECTORY_DATA;
}
