// src/app/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import AppLayout from "@/Layout";
import Home from "@/Home";
import Results from "@/Results";
import Constituencies from "@/Constituencies";
import ConstituencyDetail from "@/ConstituencyDetail";
import ComingSoon from "@/ComingSoon";
import CandidateDirectory from "@/CandidateDirectory";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/constituencies" element={<Constituencies />} />
        <Route path="/constituencies/:id" element={<ConstituencyDetail />} />
        <Route path="/candidates" element={<CandidateDirectory />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<ComingSoon title="About TN Votes" />} />
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Route>
    </Routes>
  );
}
