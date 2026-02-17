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
        <OBMLogo className="w-8 md:w-10" />
        <div>
          <span className="text-lg font-bold text-zinc-900 md:text-2xl dark:text-zinc-100">
            {siteData?.metadata?.site_title}
          </span>
          <span className="text-zinc-500 md:text-lg dark:text-zinc-400">
            &nbsp;&nbsp;{siteData?.metadata?.site_tag}
          </span>
        </div>
      </Link>
    </div>
  );
}