import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';
import { tokenReducer } from './tokenReducer';

export const rootReducer = combineReducers({
  comments: commentsReducer,
  token: tokenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
