let postId = 1; // id의 초기값

const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
];

/*  Write Post
    POST /api/posts
    { title, body }
*/
export const write = ctx => {
    const { title, body } = ctx.request.body;
    postId += 1;
    const post = { id: postId, title, body };
    posts.push(post);
    ctx.body = post;
};

/*  Read PostList
    GET /api/posts
*/
export const list = ctx => {
    ctx.body = posts;
};

/*  Read Post
    GET /api/posts/:id
*/
export const read = ctx => {
    const { id } = ctx.params;  // /posts/:id
    const post = posts.find(p => p.id.toString() === id);   // "ctx.params" returns string. 
    if (!post) {
        ctx.status = 404;
        ctx.body = {
            message: 'Post is not exist',
        };
        return;
    }
    ctx.body = post;
};

/*  Remove Post
    DELETE /api/posts/:id
*/
export const remove = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'Post is not exist',
        };
        return;
    }
    posts.splice(index, 1); // index번쨰부터 한개를 제거
    ctx.status = 204;   // No Content
};

/*  Replace Post
    PUT /api/posts/:id
    { title, body }
*/
export const replace = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'Post is not exist',
        };
        return;
    }
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

/*  Update Post (Only specific field)
    PATCH /api/posts/:id
    { title, body }
*/
export const update = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: 'Post is not exist',
        };
        return;
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};