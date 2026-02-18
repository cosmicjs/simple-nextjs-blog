import React from 'react';
import SiteLogo from './logos/SiteLogo';
import { GlobalData } from '../lib/types';
import DarkModeToggle from './DarkModeToggle';

export default function Header({ name }: { name: GlobalData }): React.ReactElement {
  return (
    <header className="sticky top-0 z-10 mx-auto w-full bg-white/75 backdrop-blur-lg dark:bg-zinc-950/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 lg:px-0">
        <SiteLogo siteData={name} />
        <DarkModeToggle />
      </div>
    </header>
  );
}