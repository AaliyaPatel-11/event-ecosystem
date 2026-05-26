import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
      <div className="glass-card rounded-[32px] p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold gradient-text mb-3">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mb-8">
          Login to manage your events and teams.
        </p>

        <div className="space-y-5">
          <input
            placeholder="Email Address"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <Link
            href="/organizer"
            className="block rounded-2xl bg-white text-black px-8 py-4 text-center font-medium hover:bg-zinc-200 transition"
          >
            Login
          </Link>
        </div>

        <p className="text-zinc-500 text-sm mt-8 text-center">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-white"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}