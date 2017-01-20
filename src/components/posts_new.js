import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
	render() {
		// const handleSubmit = this.props.handleSubmit (same as below, below is ES6)
		// const title = this.props.fields.title
		const { fields: {title, categories, content }, handleSubmit } = this.props

		// makes all those 'onChange' type things show up
		// {...title}
		return (
			<form onSubmit={handleSubmit}>
				<h3>Create A New Post</h3>
				<div className='form-group'>
					<label>Title</label>

					<input type="text" className="form-control" {...title}/>
				</div>
				<div className='form-group'>
					<label>Categores</label>
					<input type="text" className="form-control" {...categories}/>
				</div>
				<div className='form-group'>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content}/>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}
// reduxForm is injecting some helpers for us onto this.props inside the PostsNew component
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
})(PostsNew);


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