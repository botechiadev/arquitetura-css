import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormRegisterContainer } from './styled.FormRegister';
import { URLAPI } from '../../../common/constants/URLAPI';
import { useForm } from '../../../hooks/useForm';
import { UserMessage } from '../../Message/UserMesssage/UserMessage';

export  function FormRegister() {
  const [users, setUsers] = useState([]); // Ensure that users is initialized as an array
  const [viewMessage, setViewMessage] = useState(0);

  // Utilizando o hook personalizado useForm para gerenciar o estado do formulário
  const { formState, handleInputChange, handleResetForm } = useForm({
    inputCpfCnpj: '',
    inputFullName: '',
    inputNickname: '',
    inputPassword: '',
    inputEmail: '',
    inputAvatar: 'https://i.postimg.cc/43N2NMwR/marketlogo.png',
    inputRole: 'Cadastrado',
  });

  const {
    inputFullName,
    inputNickname,
    inputPassword,
    inputEmail,
    inputCpfCnpj,
  } = formState;

  const handleCreateUser = async (event) => {
    event.preventDefault();

    const body = { ...formState };

    try {
      const response = await axios.post(`${URLAPI}users`, body, {
        headers: {
          Authorization: 'botechia-erika',
        },
      });

      alert('Usuário cadastrado com sucesso');
      console.log(response.data);
      // Limpar o formulário após o envio bem-sucedido
      handleResetForm();
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    // Atualizar a lista de usuários ao montar o componente
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${URLAPI}users`); // Use axios.get instead of fetch
        setUsers(response.data.result);
      } catch (error) {
        console.error('Erro ao buscar usuários', error);
      }
    };

    fetchUsers();
  }, []);

/*
  useEffect(() => {
    // Verificar se há usuários com o mesmo nome completo
    const userWithSameFullName = users.find((user) => user.fullName === inputFullName);
    setViewMessage(userWithSameFullName ? 2 : 0);
  }, [inputFullName, users]);

  useEffect(() => {
    // Verificar se há usuários com o mesmo nickname
    const nicknameIn = inputNickname;
    const userWithSameNickname = users.find((user) => user.nickname === nicknameIn);
    setViewMessage(userWithSameNickname ? 2 : 0);
  }, [inputNickname, users]);

  useEffect(() => {
    // Verificar se há usuários com o mesmo email
    const userWithSameEmail = users.find(
      (user) => user.email.toLowerCase().trim() === inputEmail.toLowerCase().trim()
    );
    setViewMessage(userWithSameEmail ? 2 : 0);
  }, [inputEmail, users]);

  useEffect(() => {
    console.log('useEffect called for inputPassword');
  }, [inputPassword]);*/

  return (
    <FormRegisterContainer>
      <h2>CLUB de DESCONTOS</h2>
      <p>Cadastro de novos usuários</p>
      <form>
        <input
          type="text"
          name="inputCpfCnpj"
          placeholder="CPF ou CNPJ"
          id="inputCpfCnpj"
          required
          value={inputCpfCnpj}
          onChange={handleInputChange}
          pattern={/^((\d{3}\.\d{3}\.\d{3}-\d{2})|(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}))$/}
        />

        {viewMessage === 2 && <UserMessage />}
        <input
          type="text"
          name="inputFullName"
          placeholder="nome de cadastro"
          id="inputFullName"
          required
          value={inputFullName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="inputNickname"
          placeholder="nome de usuário"
          id="inputNickname"
          required
          value={inputNickname}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="inputEmail"
          placeholder="email do usuário"
          id="inputEmail"
          required
          value={inputEmail}
          onChange={handleInputChange}
          pattern={/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i}
          title={'e-mail deve ser único e válido'}
        />
        <input
          type="text"
          name="inputPassword"
          placeholder="senha do usuário"
          id="inputPassword"
          required
          value={inputPassword}
          onChange={handleInputChange}
          pattern={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!])[0-9a-zA-Z$*&@#]{8,}$/}
          title={'8 a 12 caracteres com pelo menos 1 letra maiúscula, 1 número e 1 caractere especial como $*&@#!'}
        />
        <button type="submit" onClick={handleCreateUser}>
          Cadastrar
        </button>
        <button type="reset" className='resetBtn' onClick={handleResetForm}>
          RESETEAR DADOS
        </button>
      </form>
    </FormRegisterContainer>
  );
}
