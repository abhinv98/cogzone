// src/components/UserActivityFeed.js

import { useState, useEffect } from "react";

const UserActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Mock data for demonstration; replace with actual data fetching logic
    const fetchData = () => {
      const mockActivities = [
        {
          id: 1,
          type: "Promotion",
          message: "Promoted 5 products",
          time: "2 mins ago",
        },
        {
          id: 2,
          type: "Coupon",
          message: "Coupon code XYZ used 10 times",
          time: "10 mins ago",
        },
        {
          id: 3,
          type: "Profit",
          message: "Generated $200 in profit",
          time: "1 hour ago",
        },
        {
          id: 4,
          type: "Status",
          message: "Achieved Gold status",
          time: "3 hours ago",
        },
      ];
      setActivities(mockActivities);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Recent Activities
      </h2>
      <ul className="space-y-2">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start space-x-2">
            <div
              className={`p-2 rounded-full ${
                activity.type === "Promotion"
                  ? "bg-blue-500"
                  : activity.type === "Coupon"
                  ? "bg-green-500"
                  : activity.type === "Profit"
                  ? "bg-yellow-500"
                  : "bg-purple-500"
              }`}
            >
              <span className="text-white">{activity.type[0]}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {activity.message}
              </p>
              <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                {activity.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivityFeed;
