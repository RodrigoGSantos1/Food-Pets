import React, { useEffect, useState } from "react";
import { ButtonHeader, Headers, Login, Name, Topcs } from "./style"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../../assets/Logo2.png'

export default function Header() {

  const [name, setName] = useState<any>()

  useEffect(() => {
    const user = localStorage.getItem('@userData')
    if (user) {
      setName(JSON.parse(user).name)
    }

  }, [])

  return (
    <Headers>
      <img src={Logo} alt="logo" />
      <Topcs href="/#home"> Home </Topcs>
      <Topcs href="/#sobre"> Sobre </Topcs>
      <Topcs href="/#produtos"> Produtos </Topcs>
      <Topcs href="/#contato"> Contato </Topcs>
      {localStorage.getItem('@userData') ?
        <>
          <Name> Olá, {name} </Name>
          <ButtonHeader
            onClick={() => {
              localStorage.removeItem('@userData')
              document.location.reload();
            }}
          >
            <Login
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              Sair
            </Login>
          </ButtonHeader>
        </> :
        <>
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
        </>
      }

      <AiOutlineShoppingCart size={30} style={{ color: "#FF914D" }} />
    </Headers>
  );
}