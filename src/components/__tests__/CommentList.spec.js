import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Root from 'Root';
import CommentList from 'components/CommentList';

describe('CommentList.js', () => {
	const initialState = { comments: [ 'Comment 1', 'Comment 2', 'Comment 3' ] };
	let wrapped;

	beforeEach(() => {
		wrapped = mount(
			<Root initialState={initialState}>
				<CommentList />
			</Root>
		);
	});

	afterEach(() => wrapped.unmount());

	it('should create one <li> per comment', () => {
		expect(wrapped.find('li')).to.have.lengthOf(3);
	});

	it('should display text for each comment', () => {
		expect(wrapped.render('li').text()).to.contain('Comment 1');
		expect(wrapped.render('li').text()).to.contain('Comment 2');
	});
});
