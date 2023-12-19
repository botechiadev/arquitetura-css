import styled from 'styled-components'

export const HeaderNavbarContainer = styled.header`
.cabecalho {
  align-items: center;
  background: #f9f9f9;
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
}

.menu__lista {
  display: flex;
}
.menu__link {
  color: #808080;
  margin-right: 1.25rem;
  text-decoration: none;
  text-transform: lowercase;
}

.menu__link.ativo {
  color: #333333;
  font-weight: bold;
}

.menu__link:hover {
  text-decoration: underline;
}
.menu__item {
  list-style: none;
}

.menu__item:last-child .menu__link {
  margin-right: 0;
}


`