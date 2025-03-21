import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

// export const SapdokuContext = createContext({
//   date: new Date(),
//   setDate: (newDate: Date) => {},
// });

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  // const [date, setDate] = useState(new Date());

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* <SapdokuContext.Provider value={{ date, setDate }}> */}
      {children}
      {/* </SapdokuContext.Provider> */}
    </ThemeProvider>
  );
}
