import { useEffect, useState } from 'react';
import { ContainerClubPage } from './styled.ClubPage';
import { FaUserCog, FaUserCircle, FaOpencart } from 'react-icons/fa';
import { BsFillBookmarkCheckFill, BsTrophy } from 'react-icons/bs';
import { Loader } from '../../components/Loader/Loader';
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function ClubPage() {
  const [user, setUser] = useState(null);
  const { nickname } = useParams();
 const URLAPI = "http://localhost:3001/api/users/nickname/"
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${URLAPI}${nickname}`);
          setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [nickname]);

  return (
    <ContainerClubPage>
      <aside>
        <div>
          <h2>Bem Vindo @{nickname}</h2>
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
        {user && user.length <= 0 && <Loader/>}
      {user && user.length > 0 && (
        <div>
          <h2>User Details</h2>
          <p>Nickname: {user[0].nickname}</p>
          {/* Render other details of the first user */}
        </div>
      )}
    </div>
      
      </section>
    </ContainerClubPage>
  );
}
