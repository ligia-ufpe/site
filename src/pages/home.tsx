import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';
import { Members } from '../components/sections/members';
// import { Resources } from '../components/sections/resources';
import { Contact } from '../components/sections/contact';
import { Initiatives } from '../components/sections/initiatives';
import { Events } from '../components/sections/events';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Ligia - UFPE</title>
        <meta
          name="description"
          content="Ligia is an AI research initiative fostering innovation and collaboration at Federal University of Pernambuco."
        />
      </Helmet>
      <main>
        <Hero />
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="initiatives" className="py-20 bg-white/5">
          <Initiatives />
        </section>
        <section id="events" className="py-20 bg-white/5">
          <Events />
        </section>
        <section id="members" className="py-20">
          <Members />
        </section>
        {/* <section id="resources" className="py-20 bg-white/5">
          <Resources />
        </section> */}
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </>
  );
}