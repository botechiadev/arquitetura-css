import { PurchaseHistoryContainer } from './styled.PurchaseHistory';
import { useRequestData } from '../../hooks/useRequestData';
import { URLAPI } from '../../common/constants/URLAPI';

export default function PurchaseHistory({ purchases }) {
  const isLoadingPurchases = false; // Defina ou obtenha corretamente o estado de carregamento
  const isErrorPurchases = false; // Defina ou obtenha corretamente o estado de erro

  // Obtenha o nome do comprador do objeto user, se disponível
  const buyer = purchases.length > 0 ? purchases[0].buyer : '';

  return (
    <PurchaseHistoryContainer>
      {isLoadingPurchases ? (
        <p>Loading...</p>
      ) : isErrorPurchases ? (
        <p>Error loading purchases.</p>
      ) : (
        <div>
          <h2>Purchase History for {buyer}</h2>
          {purchases && purchases.length > 0 ? (
            purchases.map((purchase) => (
              <div key={purchase.id}>
                <h3>Purchase ID: {purchase.id}</h3>
                <ul>
                  {purchase.purchaseList.map((item, index) => (
                    <li key={index}>
                      {item.item}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No purchases found.</p>
          )}
        </div>
      )}
    </PurchaseHistoryContainer>
  );
}
