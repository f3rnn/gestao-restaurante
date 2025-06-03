package com.example.restaurante.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "tab_prato")
public class Prato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do prato é obrigatório")
    private String nomePrato;

    @NotBlank(message = "Descrição do prato é obrigatória")
    private String descricao;

    @NotNull(message = "Preço do prato é obrigatório")
    private float preco;

    @NotNull(message = "Categoria é obrigatória")
    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    @NotNull(message = "Disponibilidade é obrigatória")
    @Enumerated(EnumType.STRING)
    private Disponibilidade disponibilidade;

    @NotBlank(message = "Imagem é obrigatória")
    private String urlImagem;

    public Prato() {
    }

    public Prato(Long id, String nomePrato, String descricao, float preco, Categoria categoria, Disponibilidade disponibilidade, String urlImagem) {
        this.id = id;
        this.nomePrato = nomePrato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.urlImagem = urlImagem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome do prato é obrigatório") String getNomePrato() {
        return nomePrato;
    }

    public void setNomePrato(@NotBlank(message = "Nome do prato é obrigatório") String nomePrato) {
        this.nomePrato = nomePrato;
    }

    public @NotBlank(message = "Descrição do prato é obrigatória") String getDescricao() {
        return descricao;
    }

    public void setDescricao(@NotBlank(message = "Descrição do prato é obrigatória") String descricao) {
        this.descricao = descricao;
    }

    @NotNull(message = "Preço do prato é obrigatório")
    public float getPreco() {
        return preco;
    }

    public void setPreco(@NotNull(message = "Preço do prato é obrigatório") float preco) {
        this.preco = preco;
    }

    public @NotNull(message = "Categoria é obrigatória") Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(@NotNull(message = "Categoria é obrigatória") Categoria categoria) {
        this.categoria = categoria;
    }

    public @NotNull(message = "Disponibilidade é obrigatória") Disponibilidade getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(@NotNull(message = "Disponibilidade é obrigatória") Disponibilidade disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public @NotBlank(message = "Imagem é obrigatória") String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(@NotBlank(message = "Imagem é obrigatória") String urlImagem) {
        this.urlImagem = urlImagem;
    }
}
