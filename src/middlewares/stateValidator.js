import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ getState }) => (next) => (action) => {
	//  validation logic will only run after action has gone through everything inside redux store
	next(action);

	if(!tv4.validate(getState(), stateSchema)) {
        console.warn("Invalid state schema detected.")
    };
};
