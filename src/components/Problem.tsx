import { useFadeIn } from "@/hooks/useFadeIn";

const Problem = () => {
  const fade = useFadeIn();

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">The Problem</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-10 leading-snug">
            Methane Monitoring Is Broken
          </h3>

          <ul className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
              Emissions remain under-detected across large industrial sites
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
              Monitoring is infrequent — most facilities are inspected only a few times per year
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
              Large industrial sites create blind spots that current tools cannot cover
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
              Existing solutions don't scale to meet regulatory or operational demands
            </li>
          </ul>

          <div className="mt-10 bg-light-gray rounded-xl px-6 py-5 text-center">
            <p className="text-navy font-bold text-2xl md:text-3xl">~135 Mt</p>
            <p className="text-muted-foreground text-sm mt-1">methane emissions from the energy sector annually (IEA)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
