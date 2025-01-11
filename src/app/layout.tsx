import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Roboto_Mono } from 'next/font/google';
// import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Yonitara',
  description: 'Empowering With Informed Choices',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto_mono.variable} bg-secondary antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          {/* <Navbar /> */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
