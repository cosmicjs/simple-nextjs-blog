import { createBucketClient } from '@cosmicjs/sdk';
import { Post, GlobalData, Author } from './types';

const cosmic = createBucketClient({
  // @ts-ignore
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? '',
  // @ts-ignore
  readKey: process.env.COSMIC_READ_KEY ?? '',
});
export default cosmic;

export async function getGlobalData(): Promise<GlobalData> {
  // Get global data
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: 'globals',
          slug: 'header',
        })
        .props('metadata.site_title,metadata.site_tag')
        .depth(1)
    );
    const siteData: GlobalData = data.object;
    return Promise.resolve(siteData);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve({} as GlobalData);
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    // Get all posts
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'posts',
        })
        .props('id,type,slug,title,metadata,created_at')
        .depth(1)
    );
    const posts: Post[] = await data.objects;
    return Promise.resolve(posts);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve([]);
}

export async function getPost(slug: string): Promise<Post> {
  try {
    // Get post
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: 'posts',
          slug,
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .depth(1)
    );
    const post = await data.object;
    return post;
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve({} as Post);
}

export async function getRelatedPosts(slug: string): Promise<Post[]> {
  try {
    // Changed: removed .sort('random') which is not supported in Cosmic SDK v1.5+
    // Instead, fetch all non-matching posts and shuffle manually
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'posts',
          slug: {
            $ne: slug,
          },
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .depth(1)
    );
    const suggestedPosts: Post[] = await data.objects;
    // Changed: manual shuffle to replace .sort('random')
    for (let i = suggestedPosts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [suggestedPosts[i], suggestedPosts[j]] = [suggestedPosts[j], suggestedPosts[i]];
    }
    return Promise.resolve(suggestedPosts);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve([]);
}

export async function getAuthor(slug: string): Promise<Author> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: 'authors',
          slug,
        })
        .props('id,title')
        .depth(1)
    );
    const author = await data.object;
    return Promise.resolve(author);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve({} as Author);
}

export async function getAuthorPosts(id: string): Promise<Post[]> {
  try {
    // Changed: removed .sort('random') which is not supported in Cosmic SDK v1.5+
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'posts',
          'metadata.author': id,
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .depth(1)
    );
    const authorPosts: Post[] = await data.objects;
    return Promise.resolve(authorPosts);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve([]);
}