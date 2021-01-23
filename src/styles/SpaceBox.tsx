import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

// Space Box Interface
interface BoxProps {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
}

// Space Box Component
const SpaceBox: FunctionComponent<BoxProps> = styled.div<BoxProps>`
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  padding-top: ${(props) => props.pt};
  padding-right: ${(props) => props.pr};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
`;

export default SpaceBox;
