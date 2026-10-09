const services = [
  {
    title: "Instructional Design & E-Learning",
    description: "Turning complex topics into clear, engaging learning paths and structured educational systems.",
    badge: "Pedagogy",
  },
  {
    title: "Notion Architecture",
    description: "Building connected, intuitive Notion workspaces that streamline team workflows and reduce friction.",
    badge: "Operations",
  },
  {
    title: "Human-Centered Onboarding",
    description: "Designing employee and client onboarding systems people actually enjoy navigating.",
    badge: "Psychology",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">What I Do</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Combining human psychology with structured system design.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 transition-all shadow-md group"
          >
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {service.badge}
            </span>
            <h3 className="text-lg font-semibold text-white mt-4 group-hover:text-purple-300 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}