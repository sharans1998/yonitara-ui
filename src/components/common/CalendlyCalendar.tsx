'use client';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyCalendar = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
    </div>
  );
};

export default CalendlyCalendar;
