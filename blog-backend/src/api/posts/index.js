import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);     // Read PostList
posts.post('/', postsCtrl.write);   // Write Post
posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);  // Read Post
posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove); // Remove Post
posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);  //  Update Post (Only specific field)

export default posts;