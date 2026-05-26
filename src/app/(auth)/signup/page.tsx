import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
      <div className="glass-card rounded-[32px] p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold gradient-text mb-3">
          Create Account
        </h1>

        <p className="text-zinc-400 mb-8">
          Start managing your events professionally.
        </p>

        <div className="space-y-5">
          <input
            placeholder="Organization Name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

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
            Create Account
          </Link>
        </div>

        <p className="text-zinc-500 text-sm mt-8 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}