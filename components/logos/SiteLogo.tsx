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
    <>
      {/* Site title - left side */}
      <h1 className="flex items-center space-x-2">
        <OBMLogo className="h-8 w-8" />
        <Link
          href="/"
          className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200"
        >
          {siteData?.metadata?.site_title ?? 'Our Blue Marble'}
        </Link>
      </h1>
      {/* Subheadline - right side */}
      {siteData?.metadata?.site_tag && (
        <p className="hidden text-zinc-600 dark:text-zinc-400 md:block">
          {siteData.metadata.site_tag}
        </p>
      )}
    </>
  );
}