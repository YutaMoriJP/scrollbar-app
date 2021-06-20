import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body[data-theme='light'] {
    --icon-primary-color: #38d9a9;
    --icon-primary-text-color: #212529;
    --border-color: #212529;
    background: #e9ecef;
  }
  body[data-theme='dark'] {
    --icon-primary-color: #05543c;    
    --icon-primary-text-color: #f8f9fa;
    --border-color:  #e9ecef;
    background: #212529;
    }
`;
export default GlobalStyle;
