import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// Connect is the vehicle of passing all the data down to the Main component.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;