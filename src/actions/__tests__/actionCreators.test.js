import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';
import { expect } from 'chai';

describe('actionCreators.js', () => {
	describe('saveComment', () => {
		it('should have the correct type', () => {
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT);
		});

		it('should have the correct payload', () => {
			const action = saveComment('New comment');
			expect(action.payload).to.equal('New comment');
		});
	});
});
