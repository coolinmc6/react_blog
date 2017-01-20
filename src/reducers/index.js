import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
// the above syntax sipmly says import redux-form, grab the 'reducer' property off of it and 
// create a variable called formReducer

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
