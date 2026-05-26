export default function VolunteerDashboard() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width">
        <div className="glass-card rounded-[32px] p-10">
          <h1 className="text-5xl font-bold gradient-text">
            Volunteer Dashboard
          </h1>

          <p className="text-zinc-400 mt-5 text-lg">
            Explore events and contribute as a volunteer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-3xl font-semibold">
                AI/ML Workshop
              </h2>

              <p className="text-zinc-400 mt-4">
                Looking for technical volunteers.
              </p>

              <button className="mt-8 rounded-2xl bg-white text-black px-6 py-3 font-medium">
                Apply As Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}