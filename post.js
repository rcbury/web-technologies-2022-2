import { Post } from "./src/components/post.js"

const getPost = async (postId) => 
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const items = await res.json()
    return items;
}

const getPostComments = async (postId) => 
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const items = await res.json()
    return items;
}

const init = async () => {
    const url = new URL(window.location.href);
    const postIdUrl = +url.searchParams.get('postid');
    const post = new Post(getPost, postIdUrl, getPostComments);
    await post.init();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    await init()
}
