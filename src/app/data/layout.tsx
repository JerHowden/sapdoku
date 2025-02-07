import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sapdoku | Data',
  description: 'Sapdoku data.',
};

export default function DataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
