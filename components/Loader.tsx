import { LoaderCircle } from 'lucide-react';

export function Loader() {
  return (
    <div className="-mt-20 flex h-screen animate-spin items-center justify-center">
      <LoaderCircle className="size-20 text-teal-500" />
    </div>
  );
}
