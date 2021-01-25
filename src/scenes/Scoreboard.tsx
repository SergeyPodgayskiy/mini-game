import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { max, sumBy } from 'lodash';
import { useRootStateSelector } from '../store';
import { Button, Heading, SpaceBox } from '../styles';
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
      <Heading>{isWinner(score) ? `Congrats, ${playerName}, you win!` : `${playerName}, try again!`}</Heading>
      <h3>
        Score: {score} / {getMaxPossibleScore()}
      </h3>
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
