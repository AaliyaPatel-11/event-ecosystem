"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Bell, Search, ChevronRight, Command } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// ─── Breadcrumbs ──────────────────────────────────────────────────────────────

const SEGMENT_LABELS: Record<string, string> = {
  organizer:     "Organizer",
  events:        "Events",
  registrations: "Registrations",
  volunteers:    "Volunteers",
  sponsors:      "Sponsors",
  certificates:  "Certificates",
  announcements: "Announcements",
  analytics:     "Analytics",
  settings:      "Settings",
};

function Breadcrumbs() {
  const pathname = usePathname();

  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((seg) => SEGMENT_LABELS[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1));

  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-1.5">
      {crumbs.map((label, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <ChevronRight size={13} className="shrink-0 text-zinc-600" strokeWidth={2} />
          )}
          <span
            className={cn(
              "text-[13px] font-medium leading-none",
              i === crumbs.length - 1 ? "text-zinc-100" : "text-zinc-500"
            )}
          >
            {label}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
}

// ─── Search trigger (command-palette style) ───────────────────────────────────

function SearchTrigger() {
  return (
    <button
      className={cn(
        "group hidden sm:flex items-center gap-2",
        "h-8 rounded-md border border-white/[0.07] bg-white/[0.04]",
        "px-3 text-[12px] text-zinc-500",
        "transition-colors hover:border-white/[0.12] hover:bg-white/[0.07] hover:text-zinc-300",
        "focus:outline-none"
      )}
    >
      <Search size={12} strokeWidth={2.5} />
      <span>Search…</span>
      <span className="ml-4 flex items-center gap-0.5 rounded border border-white/[0.08] bg-white/[0.06] px-1 py-0.5 text-[10px] text-zinc-600">
        <Command size={9} />
        <span>K</span>
      </span>
    </button>
  );
}

// ─── Notification button ──────────────────────────────────────────────────────

function NotificationButton() {
  return (
    <button
      aria-label="Notifications"
      className={cn(
        "relative flex h-8 w-8 items-center justify-center rounded-md",
        "text-zinc-500 transition-colors",
        "hover:bg-white/[0.06] hover:text-zinc-200",
        "focus:outline-none"
      )}
    >
      <Bell size={15} strokeWidth={2} />
      {/* Unread indicator */}
      <span className="absolute right-[7px] top-[7px] h-[6px] w-[6px] rounded-full bg-violet-500 ring-[1.5px] ring-[#0f0f11]" />
    </button>
  );
}

// ─── User avatar menu ─────────────────────────────────────────────────────────

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2.5 rounded-md px-2 py-1",
            "text-zinc-300 transition-colors",
            "hover:bg-white/[0.06]",
            "focus:outline-none"
          )}
        >
          <Avatar className="h-7 w-7">
            <AvatarImage src="" alt="User avatar" />
            <AvatarFallback className="bg-violet-600/30 text-[11px] font-semibold text-violet-200">
              EO
            </AvatarFallback>
          </Avatar>
          <span className="hidden text-[13px] font-medium sm:block">Organizer</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-52 rounded-xl border border-white/[0.08] bg-zinc-900/95 p-1 shadow-2xl shadow-black/50 backdrop-blur-md"
      >
        <DropdownMenuLabel className="px-2 py-1.5 text-[11px] font-normal text-zinc-500">
          workspace@eventsplatform.io
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-1 bg-white/[0.06]" />

        {["Profile", "Billing", "Team", "Settings"].map((label) => (
          <DropdownMenuItem
            key={label}
            className="cursor-pointer rounded-lg px-2 py-1.5 text-[13px] text-zinc-300 focus:bg-white/[0.06] focus:text-white"
          >
            {label}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator className="my-1 bg-white/[0.06]" />
        <DropdownMenuItem className="cursor-pointer rounded-lg px-2 py-1.5 text-[13px] text-red-400 focus:bg-red-500/10 focus:text-red-300">
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function DashboardNavbar() {
  return (
    /*
     * h-14 = 56 px — matches the sidebar's logo row height exactly so the
     * horizontal border lines up perfectly.
     * The parent flex-col gives this 56 px, content area gets the rest.
     */
    <header
      className={cn(
        "flex h-14 shrink-0 items-center justify-between",
        "border-b border-white/[0.06] bg-[#0c0c0e]/80",
        "px-6 backdrop-blur-sm"
      )}
    >
      {/* Left ── breadcrumbs */}
      <Breadcrumbs />

      {/* Right ── actions */}
      <div className="flex items-center gap-1.5">
        <SearchTrigger />

        {/* Thin divider */}
        <div className="mx-1.5 h-5 w-px bg-white/[0.08]" />

        <NotificationButton />
        <UserMenu />
      </div>
    </header>
  );
}