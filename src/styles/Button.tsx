import styled from 'styled-components';
import { themeSpaces } from './theme/theme';

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  padding: ${themeSpaces.md};

  color: ${({ theme }) => theme.fontColor.primary};
  background-color: ${({ theme }) => theme.color.red};

  text-transform: uppercase;
`;

export default Button;
