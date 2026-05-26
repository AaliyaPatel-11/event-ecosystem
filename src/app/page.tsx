import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width">
        <div className="glass-card rounded-[32px] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative z-10">
           {/* Gradient Glow */}
          <div className="absolute top-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[120px]" />

          <div className="relative z-10">

            {/* Brand */}
            <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl shadow-lg shadow-black/20 mb-10">

              <Image
                src="/logo.png"
                alt="EVENTORA"
                width={46}
                height={46}
                className="rounded-2xl"
              />

              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-wide">
                  EVENTORA
                </span>

                <span className="text-xs text-zinc-500 mt-1">
                  Intelligent Event Ecosystem
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-5xl gradient-text">
              Event Management
              <br />
              Ecosystem
              <br />
              For Modern Communities
            </h1>

            <p className="text-zinc-400 text-lg mt-8 max-w-3xl leading-relaxed">
              EVENTORA helps organizers streamline event operations,
              registrations, sponsorships and volunteer coordination —
              all within one intelligent ecosystem.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/select-role">
                <Button
                  size="lg"
                  className="rounded-2xl bg-white text-black hover:bg-zinc-200 px-8 h-14 text-base"
                >
                  Open Dashboard
                </Button>
              </Link>

              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 h-14 px-8 text-base"
                >
                  Browse Events
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
              <div className="glass-card rounded-3xl p-8">
                <div className="text-4xl mb-5">🎯</div>

                <h2 className="text-2xl font-semibold mb-4">
                  Event Operations
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Manage registrations, schedules,
                  announcements and operations
                  from a unified platform.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8">
                <div className="text-4xl mb-5">👥</div>

                <h2 className="text-2xl font-semibold mb-4">
                  Volunteer Management
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Organize volunteer teams,
                  hierarchy and task allocation
                  efficiently during events.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8">
                <div className="text-4xl mb-5">🎟️</div>

                <h2 className="text-2xl font-semibold mb-4">
                  Participant Experience
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  Simplified registration,
                  ticket generation and
                  event communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}