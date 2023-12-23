import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import {FormSignInContainer} from './styled.FormSignIn'
import { handleSignUp} from './../../../router/coordinator'
export default function FormSignIn() {
  const [inputPassword,  setInputPassword] = useState("")

  const [inputNickname, setInputNickname] = useState("")
  
  const navigate = useNavigate()
  
  return (
    <FormSignInContainer>
      <div>
        <h2>LOGIN</h2>
        <form>
          <label htmlFor="inputNickname">Insira seu Username</label>
          <input type="text" name="inputNickname" placeholder="pepito-silva"
          value={inputNickname} id="inputNickname"/>
     
     <label htmlFor="inputPassword">Insira sua Senha</label>
          <input type="text" name="inputPasssword" placeholder="pepito-silva"
          value={inputPassword} id="inputPasssword"/>
          <div className="button__flex">
          <button type={'submit'} onClick={()=>{}}>Loguear
          <FaSignInAlt />
          </button>

          <button className="button__signUp" onClick={()=>{handleSignUp(navigate)}}>Cadastrar
          <FaUserPlus />
          </button>
        </div>
        </form>
      </div>
    </FormSignInContainer>
  )
}
