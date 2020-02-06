import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

describe('Integration Tests', () => {
	const wrapped = mount(
		<Root>
			<App />
		</Root>
    );
    
	beforeEach(() => {
		moxios.install();
		moxios.stubRequest('http://jsonplaceholder.typicode.com/comments/', {
			status: 200,
			response: [
				{
					id: 1,
					name: 'id labore ex et quam laborum'
				},
				{
					id: 2,
					name: 'quo vero reiciendis velit similique earum'
				},
				{
					id: 3,
					name: 'odio adipisci rerum aut animi'
				}
			]
		});
	});

	afterEach(() => {
		moxios.uninstall();
		wrapped.unmount();
	});

	it('should fetch and display a list of comments', () => {
		// find and click fetchComments button
		wrapped.find('.fetch-comments').simulate('click');

		moxios.wait(() => {
			wrapped.update();

			expect(wrapped.find('li')).to.be.lengthOf(3);
		});
	});
});
