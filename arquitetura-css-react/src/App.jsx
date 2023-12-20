import { useState } from 'react'
import {CardRecipes} from './components/Cards/CardRecipes/CardRecipes'
import {CardPersons} from './components/Cards/CardPersons/CardPersons'
import Banner from './components/Banner/Banner'
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar'
import SectionAbout from './components/Sections/SectionAbout/SectionAbout'
import SectionRecipes from './components/Sections/SectionRecipes/SectionRecipes'
import SectionPersons from './components/Sections/SectionPersons/SectionPersons'
import { Footer } from './components/Footer/Footer'
function App() {


const [header2, setHeader2] = useState({
  title: "Comida Simples para Todos",
  text: "Encontre as melhores receitas de baixo custo e como solucoes reaproveitaveis a seu dia a dia"
})

const [recipes, setRecipes]= useState(
  [{
    id: "2e9e93ff-6ce7-429f-80f4-8e2c903aaf64",
    name: "Beterrabas Assadas",
    ingredients: [],
    cooking: [],
    description: "Receita refrescante e cheia de vitaminas para seu café da manhã.",
    imgUrl: "https://i.postimg.cc/L64csHyz/beterrabas-assadas.jpg"
  },
  {
    id: "47fb78ff-0167-4fd7-a6bb-c44e768e9e5",
    name: "Mix de Vegetais",
    ingredients: ["4 tomates", "2 cenouras", "2 pepinos"],
    cooking: ["picar todos os vegetais", "por sal e vinagre a gosto", "levar a geladeira por 3 horas"],
    description: "Receita refrescante e cheia de vitaminas para seu café da manhã.",
    imgUrl: "https://i.postimg.cc/5tZZnLSJ/mix-de-vegetais.jpg"
  }
  ,
  {
    id: "47fb78ff-0167-4fd7-a6bb-c44e768e9e5",
    name: "Prato Oriental",
    ingredients: [],
    cooking: [],
    description: "Receita refrescante e cheia de vitaminas para seu café da manhã.",
    imgUrl: "https://i.postimg.cc/PxVvgfNd/prato-oriental.jpg"
  }
  ])


  const [users, setUsers]= useState(
    [
      {
        id: "u001",
        fullName: "Fernando Herrera",
        nickname: "@fernando-herrera",
        email: "fernandoherrera@gmail.com",
        password: "MyPass!2",
        avatar: "https://i.postimg.cc/3N17hLCX/orange-Logo-removebg-preview-2.png"
      }
      ,
      {
        id: "u002",
        fullName: "Fernando Herrera2",
        nickname: "@fernando-herrera",
        email: "fernandoherrera2@gmail.com",
        password: "MyPass!2",
        avatar: "https://i.postimg.cc/3N17hLCX/orange-Logo-removebg-preview-2.png"
      }
      ,
      {
        id: "u003",
        fullName: "Fernando Herrera",
        nickname: "@fernando-herrera3",
        email: "fernandoherrera3@gmail.com",
        password: "MyPass!2",
        avatar: "https://i.postimg.cc/3N17hLCX/orange-Logo-removebg-preview-2.png"
      }
    ]
  )


  return (
    <>
  <HeaderNavbar/>
 
    <Banner>{'HOME'}</Banner> 
    <SectionAbout about={header2}/>
    <SectionRecipes>
    {recipes.map((recipe) =>(
    <CardRecipes key={recipe.id} recipe={recipe}/>
    ))}
    </SectionRecipes>
    <SectionPersons>
    {users.map((user) =>(
    <CardPersons key={user.id} user={user}/>
    ))}
    </SectionPersons>
    <Footer/>
    </>
  )
}

export default App
