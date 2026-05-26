"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import {
  CalendarDays,
  Users,
  Ticket,
  Handshake,
  Plus,
} from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Total Events",
    value: "12",
    icon: CalendarDays,
  },
  {
    title: "Registrations",
    value: "1,284",
    icon: Ticket,
  },
  {
    title: "Volunteers",
    value: "96",
    icon: Users,
  },
  {
    title: "Sponsors",
    value: "18",
    icon: Handshake,
  },
];


export default function OrganizerPage() {
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
    <div className="min-h-screen bg-[#050505] text-white px-8 py-8">
      <div className="container-width">
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Organizer Dashboard
          </h1>
          <p className="text-zinc-400 mt-1">
            Manage events, volunteers, registrations and sponsors.
          </p>
        </div>
        
        <Link href="/organizer/create-event">
          <Button className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white hover:opacity-90 border-0">
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="bg-zinc-900/70 border-zinc-800 backdrop-blur-xl shadow-xl"
            >
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-zinc-400 text-sm">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>
                </div>

                <div className="bg-zinc-800 p-3 rounded-xl">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                Recent Events
              </h2>

              <p className="text-zinc-400 text-sm mt-1">
                Overview of recently created events.
              </p>
            </div>

            <Button variant="outline">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex items-center justify-between bg-zinc-800/40 border border-zinc-800 rounded-xl p-4"
              >
                <div>
                  <h3 className="font-medium">
                    {event.title}
                  </h3>

                  <p className="text-sm text-zinc-400 mt-1">
                    {event.date} • {event.venue}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    {Math.floor(Math.random() * 500) + 100}
                  </p>

                  <p className="text-sm text-zinc-400">
                    Registrations
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}