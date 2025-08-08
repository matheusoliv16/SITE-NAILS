import * as S from './styles'
import logo from "../../assets/images/logo.png";

const Header = () => {
    return(
        <S.HeaderContainer>
            <S.LogoContainer >
                <S.Logo imageUrl= {logo}/>
                <span>Let Cordeiro Nails</span>
            </S.LogoContainer>

            <span>📞 929179922 / 216046974</span>


            <nav >
                <a href="#bemvindo">Bem Vindo</a>
                <a href="#servicos">Serviços</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#agendamento">Agendar</a>
                <a href="#contato">Contato</a>
            </nav>
 z'
        </S.HeaderContainer>
    )
}

export default Header;