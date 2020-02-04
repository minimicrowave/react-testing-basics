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

	it('should render a comment box', () => {
		expect(wrapped.find(CommentBox)).to.have.lengthOf(1); // .find() returns Array
		expect(wrapped.find(CommentBox)).to.not.have.lengthOf(3);
	});

	it('should render a comment list', () => {
		expect(wrapped.find(CommentList)).to.have.lengthOf(1);
	});
});
