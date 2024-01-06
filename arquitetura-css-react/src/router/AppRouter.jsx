import {Routes, Route} from 'react-router-dom'
import { HomePage } from "../pages/HomePage/HomePage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { RecipesPage } from "../pages/RecipesPage/RecipesPage";
import HeaderNavbar from '../components/HeaderNavbar/HeaderNavbar'
import CartPage from '../pages/CartPage/CartPage';
import { AdminPage } from '../pages/AdminPage/AdminPage';
import ClubPage from '../pages/ClubPage';
import { PurchaseProvider } from '../common/context/api3-context';
export default function AppRouter() {
  return (
    <>
   <HeaderNavbar/> 
   <PurchaseProvider>

   <Routes>     
        <Route path="/" element={<HomePage/>}/>
        <Route path="/sign-in" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/recipes" element={<RecipesPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/club" element={<ClubPage/>}/>

    </Routes>        </PurchaseProvider>
    </>
    )
}
