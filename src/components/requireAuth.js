import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
	class ComposedComponent extends Component {
		componentDidMount() {
            console.log(this.props)
			this.shouldRedirectToLogin();
		}

		componentDidUpdate() {
			this.shouldRedirectToLogin();
		}

		shouldRedirectToLogin() {
			if (!this.props.auth) this.props.history.push('/');
		}
		render() {
			return <ChildComponent {...this.props}/>;
		}
	}

	const mapStateToProps = ({ auth }) => ({ auth });

	return connect(mapStateToProps)(ComposedComponent);
};
