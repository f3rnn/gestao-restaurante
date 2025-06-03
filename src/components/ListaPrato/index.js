import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'

function ListaPratos(){
    const [pratos, setPratos] = useState([])

    useEffect(() => {
        const carregarPratos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/pratos')
                setPratos(response.data)
            } catch (error) {
                alert('Erro ao buscar pratos: ', error)
                setPratos([])
            }
        }
        carregarPratos()
    }, [])

    return (
        <ul id="listaPratos" className="lista-pratos">
            {pratos.length === 0 ? (
                <li>Nenhum prato encontrado</li>
            ): (
                pratos.map( prato => (
                    <li key={prato.id}>
                        <strong>Nome do prato: </strong> {prato.nomePrato}<br/>
                        <strong>Descrição: </strong> {prato.descricao}<br/>
                        <strong>Preço: </strong> {prato.preco}<br/>
                        <strong>Categoria: </strong> {prato.categoria}<br/>
                        <strong>Disponibilidade: </strong> {prato.disponibilidade}<br/>
                        <strong>Imagem: </strong> {prato.urlImagem}<br/>
                    </li>
                ))
            )}
        </ul>
    )
}

export default ListaPratos;