import "./styles.css";
import Scroll from "./Scroll/index";
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

      <Scroll block="end" />
      <Scroll block="start" />
    </>
  );
}
