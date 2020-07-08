import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
    }
    html {
    box-sizing: border-box;
    font-size: 62.5%; 
    }
    body {
        line-height: 1.6rem;
        min-height: 100vh;
        font-weight: 500;
    }
`;

export default GlobalStyle;
