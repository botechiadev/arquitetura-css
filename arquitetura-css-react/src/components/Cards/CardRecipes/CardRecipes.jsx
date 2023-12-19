import {CardRecipesContainer} from './styled.CardRecipes'

export  function CardRecipes({recipe}) {
  const  {id, name, description, imgUrl, ingredients, cooking} = recipe
  return (
    <>
    <CardRecipesContainer>
    <article  className="receita">
                <img alt="Mix de vegetais" className="receita__imagem" src={imgUrl} />
                <div className="receita__conteudo">
                    <h4 className="receita__titulo">{name}</h4>
                    <p className="receita__descricao">{description}</p>
                    <button className="receita__botao">Ver receita</button>
                </div>
   </article>
    </CardRecipesContainer>
  </>
  )
}
