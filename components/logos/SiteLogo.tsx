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
    <div className="mx-auto flex max-w-3xl items-center space-x-4 p-4 lg:px-0">
      <Link href="/" className="flex items-center space-x-3">
        <OBMLogo className="w-10 md:w-12" />
        <div className="flex items-baseline space-x-3">
          <span className="text-xl font-extrabold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-100">
            {siteData?.metadata?.site_title}
          </span>
          <span className="text-sm text-zinc-500 md:text-lg dark:text-zinc-400">
            {siteData?.metadata?.site_tag}
          </span>
        </div>
      </Link>
    </div>
  );
}