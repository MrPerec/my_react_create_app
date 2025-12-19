import { ActionCreator, AnyAction, Reducer } from 'redux';
import { UPDATE_COMMENT } from './constants';

// типизация для initialState
export interface IComment {
  id: number;
  value: string;
}
export type RootState = {
  comment: IComment[];
};

/** это первоначальное наполнение для рельюсера */
const initialState: RootState = {
  comment: [{ id: 0, value: 'Привет, SKillbox!' }],
};

/** допишем actionCreator в который запишем передаваемый объект который вызывали в dispatcher в CommentForm
 * так же занесем строку 'UPDATE_COMMENT' в константу, заменим её на переменную везде где ранее использовали эту строку.
 * Что бы можно было переиспользовать её в других местах и не допускать опечаток
 */
export const updateComment: ActionCreator<AnyAction> = (index, value) => ({
  type: UPDATE_COMMENT,
  index,
  value,
});

/* создадим корневой редюсер 
  1й аргумент это state
  2й это action

  При старте приложение redux вызывает корневой reducer, по умолчанию самый первый вызов reducer происходит с состоянием undefined
  в таком случае происходит автоматическая замена его на initialState и уже state будет браться из него.
*/
export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action?.type) {
    // создаем логику изминения комментария для action, важно что это должна быть чистая ф-я, должен возвращаться state без мутаций
    case UPDATE_COMMENT:
      const newComments = state.comment.map((elem, index) => {
        if (index === action.index) return { ...elem, value: action.value };
        return { ...elem };
      });

      return { comment: newComments };

    // если пришедший action не найден то возвращаем изначальное состояние
    default:
      return state;
  }
};
