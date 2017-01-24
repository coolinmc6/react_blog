import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// this routes the '/' to the component App
// a forward slash, '/', is just the root of the App
export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);

