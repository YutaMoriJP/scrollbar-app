import React from "react";
import Logger from "../Logger";
import Button from "../Button/Button";
import { IconWrapper } from "../Button/styled";
import { FaRegMoon as Moon, FaRegSun as Sun } from "react-icons/fa";

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
  const [theme, setTheme] = React.useState("light");
  const handleClick = theme => {
    setTheme(theme);
  };
  React.useLayoutEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
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
