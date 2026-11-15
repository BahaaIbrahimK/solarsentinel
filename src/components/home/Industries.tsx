import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import oilgas from "@/assets/v3/ind-oilgas.jpg";
import pipelines from "@/assets/v3/ind-pipelines.jpg";
import environment from "@/assets/v3/ind-environment.jpg";

/* Image sources: refinery, Unsplash (Buddy AN), Unsplash License; Trans-Alaska pipeline, Luca Galuzzi,
   CC BY-SA 2.5 (cropped), credit shown; biogas plant from above, Grasleben, Germany, Julia Koblitz, Unsplash License (JJkwsqNv4d0). */
const CARDS = [
  { img: oilgas, title: "Oil & gas plants", line: "Built first for refineries and gas-processing plants.", alt: "Refinery columns and process units against a blue sky" },
  { img: pipelines, title: "Pipelines", line: "Designed for long corridors, far from the nearest road.", next: true, alt: "An above-ground oil pipeline running through forest towards mountains", credit: "Photo: Luca Galuzzi, CC BY-SA 2.5, cropped", href: "https://creativecommons.org/licenses/by-sa/2.5/" },
  { img: environment, title: "Environment", line: "Designed for biogas plants, landfills and farms.", next: true, alt: "Biogas plant digesters seen from above, set in green fields" },
];

/** Three large still images on a dark band that stops partway down them. Hovering a card adds one line under its title. */
const Industries = () => (
  <section id="industries" className="relative overflow-hidden bg-white pb-24 md:pb-32">
    <div className="absolute inset-x-0 top-0 bottom-[38%] bg-navy-dark md:bottom-[40%]">
      <svg className="absolute right-0 top-0 h-full w-1/2 opacity-40" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M120 0 L220 110 L400 110 M260 0 L340 70 L400 70" fill="none" stroke="hsl(var(--gold))" strokeWidth=".6" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>

    <div className="relative mx-auto max-w-7xl px-6 pt-24 md:px-10 md:pt-32">
      <Reveal>
        <p className="font-body text-sm font-extrabold uppercase tracking-[0.16em] text-gold">Industries</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold uppercase leading-[1] text-white md:text-6xl text-balance">
          Where methane is <span className="text-gold">hardest to find.</span>
        </h2>
      </Reveal>

      <Stagger className="-mx-6 mt-12 flex snap-x snap-mandatory scroll-pl-6 gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 [scrollbar-width:none]">
        {CARDS.map((c) => (
          <StaggerItem key={c.title} className="w-[80%] shrink-0 snap-start md:w-auto">
            <article tabIndex={0} aria-label={`${c.title}: ${c.line}`} className="group relative aspect-[3/4] overflow-hidden rounded-md bg-navy outline-none focus-visible:ring-2 focus-visible:ring-gold">
              <img src={c.img} alt={c.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/25 to-transparent" />
              {c.credit && (c.href
                ? <a href={c.href} target="_blank" rel="noreferrer" className="absolute right-3 top-3 rounded bg-navy-dark/80 px-2 py-1 font-body text-[11px] font-bold text-white hover:underline">{c.credit}</a>
                : <p className="absolute right-3 top-3 rounded bg-navy-dark/80 px-2 py-1 font-body text-[11px] font-bold text-white">{c.credit}</p>)}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                {c.next && <p className="mb-3 inline-block rounded bg-gold px-2 py-1 font-body text-[11px] font-extrabold uppercase tracking-[0.1em] text-navy">Next</p>}
                <h3 className="font-display text-3xl font-bold uppercase leading-none text-white md:text-[2rem]">{c.title}</h3>
                <div className="grid transition-[grid-template-rows] duration-500 ease-out [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr]">
                  <p className="overflow-hidden font-body text-lg font-semibold leading-snug text-white">
                    <span className="block pt-3">{c.line}</span>
                  </p>
                </div>
                <span className="mt-4 block h-[3px] w-10 bg-gold transition-all duration-500 group-hover:w-20" />
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default Industries;
