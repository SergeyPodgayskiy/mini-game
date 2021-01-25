import styled from 'styled-components';
import { themeSpaces } from './theme/theme';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: ${themeSpaces.xxl} 0;
`;
export default Heading;
