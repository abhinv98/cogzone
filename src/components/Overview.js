// src/components/Overview.js

import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import AreaChartComponent from "./AreaChartComponent";

const Overview = () => {
  const barChartData = [
    { name: "Page A", uv: 4000, pv: 2400 },
    { name: "Page B", uv: 3000, pv: 1398 },
    { name: "Page C", uv: 2000, pv: 9800 },
    { name: "Page D", uv: 2780, pv: 3908 },
    { name: "Page E", uv: 1890, pv: 4800 },
    { name: "Page F", uv: 2390, pv: 3800 },
    { name: "Page G", uv: 3490, pv: 4300 },
  ];

  const lineChartData = [
    { name: "Jan", uv: 4000, pv: 2400 },
    { name: "Feb", uv: 3000, pv: 1398 },
    { name: "Mar", uv: 2000, pv: 9800 },
    { name: "Apr", uv: 2780, pv: 3908 },
    { name: "May", uv: 1890, pv: 4800 },
    { name: "Jun", uv: 2390, pv: 3800 },
    { name: "Jul", uv: 3490, pv: 4300 },
  ];

  const pieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Products Promoted
          </h2>
          <p className="text-2xl text-gray-900 dark:text-gray-100">150</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Profit Generated
          </h2>
          <p className="text-2xl text-gray-900 dark:text-gray-100">₹3,500</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Coupon Codes Used
          </h2>
          <p className="text-2xl text-gray-900 dark:text-gray-100">45</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Current Status
          </h2>
          <p className="text-2xl text-gray-900 dark:text-gray-100">Gold</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Sales Data
          </h2>
          <BarChartComponent data={barChartData} />
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Performance Over Time
          </h2>
          <LineChartComponent data={lineChartData} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Coupon Code Distribution
          </h2>
          <PieChartComponent data={pieChartData} />
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            User Engagement Over Time
          </h2>
          <AreaChartComponent data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
