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

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
					<span className="pull-xs-right">{post.categories}</span>
					<strong>{post.title}</strong>
					</Link>
				</li>
			)
		})
	}
	
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}
// start L91 by mapping state to props
function mapStateToProps(state) {
	return { posts: state.posts.all };
}

// REFACTOR => remove the mapDispatchToProps and pass in object
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }

// we changed the first argument, null, to mapStateToProps
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// this gives us access to this.props.fetchPosts
