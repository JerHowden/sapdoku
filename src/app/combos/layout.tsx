import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sapdoku | Combos',
  description: 'A list and table of sapdoku requirement combos.',
};

export default function CombosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
