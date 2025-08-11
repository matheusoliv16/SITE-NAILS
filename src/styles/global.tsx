import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }

     ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #26364d; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ededed; 
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #b6b5b5;
  }
`