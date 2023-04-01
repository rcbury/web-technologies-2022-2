export class Post {
    #userIdEl = null;
    #postIdEl = null;
    postId = null;
    postInfo = null;
    postComments = null;
    #postTitleEl = null;
    #postBodyEl = null;
    #postCommentsEl = null;
    #getPost = null;
    #getPostComments = null;

    constructor(getPost, postIdUrl, getPostComments) 
    {
        this.postId = postIdUrl;
        this.#getPost = getPost;
        this.#getPostComments = getPostComments;
        this.#userIdEl = document.getElementById('user-id');
        this.#postIdEl = document.getElementById('post-id');
        this.#postTitleEl = document.getElementById('post-title');
        this.#postBodyEl = document.getElementById('post-body');
        this.#postCommentsEl = document.getElementById('post-comments');
    }

    async getPostInfo() 
    {
        try 
        {
            let res = await this.#getPost(this.postId);
            this.postInfo = res;
            let commentRes = await this.#getPostComments(this.postId);
            this.postComments = commentRes;
        } catch (error) 
        {
            window.location.href = '/errorpage.html';
            console.log(error);
        }
    }

    async init() 
    {
        await this.getPostInfo();
        console.log(this.postComments);
        this.#postBodyEl.innerHTML = this.postInfo.body;
        this.#postTitleEl.innerHTML = this.postInfo.title;
        this.#userIdEl.innerHTML = this.postInfo.userId;
        this.#postIdEl.innerHTML = this.postInfo.id;
        this.postComments.map((item) => 
        {
            this.#postCommentsEl.innerHTML += `
            <div>
                <p>id ${item.id}</p>
                <p>name ${item.name}</p>
                <p>email ${item.email}</p>
                <p>body ${item.body}</p>
            </div>`
        });
    }
}