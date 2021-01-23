import { FunctionComponent } from 'react';
import Home from '../Home';
import Game from '../Game';
import Scoreboard from '../Scoreboard';
import SceneProps from './scene.props';
import Scene from './scene.enum';

// Scenes Mapping
const sceneMapping = new Map<Scene, FunctionComponent<SceneProps>>([
  [Scene.Home, Home],
  [Scene.Game, Game],
  [Scene.Scoreboard, Scoreboard],
]);

export default sceneMapping;
