"use client";

import type React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <ul className="menu text-lg bg-base-100 min-h-full w-80 p-4">
      <SideLink href="/">Home</SideLink>
      <div className="divider text-neutral-content">Reamps</div>
      <SideLink href="/2025">2025</SideLink>
    </ul>
  );
}

function SideLink({
  href,
  children,
}: Readonly<{ href: string; children: React.ReactNode }>) {
  return (
    <li>
      <Link href={href} onClick={closeDrawer}>
        {children}
      </Link>
    </li>
  );
}

function closeDrawer() {
  document.getElementById("drawer-main")!.click();
}
