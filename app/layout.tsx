import React from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getGlobalData } from '../lib/cosmic';
import { DarkModeProvider } from '../components/DarkModeProvider';
import DarkModeKeyboardListener from '../components/DarkModeKeyboardListener';
import DarkModeToggle from '../components/DarkModeToggle';

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
          {/* Changed: DarkModeToggle absolutely positioned top-right, above all content */}
          <div className="fixed right-4 top-4 z-50">
            <DarkModeToggle />
          </div>
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