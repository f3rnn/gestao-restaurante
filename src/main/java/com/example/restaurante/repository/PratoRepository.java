package com.example.restaurante.repository;

import com.example.restaurante.model.Prato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PratoRepository extends JpaRepository<Prato, Long> {
    Optional<Prato> findByNomePrato(String nomePrato);
}
