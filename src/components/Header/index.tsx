import React from "react";
import LogoPulga from "../../../assets/images/logo-pulga.png";

import { HeaderContainer, LogoImage } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage source={LogoPulga} />
    </HeaderContainer>
  );
};

export { Header };
