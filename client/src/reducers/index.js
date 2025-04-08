import { combineReducers } from 'redux';
import auth from './auth';
import posts from './posts'; // Ensure `post s` is valid

const reducers = combineReducers({ posts,auth });

export default reducers; // Make sure it's a default export



