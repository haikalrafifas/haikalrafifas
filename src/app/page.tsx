'use client';

import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import ClientsSection from '@/components/organisms/ClientsSection';
import ProfessionalExperiencesSection from '@/components/organisms/ProfessionalExperiencesSection';
import ProjectsSection from '@/components/organisms/ProjectsSection';
import PostsSection from '@/components/organisms/PostsSection';
import ContactSection from '@/components/organisms/ContactSection';

export default function HomePage() {
  return (
    <main className="font-sans text-gray-700 bg-white">
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <ProfessionalExperiencesSection />
      <ProjectsSection />
      <PostsSection />
      <ContactSection />
    </main>
  );
}
