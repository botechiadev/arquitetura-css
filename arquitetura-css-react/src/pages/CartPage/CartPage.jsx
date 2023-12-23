import { useContext } from "react"
import {useNavigate} from 'react-router-dom'
import { Api1Context } from "../../common/context/api1-context"
import { CartContainer } from "./styled.CartPage"
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import {handleHome} from './../../router/coordinator'
import { PiPlusCircleDuotone } from "react-icons/pi";
import  EmptyCart  from "../../components/EmptyCart/EmptyCart";
export default function CartPage() {
  const {  products, 
    setProducts, 
    recipes, 
    setRecipes, 
    cart, 
    setCart, 
    addCart, 
    removeItem, 
    emptyCart, 
    deleteOneUnit,
    dataProducts,
    isLoadingsDataProducts,
    isErrorDataProducts,
    handleOnChangeInput,
    addPlus1
  } = useContext(Api1Context)
  
const navigate= useNavigate()


  return (<CartContainer>
    {cart[0]?(
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
            <td><button onClick={()=>{removeItem(cartItem.id)}}><BsFillTrash3Fill /></button></td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button onClick={()=>{emptyCart()}}>Deletar Carrinho</button>
            </td>
        </tr>
      </tfoot>
</table>):(
  <EmptyCart/>
)}
    </CartContainer>
  )
}
