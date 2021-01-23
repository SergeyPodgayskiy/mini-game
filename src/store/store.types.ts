import { Action as ReduxAction } from 'redux';

// Custom Generic Action
export interface Action<TActionType, TPayload> extends ReduxAction<TActionType> {
  payload?: Partial<TPayload>;
}
