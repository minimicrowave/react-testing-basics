import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';
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
});
