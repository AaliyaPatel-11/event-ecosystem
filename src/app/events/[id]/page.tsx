"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function EventDetailsPage() {
  const params = useParams();

  const [event, setEvent] = useState<any>(null);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    organization: "",
  });

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error) {
      console.log(error);
      return;
    }

    setEvent(data);
  };

  if (!event) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        Loading Event...
      </main>
    );
  }

  if (registered) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
        <div className="glass-card rounded-3xl p-10 max-w-md w-full text-center">
          <div className="text-6xl mb-6">🎟️</div>

          <h1 className="text-3xl font-bold mb-4">
            Registration Successful
          </h1>

          <p className="text-zinc-400 mb-8">
            Your ticket has been generated successfully.
          </p>

          <div className="bg-white rounded-2xl p-6 flex items-center justify-center mb-6">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=EVENTORA-Ticket"
              alt="QR Code"
            />
          </div>

          <div className="text-left space-y-3">
            <div>
              <p className="text-zinc-500 text-sm">
                Event
              </p>

              <h2 className="font-semibold">
                {event.title}
              </h2>
            </div>

            <div>
              <p className="text-zinc-500 text-sm">
                Ticket ID
              </p>

              <h2 className="font-semibold">
                EVT-{event.id}-2026
              </h2>
            </div>
          </div>

          <Link
            href="/participant-dashboard"
            className="mt-8 inline-block rounded-2xl bg-white text-black px-6 py-4 font-medium hover:bg-zinc-200 transition"
          >
            Go To Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width max-w-4xl">
        <div className="glass-card rounded-[32px] p-10">
          <div className="text-sm text-zinc-500 mb-4">
            {event.date} • {event.venue}
          </div>

          <h1 className="text-5xl font-bold gradient-text">
            {event.title}
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8">
            {event.description}
          </p>

          <div className="mt-14">
            <h2 className="text-2xl font-semibold mb-6">
              Register For Event
            </h2>

            <div className="space-y-5">
              <input
                placeholder="Full Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <input
                placeholder="College / Organization"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
              />

              <button
                onClick={async () => {
                  const { error } = await supabase
                    .from("registrations")
                    .insert([
                      {
                        full_name: formData.full_name,
                        email: formData.email,
                        organization: formData.organization,
                        event_title: event.title,
                      },
                    ]);

                  if (error) {
                    console.log(error);
                    alert("Registration Failed");
                    return;
                  }

                  alert("Registration Successful!");
                  setRegistered(true);
                }}
                className="rounded-2xl bg-white text-black px-8 py-4 font-medium hover:bg-zinc-200 transition"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}