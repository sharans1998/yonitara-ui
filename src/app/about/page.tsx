import MissionVisionSection from '@/components/about/MissionVisionSection';
import ImageTitleDescription from '@/components/common/ImageTitleDescription';
import Section from '@/components/layout/Section';
import React from 'react';

const About = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto">
      <Section>
        <MissionVisionSection
          mission="Our mission is to empower mothers with holistic health, supported by evidence-based knowledge and expert guidance, enabling them to take control of their motherhood journey."
          vision="We envision a world where women actively participate in their birthing process and motherhood journey, rather than merely experiencing it as something that happens to them."
        />
      </Section>
      <Section backgroundColor="#f5e7fc">
        <ImageTitleDescription
          title="Shruthi Jain"
          description="A leader in yoga therapy, Shruthi holds an MSc in Yoga Therapy from S-VYASA University and is a registered RYT 500 and RPYT. With over a decade of experience, Shruthi has transformed the lives of pregnant women through holistic wellness. An accomplished marathon runner, she continues to inspire others with her achievements, including completing races while pregnant. Shruthi has led yoga workshops for major corporations like Capgemini, WeWork, and H&M, leaving a lasting impact on corporate wellness."
          image="/about/shruthi.jpeg"
          toggle={false}
        />
      </Section>
      <Section>
        <ImageTitleDescription
          title="Pankhuree"
          description="A passionate yoga and fitness coach, Pankhuree specializes in pre and postnatal yoga. Certified in craniosacral therapy, Bach flower remedies, yoga therapy, and Ayurveda, she offers a holistic approach to well-being. As the former Head of Yoga and Innovation at iMumz, a Shark Tank-featured startup, she has empowered over 10,000 expecting mothers through personalized care and guidance. Her goal is to enhance fertility, support healthy pregnancies, and aid in postpartum recovery by helping women tap into their inner strength and wisdom."
          image="/about/pankhuree.jpeg"
          toggle={true}
        />
      </Section>
    </div>
  );
};

export default About;
