'use client';

import { ThemeProvider } from 'next-themes';
import { createContext, ReactNode, useState } from 'react';

export const SapdokuContext = createContext({
  date: new Date(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDate: (newDate: Date) => {},
  hearts: 5,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setHearts: (newHearts: number) => {},
});

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const [date, setDate] = useState(new Date());
  const [hearts, setHearts] = useState(5);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SapdokuContext.Provider value={{ date, setDate, hearts, setHearts }}>
        {children}
      </SapdokuContext.Provider>
    </ThemeProvider>
  );
}
