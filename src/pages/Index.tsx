import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import WhatWeDo from "@/components/WhatWeDo";
import SystemArchitecture from "@/components/SystemArchitecture";
import Specifications from "@/components/Specifications";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import BuiltInHouse from "@/components/BuiltInHouse";
import FlightProof from "@/components/FlightProof";
import WhySolarSentinel from "@/components/WhySolarSentinel";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsBand />
      <WhatWeDo />
      <SystemArchitecture />
      <Specifications />
      <HowItWorks />
      <Industries />
      <BuiltInHouse />
      <FlightProof />
      <WhySolarSentinel />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
