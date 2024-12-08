import ElementsList from '@/components/common/ElementsList';
import Features from '@/components/common/Features';
import HeroBanner from '@/components/common/HeroBanner';
import Section from '@/components/layout/Section';
import React from 'react';

const TeachersTrainingPage = () => {
  return (
    <>
      <HeroBanner
        title="Pre & Postnatal Teacher’s Training Certification"
        subtitle="Specialized Training for Experts Supporting Pre and Postnatal Mothers"
        imageSrc="/images/teachers-training.jpg"
        imageAlt="Teachers Training"
        ctaText="Learn More"
        ctaLink="/teachers-training"
      />
      <Section backgroundColor="#f5e7fc">
        <Features
          title="What we offer"
          subTitle="Our program is designed to equip you with the knowledge and skills to support pre and postnatal mothers through their journey."
          features={[
            {
              title: 'Beyond Yoga',
              description:
                'Gain knowledge in childbirth education, Ayurvedic lifestyle practices, postnatal rehabilitation, and Garbhsanskar, providing a well-rounded support system for mothers.',
              icon: '/images/ttc/features/beyond-yoga.svg',
            },
            {
              title: 'Holistic Approach',
              description:
                'Address emotional and mental health to help guide expectant mothers through a balanced and healthy pregnancy.',
              icon: '/images/ttc/features/holistic-approach.svg',
            },
            {
              title: 'Certification and Support',
              description:
                'Upon completion, you will receive a globally recognized certification and ongoing mentorship from our Yonitara Birth Education Team.',
              icon: '/images/ttc/features/certification-support.svg',
            },
          ]}
        />
      </Section>
      <Section>
        <ElementsList
          title="Why Join Our Program"
          image="/images/ttc/why-join.jpg"
          items={[
            {
              title: 'Passionate About Women’s Health',
              description:
                'Ideal for yoga trainers and fitness enthusiasts dedicated to supporting pregnant and postpartum women',
            },
            {
              title: 'Holistic Support',
              description:
                'Gain the knowledge to provide comprehensive care beyond traditional yoga stretches',
            },
            {
              title: 'Boost Your Income',
              description:
                'Expand your expertise and increase your earning potential',
            },
            {
              title: 'Structured Training',
              description:
                'Avoid the pitfalls of relying on random YouTube videos with our structured, evidence-based curriculum',
            },
          ]}
        />
      </Section>
    </>
  );
};

export default TeachersTrainingPage;
