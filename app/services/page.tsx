import Link from "next/link";
import Navbar from "@/app/components/navbar";

export default function ServicesPage() {
  const detailedServices = [
    {
      title: "Instructional Design & Learning Architecture",
      description:
        "Designing structured, low-friction learning experiences and interactive content. Perfect for onboarding programs, internal documentation, and educational SaaS products.",
      tags: ["Cognitive Load Theory", "Syllabus Design", "UX Writing"],
    },
    {
      title: "Notion Architecture & Workflow Systems",
      description:
        "Building interconnected databases, team dashboards, and automated Notion hubs tailored for fast-moving startups and operation teams.",
      tags: ["Notion API", "Database Design", "Ops Optimization"],
    },
    {
      title: "SaaS & E-Commerce Web Development",
      description:
        "Developing sleek, responsive web applications with Next.js, Tailwind CSS, and TypeScript focused on speed, clarity, and conversion.",
      tags: ["Next.js App Router", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <div className="space-y-4 mb-12">
          <Link
            href="/"
            className="text-xs text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Detailed Services</h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Bridging cognitive psychology, clear instructional design, and modern frontend development to create intuitive digital experiences.
          </p>
        </div>

        <div className="grid gap-6">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all"
            >
              <h2 className="text-xl font-semibold text-purple-300 mb-2">{service.title}</h2>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}