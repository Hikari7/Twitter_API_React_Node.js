import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        font-size: 12px;
        font-family: TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    #root{
        margin:0 auto;
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }

    /* body {
        margin: 0;
    display: flex;
    place-items: center;
    min-width: 80wh;
    min-height: 100vh;
    } */

`;
