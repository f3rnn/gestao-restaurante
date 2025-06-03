import './styles.css';
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png"

function Menu (){
    const navigate = useNavigate();

    return (
        <div className="container">
            <img src={Logo} alt="Logo da empresa"/>
            <h2>Restaurante Baratie</h2>
            <button onClick={() => navigate('/pratos')} className='link-pratos'>Ver Cardápio</button>
            <button onClick={() => navigate('/cadastro')} className='link-cadastro'>Cadastrar Novo Prato</button>
        </div>
    )

}

export default Menu;