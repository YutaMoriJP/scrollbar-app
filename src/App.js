import "./styles.css";
import Icon from "./Scroll/index";
import GlobalStyle from "./GlobalStyles";
import CSSVariable from "./CssVariable/CSSVariable";
import Logger from "./Logger";
import Stack from "./Stack";

export default function App() {
  return (
    <>
      <Logger name="App" />
      <GlobalStyle />
      <CSSVariable />

      <Stack />
      <Stack />
      <Stack />
      <Stack />
      <Stack />
      <Stack />

      <Icon block="end" />
      <Icon block="start" />
    </>
  );
}
