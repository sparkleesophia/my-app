import Link from "next/link";
import Navbar from "@/app/components/navbar";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Cognitive Load Reduction in SaaS Onboarding",
      category: "Instructional Design & UX",
      summary:
        "Redesigned user onboarding flows for a SaaS application, decreasing user drop-off by restructuring complex setup tasks into chunked learning paths.",
    },
    {
      title: "Notion OS for Distributed Operations",
      category: "Notion Architecture",
      summary:
        "Architected an all-in-one Notion workspace with relational databases, automated sprint boards, and centralized knowledge bases for a remote team.",
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
          <h1 className="text-4xl font-bold tracking-tight">Case Studies & Architecture</h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            In-depth breakdowns of workflow automation, Notion system design, and instructional UX projects.
          </p>
        </div>

        <div className="grid gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all"
            >
              <span className="text-xs text-purple-400 font-medium">{study.category}</span>
              <h2 className="text-2xl font-semibold text-white mt-1 mb-2">{study.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{study.summary}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}