import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';
import { tokenReducer } from './tokenReducer';
import { meReducer } from './meReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  me: meReducer,
  post: postReducer,
  comments: commentsReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
