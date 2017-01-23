# README

This application is based on lectures from Stephen's Grider's 
<a target="_blank" href="https://www.udemy.com/react-redux/">React-Redux</a>
course on Udemy.

## Tools Used in this App
- Axios
- ReduxForm
- Redux
- Connect
- React Router
- 


## Next Steps


## Lecture 74
- Here are the basic steps to bring in routes:
  - Replace the <App /> in src/index.js with the Router history={}
  - Create src/routes.js
  - Import react, route, indexroute
  - export default the route that you wish to make available
  - <Router history={browserHistory} routes={routes}/>

## Lecture 75
- If we ever want to nest children routes under the App component, we need to do 
add {this.props.children} to the App component otherwise it won't know where to
display it

## Lecture 80
- In the weather app, user clicked 'search' which called the action creator, the action
goes through middleware, reducer
- when the URL changes, need to somehow call an action creator to fetch data
- componentWillMount() is a lifecycle method that React recognizes and calls automatically whenever
the component is about to be rendered for the first time.  
- it will not be called on subsequent re-renders though
- this is a great place to fetch our data

## Lecture 81
- To give our react Component the ability to call an action creator, we need to upgrade it
from a component to a container (/src/components/posts_index)
- 4 steps:
  - import Connect at the top
  - import action creator
  - mapDispatchToProps function
  - connect that to our component

## Lecture 82
- Steps to putting this together:

1. scaffold out the posts/new
2. add component to routes file as a new URL that the user can navigate to
3. implement a button in the posts/index component that allows them to navigate to the 'new' post page
4. add an actual form for people to add content
5. create the action creator and update our reducer

Step 1
```javascript
// components/posts_new.js
import React, { Component } from 'react';

class PostsNew extends Component {
	render() {
		return (
			<div>Create Form </div>
		);
	}
}

export default PostsNew;
```

Step 2
```javascript
// routes.js
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
.
.
.
	<IndexRoute component={PostsIndex} />
	<Route path="posts/new" component={PostsNew} />
</Route>
```

Step 3
```javascript
// components/posts_index.js
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
.
.
.
// add the following div to our component
<div className="text-xs-right">
	<Link to="/posts/new" className="btn btn-primary">
		Add a Post
	</Link>
</div>
```

Step 4
```javascript

```

Step 5
```javascript

```

