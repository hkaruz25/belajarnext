"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteForm = () => {
  const router = useRouter();

  const [series, setSeries] = useState("");
  const [gundam_name, setGundam_Name] = useState("");

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/e9iupnMR3fk2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ series, gundam_name }]),
    });

    router.refresh();
    setSeries("");
    setGundam_Name("");
  }

  return (
    <div>
      <input value={series} onChange={(e) => setSeries(e.target.value)} />
      <textarea value={gundam_name} onChange={(e) => setGundam_Name(e.target.value)}></textarea>
      <button onClick={handleCreateData}>Create</button>
    </div>
  );
};
