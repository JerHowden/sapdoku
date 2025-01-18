import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sapdoku | Pets',
  description: 'A list and table of super auto pets pet data.',
};

export default function PetsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
