import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

// you only really want to use context with react router
/*
- To navigate around without a Link tag, we need access to react-router.
  - all components have access to react-router through the context property
- to get access to react router, we had to define a contextType (static contextTypes...)
- we then pulled the submission function to a separate helper function called onSubmit
- we called our action creator (createPost) and then once it is successfully created, we
navigated them to the index
- we navigated them by calling our router and added a new path for the router to automatically
navigate to
*/
class PostsNew extends Component {
	// to get access to the react router, we havd
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
		 .then(() => { 
		 	// blog post has been created, navigate user to the index
		 	// We navigate by calling this.context.router.push with the new path
		 	// to navigate to; '/' is the index
		 	this.context.router.push('/');
		 })
	}



	render() {
		// const handleSubmit = this.props.handleSubmit (same as below, below is ES6)
		// const title = this.props.fields.title
		const { fields: {title, categories, content }, handleSubmit } = this.props

		// makes all those 'onChange' type things show up
		// {...title}
		return (
			// we need to make action creator that will receive the properties above (const fields); 
			// we just created it in the src/actions/index.js file

			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>

					<input type="text" className="form-control" {...title}/>
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories}/>
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content}/>
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}
// Link tag below Submit; notice it is essentially a component
// avoid using Context as little as possible; only use it with React Router

// L88 => is this a reduxForm function; I don't understand how title.error gets my error message
// I think validate is a helper...
function validate(values) {
	const errors = {};

	if (!values.title){
		errors.title = 'Enter a title';
	}
	if (!values.categories){
		errors.categories = 'Enter categories';
	}
	if (!values.content){
		errors.content = 'Enter some content';
	}

	return errors;
}
// reduxForm is injecting some helpers for us onto this.props inside the PostsNew component
/* 
- By defining the different fields, we got three properties injected into our props object.
- Each of these three objects contain properties that manage our form elements
*/

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// first argument is the form and fields properties, second argument is null because we don't need
// state inside our form, and third is the action creator called 'createPost' in the shorthand form
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);


// user types something in...record it in applicatation state
/* 
state === {
	form: {
		PostsNewForm: {
			title: '...',
			categories: '...',
			content:'...'
		}
	}
}
*/