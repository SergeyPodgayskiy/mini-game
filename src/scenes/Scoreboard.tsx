import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { max, sumBy } from 'lodash';
import { useRootStateSelector } from '../store';
import { Button, SpaceBox } from '../styles';
import SceneProps from './scene/scene.props';
import { resetScore } from '../store/scoreboard';
import gameRounds from '../game.settings';
import { themeSpaces } from '../styles/theme/theme';

const Scoreboard: FunctionComponent<SceneProps> = ({ switchToNextScene }) => {
  const dispatch = useDispatch();
  const { playerName = '', score = 0 } = useRootStateSelector((state) => state.scoreboard);

  const handleResetGame = () => {
    dispatch(resetScore());
    switchToNextScene();
  };

  return (
    <>
      <h1>{isWinner(score) ? `Congrats, ${playerName}, you win!` : `Oh, ${playerName}, you lost. Let's try again!`}</h1>
      <h2>
        Score: {score} / {getMaxPossibleScore()}
      </h2>
      <SpaceBox mt={themeSpaces.xl}>
        <Button type="button" onClick={handleResetGame}>
          Play Again
        </Button>
      </SpaceBox>
    </>
  );
};

export default Scoreboard;

// Helper
function getMaxPossibleScore(): number {
  return sumBy(gameRounds, (cardsValues) => max(cardsValues));
}

function isWinner(playerScore: number) {
  return getMaxPossibleScore() === playerScore;
}
