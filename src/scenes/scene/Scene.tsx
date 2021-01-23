import React from 'react';
import useScene from './useScene';

const Scene = () => {
  const { CurrentSceneComponent, switchToNextScene } = useScene();

  return <CurrentSceneComponent switchToNextScene={switchToNextScene} />;
};

export default Scene;
