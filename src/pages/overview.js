// src/pages/overview.js

import Overview from "../components/Overview";
import UserActivityFeed from "../components/UserActivityFeed";

export default function OverviewPage() {
  return (
    <div className="container mx-auto space-y-6">
      <Overview />
      <UserActivityFeed />
    </div>
  );
}
