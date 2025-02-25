import ElementsList from '@/components/common/ElementsList';
import Features from '@/components/common/Features';
import HeroBanner from '@/components/common/HeroBanner';
import HeroBannerSection from '@/components/home/HeroBannerSection';
import Section from '@/components/layout/Section';
import UnderDevelopment from '@/components/layout/UnderDevelopment';
import React from 'react';

const PostpartumFitnessPage = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <HeroBannerSection
          title="Postpartum Fitness ABHYASA by Yonitara"
          subTitle="A program created by moms, for moms!"
          image="https://yonitara.com/images/hero-banner-2.png"
          smallImage="https://yonitara.com/images/hero-banner-2-sm.png"
        />
      </div>
      <Section backgroundColor="#f5e7fc">
        <Features
          title="Led by New Moms & Experts"
          features={[
            {
              title: 'Shruthi Jain',
              description:
                'Gain knowledge in childbirth education, Ayurvedic lifestyle practices, postnatal rehabilitation, and Garbhsanskar, providing a well-rounded support system for mothers.',
              icon: '',
            },
            {
              title: 'Tanvi Chawda',
              description:
                'Address emotional and mental health to help guide expectant mothers through a balanced and healthy pregnancy.',
              icon: '',
            },
          ]}
        />
      </Section>
      <Section>
        <ElementsList
          title="What Makes This Program Unique?"
          image="https://yonitara.com/images/ttc/why-join.jpg"
          items={[
            {
              title: 'Core Rehab',
              description:
                'Heal & strengthen your core, no matter how long it’s been since birth',
            },
            {
              title: 'Strength Training',
              description:
                'Rebuild muscle & boost metabolism for safe postpartum weight loss',
            },
            {
              title: 'Yoga',
              description:
                'Improve flexibility, reduce stress & enhance recovery',
            },
            {
              title: 'Pilates',
              description:
                'Target deep core muscles for a toned, stable, and pain-free body',
            },
          ]}
        />
      </Section>
      <Section backgroundColor="#f5e7fc">
        <ElementsList
          toggle
          title="This Program is for You if You Want To:"
          image="https://yonitara.com/images/ttc/master-certification-includes.jpg"
          items={[
            {
              title:
                'Tighten your belly & rebuild core strength (goodbye, mom pooch!)',
              description: '',
            },
            {
              title: 'Heal & strengthen your pelvic floor (no more leaks!)',
              description: '',
            },
            {
              title:
                'Lose weight safely & effectively (without extreme diets or long workouts!)',
              description: '',
            },
            {
              title:
                'Get rid of postpartum pains like back pain, upper body tightness & poor posture',
              description: '',
            },
          ]}
        />
      </Section>
    </>
  );
};

export default PostpartumFitnessPage;
