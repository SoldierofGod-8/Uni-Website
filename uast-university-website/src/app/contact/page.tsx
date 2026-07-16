"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim()
    .slice(0, 2000);
}

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    { type: "idle" | "loading" | "success" | "error"; message?: string }
  >({ type: "idle" });

  const [honeypot, setHoneypot] = useState("");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: sanitize(value) }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (honeypot) return;

    if (!form.fullName.trim()) {
      setStatus({ type: "error", message: "Please enter your full name." });
      return;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!form.message.trim()) {
      setStatus({ type: "error", message: "Please enter your message." });
      return;
    }

    setStatus({ type: "loading" });
    await new Promise((r) => setTimeout(r, 900));

    setStatus({ type: "success", message: "Thanks! Your message has been received (demo)." });
    setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white">Contact & Transparency</h1>
          <p className="mt-4 text-white/80 max-w-3xl text-lg">
            Placeholder contact and transparency sections. Verified documents and publications will be added when available.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">Contact Information</h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-green-300 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-sm mt-1 text-white/70">
                      Takeoff Campus, Ihugh-Korinya Road, Ihugh (Placeholder)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/80">
                  <Mail className="w-5 h-5 text-green-300 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-sm mt-1 text-white/70">info@uast.edu.ng (Placeholder)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/80">
                  <Phone className="w-5 h-5 text-green-300 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-sm mt-1 text-white/70">+234 XXX XXX XXXX (Placeholder)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[10px] border border-green-500/20 bg-green-600/10 p-4">
                <p className="text-green-200 font-semibold text-sm">Tip</p>
                <p className="mt-2 text-white/75 text-sm">
                  For admissions or research enquiries, include your programme and department interest.
                </p>
              </div>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">Send a Message</h2>

              <form onSubmit={onSubmit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Full name</label>
                    <input
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      maxLength={100}
                      autoComplete="name"
                      className="mt-2 w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Email</label>
                    <input
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      type="email"
                      maxLength={254}
                      autoComplete="email"
                      className="mt-2 w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500/50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Phone (optional)</label>
                    <input
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      type="tel"
                      maxLength={20}
                      autoComplete="tel"
                      className="mt-2 w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500/50"
                      placeholder="+234..."
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Subject</label>
                    <input
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      maxLength={200}
                      className="mt-2 w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500/50"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white/70">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    maxLength={2000}
                    className="mt-2 w-full h-32 rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500/50 resize-none"
                    placeholder="Write your message..."
                  />
                </div>

                {status.type !== "idle" && (
                  <div
                    className={`rounded-[10px] border p-4 text-sm ${
                      status.type === "success"
                        ? "border-green-500/30 bg-green-600/15 text-green-200"
                        : status.type === "error"
                        ? "border-red-500/30 bg-red-600/15 text-red-200"
                        : "border-white/15 bg-white/5 text-white/70"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Honeypot — hidden from real users, bots will fill it */}
                <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Do not fill this</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20 disabled:opacity-60"
                >
                  {status.type === "loading" ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">Official Documents (Coming soon)</h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Placeholder links for official documents and institutional guidelines.
              </p>
              <div className="mt-5 text-xs text-white/60">To be updated with verified PDFs/links.</div>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">Reports & Publications (Coming soon)</h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Placeholder reports, annual summaries, research outputs, and institutional publications.
              </p>
              <div className="mt-5 text-xs text-white/60">To be updated with verified publications.</div>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">Transparency Requests</h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                For transparency requests, use the form above and clearly state the document type needed.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-5 py-3 font-semibold transition-all"
              >
                Submit a request →
              </Link>
            </div>
          </div>
        </motion.div>
      </PageShell>
    </div>
  );
}