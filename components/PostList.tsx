import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/cosmic';

export async function PostList() {
  const posts = await getAllPosts();
  return (
    <>
      {!posts && 'You must add at least one Post to your Bucket'}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
    </>
  );
}
