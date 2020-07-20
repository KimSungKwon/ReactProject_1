import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);     // Read PostList
posts.post('/', postsCtrl.write);   // Write Post
posts.get('/:id', postsCtrl.read);  // Read Post
posts.delete('/:id', postsCtrl.remove); // Remove Post
posts.put('/:id', postsCtrl.replace);   // Replace Post
posts.patch('/:id', postsCtrl.update);  //  Update Post (Only specific field)

module.exports = posts;