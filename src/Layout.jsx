// app/AppLayout.jsx

import { Outlet } from "react-router-dom";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen dark:bg-[#0F172A] bg-[#faf8ff] dark:text-slate-100 text-[#131b2e] transition-colors duration-200">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
