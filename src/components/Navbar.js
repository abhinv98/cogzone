import { useState } from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Notifications from "./Notifications";

const Navbar = ({ activePage, toggleTheme, theme }) => {
  const pageTitles = {
    overview: "Overview",
    settings: "Settings",
    profile: "Profile",
    affiliateStatus: "Affiliate Status",
  };

  const breadcrumbs = {
    overview: "Cogzone / Overview",
    settings: "Cogzone / Settings",
    profile: "Cogzone / Profile",
    affiliateStatus: "Cogzone / Affiliate Status",
  };

  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <div className="navbar m-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-between transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        <div>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {breadcrumbs[activePage]}
          </p>
          <h1
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {pageTitles[activePage]}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <div className="relative">
          <FaBell
            className="text-xl cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 z-10">
              <Notifications />
            </div>
          )}
        </div>
        <div className="user-menu flex items-center space-x-2 cursor-pointer">
          <img
            src="/path-to-user-avatar.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full shadow-md transition-transform transform hover:scale-110"
          />
          <FaChevronDown className="text-xl hover:text-gray-500 dark:hover:text-gray-300 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
