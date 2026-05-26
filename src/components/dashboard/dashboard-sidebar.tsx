"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  Users,
  Handshake,
  Award,
  Megaphone,
  BarChart3,
  Settings,
  ChevronLeft,
  Zap,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export const SidebarContext = React.createContext<SidebarContextValue>({
  collapsed: false,
  setCollapsed: () => {},
});

export function useSidebar() {
  return React.useContext(SidebarContext);
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

const MAIN_NAV: NavItem[] = [
  { label: "Dashboard",      href: "/organizer",                      icon: LayoutDashboard },
  { label: "Events",         href: "/organizer/manage-events",        icon: CalendarDays },
  { label: "Registrations",  href: "/organizer/registrations",        icon: ClipboardList, badge: 4 },
  { label: "Volunteers",     href: "/organizer/volunteers",           icon: Users },
  { label: "Sponsors",       href: "/organizer/sponsors",             icon: Handshake },
  { label: "Certificates",   href: "/organizer/certificates",         icon: Award },
  { label: "Announcements",  href: "/organizer/announcements",        icon: Megaphone },
  { label: "Analytics",      href: "/organizer/analytics",            icon: BarChart3 },
];

const BOTTOM_NAV: NavItem[] = [
  { label: "Settings", href: "/organizer/settings", icon: Settings },
];

// ─── Width constants (matches Tailwind arbitrary values below) ────────────────
// Collapsed: 64px  |  Expanded: 240px

// ─── NavLink ──────────────────────────────────────────────────────────────────

function NavLink({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  const pathname = usePathname();

  // Exact match for root dashboard, prefix match for sub-pages
  const isActive =
    item.href === "/organizer"
      ? pathname === "/organizer"
      : pathname.startsWith(item.href);

  const Icon = item.icon;

  const linkEl = (
    <Link
      href={item.href}
      className={cn(
        // Base
        "relative flex items-center rounded-md text-[13px] font-medium",
        "transition-colors duration-100 select-none outline-none",
        // Spacing changes when collapsed
        collapsed
          ? "h-9 w-9 justify-center mx-auto"
          : "h-9 w-full gap-3 px-3",
        // Active vs idle
        isActive
          ? [
              "bg-white text-black shadow-lg shadow-white/10",
              // Left accent bar
              "before:absolute before:inset-y-[6px] before:left-0",
              "before:w-[3px] before:rounded-r-full before:bg-violet-500",
            ]
          : "text-zinc-500 hover:bg-white/[0.05] hover:text-white"
      )}
    >
      <Icon
        size={16}
        className={cn(
          "shrink-0",
          isActive ? "text-black" : "text-zinc-500 group-hover:text-zinc-300"
        )}
      />

      {/* Label — hidden when collapsed */}
      {!collapsed && (
        <span className="flex-1 truncate leading-none">{item.label}</span>
      )}

      {/* Badge */}
      {!collapsed && item.badge !== undefined && (
        <span className="ml-auto flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-violet-500/20 px-1.5 text-[10px] font-semibold leading-none text-violet-300">
          {item.badge}
        </span>
      )}

      {/* Collapsed badge dot */}
      {collapsed && item.badge !== undefined && (
        <span className="absolute right-1 top-1 h-[7px] w-[7px] rounded-full bg-violet-500" />
      )}
    </Link>
  );

  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{linkEl}</TooltipTrigger>
        <TooltipContent
          side="right"
          sideOffset={12}
          className="border-white/10 bg-zinc-800/95 text-[12px] text-zinc-100 backdrop-blur-sm"
        >
          {item.label}
          {item.badge !== undefined && (
            <span className="ml-1.5 text-violet-400">({item.badge})</span>
          )}
        </TooltipContent>
      </Tooltip>
    );
  }

  return linkEl;
}

// ─── Section label ────────────────────────────────────────────────────────────

function SectionLabel({ children, collapsed }: { children: string; collapsed: boolean }) {
  if (collapsed) return <div className="my-1 h-px bg-white/[0.06]" />;
  return (
    <p className="mb-1 mt-4 px-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
      {children}
    </p>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export function DashboardSidebar() {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        style={{ width: collapsed ? 64 : 240 }}
        className={cn(
          // Layout
          "relative flex h-screen flex-col",
          "border-r border-white/[0.06]",
          // Background
          "bg-[#0b0b0c]/95 backdrop-blur-xl",
          // Smooth width transition
          "transition-[width] duration-200 ease-in-out",
          // Never shrink below its stated width
          "shrink-0"
        )}
      >
        {/* ── Logo / Brand ─────────────────────────────────────────────────── */}
        <div
          className={cn(
            "flex h-14 shrink-0 items-center border-b border-white/[0.06]",
            collapsed ? "justify-center px-0" : "gap-2.5 px-4"
          )}
        >
          {/* Icon mark */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-black shadow-xl">
           <Zap size={16} strokeWidth={2.5} />
          </div>

          {!collapsed && (
            <span className="text-[15px] font-semibold tracking-tight text-white">
              EVENTORA
            </span>
          )}
        </div>

        {/* ── Main navigation ───────────────────────────────────────────────── */}
        <nav
          className={cn(
            "flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-3",
            collapsed ? "px-[10px]" : "px-3",
            // Custom thin scrollbar
            "scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
          )}
        >
          <SectionLabel collapsed={collapsed}>Menu</SectionLabel>

          <div className="flex flex-col gap-0.5">
            {MAIN_NAV.map((item) => (
              <NavLink key={item.href} item={item} collapsed={collapsed} />
            ))}
          </div>
        </nav>

        {/* ── Divider ───────────────────────────────────────────────────────── */}
        <div className="mx-3 h-px shrink-0 bg-white/[0.06]" />

        {/* ── Bottom nav ────────────────────────────────────────────────────── */}
        <nav
          className={cn(
            "flex flex-col gap-0.5 py-3",
            collapsed ? "px-[10px]" : "px-3"
          )}
        >
          {BOTTOM_NAV.map((item) => (
            <NavLink key={item.href} item={item} collapsed={collapsed} />
          ))}
        </nav>

        {/* ── Collapse toggle ───────────────────────────────────────────────── */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={cn(
            "absolute -right-[11px] top-[54px] z-20",
            "flex h-[22px] w-[22px] items-center justify-center",
            "rounded-full border border-white/10 bg-[#0f0f11]",
            "text-zinc-500 shadow-md",
            "transition-colors hover:border-violet-500/40 hover:text-violet-400",
            "focus:outline-none"
          )}
        >
          <ChevronLeft
            size={12}
            strokeWidth={2.5}
            className={cn(
              "transition-transform duration-200",
              collapsed ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
      </aside>
    </TooltipProvider>
  );
}