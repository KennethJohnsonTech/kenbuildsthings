import { StarField } from "@/components/star-field";
import { ScrollProgress } from "@/components/scroll-progress";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SectionDivider } from "@/components/section-divider";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Writing } from "@/components/writing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <div className="grain-overlay relative mx-auto min-h-screen w-full max-w-[1440px]">
        <StarField />
        <main id="main-content" className="relative z-10 flex flex-col">
          {/* Header + Hero */}
          <div className="flex flex-col gap-10 px-6 pt-8 pb-16 md:gap-12 md:px-[72px] md:pt-10 md:pb-[72px]">
            <Header />
            <Hero />
          </div>

          {/* About Section */}
          <div className="flex flex-col px-6 md:px-[72px]">
            <SectionDivider />
            <div className="pt-12 pb-0">
              <About />
            </div>
          </div>

          {/* Work + Writing + Footer */}
          <div className="flex flex-col gap-12 px-6 pt-12 pb-[72px] md:px-[72px]">
            <SectionDivider />
            <Work />
            <Writing />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
