import React from "react";
import LogoPulga from "../../../assets/images/logo-pulga.png";
import { Input } from "../Input";

import { HeaderContainer, LogoImage } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage source={LogoPulga} />
      <Input />
    </HeaderContainer>
  );
};

export { Header };
