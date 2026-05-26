import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const volunteerTeams = [
  {
    team: "Registration Team",
    lead: "Aaliya",
    members: 18,
    tasks: "Manage attendee check-in",
  },
  {
    team: "Technical Team",
    lead: "Rahul",
    members: 12,
    tasks: "Handle AV & live sessions",
  },
  {
    team: "Design Team",
    lead: "Sneha",
    members: 8,
    tasks: "Social media & creatives",
  },
  {
    team: "Logistics Team",
    lead: "Arjun",
    members: 15,
    tasks: "Venue & coordination",
  },
];

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Volunteer Management
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage volunteer hierarchy, task allocation and team coordination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {volunteerTeams.map((team) => (
          <Card
            key={team.team}
            className="bg-zinc-900 border-zinc-800"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  {team.team}
                </h2>

                <Badge>
                  {team.members} Members
                </Badge>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-zinc-500 text-sm">
                    Team Lead
                  </p>

                  <h3>{team.lead}</h3>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm">
                    Responsibilities
                  </p>

                  <h3>{team.tasks}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}