// This is to allow typing of my theme with styled components. Default theme is passed in to styled components.
import Theme from './Theme';

type ThemeInterface = typeof Theme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface { }
}
