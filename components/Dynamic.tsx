import React from "react";
import dynamic from "next/dynamic";

function Dynamic({ children }: Readonly<{ children: React.ReactNode }>) {
  return <React.Fragment>{children}</React.Fragment>;
}

export default dynamic(() => Promise.resolve(Dynamic), { ssr: false });
