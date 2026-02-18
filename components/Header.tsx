import React from 'react';
import SiteLogo from './logos/SiteLogo';
import { GlobalData } from '../lib/types';

// Changed: Removed DarkModeToggle import — toggle is now absolutely positioned in layout
export default function Header({ name }: { name: GlobalData }): React.ReactElement {
  return (
    <header className="sticky top-0 z-10 mx-auto w-full bg-white/75 backdrop-blur-lg dark:bg-zinc-950/75">
      {/* Changed: Added py-3 for comfortable vertical height in the sticky nav */}
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 lg:px-0">
        <SiteLogo siteData={name} />
        {/* Changed: DarkModeToggle removed from header — now lives in layout.tsx as fixed overlay */}
      </div>
    </header>
  );
}