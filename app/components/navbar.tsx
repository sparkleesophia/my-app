import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand / Name */}
        <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-purple-300 transition-colors">
          Shofia<span className="text-purple-400">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <Link href="#services" className="hover:text-purple-300 transition-colors">
            Services
          </Link>
          <Link href="#work-samples" className="hover:text-purple-300 transition-colors">
            Work Samples
          </Link>
        </nav>

        {/* Call-to-Action Button */}
        <Link
          href="#contact"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs font-semibold shadow-md shadow-purple-600/20 transition-all"
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
}