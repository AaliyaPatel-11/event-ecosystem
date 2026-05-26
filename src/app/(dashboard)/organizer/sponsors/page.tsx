"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<any[]>([]);

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    const { data, error } = await supabase
      .from("sponsors")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setSponsors(data || []);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width">
        <h1 className="text-5xl font-bold gradient-text">
          Sponsor Management
        </h1>

        <p className="text-zinc-400 mt-5 text-lg">
          Manage sponsorship applications and partnerships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="glass-card rounded-[32px] p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">
                    {sponsor.company_name}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {sponsor.email}
                  </p>
                </div>

                <div className="rounded-2xl bg-green-500/20 text-green-400 px-4 py-2 text-sm">
                  Sponsor
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-zinc-500 text-sm">
                    Industry
                  </p>

                  <h3 className="mt-1">
                    {sponsor.industry}
                  </h3>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">
                    Sponsoring Event
                  </p>

                  <h3 className="mt-1">
                    {sponsor.event_title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sponsors.length === 0 && (
          <div className="glass-card rounded-[32px] p-12 text-center mt-14">
            <h2 className="text-3xl font-semibold">
              No Sponsors Yet
            </h2>

            <p className="text-zinc-400 mt-4">
              Sponsorship applications will appear here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}