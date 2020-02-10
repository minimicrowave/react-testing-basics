export default ({ dispatch }) => (next) => (action) => {
	// Check to see if action has a promise on its payload property
	// If it does, wait for it to resolve, else, send action to next middleware
    console.log(action)
	if (!action.payload || !action.payload.then) {
		return next(action);
	}

	action.payload.then((response) => {
		// .then checks if there is a promise
		const newAction = { ...action, payload: response };
		dispatch(newAction);
	});
};
