"use client"; // allows React hooks

import { useState } from "react";

export default function Calculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [down, setDown] = useState(60000);
  const [rate, setRate] = useState(4);
  const [years, setYears] = useState(30);

  const monthlyPrincipal =
    (homePrice - down) *
    (rate / 100 / 12) /
    (1 - Math.pow(1 + rate / 100 / 12, -years * 12));

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Mortgage Calculator
      </h1>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <label>
          Home Price:
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </label>

        <label>
          Down Payment:
          <input
            type="number"
            value={down}
            onChange={(e) => setDown(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </label>

        <label>
          Interest Rate (%):
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </label>

        <label>
          Loan Term (years):
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Estimated Monthly Payment</h2>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          ${monthlyPrincipal ? monthlyPrincipal.toFixed(2) : "—"}
        </p>
      </div>
    </main>
  );
}