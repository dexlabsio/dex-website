import BentoGrid from "@/components/sections/bento-grid/2-rows-top";
import CTA from "@/components/sections/cta/default";
import FooterSection from "@/components/sections/footer/minimal";
import Hero from "@/components/sections/hero/default";
import Logos from "@/components/sections/logos/grid-6";
import LogosDefault from "@/components/sections/logos/default";
import Navbar from "@/components/sections/navbar/default";
import Stats from "@/components/sections/stats/default";
import TabsLeft from "@/components/sections/tabs/left";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Logos/>
    <BentoGrid/>
    <Stats/>
    <TabsLeft/>
    <CTA/>
    <FooterSection/>
    </>

  );
}
