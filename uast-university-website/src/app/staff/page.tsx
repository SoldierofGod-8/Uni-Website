import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/layout/pageShell";

export default function StaffPage() {
  const staff = [
    { name: "Prof. Placeholder", role: "Key Academic Staff (Coming soon)", dept: "Department/College (To be confirmed)" },
    { name: "Dr. Placeholder", role: "Senior Lecturer (Coming soon)", dept: "Department/College (To be confirmed)" },
    { name: "Lecturer Placeholder", role: "Lecturer (Coming soon)", dept: "Department/College (To be confirmed)" },
    { name: "Research Lead Placeholder", role: "Research Lead (Coming soon)", dept: "Department/College (To be confirmed)" },
  ];

  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold">Staff & Faculty</h1>
          <p className="mt-4 text-white/80 max-w-3xl text-lg">
            Placeholder directory structure is ready. Verified staff profiles and contacts will be published when available.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {staff.map((s) => (
              <div key={s.name} className="rounded-[10px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center overflow-hidden">
                    <Image src="/logo.png" alt="" width={44} height={44} className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{s.name}</p>
                    <p className="text-white/70 text-sm mt-1">{s.role}</p>
                    <p className="text-white/60 text-sm mt-2">{s.dept}</p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-white/60">
                  Profile & contact will be updated when operational information is verified.
                </p>
              </div>
            ))}
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