import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import { expect } from 'chai';

describe('commentsReducer.js', () => {
	it('should handle unknown action type', () => {
		const newState = commentsReducer([], {});

		expect(newState).to.have.lengthOf(0);
		expect(newState).to.deep.equal([]);
	});

	it('should save comment with action type SAVE_COMMENT', () => {
		const action = {
			type: SAVE_COMMENT,
			payload: 'New comment'
		};

		const newState = commentsReducer([], action);

		expect(newState).to.have.lengthOf(1);
		expect(newState).to.deep.equal([ 'New comment' ]);
	});

	it('should return an array of comments', () => {
		const action = {
			type: FETCH_COMMENTS,
			payload: [
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
		};

		const newState = commentsReducer([], action);

		expect(newState).to.have.lengthOf(3);
		expect(newState).to.deep.equal([
			'id labore ex et quam laborum',
			'quo vero reiciendis velit similique earum',
			'odio adipisci rerum aut animi'
		]);
	});
});
