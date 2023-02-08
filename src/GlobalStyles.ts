import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
    }

    input, body, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`;