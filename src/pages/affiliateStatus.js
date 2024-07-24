// src/pages/affiliateStatus.js

import { useState, useEffect } from "react";

const AffiliateStatus = () => {
  const [couponCode, setCouponCode] = useState("");
  const [usageCount, setUsageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateCoupon = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "http://localhost:3001/coupons/insertCoupon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data && data.specification) {
        setCouponCode(data.specification.code);
        setUsageCount(0);
      } else {
        setError("Failed to generate coupon");
      }
    } catch (err) {
      setError("An error occurred");
    }
    setLoading(false);
  };

  const fetchUsage = async () => {
    if (!couponCode) return;
    try {
      const response = await fetch(
        `http://localhost:3001/fetchUsage/${couponCode}`
      );
      const data = await response.json();
      setUsageCount(data.usageCount);
    } catch (err) {
      setError("Failed to fetch usage data");
    }
  };

  useEffect(() => {
    if (couponCode) {
      fetchUsage(); // Fetch immediately when couponCode is set
      const interval = setInterval(fetchUsage, 60000); // Fetch usage every minute
      return () => clearInterval(interval);
    }
  }, [couponCode]);

  useEffect(() => {
    if (couponCode) {
      fetchUsage();
    }
  }, []);

  return (
    <div className="affiliate-status">
      <h1>Affiliate Status</h1>
      <button onClick={generateCoupon} disabled={loading}>
        {loading ? "Generating..." : "Generate Coupon"}
      </button>
      {couponCode && (
        <div>
          <p>Coupon Code: {couponCode}</p>
          <p>Usage Count: {usageCount}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AffiliateStatus;
