package com.example.restaurante.exception;

public class PratoJaExistenteException extends RuntimeException {
    public PratoJaExistenteException(String message) {
        super(message);
    }
}
