"use client";

import { useEffect, useState } from "react";

export function useTextStore<V extends string>(key: string, defaultValue: V) {
  const [value, setValue] = useState(
    () => (localStorage.getItem(key) ?? defaultValue) as V,
  );
  useEffect(() => localStorage.setItem(key, value), [key, value]);
  return [value, setValue] as const;
}
