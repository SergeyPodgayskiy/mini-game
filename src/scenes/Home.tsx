import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';

import { Button, Input, SpaceBox } from '../styles';
import SceneProps from './scene/scene.props';
import { setPlayerName, useRootStateSelector } from '../store';
import { themeSpaces } from '../styles/theme/theme';

const Home: FunctionComponent<SceneProps> = ({ switchToNextScene }) => {
  const dispatch = useDispatch();
  const scoreboard = useRootStateSelector((state) => state.scoreboard);
  const [playerName, changePlayerName] = useState<string>(scoreboard.playerName);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    changePlayerName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isEmpty(playerName)) {
      dispatch(setPlayerName(playerName));
      switchToNextScene();
    }
  };

  return (
    <div>
      <h1>Hi, let&apos;s play 50 / 50</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={playerName} onChange={handleInputChange} placeholder="Enter Username" />
        <SpaceBox mt={themeSpaces.md}>
          <Button type="submit">Start</Button>
        </SpaceBox>
      </form>
    </div>
  );
};

export default Home;
