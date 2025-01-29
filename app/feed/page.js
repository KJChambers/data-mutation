import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

const posts = await getPosts();

export function generateMetadata() {
    const numberOfPosts = posts.length;
    return {
        title: `${numberOfPosts} posts found!`,
        description: 'Browse all posts'
    }
}

export default function FeedPage() {
    return (
        <>
            <h1>All posts by all users</h1>
            <Posts posts={posts} />
        </>
    );
}