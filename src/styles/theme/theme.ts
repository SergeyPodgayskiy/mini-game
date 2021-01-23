import { DefaultTheme } from 'styled-components';

const baseSpace = 8;

export const theme: DefaultTheme = {
  color: {
    red: '#df273e',
    blue: '#3288c4',
    altoGrey: '#d8d8d8',
  },
  fontColor: {
    primary: '#fff',
    secondary: '#b5b5b5',
    dark: '#424242',
  },
  fontSize: {
    xs: '.8rem',
    sm: '.875rem',
    md: '1rem',
    lg: '1.025rem',
    xl: '1.1rem',
    xxl: '1.25rem',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  space: {
    xxs: `${baseSpace / 4}px`,
    xs: `${baseSpace / 2}px`,
    sm: `${baseSpace}px`,
    md: `${baseSpace * 1.5}px`,
    lg: `${baseSpace * 2}px`,
    xl: `${baseSpace * 2.5}px`,
    xxl: `${baseSpace * 3}px`,
  },
};

type Space = typeof theme.space;
const themeSpaces: Space = theme.space;

export { themeSpaces };
export default theme;
