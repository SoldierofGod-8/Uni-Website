"use client";

import { useState } from "react";
import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

const tabs = ["Target Partners", "Collaboration Areas", "Propose Partnership"];

const targetPartners = [
  ["Jiangsu University", "China"],
  ["Purdue University", "USA"],
  ["Wageningen University", "Netherlands"],
  ["Stellenbosch University", "South Africa"],
  ["Kasetsart University", "Thailand"],
];

const collaborationAreas = [
  "Staff exchange",
  "Student exchange",
  "Curriculum development",
  "Joint research",
  "Postgraduate training",
  "Laboratory development",
  "Innovation partnerships",
];

export default function PartnershipPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({
    institution: "",
    country: "",
    contactName: "",
    contactEmail: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-600/20 border border-green-500/30 px-4 py-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
          <span className="text-green-200 font-semibold text-sm">
            PARTNERSHIPS
          </span>
        </div>

        <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white">
          Strategic Partnerships
        </h1>

        <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
          UAST Ihugh is building global collaborations with leading institutions
          to advance agriculture, science, and technology education through
          academic exchange, joint research, and capacity building.
        </p>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-0">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(i)}
              className={[
                "px-5 py-3 rounded-t-[10px] text-sm font-semibold transition-all border border-b-0",
                activeTab === i
                  ? "bg-green-600 text-white border-green-500/30 shadow-lg shadow-green-500/20"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="rounded-b-[10px] rounded-r-[10px] border border-t-0 border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          {/* Tab 1: Target Partners */}
          {activeTab === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Target Partnerships
              </h2>
              <p className="text-white/70 mb-6">
                Strategic institutional partnerships targeted ahead of the
                academic session opening.
              </p>

              <div className="rounded-[10px] border border-white/10 bg-white/5 overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-5 py-3 text-green-300 font-semibold text-sm uppercase tracking-wide">
                        Institution
                      </th>
                      <th className="px-5 py-3 text-green-300 font-semibold text-sm uppercase tracking-wide">
                        Country
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {targetPartners.map(([inst, country], i) => (
                      <tr
                        key={inst}
                        className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                          i === targetPartners.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        <td className="px-5 py-4 text-white font-semibold">
                          {inst}
                        </td>
                        <td className="px-5 py-4 text-white/70">{country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Collaboration Areas */}
          {activeTab === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Areas of Collaboration
              </h2>
              <p className="text-white/70 mb-6">
                We seek partnerships across the following areas to drive mutual
                academic and research growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {collaborationAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                    <span className="text-white/80 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Propose Partnership */}
          {activeTab === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Propose a Partnership
              </h2>
              <p className="text-white/70 mb-6">
                Is your institution interested in collaborating with UAST Ihugh?
                Submit your details below and our partnerships team will reach
                out.
              </p>

              {submitted ? (
                <div className="rounded-[10px] border border-green-500/30 bg-green-600/10 p-6 text-center">
                  <p className="text-green-300 font-semibold text-lg">
                    Thank you for your interest!
                  </p>
                  <p className="text-white/70 mt-2">
                    Our partnerships team will review your submission and contact
                    you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="institution"
                        className="block text-sm font-semibold text-white/80 mb-1"
                      >
                        Institution Name *
                      </label>
                      <input
                        id="institution"
                        name="institution"
                        type="text"
                        required
                        value={form.institution}
                        onChange={handleChange}
                        className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 transition-colors"
                        placeholder="e.g. University of Nairobi"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-semibold text-white/80 mb-1"
                      >
                        Country *
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={form.country}
                        onChange={handleChange}
                        className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 transition-colors"
                        placeholder="e.g. Kenya"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-semibold text-white/80 mb-1"
                      >
                        Contact Person *
                      </label>
                      <input
                        id="contactName"
                        name="contactName"
                        type="text"
                        required
                        value={form.contactName}
                        onChange={handleChange}
                        className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 transition-colors"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-sm font-semibold text-white/80 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        required
                        value={form.contactEmail}
                        onChange={handleChange}
                        className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 transition-colors"
                        placeholder="email@institution.edu"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-semibold text-white/80 mb-1"
                    >
                      Areas of Interest
                    </label>
                    <textarea
                      id="interest"
                      name="interest"
                      rows={3}
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                      placeholder="Tell us about the collaboration areas you're interested in..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
                  >
                    Submit Proposal <span aria-hidden>→</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
          >
            Contact Us
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
