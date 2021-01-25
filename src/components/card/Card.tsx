import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

interface CardProps {
  value: number;
  onFlip?: () => void;
  reveal?: boolean;
  flipSpeedFrontToBackInSeconds?: number;
}

const StyledCard = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.color.blue};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 160px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};

  user-select: none;

  @media (min-width: 768px) {
    width: 150px;
    height: 200px;
  } ;
`;

const Front = styled(StyledCard)``;
const Back = styled(StyledCard)`
  font-size: 3rem;
`;

const Card: ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  { value, reveal = false, onFlip: onFlipCallback, flipSpeedFrontToBackInSeconds = 1 },
  ref,
) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    if (reveal) {
      setIsFlipped(true);
    }
  }, [reveal]);

  const handleOnFlip = (event) => {
    event.preventDefault();

    if (isFlipped) return;

    setIsFlipped(true);
    onFlipCallback();
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedFrontToBack={flipSpeedFrontToBackInSeconds}
    >
      <Front key={value} onClick={handleOnFlip} ref={ref}>
        ?
      </Front>
      <Back>{value}</Back>
    </ReactCardFlip>
  );
};

export default forwardRef(Card);
