import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Industries from "@/components/Industries";
import Applications from "@/components/Applications";
import Platform from "@/components/Platform";
import HowItWorks from "@/components/HowItWorks";
import WhySolarSentinel from "@/components/WhySolarSentinel";
import MonitoringSolutions from "@/components/MonitoringSolutions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Industries />
      <Applications />
      <Platform />
      <HowItWorks />
      <WhySolarSentinel />
      <MonitoringSolutions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
