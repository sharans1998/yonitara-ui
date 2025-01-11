import CalendlyCalendar from '@/components/common/CalendlyCalendar';
import Section from '@/components/layout/Section';
import React from 'react';

const StrategyCallBack = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto">
      <div className="relative h-screen w-full">
        <Section>
          <h1 className="font-poppins flex text-center text-3xl font-semibold text-primary">
            Book Your Free Consultation Call Now and Start Your Journey to
            Becoming a Certified Pre-Natal and Post-Natal Yoga Trainer!
          </h1>
          <CalendlyCalendar />
        </Section>
      </div>
    </div>
  );
};

export default StrategyCallBack;
