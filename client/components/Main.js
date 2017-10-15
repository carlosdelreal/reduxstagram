import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>
					<span>
						<Link to="/">Reduxstagram</Link>
					</span>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

Main.propTypes = {
	children: React.PropTypes.object.isRequired
};

export default Main;
