import type { Metadata } from 'next';
// @ts-ignore
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Personal portfolio website built with Next.js.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
