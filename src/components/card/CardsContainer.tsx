import React, { FunctionComponent, HTMLProps } from 'react';
import styled from 'styled-components';

import { themeSpaces } from '../../styles/theme/theme';
import Card from './Card';

// Component's Props
interface CardsContainerProps extends HTMLProps<HTMLDivElement> {
  cards: number[];
  pickCard: (value: number) => void;
  revealCards?: boolean;
  flipSpeedFrontToBackInSeconds?: number;
}

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  padding: ${themeSpaces.md};

  & > div {
    margin: ${themeSpaces.md};
  }
`;

// Component
const CardsContainer: FunctionComponent<CardsContainerProps> = ({
  cards = [],
  pickCard,
  revealCards,
  flipSpeedFrontToBackInSeconds,
}) => {
  return (
    <StyledCardsContainer>
      {cards.map((cardValue, index) => (
        <Card
          key={cardValue + index}
          value={cardValue}
          reveal={revealCards}
          onFlip={() => pickCard(cardValue)}
          flipSpeedFrontToBackInSeconds={flipSpeedFrontToBackInSeconds}
        />
      ))}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
