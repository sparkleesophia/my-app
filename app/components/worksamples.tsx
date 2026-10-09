const projects = [
  {
    title: "SaaS Employee Onboarding Hub",
    description: "A comprehensive Notion-based learning platform built to reduce cognitive overload for new hires.",
    tags: ["Notion", "Instructional Design", "UX"],
  },
  {
    title: "Automated Client Intake Workflow",
    description: "An interactive intake form and dashboard that pre-qualifies incoming leads automatically.",
    tags: ["Workflow Design", "Automation", "Ops"],
  },
];

export default function WorkSamples() {
  return (
    <section id="work-samples" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">Work Samples</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Featured projects and operational architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-fuchsia-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}