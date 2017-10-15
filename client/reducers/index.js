import { combine } from 'redux';
import routerReducer from 'react-router-reducer';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routerReducer});

export default rootReducer;
