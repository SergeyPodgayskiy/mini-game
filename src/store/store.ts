import { combineReducers, compose, createStore } from 'redux';
import { createSelectorHook } from 'react-redux';

import scoreboardReducer, { ScoreboardState } from './scoreboard';
import sceneReducer, { SceneState } from './scene';

interface RootState {
  scoreboard: ScoreboardState;
  scene: SceneState;
}

const rootReducer = combineReducers<RootState>({
  scoreboard: scoreboardReducer,
  scene: sceneReducer,
});

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(rootReducer, composeEnhancers());

export const useRootStateSelector = createSelectorHook<RootState>();
export default store;
