import AcquisitionAnnouncementBanner from "@/components/sections/banner/acquisition-announcement";
import BentoGrid from "@/components/sections/bento-grid/2-rows-top";
import CTA from "@/components/sections/cta/default";
import FooterSection from "@/components/sections/footer/minimal";
import Hero from "@/components/sections/hero/default";
import Logos from "@/components/sections/logos/grid-6";
import Navbar from "@/components/sections/navbar/default";
import Stats from "@/components/sections/stats/grid-boxed";
import TabsLeft from "@/components/sections/tabs/left";
import LogosMarquee from "@/components/sections/marquee-2-rows"

export default function Home() {
  return (
    <>
    <AcquisitionAnnouncementBanner/>
    <Navbar/>
    <Hero/>
    <Logos/>
    <BentoGrid/>
    <Stats/>
    <TabsLeft/>
    <LogosMarquee/>
    <CTA/>
    <FooterSection/>
    </>

  );
}
