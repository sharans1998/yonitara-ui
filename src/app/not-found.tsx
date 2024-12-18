import Button from '@/components/common/Button';
import Section from '@/components/layout/Section';

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto flex flex-col gap-5 text-center lg:max-w-lg">
        <h2 className="text-4xl">Lost in Space</h2>
        <p className="mb-6">
          Oops! The page you&apos;re looking for has wandered off. <br />
          Try heading back home!
        </p>
        <div className="flex justify-center">
          <Button variant="tertiary" href="/" label="Go Home" />
        </div>
      </div>
    </Section>
  );
}
