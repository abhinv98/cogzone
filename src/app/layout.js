// src/app/layout.js

"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { initializeTheme, toggleTheme } from "../utils/themeToggle";
// import Home from "./page";
import Overview from "../pages/overview";
import Settings from "../pages/settings";
import Profile from "../pages/profile";
import AffiliateStatus from "../pages/affiliateStatus";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [activePage, setActivePage] = useState("overview");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    initializeTheme();
    setTheme(document.body.getAttribute("data-theme"));
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    toggleTheme();
    setTheme(document.body.getAttribute("data-theme"));
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "overview":
        return <Overview />;
      case "settings":
        return <Settings />;
      case "profile":
        return <Profile />;
      case "affiliateStatus":
        return <AffiliateStatus />;
      default:
        return <Overview />;
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar setActivePage={setActivePage} activePage={activePage} />
          <div className="flex-1 flex flex-col">
            <Navbar
              activePage={activePage}
              toggleTheme={handleToggleTheme}
              theme={theme}
            />
            <main className="flex-grow p-4">{renderActivePage()}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
