import React, { FunctionComponent, HTMLProps } from 'react';
import styled from 'styled-components';
import Card from './Card';

// Component's Props
interface CardContainerProps extends HTMLProps<HTMLDivElement> {
  cards: number[];
  pickCard: (value) => void;
}

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// Component
const CardContainer: FunctionComponent<CardContainerProps> = ({ cards = [], pickCard }) => {
  return (
    <StyledCardContainer>
      {cards.map((cardValue) => (
        <Card key={cardValue} value={cardValue} onClick={() => pickCard(cardValue)} />
      ))}
    </StyledCardContainer>
  );
};

export default CardContainer;
