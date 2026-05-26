"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export default function VolunteersPage() {
  const [volunteers, setVolunteers] = useState<any[]>([]);

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    const { data, error } = await supabase
      .from("volunteers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setVolunteers(data || []);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width">
        <h1 className="text-5xl font-bold gradient-text">
          Volunteer Management
        </h1>

        <p className="text-zinc-400 mt-5 text-lg">
          Manage volunteers and applications across events.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="glass-card rounded-[32px] p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">
                    {volunteer.name}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {volunteer.email}
                  </p>
                </div>

                <div className="rounded-2xl bg-violet-500/20 text-violet-400 px-4 py-2 text-sm">
                  Applicant
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-zinc-500 text-sm">
                    Skills
                  </p>

                  <h3 className="mt-1">
                    {volunteer.skills}
                  </h3>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">
                    Applied Event
                  </p>

                  <h3 className="mt-1">
                    {volunteer.event_title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {volunteers.length === 0 && (
          <div className="glass-card rounded-[32px] p-12 text-center mt-14">
            <h2 className="text-3xl font-semibold">
              No Volunteers Yet
            </h2>

            <p className="text-zinc-400 mt-4">
              Volunteer applications will appear here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}