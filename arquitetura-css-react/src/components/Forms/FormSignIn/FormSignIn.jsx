import {URLAPI} from './../../../common/constants/URLAPI'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import {FormSignInContainer} from './styled.FormSignIn'
import { handleSignUp} from './../../../router/coordinator'
import axios from 'axios'
export default function FormSignIn() {
  const [inputPassword,  setInputPassword] = useState("")

  const [inputNickname, setInputNickname] = useState("")
  
  const navigate = useNavigate()

const handleSignIn =(e)=>{
  e.preventDefault()

  const body = {
    nickname: inputNickname,
    password: inputPassword
  }
 axios.post(`${URLAPI}auth`, body)
 .then((response)=>{
  console.log(response)
 })
 .catch((error)=>{
  console.log(error)
 })

}

  return (
    <FormSignInContainer>
      <div>
        <h2>LOGIN</h2>
        <form>
          <label htmlFor="inputNickname">Insira seu Username</label>
          <input type="text" name="inputNickname" placeholder="pepito-silva"
          value={inputNickname} id="inputNickname"
          onChange={(e)=>{setInputNickname(e.target.value)}}
          />
     
     <label htmlFor="inputPassword">Insira sua Senha</label>
          <input type="text" name="inputPasssword" placeholder="pepito-silva"
          value={inputPassword} id="inputPasssword"
          onChange={(e)=>{setInputPassword(e.target.value)}}
          />
          <div className="button__flex">
          <button type={'submit'} onClick={handleSignIn}>Loguear
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
