import { useContext } from "react"
import {useNavigate} from 'react-router-dom'
import { Api1Context } from "../../common/context/api1-context"
import { CartContainer } from "./styled.CartPage"
import Cart from './../../components/Cart'
import  EmptyCart  from "../../components/EmptyCart/EmptyCart";
export default function CartPage() {
  const {  
    cart
  } = useContext(Api1Context)
  
const navigate= useNavigate()


  return (<CartContainer>
    {cart[0]?(
<Cart/>
):(
  <EmptyCart/>
)}
    </CartContainer>
  )
}
