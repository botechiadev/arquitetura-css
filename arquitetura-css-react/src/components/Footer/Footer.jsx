import { FooterContainer } from "./styled.FooterContainer";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

export  function Footer() {
  return (
    <FooterContainer>
        <ul>
            <li>
                <a href="https://github.com/botechiadev"><FaGithubSquare /></a>
            </li>
            <li>
                <a href="https://linkedin.com/in/botechia-erikaluisa"><GrLinkedin /></a>
            </li>
            <li>
                <a href="mailto:botechiadev@gmail.com">botechiadev@gmail.com</a>
            </li>
        </ul>
    </FooterContainer>
  )
}
