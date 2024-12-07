import Button from '@/components/common/Button';
import Section from '@/components/layout/Section';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Section>
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-4xl">Lost in Space</h2>
        <p className="mb-6">
          Oops! The page you're looking for has wandered off. <br />
          Try heading back home!
        </p>
        <Button variant="tertiary" href="/" label="Go Home" />
      </div>
    </Section>
  );
}
