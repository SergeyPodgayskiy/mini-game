import styled from 'styled-components';
import { themeSpaces } from './theme/theme';

const PageContainer = styled.div`
  padding: ${themeSpaces.md};
  padding-top: 100px;
  height: 100vh;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
  }
`;

export default PageContainer;
