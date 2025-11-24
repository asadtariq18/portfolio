import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: true });
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), { ssr: true });
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"), { ssr: true });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense>
          <Hero />
        </Suspense>
        <Suspense>
          <AboutSection />
        </Suspense>
        <Suspense>
          <SkillsSection />
        </Suspense>
        <Suspense>
          <ExperienceSection />
        </Suspense>
        <Suspense>
          <ProjectsSection />
        </Suspense>
        <Suspense>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
