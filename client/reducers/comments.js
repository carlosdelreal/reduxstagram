// The reducer does the job of maintaining state.
// Every time that you run (displatch) an action, every single reducer will run
// and wether you choose to act on that action or not is up to the reducer.
// In other words, whenever something happens, all reducers run and changes in state are up to you.

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			// return the new state with the new comment
			// use an array with "spread" operator
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			console.log('Removing a comment');
			// we need to return the new state without the deleted
			// return and array with the "spread" operator
			return [
				// from the start to the one we want to delete
				...state.slice(0, action.i),
				// after the deleted one to the end
				...state.slice(action.i + 1)
			];
		default:
			return state;

	}
	return state;
}

function comments(state = [], action) {	
	if (typeof action.postId !== 'undefined') {
		return {
			// take the current state
			...state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;
