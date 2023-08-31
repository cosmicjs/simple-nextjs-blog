import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from './icons/ArrowRight';
import Tag from './Tag';
import { Post } from '../lib/types';
import AuthorAttribution from './AuthorAttribution';
import AuthorAvatar from './AuthorAvatar';
import { sanitize } from 'isomorphic-dompurify';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      {post.metadata.hero?.imgix_url && (
        <Link href={`/posts/${post.slug}`}>
          <Image
            width={2800}
            height={400}
            className="mb-5 h-[400px] w-full rounded-xl bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]"
            src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
            priority
            alt={post.title}
            placeholder="blur"
            blurDataURL={`${post.metadata.hero?.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
          />
        </Link>
      )}
      <h2 className="pb-3 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-200">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 md:space-y-0">
          <AuthorAvatar post={post} />
          <AuthorAttribution post={post} />
        </div>
        <div className="flex select-none justify-start space-x-2 md:hidden md:justify-end">
          {post.metadata.categories &&
            post.metadata.categories.map((category) => (
              <Tag key={category.title}>{category.title}</Tag>
            ))}
        </div>
      </div>
      <div
        className="py-6 text-zinc-500 dark:text-zinc-300"
        dangerouslySetInnerHTML={{
          __html: sanitize(post.metadata.teaser) ?? '',
        }}
      />
      <div className="flex items-center justify-between font-medium text-green-600 dark:text-green-200">
        <Link href={`/posts/${post.slug}`}>
          <div className="flex items-center space-x-2">
            <span>Read more</span>
            <ArrowRight className="h-4 w-4 text-inherit" />
          </div>
        </Link>
        <div className="hidden select-none justify-end space-x-2 md:flex ">
          {post.metadata.categories &&
            post.metadata.categories.map((category) => (
              <Tag key={category.title}>{category.title}</Tag>
            ))}
        </div>
      </div>
    </div>
  );
}
