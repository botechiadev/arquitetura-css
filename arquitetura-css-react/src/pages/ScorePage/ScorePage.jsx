import NavClub from "../../components/NavClub/NavClub";
import { Score } from "../../components/Score/Score";
import { ContainerScorePage } from "./styled.ScorePage";

export function ScorePage (){
    return(
        <ContainerScorePage>
            <NavClub/>
            <Score/>
        </ContainerScorePage>
    )
}