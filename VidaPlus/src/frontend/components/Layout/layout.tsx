import React from "react";
import { Container, MainContent} from "./layoutstilo";
import NavBar from "../NavBar/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <NavBar/>

      <MainContent>
        {children}
      </MainContent>

    </Container>
  );
};

export default Layout;
