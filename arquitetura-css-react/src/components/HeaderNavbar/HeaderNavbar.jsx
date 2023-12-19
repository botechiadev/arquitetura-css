import React from 'react'
import { HeaderNavbarContainer } from './styled.HeaderNavbar'
import logo from './../../assets/img/logo.jpg'
export default function HeaderNavbar() {
  return (
    <>
    <HeaderNavbarContainer> <header className="cabecalho">
            <img className="logo" alt="Fruta e Fruto" src={logo}/>
            <nav className="menu">
                <ul className="menu__lista">
                    <li className="menu__item"><a className="menu__link ativo" href="#">Início</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Receitas</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Quem somos</a></li>
                 
                </ul>
            </nav>
</header>
    </HeaderNavbarContainer>
    </>
  )
}
