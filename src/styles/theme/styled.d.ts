import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      red: string;
      blue: string;
      altoGrey: string;
    };

    fontColor: {
      primary: string;
      secondary: string;
      dark: string;
    };

    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    fontWeight: {
      light: number | string;
      regular: number | string;
      semiBold: number | string;
      bold: number | string;
    };

    space: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
