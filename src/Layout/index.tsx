import { Agendamento } from "../Components/Agendamentos";
import { BemVindo } from "../Components/BemVindo";
import { Contato } from "../Components/Contato";
import { Header } from "../Components/Header";
import { Portfolio } from "../Components/Portifolio";
import { Servicos } from "../Components/Servico";
import {
    LayoutContainer
} from "./styles";

const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <Header />
            <BemVindo />
            <Servicos />
            <Contato />
        </LayoutContainer>
    )
}

export default Layout;