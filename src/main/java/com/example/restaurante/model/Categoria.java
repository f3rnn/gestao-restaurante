package com.example.restaurante.model;

public enum Categoria {
    ENTRADA("Entrada"),
    PRATO_PRINCIPAL("Prato principal"),
    SOBREMESA("Sobremesa"),
    BEBIDA("Bebida");

    private String tipos;

    Categoria(String tipos) {
        this.tipos = tipos;
    }

    public String getTipos() {
        return tipos;
    }
}
