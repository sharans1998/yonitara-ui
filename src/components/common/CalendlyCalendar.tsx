'use client';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyCalendar = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/yonitara-birth/30min" />
    </div>
  );
};

export default CalendlyCalendar;
