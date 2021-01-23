import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  button {
    appearance: none;
    display: inline-block;
    font-family: inherit;
    font-size: 100%;
    border: 0;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  html,
  body {
    min-height: 100vh;
  }
  
  body {
    display: flex;
    flex-direction: column;
  }

 :root {
    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.theme.fontColor.primary};
    background-color: ${({ theme }) => theme.color.blue};
     -webkit-font-smoothing: antialiased;
 }
`;

export default GlobalStyles;
