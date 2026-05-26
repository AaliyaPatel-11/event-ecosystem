import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width">
        <div className="glass-card rounded-[32px] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative z-10">
           <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl mb-8 shadow-lg shadow-black/20">
  
             <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-lg">
               <Zap size={18} strokeWidth={2.7} />
             </div>

             <div className="flex flex-col leading-none">
               <span className="text-lg font-semibold tracking-tight text-white">
                 EventSphere
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
              A smart ecosystem for hackathons, workshops and college events —
              helping organizers manage volunteers, registrations,
              operations and participants seamlessly.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/select-role">
                <Button
                  size="lg"
                  className="rounded-2xl bg-white text-black hover:bg-zinc-200 px-8"
                >
                  Open Dashboard
                </Button>
              </Link>

              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10"
                >
                  Register For Event
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
    </main>
  );
}