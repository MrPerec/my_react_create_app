import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';
import { tokenReducer } from './tokenReducer';
import { meReducer } from './meReducer';

export const rootReducer = combineReducers({
  comments: commentsReducer,
  token: tokenReducer,
  me: meReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
