import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import LinkContainer from "../../Components/Common/LinkContainer";
import { GlobalStyled } from "../../Utils/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme } from "../../Utils/theme";
import { useState } from "react";
import { Button } from "../../Components/Common/Button";
const Layout = () => {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeProvider theme={theme ? darkTheme : defaultTheme}>
      <Header>
        <LinkContainer href="/" title="home" />
        <LinkContainer href="/about" title="about" />
        <Button onClick={() => setTheme((prev) => !prev)}>theme</Button>
      </Header>
      <main className="mt-3 mx-auto container p-2">{<Outlet />}</main>
      <GlobalStyled />
    </ThemeProvider>
  );
};

export default Layout;
