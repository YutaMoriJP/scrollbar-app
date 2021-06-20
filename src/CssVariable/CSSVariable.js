import React from "react";
import Logger from "../Logger";
import Button from "../Button/Button";
import { IconWrapper } from "../Button/styled";
import { FaRegMoon as Moon, FaRegSun as Sun } from "react-icons/fa";
import useLocalStorage, { getStorage } from "../useHooks/useLocalStorage";

const icons = {
  light: <Sun color="orange" />,
  dark: <Moon color="darkblue" />,
};

const ThemeToggle = ({ children, theme, setTheme }) => {
  const newTheme = theme === "light" ? "dark" : "light";
  const icon = icons[newTheme];
  return (
    <>
      <Logger name="ThemeToggle" />
      <IconWrapper>
        <Button type="button" onClick={() => setTheme(newTheme)} icon={icon}>
          {children}
        </Button>
      </IconWrapper>
    </>
  );
};

const CSSVariable = () => {
  const [theme, setTheme] = React.useState(() => {
    const storedTheme = getStorage("themeMode");
    return storedTheme === null ? "light" : storedTheme;
  });
  const handleClick = theme => {
    setTheme(theme);
  };
  React.useLayoutEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  useLocalStorage("themeMode", theme);
  const mode = { light: "Dark", dark: "Light" }[theme];
  return (
    <>
      <Logger name="CSSVariable" />
      <ThemeToggle setTheme={handleClick} theme={theme}>
        Switch to {mode} Theme
      </ThemeToggle>
    </>
  );
};

export default CSSVariable;
