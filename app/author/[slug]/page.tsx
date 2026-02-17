// app/author/[slug]/page.tsx
import React from 'react';
import { getAuthor } from '../../../lib/cosmic';
import { PostList } from '../../../components/PostList';
import { Loader } from '../../../components/Loader';
import { Suspense } from 'react';

// Changed: params is now a Promise in Next.js 16 and must be awaited
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = await getAuthor(slug);
  return {
    title: `${author.title} posts | Simple Next.js Blog`,
  };
}

// Changed: Converted to named function, params is now a Promise in Next.js 16
export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="mx-auto w-full max-w-3xl flex-col px-4 lg:px-0">
      <Suspense fallback={<Loader />}>
        <PostList authorSlug={slug} />
      </Suspense>
    </main>
  );
}
export const revalidate = 60;