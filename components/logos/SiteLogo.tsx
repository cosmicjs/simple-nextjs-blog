import React from 'react';
import Link from 'next/link';
import { GlobalData } from '../../lib/types';
import OBMLogo from './OBMLogo';

export default function SiteLogo({
  siteData,
}: {
  siteData: GlobalData;
}): React.ReactElement {
  return (
    <div className="mx-auto flex max-w-3xl items-center p-4 lg:px-0">
      {/* Changed: Reverted to dynamic site title from Cosmic CMS instead of hardcoded text */}
      <h1 className="flex space-x-2">
        <OBMLogo className="h-8 w-8" />
        <Link
          href="/"
          className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200"
        >
          {siteData?.metadata?.site_title ?? 'Our Blue Marble'}
        </Link>
      </h1>
    </div>
  );
}