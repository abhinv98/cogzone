"use client";

import { useState, useEffect } from "react";
import {
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
  FaUser,
  FaTags,
} from "react-icons/fa";

const Sidebar = ({ setActivePage, activePage }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState({
    avatar: "/path-to-user-avatar.jpg",
    name: "John Doe",
    status: "Gold",
  });

  // Fetch user data (mock implementation)
  useEffect(() => {
    // Replace this with actual data fetching logic
    const fetchUserData = () => {
      // Simulated fetch call
      setTimeout(() => {
        setUser({
          avatar: "/path-to-user-avatar.jpg",
          name: "John Doe",
          status: "Gold",
        });
      }, 1000);
    };

    fetchUserData();
  }, []);

  const menuItems = [
    { name: "Overview", icon: FaChartBar, page: "overview" },
    { name: "Settings", icon: FaCog, page: "settings" },
    { name: "Profile", icon: FaUser, page: "profile" },
    { name: "Affiliate Status", icon: FaTags, page: "affiliateStatus" },
  ];

  return (
    <div
      className={`sidebar h-full ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 ease-in-out bg-gray-800 text-white flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-between p-3">
          {isOpen && <h1 className="text-xl font-bold text-white">MyApp</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white transform transition-transform duration-300"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className="sidebar-menu mt-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`sidebar-menu-item ${
                activePage === item.page ? "active" : ""
              } ${
                !isOpen ? "collapsed" : ""
              } p-2 my-1 rounded transition-all duration-200 cursor-pointer text-white outline-none`}
              onClick={() => setActivePage(item.page)}
            >
              <div
                className={`flex items-center ${
                  isOpen ? "space-x-2" : "justify-center"
                } text-white`}
              >
                <item.icon className="icon text-white" />
                {isOpen && (
                  <span className="text-sm text-white">{item.name}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-700 rounded-lg text-center mb-4 mx-3">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-12 h-12 rounded-full mx-auto"
        />
        {isOpen && (
          <>
            <h2 className="mt-2 text-sm font-semibold text-white">
              {user.name}
            </h2>
            <p className="text-xs text-gray-400">{user.status} Member</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
