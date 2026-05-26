"use client";

import * as React from "react";
import { DashboardSidebar, SidebarContext } from "@/components/dashboard/dashboard-sidebar";
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {/*
       * Root shell:
       *  - fixed viewport height, no overflow on the shell itself
       *  - flex-row so sidebar and main column sit side-by-side
       */}
      <div className="flex h-screen w-screen overflow-hidden bg-[#0c0c0e]">

        {/* ── Fixed-width sidebar (width is owned here via CSS var) ── */}
        <DashboardSidebar />

        {/*
         * Main column:
         *  - flex-1 fills remaining horizontal space
         *  - flex-col so navbar (fixed height) stacks above scrollable content
         *  - min-w-0 prevents flex children from blowing out the column
         */}
        <div className="flex flex-1 flex-col min-w-0 overflow-hidden">

          {/* ── Navbar: fixed 56px height, never scrolls ── */}
          <DashboardNavbar />

          {/*
           * Content well:
           *  - flex-1 fills remaining vertical space below navbar
           *  - overflow-y-auto makes ONLY this region scroll
           */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <div
              className="min-h-full p-8"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            >
              {children}
            </div>
          </main>

        </div>
      </div>
    </SidebarContext.Provider>
  );
}