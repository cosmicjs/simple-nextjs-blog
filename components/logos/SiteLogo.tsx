import Link from 'next/link';
import OBMLogo from './OBMLogo';
import { GlobalData } from '../../lib/types';

export default function SiteLogo({
  siteData,
}: {
  siteData: GlobalData;
}): JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between px-4 py-4 md:flex-row lg:px-0">
      <h1 className="flex space-x-2">
        <OBMLogo className="h-8 w-8" />
        <Link
          href="/"
          className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200"
        >
          {siteData.metadata.site_title}
        </Link>
      </h1>
      <span className="relative hidden text-lg tracking-wide text-zinc-500 dark:text-zinc-200 md:flex">
        {siteData.metadata.site_tag}
      </span>
    </div>
  );
}
