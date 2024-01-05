import { useContext, useState } from 'react';
import { PurchaseContext } from '../../../common/context/api3-context';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { FormSignInContainer } from './styled.FormSignIn';
import { handleSignUp } from './../../../router/coordinator';
import { useNavigate } from 'react-router-dom';

export default function FormSignIn() {
  const { logUser } = useContext(PurchaseContext);
  const [inputPassword, setInputPassword] = useState('');
  const [inputNickname, setInputNickname] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const userLogin = {
      nickname: inputNickname,
      password: inputPassword,
    };

    logUser(userLogin);
  };

  const handleSignUpNavigation = () => {
    handleSignUp(navigate);
  };

  return (
    <FormSignInContainer>
      <div>
        <h2>LOGIN</h2>
        <form onSubmit={handleSignIn}>
          <label htmlFor="inputNickname">Insira seu Username</label>
          <input
            type="text"
            name="inputNickname"
            placeholder="pepito-silva"
            value={inputNickname}
            id="inputNickname"
            onChange={(e) => {
              setInputNickname(e.target.value);
            }}
          />

          <label htmlFor="inputPassword">Insira sua Senha</label>
          <input
            type="password"
            name="inputPassword"
            placeholder="senha"
            value={inputPassword}
            id="inputPassword"
            onChange={(e) => {
              setInputPassword(e.target.value);
            }}
          />
          <div className="button__flex">
            <button type="submit">
              Loguear <FaSignInAlt />
            </button>

            <button className="button__signUp" onClick={handleSignUpNavigation}>
              Cadastrar <FaUserPlus />
            </button>
          </div>
        </form>
      </div>
    </FormSignInContainer>
  );
}
