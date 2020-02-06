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
					postId: 1,
					id: 1,
					name: 'id labore ex et quam laborum',
					email: 'Eliseo@gardner.biz',
					body:
						'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
				},
				{
					postId: 1,
					id: 2,
					name: 'quo vero reiciendis velit similique earum',
					email: 'Jayne_Kuhic@sydney.com',
					body:
						'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
				},
				{
					postId: 1,
					id: 3,
					name: 'odio adipisci rerum aut animi',
					email: 'Nikita@garfield.biz',
					body:
						'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
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
