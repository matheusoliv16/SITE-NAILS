import React from "react";
import logo from "../../assets/images/logo.png";
import {
  FixedHeader,
  HeaderContent,
  Logo,
  LogoImg,
  LogoText,
  Menu,
  MenuLink
} from "./styles";

export const Header: React.FC = () => (
  <FixedHeader>
    <HeaderContent>
      <Logo>
        <LogoImg src={logo} alt="Logo Let Cordeiro Nails" />
        <LogoText>Let Cordeiro Nails</LogoText>
      </Logo>

      <Menu>
        <MenuLink href="#bemvindo">Bem Vindo</MenuLink>
        <MenuLink href="#servicos">Serviços</MenuLink>
        <MenuLink href="#contato">Contato</MenuLink>
      </Menu>
    </HeaderContent>
  </FixedHeader>
);  