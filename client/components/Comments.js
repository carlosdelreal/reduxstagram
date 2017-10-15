import React from 'react';

class Comments extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	renderComment(comment, i) {
		return (
			<div className="comment" key={i}>
			{comment.text}
			<button className="remove-comment">&times;</button>
			</div>
		)
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('submitting the form!!!');
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
	}

	render() {
		return (
			<div className="comment">
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit} >
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
}

export default Comments;
