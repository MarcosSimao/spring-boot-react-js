package com.backend.financas.repository;

import com.backend.financas.model.Usuario;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsurarioRepository extends JpaRepository<Usuario,Long> {

       boolean existsByEmail(String email);
}
