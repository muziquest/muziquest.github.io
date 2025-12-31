"use client";

import { useState } from "react";
import type { ReleaseGroup } from "@/components/Card";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import data from "./data.json";

export default function Reamp2025() {
  const [selected, setSelected] = useState<ReleaseGroup | null>(null);

  function cards(xs: ReleaseGroup[]) {
    return (
      <div className="flex justify-around content-center flex-wrap">
        {xs.map((item) => (
          <Card key={item.id} item={item} setSelected={setSelected} />
        ))}
      </div>
    );
  }

  return (
    <>
      <h1>2025 Reamp ▶</h1>

      <h2>Top 5 Albums of 2025</h2>

      {cards(data.top5)}

      <h2>S/o to These!</h2>

      {cards(data.shoutouts)}

      <h2>Top 10 Rotations</h2>

      {cards(data.rotations)}

      <Modal selected={selected} onClose={() => setSelected(null)} />
    </>
  );
}
