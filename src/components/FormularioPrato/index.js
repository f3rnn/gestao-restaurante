import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import axios from 'axios'


function FormularioPrato() {
    const formatarValorComoDecimal = (valor) => {
        const somenteNumeros = valor.replace(/\D/g, '');
        if (somenteNumeros.length < 3 ){
            return somenteNumeros;
        }
        if (somenteNumeros.length === 3) {
            return `${somenteNumeros.slice(0, 1)}.${somenteNumeros.slice(1)}`;
        }
        const parteInteira = somenteNumeros.slice(0, -2);
        const parteDecimal = somenteNumeros.slice(-2);
        return `${parteInteira}.${parteDecimal}`;
    }

    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [disponibilidade, setDisponibilidade] = useState('')
    const [urlImagem, setUrlImagem] = useState('')
    const [previewImagem, setPreviewImagem] = useState(null)
    const navigate = useNavigate()
    const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem }  = useMensagem()

    const cadastrarPrato = async () => {
        try{
            const response = await axios.post('https://baratier-backend.onrender.com/pratos', {nomePrato, descricao, preco, categoria, disponibilidade, urlImagem})
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso')
            setNomePrato('')
            setDescricao('')
            setPreco('')
            setCategoria('')
            setDisponibilidade('')
            setUrlImagem('')
            setPreviewImagem(null)
        } catch (erro){
            let erroMsg = 'Erro ao conectar ao servidor'
            if (erro.response && erro.response.data) {
                erroMsg = erro.response.data.mensagem
                if (erro.response.data.erros) {
                    erroMsg += ' ' + Object.values(erro.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }
    return(
        <div className="container">
            <h2>Cadastro de pratos</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarPrato()}}>
                <input
                    type="text"
                    id="nomePrato"
                    placeholder="Nome do prato"
                    value={nomePrato}
                    onChange={(e) => setNomePrato(e.target.value)}
                    required
                />
                <input
                    type="text"
                    id="descricao"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
                <input
                    type="preco"
                    id="preco"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) =>{
                        const valorFormatado = formatarValorComoDecimal(e.target.value);
                        setPreco(valorFormatado);
                    }}
                    required
                />
                <select
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required>
                    <option value="">Selecione a categoria</option>
                    <option value="ENTRADA">Entrada</option>
                    <option value="PRATO_PRINCIPAL">Prato principal</option>
                    <option value="SOBREMESA">Sobremsa</option>
                    <option value="BEBIDA">Bebida</option>
                    </select>
                <select
                    id="disponibilidade"
                    value={disponibilidade}
                    onChange={(e) => setDisponibilidade(e.target.value)}
                    required>
                    <option value="">Selecione a disponibilidade</option>
                    <option value="EM_ESTOQUE">Em estoque</option>
                    <option value="ESGOTADO">Esgotado</option>
                    </select>
                <input
                    type="url"
                    id="urlImagem"
                    value={urlImagem}
                    placeholder="https://exemplo.com/imagem.jpg"
                    onChange={(e) => {setUrlImagem(e.target.value)
                        setPreviewImagem(e.target.value)
                    }}
                    required pattern="https?://.*\.(?:png|jpg|jpeg|gif|svg)"
                />
                <div style={{ margin: "10px 0", textAlign: "center"}}>
                </div>

                {previewImagem && (
                    <img
                        src={previewImagem}
                        alt="Pré-visualização"
                        style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '8px'}}
                    />
                )}
                
                <button type="submit">Cadastrar</button>
            </form>
            <button onClick={() => navigate('/pratos')} className="link-pratos">
                Ver pratos cadastrados
            </button>
            <button onClick={() => navigate('/')} className="link-menu">
                Menu inicial
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    )
}

export default FormularioPrato