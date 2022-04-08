import React from "react";
import { ButtonHeader, Headers, Login, Topcs } from "./style"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../../assets/Logo.svg'

export default function Header() {

  return (
    <Headers>
      <img src={Logo} alt="logo" />
      <Topcs href="/#home"> Home </Topcs>
      <Topcs href="/#sobre"> Sobre </Topcs>
      <Topcs href="/#produtos"> Produtos </Topcs>
      <Topcs href="/#contato"> Contato </Topcs>
      <ButtonHeader>
        <Login
          style={{ marginRight: 5 }}
          onClick={() => {
            window.location.href = '/login';
          }}
        >Entre</Login>
        ou
        <Login
          style={{ marginLeft: 5 }}
          onClick={() => {
            window.location.href = '/register';
          }}
        >
          Cadastre-se
        </Login>
      </ButtonHeader>
      <AiOutlineShoppingCart size={30} style={{ color: "#FF914D" }} />
    </Headers>
  );
}