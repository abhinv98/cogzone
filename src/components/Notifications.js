import { useState, useEffect } from "react";
import { FaBell, FaTag, FaUserPlus, FaTrophy } from "react-icons/fa";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock data for demonstration; replace with actual data fetching logic
    const fetchNotifications = () => {
      const mockNotifications = [
        {
          id: 1,
          type: "Promotion",
          message: "New product promoted",
          time: "2 mins ago",
          cta: "View Product",
        },
        {
          id: 2,
          type: "Coupon",
          message: "Coupon code used 5 times",
          time: "10 mins ago",
          cta: "View Coupons",
        },
        {
          id: 3,
          type: "Follower",
          message: "New follower added",
          time: "1 hour ago",
          cta: "View Followers",
        },
        {
          id: 4,
          type: "Status",
          message: "Reached Bronze status",
          time: "3 hours ago",
          cta: "View Status",
        },
      ];
      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  const iconMap = {
    Promotion: <FaBell className="text-blue-500" />,
    Coupon: <FaTag className="text-green-500" />,
    Follower: <FaUserPlus className="text-yellow-500" />,
    Status: <FaTrophy className="text-purple-500" />,
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm w-64 notification-container">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex items-start space-x-2">
            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
              {iconMap[notification.type]}
            </div>
            <div>
              <p className="text-sm font-semibold">{notification.message}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
              <button className="mt-1 text-sm text-blue-500 hover:underline">
                {notification.cta}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
