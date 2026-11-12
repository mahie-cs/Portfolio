import { Hero } from '@/components/sections/hero';
import { AboutPreview } from '@/components/sections/about-preview';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { SkillsMarquee } from '@/components/sections/skills-marquee';
import { ContactCta } from '@/components/sections/contact-cta';

export default function HomePage() {
  return (
    <div className="container-wrapper">
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsMarquee />
      <ContactCta />
    </div>
  );
}
