import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #6a3796;
    --secondary: #8946c8;
    --success: #4CAF50;
    --danger: #F44336;
    --warning: #FFC107;
    --info: #00BCD4;
    --dark: #212121;
    --light: #F5F5F5;
    --gray: #9E9E9E;
    --purple-light: #f5f0fa;
  }

  body {
    background-color: #F5F5F5;
    color: #212121;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;
