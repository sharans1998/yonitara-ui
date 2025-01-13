import Button from '@/components/common/Button';
import VimeoPlayer from '@/components/common/VimeoPlayer';
import Section from '@/components/layout/Section';
import React from 'react';

const TrainingPage = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto">
      <div className="relative h-screen w-full">
        <Section>
          <h1 className="font-poppins flex text-center text-3xl font-semibold text-primary">
            Master Pre-Natal and Post-Natal Yoga in Just 8 Weeks with Our
            Comprehensive Certification Program!
          </h1>
          <VimeoPlayer videoId="1046228216" />
          <div className="flex animate-bounce justify-center">
            <Button
              label="Book a Free Strategy Call"
              variant="tertiary"
              href="/training/call-back"
            />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default TrainingPage;
