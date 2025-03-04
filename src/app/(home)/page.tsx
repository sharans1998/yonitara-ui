import HeroBannerSection from '@/components/home/HeroBannerSection';
import ImageTitleDescription from '@/components/common/ImageTitleDescription';
import Section from '@/components/layout/Section';
import React from 'react';
import CardSection from '@/components/home/CardSection';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';
import UnderDevelopment from '@/components/layout/UnderDevelopment';

const Home = () => {
  return <UnderDevelopment />;

  return (
    <div className="snap-y snap-mandatory overflow-y-auto">
      <div className="relative h-screen w-full">
        <HeroBannerSection
          title="Empowering With Informed Choices"
          subTitle="Wombs intelligence to heal and empower/ holistic womb intelligence"
          image="https://yonitara.com/images/hero-banner-2.png"
          smallImage="https://yonitara.com/images/hero-banner-2-sm.png"
        />
      </div>
      <Section>
        <ImageTitleDescription
          title="YoniTara"
          description="At YoniTara Birth, we empower women through a holistic approach to health and wellness. We believe in the natural power of a woman’s body to heal and thrive with the right support. From menarche to menopause, the female body is designed to nurture life, but its wisdom can be overshadowed by misinformation or treating women as weak."
          image="https://yonitara.com/images/intro-2.jpeg"
          toggle={false}
        />
      </Section>
      <Section backgroundColor="#f5e7fc">
        <ImageTitleDescription
          title="YoniTara"
          description="We offer holistic programs that empower women, whether you're looking to support others through pre and postnatal yoga certifications or heal yourself with yoga and lifestyle sessions focused on gynecological health, pregnancy, and postpartum recovery."
          image="https://yonitara.com/images/intro.jpeg"
          toggle={true}
        />
      </Section>
      <Section>
        <CardSection
          title="Offerings"
          subTitle="We offer holistic programs that empower women, whether you're looking to support others through pre and postnatal yoga certifications or heal yourself with yoga and lifestyle sessions focused on gynecological health, pregnancy, and postpartum recovery."
          cards={[
            {
              icon: <FaChalkboardTeacher color="#8d31be" />,
              title: 'Teachers Training Program',
              description:
                'Specialized training for experts supporting pre and postnatal mothers, beyond yoga. Our certification blends Eastern wisdom with Western science, equipping you to support mothers through pregnancy and postpartum recovery.',
              route: '/teachers-training',
            },
            {
              icon: <GiLotus color="#8d31be" />,
              title: 'Regular Yoga and Lifestyle Sessions',
              description:
                'Holistic sessions for every phase of womanhood, from menstrual health to menopause. Our classes combine ancient wisdom with modern insights to nurture physical and emotional well-being.',
              route: '/yoga-lifestyle-sessions',
            },
            // {
            //   icon: <FaUserMd />,
            //   title: 'One-on-One Consultation',
            //   description:
            //     'Personalized support for fertility, pregnancy, and postnatal recovery. We offer tailored advice on yoga, lifestyle, Ayurveda, and therapeutic practices to guide you towards better health and well-being.',
            // },
          ]}
        />
      </Section>
    </div>
  );
};

export default Home;
