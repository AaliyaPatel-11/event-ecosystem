"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function ParticipantDashboard() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setEvents(data || []);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width">
        <div className="glass-card rounded-[32px] p-10">
          <h1 className="text-5xl font-bold gradient-text">
            Participant Dashboard
          </h1>

          <p className="text-zinc-400 mt-5 text-lg">
            Explore and manage your registered events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {events.map((event) => (
              <div
                key={event.id}
                className="glass-card rounded-3xl p-8"
              >
                <div className="text-sm text-zinc-500 mb-3">
                  Registered Event
                </div>

                <h2 className="text-3xl font-semibold">
                  {event.title}
                </h2>

                <p className="text-zinc-400 mt-4">
                  {event.venue} • {event.date}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-green-500/20 text-green-400 px-4 py-2 text-sm">
                    Registration Open
                  </div>

                  <Link
                    href={`/events/${event.id}`}
                    className="rounded-xl bg-white text-black px-5 py-2 text-sm font-medium hover:bg-zinc-200 transition"
                  >
                    View Event
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}