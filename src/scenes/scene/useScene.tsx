import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { setNextScene, useRootStateSelector } from '../../store';
import sceneMapping from './scene.mapping';
import SceneProps from './scene.props';

// Return Props Interface
export interface ReturnType {
  CurrentSceneComponent: FunctionComponent<SceneProps>;
  switchToNextScene: () => void;
}

// Hook
const useScene = (): ReturnType => {
  const dispatch = useDispatch();
  const currentScene = useRootStateSelector((state) => state.scene.current);
  const CurrentSceneComponent = sceneMapping.get(currentScene);

  const handleSwitchToNextScene = () => {
    dispatch(setNextScene());
  };

  return {
    CurrentSceneComponent,
    switchToNextScene: handleSwitchToNextScene,
  };
};

export default useScene;
