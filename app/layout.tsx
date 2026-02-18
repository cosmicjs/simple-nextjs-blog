import React from 'react';
import './globals.css'
import Header from '../components/Header'; // Changed: use default import (component uses export default)
import Footer from '../components/Footer'; // Changed: use default import (component uses export default)
import { getGlobalData } from '../lib/cosmic';
import { DarkModeProvider } from '../components/DarkModeProvider';
import DarkModeKeyboardListener from '../components/DarkModeKeyboardListener';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalData = await getGlobalData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DarkModeProvider>
          <DarkModeKeyboardListener />
          <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <Header name={globalData} />
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}