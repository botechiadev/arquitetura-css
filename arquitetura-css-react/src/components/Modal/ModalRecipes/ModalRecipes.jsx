import { ModalRecipesContainer } from "./styled.ModalRecipes"





export default function ModalRecipes({recipe, closeModal}) {
    const {id, name, description, cooking, ingredients, imgUrl} = recipe
  
  
  
  const renderCooking = (cooking)=>{
    return(
        <>
        <ol>
        {cooking.map((cook, indice)=>(
            <li key={indice}>
                {cook}
            </li>
        ))}
        </ol>
        </>
    )
  }
  
  const renderIngredients = (ingredients)=>{
    return(
        <>
        <table>
        {ingredients.map((ingredient, indice)=>(
            <tr key={indice}>
                <td>{ingredient}</td>
            </tr>
        ))}
        </table>
        </>
    )
  }
  
    return (
  <ModalRecipesContainer>
        <article>
            <button className="buttonCircle" onClick={closeModal}>X</button>
            <h2>{name}</h2>
            <div className="article-content">
            <div className="article__instructions-box">
            <div>
            <h3>INGREDIENTES</h3>
            {renderIngredients(ingredients)}
            </div>
            <div>
            <h3>MODO DE FAZER</h3>
          {renderCooking(cooking)}
            </div>
            </div>
            </div>
        </article>
    </ModalRecipesContainer>
  )
}
