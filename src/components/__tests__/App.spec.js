import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('App.js', () => {
	let wrapped;

	beforeEach(() => {
		wrapped = shallow(<App />);
	});

	it.skip('should render a comment box', () => {
		// deprecated
		expect(wrapped.find(CommentBox)).to.have.lengthOf(1); // .find() returns Array
		expect(wrapped.find(CommentBox)).to.not.have.lengthOf(3);
	});

	it.skip('should render a comment list', () => {
		// deprecated
		expect(wrapped.find(CommentList)).to.have.lengthOf(1);
	});
});
