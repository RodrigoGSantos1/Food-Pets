import React from "react";
import { ButtonHeader, Headers, Topcs } from "./style"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../../assets/Logo.svg'

export default function Header() {

  return (
    <Headers>
      <img src={Logo} alt="logo" />
      <Topcs> Home </Topcs>
      <Topcs> Sobre </Topcs>
      <Topcs> Produtos </Topcs>
      <Topcs> Contato </Topcs>
      <ButtonHeader> Entre ou Cadastre-se <IoIosArrowDown style={{paddingLeft: 5}} size={20}/></ButtonHeader>
      <AiOutlineShoppingCart size={30} style={{color: "#FF914D"}}/>
    </Headers>
  );
}