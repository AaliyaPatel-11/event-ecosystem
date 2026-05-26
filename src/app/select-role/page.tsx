import Link from "next/link";

const roles = [
  {
    title: "Organizer",
    description: "Manage events, volunteers and registrations.",
    href: "/login",
    emoji: "🛠️",
  },
  {
    title: "Participant",
    description: "Browse and register for events.",
    href: "/events",
    emoji: "🎟️",
  },
  {
    title: "Sponsor",
    description: "Explore and sponsor events.",
    href: "/sponsor-dashboard",
    emoji: "🤝",
  },
  {
    title: "Volunteer",
    description: "Join and contribute to events.",
    href: "/volunteer-dashboard",
    emoji: "👥",
  },
];

export default function SelectRolePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width">
        <h1 className="text-6xl font-bold gradient-text">
          Select Your Role
        </h1>

        <p className="text-zinc-400 mt-5 text-lg">
          Continue as an organizer, participant, sponsor or volunteer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {roles.map((role) => (
            <Link
              key={role.title}
              href={role.href}
              className="glass-card rounded-[32px] p-10 hover:scale-[1.02] transition"
            >
              <div className="text-5xl mb-6">
                {role.emoji}
              </div>

              <h2 className="text-3xl font-bold mb-4">
                {role.title}
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed">
                {role.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}