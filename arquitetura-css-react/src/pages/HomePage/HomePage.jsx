import  {useContext, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { HomeContainer } from './styled.Home';
import CardProducts from './../../components/Cards/CardProducts/CardProducts';
import { CardPersons } from './../../components/Cards/CardPersons/CardPersons';
import SectionRecipes from './../../components/Sections/SectionRecipes/SectionRecipes';
import SectionPersons from './../../components/Sections/SectionPersons/SectionPersons';
import { Loader } from '../../components/Loader/Loader';
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay';
import { Api1Context } from '../../common/context/api1-context';

export function HomePage() {
  const [maxPrice, setMaxPrice] = useState(300)
  const [minPrice, setMinPrice] = useState(1)

const [searchName, setSearchName]= useState("")
const [categorySelect, setCategorySelect]= useState("")
  const {
    products, 
    isLoadingsDataProducts,
    isErrorDataProducts,
    handleOnChangeInput } =  useContext(Api1Context)





  return (
    <>
      <Banner/>
      <HomeContainer>
        <aside>
          <div className="filtersBox">
          <input
              type="text"
              id={'inputName'}
              name={'inputName'}
              onChange={(e)=>setSearchName(e.target.value)}
            />
          <input
              type="number"
              id={'inputMinPrice'}
              name={'inputMinPrice'}
              min={1}
              max={maxPrice}
              value={minPrice}
              onChange={(e)=>setMinPrice(e.target.value)}
            />
                      <input
              type="number"
              id={'inputMaxPrice'}
              name={'inputMaxPrice'}
              min={minPrice}
              value={maxPrice}
              onChange={(e)=>setMaxPrice(Number(e.target.value))}
            />
<label htmlFor="categorySelect">Categoria de Produto</label>

<select name="categorySelect" id="categorySelect"
    onChange={(e)=>setCategorySelect(e.target.value)}
>
  <option value="">--TODAS as CATEGORIAS--</option>
  <option value="horti-fruti">Horti-Fruti</option>
  <option value="laticinios">Laticinios</option>
  <option value="armazem">Armazem</option>
  <option value="limpeza">Limpeza</option>
  <option values="papelaria">Papelaria</option>
  <option value="marmitex">Marmitex</option>
</select>
          </div>
        </aside>

        <SectionRecipes>
          {isLoadingsDataProducts && <Loader />}
          {isErrorDataProducts && <ErrorDisplay message="Erro ao carregar receitas" />}
          {!isErrorDataProducts &&
            products.
            filter((product)=>{
              if(minPrice &&product.price > minPrice){
                return product
              }else if(minPrice ===""){
              return products
            }
          }).filter((product)=>{
            if(maxPrice &&product.price < maxPrice){
              return product
            }else if(maxPrice ===""){
            return products
          }
        }).filter((product)=>{
              if(searchName &&product.item.toUpperCase().includes(searchName.toUpperCase())){
                return product
              }else if(searchName ===""){
              return products
            }
            }).filter((product)=>{
              if(categorySelect &&product.category.toUpperCase().includes(categorySelect.toUpperCase())){
                return product
              }else if(categorySelect ===""){
              return products
              }
            }
             ).
            map((item) => <CardProducts key={item.id} product={item} />)
          }

{!isErrorDataProducts && products &&
            !products[0]&&
            <h2>Nenhum produto encontrado</h2>}
        </SectionRecipes>

      </HomeContainer>
    </>
  );
}