import styled from 'styled-components'

export const FormRegisterContainer = styled.main`
position: fixed;
top:  100px;
bottom: 200px;
left: 100px; 
right: 100px;
background: #E3F988;
border-radius: 22px;


h2{
  color: black;
  margin: 30px auto;
  text-align: center;
  font-size: 3rem;
  text-shadow: 2px -2px 0px white;}
label{
  width: 100%;
  text-align: center;
  margin: 30px auto;
  padding-left: 30px;
  margin-top: 30px;
}
@media screen and (max-width: 520px){
  top: 100px;
  left: 5%;
  right: 5%;
}
form{
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;
}

input{
  height: 33px;
  border-radius: 22px;
  min-width: 300px;
  height: 44.171px;
  flex-shrink: 0;
  margin: 20px auto;
  text-align:center;
  margin-left: 5%;
}


button{
  display: flex;
width: 169px;
height: 52px;
padding: 10.326px 21.685px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
color: #FFF;
background: #007500;
font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize;
margin: 20px auto;
text-align: center;
border-radius:22px;
text-transform: capitalize;
}

button:hover{
  background: #7FB519;
  color: black;
}
`