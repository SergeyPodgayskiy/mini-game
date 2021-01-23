import { findLastIndex, first, shuffle } from 'lodash';
import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import gameRounds, { GameRound } from '../game.settings';
import { addPointsToScore } from '../store';
import SceneProps from './scene/scene.props';
import CardContainer from '../components/card/CardContainer';

const Game: FunctionComponent<SceneProps> = ({ switchToNextScene }) => {
  const dispatch = useDispatch();
  const [currentRound, setCurrentRound] = useState<GameRound>(first(gameRounds));
  const shuffledCards = shuffle(currentRound);

  const pickCard = (cardValue) => {
    dispatch(addPointsToScore(cardValue));
    setCurrentRound(getNextRound(gameRounds, currentRound));

    if (isLastRound(gameRounds, currentRound)) {
      switchToNextScene();
    }
  };

  return <CardContainer cards={shuffledCards} pickCard={pickCard} />;
};

export default Game;

// Helpers
function getNextRound(rounds: GameRound[], currentRound: GameRound): GameRound {
  if (isLastRound(rounds, currentRound)) {
    return currentRound;
  }

  return rounds[rounds.indexOf(currentRound) + 1];
}

function isLastRound(rounds: GameRound[], currentRound: GameRound) {
  const currentRoundIndex = rounds.indexOf(currentRound);
  return currentRoundIndex === findLastIndex(rounds);
}
