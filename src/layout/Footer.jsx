// src/components/layout/Footer.jsx
import { Link } from "react-router-dom";
import { FOOTER_SECTIONS } from "@/constants/constants.js";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t dark:border-slate-800 border-slate-200 dark:bg-[#0F172A] bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="text-xl font-bold mb-4 dark:text-white text-blue-900">
            TN Votes
          </div>
          <p className="text-sm leading-relaxed dark:text-slate-400 text-slate-600">
            The leading non-partisan election data portal for Tamil Nadu.
            Bringing transparency to democracy through data.
          </p>
        </div>
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.heading}>
            <h4 className="font-bold mb-4 dark:text-blue-300 text-blue-900">
              {section.heading}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-sm no-underline transition-colors dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-blue-700"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t dark:border-slate-800 border-slate-200 py-6 text-center">
        <p className="text-xs dark:text-slate-500 text-slate-600">
          © 2026 TN Votes. Data for editorial purposes only.
        </p>
      </div>
    </footer>
  );
}
