import { css } from '@emotion/react';
const GlobalStyles = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #28303f;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
  h2 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 0px;
    margin-bottom: 20px;
  }

  h3,
  h4,
  h5,
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  ul,
  ol {
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }
`;

export { GlobalStyles };
