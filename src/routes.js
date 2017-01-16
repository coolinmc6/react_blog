import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';


// this routes the '/' to the component App
// a forward slash, '/', is just the root of the App
export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
	</Route>
)
