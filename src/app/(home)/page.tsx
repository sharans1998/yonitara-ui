import HeroBannerSection from '@/components/home/HeroBannerSection'
import Section from '@/components/layout/Section'
import React from 'react'

const Home = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Section>
        <HeroBannerSection />
      </Section>
      <Section>
        <h1>Section 2</h1>
        <p>This is the second section.</p>
      </Section>
      <Section>
        <h1>Section 3</h1>
        <p>This is the third section.</p>
      </Section>
    </div>
  )
}

export default Home