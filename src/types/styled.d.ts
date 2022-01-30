import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {[key: string]: string};
    colors: {[key: string]: string};
    fontSizes: {[key: string]: string};
  }
}
