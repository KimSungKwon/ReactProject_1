import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

// Middleware that check "/:id"  is valid?
export const checkObjectId = ( ctx, next ) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 404;
        return;
    }
    return next();
};

/*  Write Post

    POST /api/posts
    { 
        title: 'title', 
        body: 'contents',
        tags: ['tag1', 'tag2']
    }
*/
export const write = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()),
    });

    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
    });
    try {
        await post.save();  // save 'post instance' to DB
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*  Read Post List

    GET /api/posts
*/
export const list = async ctx => {
    try {
        const posts = await Post.find().exec(); // Request Query to server 
        ctx.body = posts;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*  Read Post

    GET /api/posts/:id
*/
export const read = async ctx => {
    const { id } = ctx.params;  // /posts/:id
    try { 
        const post = await Post.findById(id).exec()    
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*  Remove Post

    DELETE /api/posts/:id
*/
export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndDelete(id).exec();
        ctx.status = 204;   // No Content
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*  Update Post (Only specific field)

    PATCH /api/posts/:id
    { 
        title: 'title', 
        body: 'contents',
        tags: ['tag1', 'tag2']
    }
*/
export const update = async ctx => {
    const { id } = ctx.params;
    
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string()),
    });

    const result = schema.validate(ctx.request.body)
    if (result.error) {
        ctx.status = 400;
        return;
    }

    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true   // return UPDATED data
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};