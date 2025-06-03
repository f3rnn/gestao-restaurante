import ListaPratos from "../../components/ListaPrato";
import { useNavigate } from "react-router-dom";
import './styles.css'

function PaginaCardapio() {
    const navigate = useNavigate()

    return(
        <div className="pagina-lista-pratos">
            <div className="container">
                <h2>Lista de pratos</h2>
                <ListaPratos />
                <button onClick={() => navigate('/cadastro')} className="link-voltar">Cadastrar prato</button>
                <button onClick={() => navigate('/')} className="link-home">Menu inicial</button>
            </div>
        </div>
    )
}

export default PaginaCardapio