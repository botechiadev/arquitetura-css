import { FaOpencart } from "react-icons/fa";
import { HeaderNavbarContainer } from "./styled.HeaderNavbar";
import logo from "./../../assets/img/logo.png";
import {
  handleCart,
  handleHome,
  handleSignIn,
  handleClub,
} from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

export default function HeaderNavbar() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    const token = localStorage.getItem("token");
    if (token && token !== "") {
      // se token existe direcciona a club page
      handleClub(navigate);
    } else {
      // se token nao existe redireciona para sign-in 
      handleSignIn(navigate);
    }
  };

  return (
    <>
      <HeaderNavbarContainer>
        <header className="cabecalho">
          <img className="logo" alt="Fruta e Fruto" src={logo} />
          <nav className="menu">
            <ul className="menu__lista">
              <li className="menu__item">
                <button
                  className="menu__link ativo"
                  onClick={() => {
                    handleHome(navigate);
                  }}
                >
                  Mercadinho
                </button>
              </li>
              <li className="menu__item">
                <button
                  className="menu__link ativo"
                  onClick={handleSignInClick}
                >
                  Club
                </button>
              </li>
              <li className="menu__item">
                <button
                  className="menu__link ativo"
                  onClick={() => {
                    handleCart(navigate);
                  }}
                >
                  <FaOpencart />
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </HeaderNavbarContainer>
    </>
  );
}
