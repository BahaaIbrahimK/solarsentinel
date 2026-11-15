import SiteNav from "@/components/site/SiteNav";
import FilmHero from "@/components/home/FilmHero";
import Intro from "@/components/home/Intro";
import HowWeWork from "@/components/home/HowWeWork";
import BuiltAndFlown from "@/components/home/BuiltAndFlown";
import Industries from "@/components/home/Industries";
import TeamGrid from "@/components/site/TeamGrid";
import CtaPair from "@/components/site/CtaPair";
import SiteFooter from "@/components/site/SiteFooter";

/* Home page, Nov 2026 redesign v3: film, statement, how it works, flight film, industries, team, contact and about cards.
   v1 is at /v1 and v2 at /v2. */
const Index = () => (
  <div className="min-h-screen">
    <SiteNav />
    <FilmHero />
    <Intro />
    <HowWeWork />
    <BuiltAndFlown />
    <Industries />
    <TeamGrid />
    <CtaPair />
    <SiteFooter />
  </div>
);

export default Index;
