import { useFadeIn } from "@/hooks/useFadeIn";
import { Flame, Building2, GitBranch, Droplets, Trash2, Wind, RefreshCw, FileCheck } from "lucide-react";

const apps = [
  { icon: Flame, label: "Methane Leak Detection" },
  { icon: Building2, label: "Facility-Scale Emissions Screening" },
  { icon: GitBranch, label: "Pipeline Corridor Monitoring" },
  { icon: Droplets, label: "Oil Spill Detection" },
  { icon: Trash2, label: "Landfill Methane Mapping" },
  { icon: Wind, label: "Air Quality Sensing" },
  { icon: RefreshCw, label: "Post-Repair Verification" },
  { icon: FileCheck, label: "Automated Geotagged Reporting" },
];

const Applications = () => {
  const fade = useFadeIn();

  return (
    <section id="applications" className="py-28 bg-background">
      <div className="max-w-5xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-16">
            <h2 className="section-label text-gold mx-auto">Applications</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 leading-snug">
              Platform Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {apps.map((a, i) => (
              <div key={i} className="group flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                  <a.icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                </div>
                <span className="text-navy font-semibold text-sm leading-snug">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
