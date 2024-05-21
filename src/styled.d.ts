// This is to allow typing of my theme with styled components. Default theme is passed in to styled components.
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundColor: string,
        containerColor: string,
        textColorPrimary: string,
        accentColor: string,
        borderColor: string,
        breakpoints: {
            laptopMax: string,
            laptopMin: string,
            mobile: string,
        }
    }
}
