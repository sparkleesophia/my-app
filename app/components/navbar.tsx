import Link from "next/link";

export default function navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-white hover:text-purple-400 transition-colors">
          Portfolio<span className="text-purple-500">.</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-slate-300">
          <Link href="/services" className="hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-purple-400 transition-colors">
            Case Studies
          </Link>
          <Link
            href="/#contact"
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}