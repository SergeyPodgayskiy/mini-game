import { findLastIndex, first, keys } from 'lodash';

import { Action } from './store.types';
import Scene from '../scenes/scene/scene.enum';

// Declarations
export interface SceneState {
  scenes?: Scene[];
  current: Scene;
}

// Action Variants
const SET_NEXT_SCENE = 'scene:set_next';

type SceneActionType = typeof SET_NEXT_SCENE;
type SceneAction = Action<SceneActionType, SceneState>;

// Initial State
const scenes = keys(Scene) as Scene[];
const initialState: SceneState = {
  scenes,
  current: first(scenes),
};

// Reducer
export default function sceneReducer(state: SceneState = initialState, { type }: SceneAction): SceneState {
  switch (type) {
    case SET_NEXT_SCENE: {
      return {
        ...state,
        current: getNextScene(state.scenes, state.current),
      };
    }
    default:
      return state;
  }
}

// Actions Creators
export function setNextScene(): SceneAction {
  return {
    type: SET_NEXT_SCENE,
  };
}

// Helpers
function getNextScene(scenes: Scene[], currentScene: Scene): Scene {
  const indexOfCurrentScene = scenes.indexOf(currentScene);
  const indexOfNextScene = indexOfCurrentScene === findLastIndex(scenes) ? 0 : indexOfCurrentScene + 1;

  return scenes[indexOfNextScene];
}
