import { useState } from 'react'
import ModalRecipes from '../../Modal/ModalRecipes/ModalRecipes'
import {CardRecipesContainer} from './styled.CardRecipes'


export  function CardRecipes({recipe}) {
  const [view, setView] = useState(0)



  const  {id, name, description, imgUrl, ingredients, cooking} = recipe



function openModal (e){
  setView(1)
}

  function closeModal(e){
    setView(0)
  }


  return (
    <>
   
{view === 0  &&

    <CardRecipesContainer>


    <article  className="receita">
                <img alt="Mix de vegetais" className="receita__imagem" src={imgUrl} />
                <div className="receita__conteudo">
                    <h4 className="receita__titulo">{name}</h4>
                    <p className="receita__descricao">{description}</p>
                    <button className="receita__botao" onClick={()=>{openModal(recipe, closeModal)}}>Ver receita</button>
                </div>
   </article>
    </CardRecipesContainer>
} 
{view === 1 && <ModalRecipes
    closeModal={closeModal}
    recipe={recipe}
  />} 
  
  
  </>
  )
}
