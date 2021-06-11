import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --dark-blue: #333853;
        --light-blue: #3C4262;
        --green: #219653;
        --yellow: #F2C94C;
        --text: #9fa1ae;
        --shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.35);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: var(--dark-blue);
        color: var(--text);
    }

    a {
        text-decoration: none;
        color: var(--text);
    }

`