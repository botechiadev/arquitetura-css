import { useState, useEffect } from 'react';
import { PurchasesContainer } from './styled.PurchasePage';
import PurchaseHistory from '../../components/PurchasesHistory/PurchaseHistory';
import axios from 'axios';
import { URLAPI } from './../../common/constants/URLAPI';
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { PurchasesTable } from '../../components/PurchasesTable/PurchasesTable';
import {Loader} from './../../components/Loader/Loader'
import {ErrorDisplay} from './../../components/ErrorDisplay/ErrorDisplay'
export default function PurchasesPage() {
  const [user, setUser] = useState({});
  const { id: userId } = useParams(); // Capturing 'id' parameter from URL

  const [purchases, loading, error] = useRequestData(
    `${URLAPI}purchases?q=${userId}`,
    [userId]
  );


  return (
    <PurchasesContainer>
      <h2>Compras Realizadas</h2>
      {loading ? (
       <Loader/>
      ) : error ? (
        <ErrorDisplay/>
      ) : (
        <div>
          {/* Render purchase history using 'purchases' state */}
          <div>
            {purchases.length > 0 ? (
            <PurchasesTable purchases={purchases}/>
            ) : (
              <p>Nenhum pagamento Cadastrado</p>
            )}
          </div>
        </div>
      )}
    </PurchasesContainer>
  );
}
