import ElementsList from '@/components/common/ElementsList';
import Features from '@/components/common/Features';
import HeroBanner from '@/components/common/HeroBanner';
import Section from '@/components/layout/Section';
import React from 'react';

const TeachersTrainingPage = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <HeroBanner
          title="Pre & Postnatal Teacher’s Training Certification"
          subtitle="Specialized Training for Experts Supporting Pre and Postnatal Mothers"
          imageSrc="/images/ttc/ttc/Yoga Group Classes Inside Gym.jpg"
          imageAlt="Teachers Training"
          ctaText="Learn More"
          ctaLink="/teachers-training"
        />
      </div>
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
      <Section backgroundColor="#f5e7fc">
        <ElementsList
          toggle
          title="Master Certification Includes"
          image="/images/ttc/master-certification-includes.jpg"
          items={[
            {
              title: 'Yoga & Beyond',
              description:
                'Strength training and Pilates integrated with yoga.',
            },
            {
              title: 'Garbha Sanskar',
              description:
                'Deepen your understanding of ancient Indian wisdom.',
            },
            {
              title: 'Childbirth Education',
              description: 'Comprehensive techniques for labor support.',
            },
            {
              title: 'Ayurvedic Nutrition',
              description: 'Personalized dietary guidance for holistic health.',
            },
          ]}
        />
      </Section>
      <Section>
        <ElementsList
          title="What You'll Learn"
          image="/images/ttc/what-you-learn.jpg"
          items={[
            {
              title: 'Holistic Pregnancy & Postpartum Support',
              description:
                'Beyond simple stretches, learn comprehensive support techniques.',
            },
            {
              title: 'Ancient and Modern Practices',
              description:
                'Blend ancient Indian wisdom with the best of Western practices.',
            },
            {
              title: 'Ayurvedic Nutrition',
              description:
                'Support pregnancy and postpartum with holistic Ayurvedic nutrition.',
            },
            {
              title: 'Childbirth Education',
              description:
                'Advocate for mothers through in-depth knowledge of childbirth.',
            },
            {
              title: 'Labor Support & Guidance',
              description: 'Provide effective labor support and guidance.',
            },
            {
              title: 'Bonding with Baby',
              description:
                'Facilitate bonding activities through Garbha Sanskar.',
            },
          ]}
        />
      </Section>
      <Section backgroundColor="#f5e7fc">
        <ElementsList
          toggle
          title="In This Program, You will Learn"
          image="/images/ttc/in-this-program.jpg"
          items={[
            {
              title: 'Why Moms should NOT be treated delicately',
              description: 'Uncover the surprising truth!',
            },
            {
              title: '3 Secrets About Pregnancy',
              description: 'As a Trainer, you MUST KNOW these!',
            },
            {
              title: "India's Most Comprehensive Certification",
              description: 'Combining the best of the East and the West.',
            },
            {
              title: 'More Than Adjusted Asanas',
              description: 'The TRUTH about Prenatal and Postnatal Yoga.',
            },
            {
              title: 'Master the 4 Pillars',
              description:
                'Yoga, Ayurveda, Garbha Sanskar, and Childbirth Education.',
            },
          ]}
        />
      </Section>
    </>
  );
};

export default TeachersTrainingPage;
