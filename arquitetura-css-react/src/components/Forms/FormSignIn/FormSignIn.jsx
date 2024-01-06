import { useContext, useState } from 'react';
import { PurchaseContext } from '../../../common/context/api3-context';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { FormSignInContainer } from './styled.FormSignIn';
import { handleClub, handleSignUp } from './../../../router/coordinator';
import { useNavigate } from 'react-router-dom';
import { URLAPI } from '../../../common/constants/URLAPI';
import axios from 'axios';
export default function FormSignIn() {
  const { logUser } = useContext(PurchaseContext);
  const [inputPassword, setInputPassword] = useState('');
  const [inputNickname, setInputNickname] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const body = {
      nickname: inputNickname,
      password: inputPassword,
    };

    axios.post((`${URLAPI}auth`), body )

    .then((res)=>{
      localStorage.setItem('token', res.data.token)
      handleClub(navigate)
    })
    .catch((err)=>{
      console.log(err)
    })
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
            <button type="submit" onClick={handleSignIn}>
              Loguear <FaSignInAlt />
            </button>

            <button className="button__signUp" onClick={()=>{handleSignUp(navigate)}}>
              Cadastrar <FaUserPlus />
            </button>
          </div>
        </form>
      </div>
    </FormSignInContainer>
  );
}
