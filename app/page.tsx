import React from 'react';
import { PostList } from '../components/PostList';
import { Loader } from '../components/Loader';
import { Suspense } from 'react';
import { getGlobalData, getAllPosts } from '../lib/cosmic';
import type { Metadata } from 'next';

// Changed: Added generateMetadata to set OG title and image on home page
export async function generateMetadata(): Promise<Metadata> {
  const globalData = await getGlobalData();
  const posts = await getAllPosts();

  const siteTitle = globalData?.metadata?.site_title ?? 'Our Blue Marble';
  const siteTag = globalData?.metadata?.site_tag ?? '';

  // Use the first post's hero image as the OG image, if available
  const firstPostHero = posts?.[0]?.metadata?.hero?.imgix_url;

  // Changed: Force JPG format for Twitter compatibility using imgix fm=jpg parameter
  const ogImageUrl = firstPostHero
    ? `${firstPostHero}?w=1200&h=630&fit=crop&auto=format,compress`
    : undefined;
  const twitterImageUrl = firstPostHero
    ? `${firstPostHero}?w=1200&h=630&fit=crop&fm=jpg&auto=compress`
    : undefined;

  return {
    title: siteTitle,
    description: siteTag,
    openGraph: {
      title: siteTitle,
      description: siteTag,
      type: 'website',
      ...(ogImageUrl
        ? {
            images: [
              {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: siteTitle,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteTag,
      // Changed: Twitter image uses fm=jpg to force JPEG format for compatibility
      ...(twitterImageUrl ? { images: [twitterImageUrl] } : {}),
    },
  };
}

export default async function Page() {
  return (
    <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
      <Suspense fallback={<Loader />}>
        <PostList />
      </Suspense>
    </main>
  );
}
export const revalidate = 60;