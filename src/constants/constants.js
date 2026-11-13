// src/utils/constants.js

export const DISTRICTS = [
  "District (38)",
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Salem",
  "Tiruchirappalli",
  "Tirunelveli",
  "Vellore",
  "Erode",
  "Thoothukudi",
  "Tirupur",
  "Dindigul",
  "Thanjavur",
  "Kancheepuram",
  "Villupuram",
  "Cuddalore",
  "Nagapattinam",
  "Pudukkottai",
  "Ramanathapuram",
  "Sivaganga",
  "Virudhunagar",
  "Karur",
  "Namakkal",
  "Dharmapuri",
  "Krishnagiri",
  "Perambalur",
  "Ariyalur",
  "Tiruvarur",
  "Nilgiris",
  "Theni",
  "Tenkasi",
  "Kallakurichi",
  "Ranipet",
  "Tirupattur",
  "Chengalpattu",
  "Mayiladuthurai",
  "The Nilgiris",
  "Tiruvannamalai",
];

export const REGIONS = [
  "Region (All)",
  "North",
  "South",
  "Central",
  "West",
  "East",
];

export const PARTIES = [
  "Party (All)",
  "DMK",
  "AIADMK",
  "BJP",
  "Congress",
  "PMK",
  "VCK",
  "MDMK",
  "MNM",
  "NTK",
];

export const SORT_OPTIONS = [
  { value: "number", label: "Constituency #" },
  { value: "alpha", label: "Name (A–Z)" },
  { value: "candidates", label: "Candidates Count" },
  { value: "votes", label: "Most Votes" },
];

export const STATUS_OPTIONS = ["All", "Won", "Pending", "Live"];

export const STATS = [
  { icon: "🏛️", value: "234", label: "Constituencies" },
  { icon: "👥", value: "1,500+", label: "Candidates" },
  { icon: "🗳️", value: "2026", label: "Election Year" },
  { icon: "📋", value: "6", label: "Major Parties" },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Constituencies", path: "/constituencies" },
  { label: "Candidates", path: "/candidates" },
  { label: "Results", path: "/results" },
  { label: "About", path: "/about" },
];

export const REGION_STYLES = {
  North: { bg: "bg-blue-900/50", text: "text-blue-200" },
  South: { bg: "bg-green-900/50", text: "text-green-200" },
  Central: { bg: "bg-purple-900/50", text: "text-purple-200" },
  West: { bg: "bg-orange-900/50", text: "text-orange-200" },
  East: { bg: "bg-cyan-900/50", text: "text-cyan-200" },
};

export const STATUS_STYLES = {
  Won: { bg: "bg-[#064e3b]", text: "text-[#7efba4]" },
  Pending: { bg: "bg-[#663e00]", text: "text-[#ffddb9]" },
  Live: { bg: "bg-[#1e1b4b]", text: "text-[#a5b4fc]" },
  "Not Started": { bg: "bg-slate-800", text: "text-slate-400" },
};

export const FOOTER_SECTIONS = [
  {
    heading: "Quick Links",
    headingColor: "text-blue-300",
    links: ["Constituency Map", "Candidate Finder", "Affidavit Archive"],
  },
  {
    heading: "Resources",
    headingColor: "text-blue-300",
    links: ["Privacy Policy", "Data Sources", "Terms of Service"],
  },
  {
    heading: "Connect",
    headingColor: "text-blue-300",
    links: ["Contact Us", "Feedback Form"],
  },
];
