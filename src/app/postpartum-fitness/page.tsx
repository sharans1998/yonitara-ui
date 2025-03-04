import ImageWrapper from '@/components/common/ImageWrapper';
import NameEmailPhone from '@/components/forms/NameEmailPhone';
import ContentWrapper from '@/components/layout/ContentWrapper';
import Section from '@/components/layout/Section';
import { Metadata } from 'next';
import React from 'react';

const PostpartumFitnessPage = () => {
  const title = 'Free Workshop: Postpartum Fitness — Abhyasa Style';
  const subTitle = 'Feel Strong, Confident & Energized After Baby';
  return (
    <Section>
      <ContentWrapper>
        <div className="my-10 lg:my-20">
          <h2 className="mb-4 text-3xl font-bold text-primary">{title}</h2>
          <p className="mb-6 text-center text-sm text-gray lg:text-lg">
            {subTitle}
          </p>
          <div className="mx-auto mb-8 max-w-[600px]">
            <p className="mb-4">
              <strong>💖 Mama, we see you! </strong>
              “Will my body ever feel strong again?” We&apos;ve been there - and
              we&apos;ve got you. As moms and postpartum fitness experts, we
              created a proven formula that helped us heal, feel strong, and
              thrive - and now we&apos;re sharing it with you!
            </p>
            <NameEmailPhone />
            <p className="mt-4">
              <strong>👩🏻‍🍼 Led by New Moms & Experts:</strong> <br />
              🔥 Shruthi Jain - Marathoner, Pregnancy & Postpartum Trainer,
              Birth Educator (10 months postpartum & thriving!) <br />
              🔥 Tanvi Chawda - Strength & Conditioning Coach, Postpartum
              Fitness Expert, Certified Pilates Instructor
            </p>
            <div className="relative mx-auto h-80 w-80">
              <ImageWrapper
                src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1740576966/HEIC_to_WEBP_Shruthi_Tanvi_yjhoin.webp"
                alt="Image of Shruthi and Tanvi"
              />
            </div>
            <p className="mt-4">
              <strong>💡 What You&apos;ll Learn: </strong>
            </p>
            <div>
              <ul>
                <li>
                  ✔ How to safely rebuild core strength & say goodbye to the
                  “mom pooch”
                </li>
                <li>
                  ✔ Techniques to heal & strengthen your pelvic floor (no more
                  leaks!)
                </li>
                <li>
                  ✔ Safe weight loss strategies — no extreme diets or long
                  workouts needed
                </li>
                <li>
                  ✔ Tips to relieve postpartum pains like back pain, tightness
                  & poor posture
                </li>
              </ul>
            </div>
            <p className="mt-4">
              👶 Your body is powerful. Let&apos;s help it heal & thrive —
              together!
            </p>
          </div>
        </div>
      </ContentWrapper>
    </Section>
  );
};

export const metadata: Metadata = {
  title: 'Yonitara',
  description: 'Free Workshop: Postpartum Fitness — Abhyasa Style',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dyb4kpthp/image/upload/v1740576966/HEIC_to_WEBP_Shruthi_Tanvi_yjhoin.webp',
        width: 800,
        height: 600,
        alt: 'Image of Shruthi and Tanvi',
      },
    ],
  },
};

export default PostpartumFitnessPage;
