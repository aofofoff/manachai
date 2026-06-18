"use client";

import { useState, useEffect } from "react";

type Hours = { open: number; close: number };

// Indexed by JS getDay(): 0 = Sunday … 6 = Saturday. Hours in 24h decimal.
const SCHEDULES: Record<"shop" | "cafe", Hours[]> = {
  shop: Array.from({ length: 7 }, () => ({ open: 8, close: 18 })),
  cafe: [
    { open: 8, close: 18 }, // Sun
    { open: 8, close: 18 }, // Mon
    { open: 8, close: 18 }, // Tue
    { open: 8, close: 18 }, // Wed
    { open: 8, close: 18 }, // Thu
    { open: 8, close: 19 }, // Fri
    { open: 8, close: 19 }, // Sat
  ],
};

export function OpenStatus({ variant }: { variant: "shop" | "cafe" }) {
  // null until mounted so server and client render the same (no hydration jump).
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const compute = () => {
      const bkk = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
      );
      const today = SCHEDULES[variant][bkk.getDay()];
      const hour = bkk.getHours() + bkk.getMinutes() / 60;
      setOpen(hour >= today.open && hour < today.close);
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, [variant]);

  if (open === null) return null;

  return (
    <span className={open ? "open-badge open-badge--open" : "open-badge"}>
      <span className="open-dot" aria-hidden="true" />
      {open ? "เปิดอยู่ · Open now" : "ปิดแล้ว · Closed now"}
    </span>
  );
}
