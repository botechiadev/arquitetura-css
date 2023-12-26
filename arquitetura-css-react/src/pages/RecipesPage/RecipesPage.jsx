import { useState, useEffect } from "react";
import { RecipesContainer } from "./styled.Recipes";
import { TbShoppingBagPlus } from "react-icons/tb";
import { CgEye } from "react-icons/cg";

import ModalRecipes from './../../components/Modal/ModalRecipes/ModalRecipes';

export function RecipesPage() {
  const [items, setItems] = useState([]);
  const [viewRecipes, setViewRecipes] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  // calcula numero total dse items dividido por items por paagina e define o numero total de paginas do paggination
  const pages = Math.ceil(items.length/itemsPerPage)

// FATIAR array de 

//paginaa atual * items per page da index de  primiero item
    const startIndex = currentPage * itemsPerPage
 // calcula ultimo item dsass paaginasss  
    const endIndex = startIndex + itemsPerPage

    const currentItems = items.slice(startIndex, endIndex)

  const fetchData = async () => {
    fetch('http://localhost:3000/api/recipes')
      .then(response => response.json())
      .then(data => setItems(data.result));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setViewRecipes(0);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setViewRecipes(1);
  };

  return (
    <RecipesContainer>
   {console.log(pages)}    <aside>
        <div className="aside__box">
          <h2>RECEITAS</h2>
          <select value={itemsPerPage} onClick={(e)=>{setItemsPerPage(Number(e.target.value))}}>
                <option value={6}>6 items</option>
                <option value={9}>9 items</option>
                <option value={12}>12 items</option>
                <option value={24}>24 items</option>
            </select>
        </div>
      </aside>
      <section>
        <ul>
          {currentItems.map((item, indice) => (
            <li key={item.id} className={'itemList'}>
              {viewRecipes === 1 ? (
                <div>
                  <h2>{item.title}</h2>
                  <img src={item.imgUrl} alt={'img do item'}/>
                  <div>
                    <p>{item.description}</p>
                    <div className="flex">
                      <button>
                        <TbShoppingBagPlus /> Ingredientes
                      </button>
                      <button onClick={() => openModal(item)}>
                        <CgEye /> Receita
                      </button>
                      
                    </div>
                  </div>
                </div>
              ) : (
                <ModalRecipes recipe={selectedRecipe} closeModal={closeModal}/>
              )}
            </li>
          ))}
         
        </ul>
        <div className="pagginationButtons">



{Array.from(Array(pages), (item, index)=>{
return  (<button value={index}
onClick={(e)=>{setCurrentPage(Number(e.target.value))}}>{index+1}</button>
)})}
</div>
      </section>
    </RecipesContainer>
  );
}
