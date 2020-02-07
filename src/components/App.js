import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import * as actions from 'actions';

class App extends Component {
	renderButton = () => {
		const { auth, changeAuth } = this.props;
		return <button onClick={() => changeAuth(!auth)}>{auth ? 'Sign Out' : 'Sign In'}</button>;
	};

	renderHeader = () => {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/post">Add a Comment</Link>
				</li>
				<li>{this.renderButton()}</li>
			</ul>
		);
	};

	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route path="/" exact component={CommentList} />
				<Route path="/post" component={CommentBox} />
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(App);
