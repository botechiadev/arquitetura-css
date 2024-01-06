import styled from 'styled-components'

export const ContainerClubPage = styled.div`
display: grid;
max-width: 0.85fr;
min-height: 65vh;
grid-template-columns: 120px auto;
grid-template-rows: 100%;

aside button {
   display: block;
background: none;
border: 1px solid transparent;
border-radius: 999px;
padding: 0.51rem;
margin: 30px auto;
background-color: #E2F788;
}

@media screen and (max-width: 769px) {
aside button span{
   display: none;
}

aside button {
   display: block;
background: none;
border: 1px solid transparent;
border-radius: 999px;
padding: 0.51rem;
margin: 30px auto;
background-color: #E2F788;
}
aside button svg{
 height: 40px;
 width: 40px;
 color: gray;
}
}

.section1{
   padding-top: 110px;
   padding-left: 80px;
   color: black;
   font-size: 1rem;
}



.section1 article{
  
   height: auto;
 width: 95%;
   background: #E2F788;
   border-radius: 22px;
   box-shadow: 2px groove gainsbro;
   margin: auto;
}

.header__article{
   display: flex;
   flex-flow: row wrap;
   justify-content: space-around ;
   align-items: center;
}


.header__avatar img{
   width: 60px;
   height: 60px;
object-fit: cover;
   border-radius: 50%;
}


.box__article{
 padding: 1rem;
 background-color: #efefef;
 margin: auto;
 min-height: 200px;
 display: flex;
 flex-flow: column wrap;
 
}

`