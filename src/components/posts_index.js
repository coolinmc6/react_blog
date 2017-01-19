import React, { Component } from 'react';
// #1 - import Connect at the top
import { connect } from 'react-redux';
// #2 - import action creator
// import { bindActionCreators } from 'redux'; => not needed
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}
	
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				List of blog posts 

			</div>
		);
	}
}

// REFACTOR => remove the mapDispatchToProps and pass in object
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }

export default connect(null, { fetchPosts })(PostsIndex);
// this gives us access to this.props.fetchPosts
