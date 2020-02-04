import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import CommentBox from 'components/CommentBox';

describe('CommentBox.js', () => {
	let wrapped;

	beforeEach(() => {
		wrapped = mount(<CommentBox />);
	});
	afterEach(() => {
		wrapped.unmount();
	});

	it('should return a textarea and a button', () => {
		expect(wrapped.find('textarea')).to.have.lengthOf(1);
		expect(wrapped.find('button')).to.have.lengthOf(1);
	});

	describe('Text Area', () => {
		const NEW_COMMENT = 'Hello, new comment.';
		beforeEach(() => {
			wrapped.find('textarea').simulate('change', { target: { value: NEW_COMMENT } });
			wrapped.update();
        });
        
		it('should be able to create ', () => {
			expect(wrapped.find('textarea').prop('value')).to.be.equal(NEW_COMMENT);
		});

		it('should clear text area upon form submission', () => {
			wrapped.find('form').simulate('submit');
			wrapped.update();

			expect(wrapped.find('textarea').prop('value')).to.be.equal('');
		});
	});
});