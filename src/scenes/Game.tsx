import { delay, findLastIndex, first, map, shuffle } from 'lodash';
import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import gameRounds, { GameRound } from '../game.settings';
import { addPointsToScore } from '../store';
import SceneProps from './scene/scene.props';
import CardsContainer from '../components/card/CardsContainer';
import { Button, SpaceBox, Heading } from '../styles';
import { themeSpaces } from '../styles/theme/theme';

// Flip speed in seconds
const flipSpeedFrontToBackInSeconds = 1;

// Shuffled Cards
const rounds = map(gameRounds, (cards) => shuffle(cards));

// Component
const Game: FunctionComponent<SceneProps> = ({ switchToNextScene }) => {
  const dispatch = useDispatch();
  const [round, setRound] = useState<GameRound>(first(rounds));
  const [revealCards, setRevealCards] = useState<boolean>(false);

  const handlePickCard = (cardValue) => {
    if (!revealCards) {
      dispatch(addPointsToScore(cardValue));
      delay(() => {
        setRevealCards(true);
      }, flipSpeedFrontToBackInSeconds * 1000);
    }
  };

  const handleSwitchToNextRound = () => {
    if (!revealCards) return;

    setRevealCards(false);
    setRound(getNextRound(rounds, round));
  };

  return (
    <>
      <Heading>Round {getRoundNumber(rounds, round)}</Heading>
      <h3>Which one has the highest score?</h3>
      <CardsContainer
        cards={round}
        pickCard={handlePickCard}
        revealCards={revealCards}
        flipSpeedFrontToBackInSeconds={flipSpeedFrontToBackInSeconds}
      />
      {revealCards && (
        <SpaceBox mt={themeSpaces.xl}>
          {checkIfLastRound(rounds, round) ? (
            <Button onClick={switchToNextScene}>Show Score</Button>
          ) : (
            <Button onClick={handleSwitchToNextRound}>Next Round</Button>
          )}
        </SpaceBox>
      )}
    </>
  );
};

export default Game;

// Helpers
function getNextRound(rounds: GameRound[], currentRound: GameRound): GameRound {
  if (checkIfLastRound(rounds, currentRound)) {
    return currentRound;
  }

  return rounds[rounds.indexOf(currentRound) + 1];
}

function checkIfLastRound(rounds: GameRound[], currentRound: GameRound): boolean {
  const currentRoundIndex = rounds.indexOf(currentRound);
  return currentRoundIndex === findLastIndex(rounds);
}

function getRoundNumber(rounds: GameRound[], currentRound: GameRound): number {
  return rounds.indexOf(currentRound) + 1;
}
