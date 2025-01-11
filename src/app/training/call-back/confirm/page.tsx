import ElementsList from '@/components/common/ElementsList';
import Section from '@/components/layout/Section';
import React from 'react';

const CallBackConfirm = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto">
      <div className="relative h-screen w-full">
        <Section>
          <div className="flex flex-col">
            <h1 className="font-poppins w-full text-center text-3xl font-semibold text-primary">
              Thank You for Booking Your Call!
            </h1>
            <h5 className="font-poppins w-full text-center text-xl text-black">
              We're thrilled to have you take the first step toward becoming a
              certified Pre-Natal and Post-Natal Yoga Trainer.
            </h5>
            <ElementsList
              title=""
              image="https://sharans1998.github.io/yonitara-ui/images/Callback-confirm.JPG"
              items={[
                {
                  title: 'Confirmation Email',
                  description:
                    'Check your inbox for a confirmation email with all the details of our upcoming call.',
                },
                {
                  title: 'Mark Your Calendar',
                  description:
                    "Make sure to mark the date and time of our call on your calendar so you don't miss it.",
                },
                {
                  title: 'Join The Call',
                  description:
                    'Join the call on time, with a laptop and a noise-free background for a productive session :)',
                },
              ]}
            />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default CallBackConfirm;
