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
    <div className="mx-auto flex max-w-3xl items-center justify-between p-4 lg:px-0">
      {/* Changed: Added site_tag back alongside the site title */}
      <h1 className="flex space-x-2">
        <OBMLogo className="h-8 w-8" />
        <Link
          href="/"
          className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200"
        >
          {siteData?.metadata?.site_title ?? 'Our Blue Marble'}
        </Link>
      </h1>
      {/* Changed: Added site_tag display from Cosmic CMS globals */}
      {siteData?.metadata?.site_tag && (
        <p className="hidden text-zinc-600 dark:text-zinc-400 md:block">
          {siteData.metadata.site_tag}
        </p>
      )}
    </div>
  );
}