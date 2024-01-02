import {useContext, useState} from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { CartContainer } from '../../pages/CartPage/styled.CartPage'
import { Api1Context } from '../../common/context/api1-context'
export default function Cart() {
   const {  
      cart, 
      removeItem, 
      emptyCart, 
      deleteOneUnit,
      getCartTotal,
      addPlus1
    } = useContext(Api1Context)
 
 

    const [cart4Payment, setCart4Payment]= useState({
      total: getCartTotal(),
      products: [...cart]                                           
})


   return (
    <CartContainer>
<table>
    <thead>
      <tr>
        <td>Nome</td>
        <td>Preco</td>
        <td>Quantidade</td>
        <td>Preco Final</td>
      </tr>
      </thead>
      <tbody>
        {cart.map((cartItem)=>(
          <tr key={cartItem.id}>
            <td>{cartItem.item}</td>
            <td>{cartItem.price}</td>
            <td><button onClick={()=>{deleteOneUnit(cartItem.id)}}><AiTwotoneMinusCircle /></button>
              {cartItem.quantity}{cartItem.description}<button onClick={()=>{addPlus1(cartItem)}}><PiPlusCircleDuotone />
</button></td>
            <td>{cartItem.price * cartItem.quantity}</td>
            <td>
              <button className="deleteItem" onClick={()=>{removeItem(cartItem.id)}}>
                <BsFillTrash3Fill />
                </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button onClick={()=>{emptyCart()}}>Deletar Carrinho</button>
            </td>
            <td>
              VALOR TOTAL R$:{getCartTotal()}
            </td>
            <td>
              <button>FINALIZAR COMPRA</button>
            </td>
        </tr>
      </tfoot>
</table>
   </CartContainer>
  )
}
