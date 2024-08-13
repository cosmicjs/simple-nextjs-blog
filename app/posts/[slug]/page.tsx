import { SinglePost } from '../../../components/SinglePost';
import { getPost } from '../../../lib/cosmic';
import { Suspense } from 'react';
import { Loader } from '../../../components/Loader';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return {
    title: `${post.title} | Simple Next.js Blog`,
  };
}

export default async ({ params }: { params: { slug: string } }) => {
  return (
    <Suspense fallback={<Loader />}>
      <SinglePost slug={params.slug} />;
    </Suspense>
  );
};
export const revalidate = 60;
