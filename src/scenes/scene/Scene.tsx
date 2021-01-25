import React, { FunctionComponent } from 'react';
import useScene from './useScene';

const Scene: FunctionComponent = () => {
  const { CurrentSceneComponent, switchToNextScene } = useScene();

  return <CurrentSceneComponent switchToNextScene={switchToNextScene} />;
};

export default Scene;
