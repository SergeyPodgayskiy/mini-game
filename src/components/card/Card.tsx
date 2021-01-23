import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface CardProps {
  value: number;
  onClick?: () => void;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card: FunctionComponent<CardProps> = ({ value, onClick }) => {
  const handleOnClick = () => {
    // Flip card
    setTimeout(onClick, 500);
  };
  return <StyledCard onClick={handleOnClick}>{value}</StyledCard>;
};

export default Card;
