import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import couponRouter from "./routes/coupon.js";
import { google } from "googleapis";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/coupons", couponRouter);

const sheets = google.sheets("v4");

const fetchDataFromSheet = async (couponCode) => {
  const auth = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
  );
  auth.setCredentials({
    access_token: process.env.ACCESS_TOKEN,
    refresh_token: process.env.REFRESH_TOKEN,
  });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${process.env.SHEET_NAME}!A1:Z1000`,
    });

    const rows = response.data.values;
    let totalAmount = 0;
    const couponUsageCount = rows.reduce((count, row) => {
      if (row[8] === couponCode) {
        totalAmount += parseFloat(row[6] || 0);
        return count + 1;
      }
      return count;
    }, 0);

    return { couponCode, usageCount: couponUsageCount, totalAmount };
  } catch (err) {
    console.error("The API returned an error: " + err);
    return { couponCode, usageCount: 0, totalAmount: 0 };
  }
};

app.get("/fetchUsage/:couponCode", async (req, res) => {
  const { couponCode } = req.params;
  const { usageCount, totalAmount } = await fetchDataFromSheet(couponCode);
  let rate = 0;
  if (usageCount >= 3000) rate = 0.2;
  else if (usageCount >= 1500) rate = 0.15;
  else if (usageCount >= 500) rate = 0.1;
  else if (usageCount >= 250) rate = 0.075;
  else if (usageCount >= 100) rate = 0.035;
  const promotionalAmount = totalAmount * rate;
  res.json({ couponCode, usageCount, totalAmount, promotionalAmount });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
