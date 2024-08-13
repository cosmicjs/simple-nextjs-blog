import Link from 'next/link';
import { Post } from '../lib/types';

export default function AuthorAvatar({ post }: { post: Post }): JSX.Element {
  return (
    <Link href={`/author/${post.metadata.author?.slug}`}>
      <img
        className="h-8 w-8 rounded-full"
        src={`${post.metadata.author?.metadata.image?.imgix_url}?w=100&auto=format,compression`}
        alt={post.title}
      />
    </Link>
  );
}
