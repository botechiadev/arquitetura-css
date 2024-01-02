import { ContainerClubPage } from './styled.ClubPage'
import { FaUserCog } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";

export default function ClubPage() {
  return (
    <ContainerClubPage>
      <aside>
         <button>
            <span>PERFIL</span>
            <FaUserCircle/>
         </button>
         <button>
            <span>PONTOS</span>
            <BsFillBookmarkCheckFill/>
         </button>
         <button>
            <span>COMPRAS</span>
            <FaOpencart/>
         </button>
         <button>
            <span>PREMIOS</span>
            <BsTrophy/>
         </button>
         <button>
            <span>DADOS</span>
            <FaUserCog/>
         </button>
      </aside>


    </ContainerClubPage>
  )
}
