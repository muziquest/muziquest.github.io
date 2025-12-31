import type React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Drawer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="drawer">
      <input id="drawer-main" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <main className="min-h-full p-5 lg:px-50">{children}</main>
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer-main" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}
