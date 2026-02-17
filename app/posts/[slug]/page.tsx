// app/posts/[slug]/page.tsx
import { SinglePost } from '../../../components/SinglePost';
import { getPost } from '../../../lib/cosmic';
import { Suspense } from 'react';
import { Loader } from '../../../components/Loader';

// Changed: params is now a Promise in Next.js 16 and must be awaited
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: `${post.title} | Simple Next.js Blog`,
  };
}

// Changed: Converted to named function, params is now a Promise in Next.js 16
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
export const revalidate = 60;