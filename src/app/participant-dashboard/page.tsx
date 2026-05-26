export default function ParticipantDashboard() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <div className="container-width">
        <div className="glass-card rounded-[32px] p-10">
          <h1 className="text-5xl font-bold gradient-text">
            Participant Dashboard
          </h1>

          <p className="text-zinc-400 mt-5 text-lg">
            Track your registered events and tickets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <div className="glass-card rounded-3xl p-8">
              <div className="text-sm text-zinc-500 mb-3">
                Registered Event
              </div>

              <h2 className="text-3xl font-semibold">
                GDG DevFest 2026
              </h2>

              <p className="text-zinc-400 mt-4">
                Hyderabad • 26 May 2026
              </p>

              <div className="mt-8 inline-flex rounded-xl bg-green-500/20 text-green-400 px-4 py-2 text-sm">
                Registration Confirmed
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}