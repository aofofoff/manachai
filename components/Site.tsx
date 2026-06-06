"use client";

import { useState } from "react";
import { TopNav } from "./TopNav";
import { NutShop } from "./NutShop";
import { Cafe } from "./Cafe";

type Tab = "nuts" | "cafe";

export function Site() {
  const [tab, setTab] = useState<Tab>("nuts");

  function show(name: Tab) {
    setTab(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Both pages stay mounted so the CSS fade plays and the cafe menu keeps its
  // state; visibility is driven by data-active + hidden, matching the design.
  return (
    <>
      <TopNav active={tab} onTab={show} />

      <main className="page" data-page="nuts" data-active={tab === "nuts"} hidden={tab !== "nuts"}>
        <NutShop />
      </main>

      <main className="page" data-page="cafe" data-active={tab === "cafe"} hidden={tab !== "cafe"}>
        <Cafe />
      </main>
    </>
  );
}
