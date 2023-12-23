import styled from 'styled-components'


export const HomeContainer = styled.main`
display: grid;
max-width: 1fr;
padding: 8px auto;
height: 100%;
min-height: calc(100vh - 205px);
grid-template-columns: 20% 80%;
padding-bottom: 40px;

@media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 200px auto;

}
aside{

    background: black;
    height: 100%;
}
`