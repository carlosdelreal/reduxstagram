// The reducer does the job of maintaining state.
// Every time that you run (displatch) an action, every single reducer will run
// and wether you choose to act on that action or not is up to the reducer.
// In other words, whenever something happens, all reducers run and changes in state are up to you.

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			console.log('Incrementing likes!!!');
			const i = action.index;
			return [
				...state.slice(0, i), // before the one we are updtading
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1) // after the one we are updating
			]
			
		default:
			return state;
	}
}

export default posts;
