"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function ManageEventsPage() {
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
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-bold gradient-text">
              Manage Events
            </h1>

            <p className="text-zinc-400 mt-4 text-lg">
              Manage registrations, volunteers and sponsors for all events.
            </p>
          </div>

          <Link
            href="/organizer/create-event"
            className="rounded-2xl bg-white text-black px-6 py-4 font-medium hover:bg-zinc-200 transition"
          >
            Create Event
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-[32px] p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-zinc-500 mb-3">
                    {event.date}
                  </div>

                  <h2 className="text-3xl font-semibold">
                    {event.title}
                  </h2>

                  <p className="text-zinc-400 mt-4 leading-relaxed max-w-xl">
                    {event.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-violet-500/20 text-violet-400 px-4 py-2 text-sm">
                  Active
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                  <p className="text-zinc-500 text-sm">
                    Registrations
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {Math.floor(Math.random() * 500) + 100}
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                  <p className="text-zinc-500 text-sm">
                    Volunteers
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {Math.floor(Math.random() * 50) + 10}
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                  <p className="text-zinc-500 text-sm">
                    Sponsors
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {Math.floor(Math.random() * 12) + 1}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between mt-10">
                <div className="text-zinc-500 text-sm">
                  Venue: {event.venue}
                </div>

                <Link
                  href={`/events/${event.id}`}
                  className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition"
                >
                  View Event
                </Link>
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <div className="glass-card rounded-[32px] p-12 text-center">
            <h2 className="text-3xl font-semibold">
              No Events Created
            </h2>

            <p className="text-zinc-400 mt-4">
              Create your first event to begin managing your ecosystem.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}