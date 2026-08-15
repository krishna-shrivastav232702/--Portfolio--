"use client"

import IntroAnimation from "@/components/IntroAnimation";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import StackedSection from "@/components/StackedSection";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-gray-200">
      <div className="h-screen w-full sticky top-0 z-0">
        <IntroAnimation
          userName="Krishna Shrivastav"
          userRole="Software Developer — Backend, Distributed Systems & Cloud Infrastructure"
        />
      </div>
      
      <div className="relative z-10 w-full bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Wrapper for stacked sections to define their sticky bounds */}
        <div className="w-full relative">
          <StackedSection>
            <AboutSection />
          </StackedSection>
          <StackedSection>
            <SkillsSection />
          </StackedSection>
          
          <ProjectsSection />
        </div>

        {/* Footer/Contact section outside the sticky bounds */}
        <ContactSection />
      </div>
    </main>
  );
}
