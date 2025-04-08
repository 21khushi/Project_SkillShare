import {FETCH_ALL,CREATE,UPDATE,LIKE,DELETE,SAVE_POST} from '../constants/actionTypes';
export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
    case LIKE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case SAVE_POST:
      return posts.map((post)=>
      post._id===action.payload?{...post,saved:!post.saved} :post);
    default:
      return posts;
  }
};
