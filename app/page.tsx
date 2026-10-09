import Navbar from "@/app/components/navbar";
import Services from "@/app/components/services";
import WorkSamples from "@/app/components/worksamples";
import ContactForm from "@/app/components/contactform";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6 overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-700/30 via-fuchsia-600/20 to-pink-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/50 backdrop-blur-md text-xs font-medium text-purple-300">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Welcome to my portfolio
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Hello, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 font-serif italic">
              Shofia!
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
            I combine a background in <span className="text-purple-300 font-medium">Psychology</span> and{" "}
            <span className="text-purple-300 font-medium">Instructional Design</span> with{" "}
            <span className="text-fuchsia-300 font-medium">Notion Architecture</span> to build human-centered learning hubs, employee onboarding workflows, and educational systems.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#work-samples"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all shadow-lg shadow-purple-600/30 text-center"
            >
              Work Samples
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-purple-500/30 bg-purple-950/30 hover:bg-purple-900/40 text-purple-200 font-medium transition-all text-center"
            >
              Services
            </Link>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <Services />

      {/* Work Samples Section */}
      <WorkSamples />

      {/* Contact Form Section*/}
      <ContactForm />
    </div>
  );
}
