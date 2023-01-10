// import original module declarations
import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    primary: {
      main: string;
      caption: string;
      success: string;
      header: string;
    };
    fonts: {
      regular: string;
      medium: string;
      heavy: string;
    };
    fontSizes: {
      huge: string;
      big: string;
      medium: string;
      normal: string;
      small: string;
      tiny: string;
    };
  }
}
