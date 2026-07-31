import Link from "next/link";
import PageShell from "@/components/layout/pageShell";
import StaffCard from "@/components/staff/StaffCard";
import { staffMembers } from "@/lib/staff";

export default function StaffPage() {
  const featured = staffMembers.filter((s) => s.featured);
  const others = staffMembers.filter((s) => !s.featured);

  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold">Staff & Faculty</h1>
          <p className="mt-4 text-white/80 max-w-3xl text-lg">
            Meet the leadership and academic staff of UAST Ihugh. Click on any card to view
            the full profile and further information.
          </p>

          {featured.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl md:text-2xl font-bold text-green-200 mb-4">
                University Leadership
              </h2>
              <div className="grid grid-cols-1 gap-5">
                {featured.map((s) => (
                  <StaffCard key={s.id} member={s} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-green-200 mb-4">
              Academic Staff
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {others.map((s) => (
                <StaffCard key={s.id} member={s} />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Contact Staff Desk →
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Explore Academics
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}
