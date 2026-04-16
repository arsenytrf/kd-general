import HomeHero from "@/components/home/HomeHero";
import OwnerStrip from "@/components/home/OwnerStrip";
import PhotoBand from "@/components/home/PhotoBand";
import StatsStrip from "@/components/home/StatsStrip";
import ServiceGrid from "@/components/home/ServiceGrid";
import QuotePhoto from "@/components/home/QuotePhoto";
import ProjectGallery from "@/components/home/ProjectGallery";
import ReviewsSection from "@/components/home/ReviewsSection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ServiceAreaMap from "@/components/home/ServiceAreaMap";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <OwnerStrip />
      <PhotoBand offset={2} count={5} />
      <StatsStrip />
      <ServiceGrid />
      <QuotePhoto reviewIndex={0} imageIndex={3} />
      <ProjectGallery />
      <ReviewsSection />
      <ProcessTimeline />
      <ServiceAreaMap />
      <CtaBanner />
    </>
  );
}
