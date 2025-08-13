import BentoGrid from "@/components/sections/bento-grid/2-rows-top";
import CTA from "@/components/sections/cta/default";
import FooterSection from "@/components/sections/footer/minimal";
import Hero from "@/components/sections/hero/default";
import Logos from "@/components/sections/logos/grid-6";
import Navbar from "@/components/sections/navbar/default";
import Stats from "@/components/sections/stats/grid-boxed";
import TabsLeft from "@/components/sections/tabs/left";
import LogosDefault from "@/components/sections/logos/default"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Logos/>
    <BentoGrid/>
    <Stats/>
    <TabsLeft/>
    <LogosDefault/>
    <CTA/>
    <FooterSection/>
    </>

  );
}
