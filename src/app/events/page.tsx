"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function EventsPage() {
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
        <h1 className="text-5xl font-bold gradient-text">
          Browse Events
        </h1>

        <p className="text-zinc-400 mt-4 max-w-2xl">
          Discover upcoming hackathons, workshops and community events.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">
          {events.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-3xl p-8"
            >
              <div className="text-sm text-zinc-500 mb-4">
                {event.date}
              </div>

              <h2 className="text-2xl font-semibold mb-4">
                {event.title}
              </h2>

              <p className="text-zinc-400 leading-relaxed mb-8">
                {event.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500">
                  {event.venue}
                </span>

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

        {events.length === 0 && (
          <div className="glass-card rounded-3xl p-10 text-center mt-14">
            <h2 className="text-2xl font-semibold mb-3">
              No Events Yet
            </h2>

            <p className="text-zinc-400">
              Events created by organizers will appear here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}