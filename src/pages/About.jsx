import PageHero from '../components/PageHero';
import AboutSection from '../components/AboutSection';
import ProcessTimeline from '../components/ProcessTimeline';
import { pageHeroes } from '../data/data';

export default function About() {
  const hero = pageHeroes.about;

  return (
    <>
      <PageHero {...hero} />
      <AboutSection />
      <ProcessTimeline />
    </>
  );
}
