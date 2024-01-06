import React, { useEffect, useState } from 'react';
import { ContainerClubPage } from './styled.ClubPage';
import { FaUserCog, FaUserCircle, FaOpencart } from 'react-icons/fa';
import { BsFillBookmarkCheckFill, BsTrophy } from 'react-icons/bs';
import { Loader } from '../../components/Loader/Loader';
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay';
import axios from 'axios';
import { URLAPI } from '../../common/constants/URLAPI';

export default function ClubPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${URLAPI}AUTH/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Response data:', response.data); // Verificar a resposta do backend
        setUser(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  console.log('User state:', user); // Verificar o estado atual do usuário
return(
    <ContainerClubPage>
      <aside>
        <div>
          <h2>Bem Vindo {user && user.nickname}</h2>
        </div>
        <button>
          <span>PERFIL</span>
          <FaUserCircle />
        </button>
        <button>
          <span>PONTOS</span>
          <BsFillBookmarkCheckFill />
        </button>
        <button>
          <span>COMPRAS</span>
          <FaOpencart />
        </button>
        <button>
          <span>PREMIOS</span>
          <BsTrophy />
        </button>
        <button>
          <span>DADOS</span>
          <FaUserCog />
        </button>
      </aside>
      <section className='section1'>
        <div>
          {loading ? (
            <Loader />
          ) : user ? (
            <article>
              <div className='header__article'>
              <h2>@{user.nickname}</h2>
              <div className='header__avatar'>
              <img src={user.avatar} alt={'avatar do usuario'}/>
              </div>
              </div>
              <div className='box__article'>
              <p>email: {user.email}</p>
              <p>nome cadastrado: {user.fullName}</p>
              <p>CPF-CNPJ: {user.id}</p>
              <p>Id da Conta: {user.idProfile}</p>
              </div>
              {/* Render other details of the user */}
            </article>
          ) : error ? (
            <ErrorDisplay message="Erro ao carregar usuário" />
          ) : null}
        </div>
      </section>
    </ContainerClubPage>
  );
}
