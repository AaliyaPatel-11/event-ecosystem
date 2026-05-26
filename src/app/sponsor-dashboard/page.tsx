"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function SponsorDashboard() {
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
            Sponsor Dashboard
          </h1>

          <p className="text-zinc-400 mt-5 text-lg">
            Explore and sponsor impactful events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {events.map((event) => (
              <div
                key={event.id}
                className="glass-card rounded-3xl p-8"
              >
                <h2 className="text-3xl font-semibold">
                  {event.title}
                </h2>

                <p className="text-zinc-400 mt-4">
                  {event.venue} • {event.date}
                </p>

                <p className="text-zinc-500 mt-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div className="text-sm text-zinc-500">
                    Potential Reach:{" "}
                    {Math.floor(Math.random() * 1000) + 300}
                  </div>

                  <button
                     onClick={async () => {
                            const { error } = await supabase
                             .from("sponsors")
                             .insert([
                               {
                                  company_name: "TechNova Solutions",
                                  email: "contact@technova.com",
                                  industry: "Technology",
                                  event_title: event.title,
                                },
                              ]);

                               if (error) {
                                 console.log(error);
                                 alert("Failed to sponsor event");
                                 return;
                                }

                                 alert("Sponsorship Request Sent!");
                                }}
                                className="rounded-xl bg-white text-black px-5 py-2 text-sm font-medium hover:bg-zinc-200 transition">
                                Sponsor Event
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}