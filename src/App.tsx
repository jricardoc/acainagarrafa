import {
  Hero,
  CourseIntro,
  Recipes,
  Testimonials,
  Modules,
  Bonuses,
  Plans,
  Guarantee,
  FAQ,
  StartNow,
  Countdown,
} from "@/components/sections";
import { Footer, TopBanner } from "@/components/layout";
import { SectionDivider } from "@/components/ui";

function App() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <TopBanner />
      <main className="relative">
        <Hero />

        <SectionDivider />
        <CourseIntro />

        <SectionDivider />
        <Recipes />

        <SectionDivider />
        <Modules />

        <SectionDivider />
        <Bonuses />

        <SectionDivider />
        <Plans />

        <SectionDivider />
        <Guarantee />

        <SectionDivider />
        <Testimonials />

        <SectionDivider />

        {/* Countdown component (includes Final Call and Popup) */}
        <Countdown />

        <SectionDivider />
        <StartNow />

        <SectionDivider />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
