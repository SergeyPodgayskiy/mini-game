import styled from 'styled-components';
import { themeSpaces } from './theme/theme';

const Input = styled.input`
  appearance: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.color.blue};
  outline: none;
  border: 3px solid ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  width: 100%;
  padding: ${themeSpaces.md};
`;

export default Input;
