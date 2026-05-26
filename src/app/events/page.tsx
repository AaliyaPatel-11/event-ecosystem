import Link from "next/link";

const events = [
  {
    id: 1,
    title: "GDG DevFest 2026",
    description:
      "A large-scale developer conference focused on AI, Web and Cloud.",
    date: "26 May 2026",
    venue: "Hyderabad",
  },
  {
    id: 2,
    title: "Hackathon Nexus",
    description:
      "24-hour innovation challenge for student developers.",
    date: "12 June 2026",
    venue: "Bangalore",
  },
  {
    id: 3,
    title: "AI/ML Workshop",
    description:
      "Hands-on workshop exploring modern AI technologies.",
    date: "2 June 2026",
    venue: "Online",
  },
];

export default function EventsPage() {
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
      </div>
    </main>
  );
}