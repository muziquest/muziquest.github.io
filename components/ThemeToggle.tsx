"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Dynamic from "@/components/Dynamic";

type Theme = "light" | "dark";

function Toggle() {
  const [theme, setTheme] = useState(
    () => (localStorage.getItem("theme") ?? "light") as Theme,
  );
  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return (
    <label className="btn btn-ghost swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value="dark"
        checked={theme === "dark"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <SunIcon className="swap-off h-5 w-5" />
      <MoonIcon className="swap-on w-5 h-5" />
    </label>
  );
}

export default function ThemeToggle() {
  return (
    <Dynamic>
      <Toggle />
    </Dynamic>
  );
}
