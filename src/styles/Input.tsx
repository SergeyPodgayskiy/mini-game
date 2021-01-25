import styled from 'styled-components';
import { themeSpaces } from './theme/theme';

const Input = styled.input`
  appearance: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.blue};
  outline: none;
  border: 3px solid ${({ theme }) => theme.color.white};
  border-radius: 5px;
  width: 100%;
  padding: ${themeSpaces.md};
`;

export default Input;
