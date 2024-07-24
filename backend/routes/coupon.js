import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";

dotenv.config();

const router = express.Router();

function generateUniqueIdentifier(prefix) {
  return `${prefix}_${Math.random().toString(36).substring(2, 11)}`;
}

router.post("/insertCoupon", async (req, res) => {
  const uniqueName = generateUniqueIdentifier("NAME");
  const uniqueCode = generateUniqueIdentifier("CODE");

  const couponData = {
    specification: {
      name: uniqueName,
      code: uniqueCode,
      active: true,
      startTime: new Date().getTime(),
      usageLimit: 100,
      expirationTime: new Date("2024-12-30T23:59:59Z").getTime(),
      scope: { namespace: "stores" },
      limitedToOneItem: true,
      percentOffRate: 10,
    },
  };

  try {
    const response = await fetch("https://www.wixapis.com/stores/v2/coupons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.WIX_API_KEY}`,
        "wix-site-id": process.env.WIX_SITE_ID,
      },
      body: JSON.stringify(couponData),
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;

