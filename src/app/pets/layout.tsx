import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sapdoku Pet Data',
  description: 'Sapdoku pets!',
};

export default function PetsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
