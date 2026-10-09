"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending the form
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto text-center">
      <div className="space-y-3 mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">Let’s Work Together</h2>
        <p className="text-slate-400 text-sm">
          Need help building intuitive workflows, learning hubs, or AI automations? Drop a message below!
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-purple-200 animate-fade-in">
          <h3 className="text-xl font-semibold text-white mb-2">Thank you, {formData.name || "friend"}! 🎉</h3>
          <p className="text-sm text-slate-300">
            Your message has been received. I’ll get back to you soon!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project or workflow challenge..."
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/30"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}