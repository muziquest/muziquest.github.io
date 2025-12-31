"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTextStore } from "@/utils/store";
import Dynamic from "@/components/Dynamic";

type Theme = "light" | "dark";

function Toggle() {
  const [theme, setTheme] = useTextStore<Theme>("theme", "light");

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
