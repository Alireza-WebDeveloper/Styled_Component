import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import LinkContainer from "../../Components/Common/LinkContainer";
import { GlobalStyled } from "../../Utils/global";

const Layout = () => {
  return (
    <>
      <Header>
        <LinkContainer href="/" title="home" />
        <LinkContainer href="/about" title="about" />
      </Header>
      <main className="mt-3 mx-auto container p-2">{<Outlet />}</main>
      <GlobalStyled />
    </>
  );
};

export default Layout;
