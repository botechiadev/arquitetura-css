import { useState } from 'react'
import {FormRegisterContainer} from './styled.FormRegister'

export default function FormRegister() {

  const [formData, setFormData] = useState({
    inputFullName:"",
    inputNickname:"",
    inputPassword:"",
    inputAvatar:"https://i.postimg.cc/43N2NMwR/marketlogo.png",
    inputRole:"Cadastrado",
   } )

  const {inputFullName, inputNickname, inputPassword, inputAvatar, inputRole} = formData
  return (
    <FormRegisterContainer>
      <h2>CLUB de DESCONTOS</h2>
      <form>
        <input type="text" name="inputFullName"
         placeholder="nome de cadastro"
         id="inputFullName" 
         required
        value={inputFullName}/>
         <input type="text" name="inputNickname"
         placeholder="nome de usuario"
         id="inputNickname" 
         required
        value={inputNickname}/>
      <input type="text" name="inputPassword"
         placeholder="senha do usuario"
         id="inputPassword" 
         required
        value={inputPassword}/>
        <button type="submit" >Cadastrar</button>
      </form>
    </FormRegisterContainer>
  )
}
