package com.backend.financas.service;

import com.backend.financas.model.Usuario;
import com.backend.financas.model.exception.ObjectConflictException;
import com.backend.financas.repository.UsurarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioService implements IUsuarioService{
    private final UsurarioRepository usurarioRepository;


    @Override
    public Usuario autenticar(String email, String senha) {
        return null;
    }

    @Override
    public Usuario salvarUsuario(Usuario usuario) {
        return null;
    }

    @Override
    public void validarEmail(String email) {
      boolean Vmail =usurarioRepository.existsByEmail(email);
      if(Vmail){
          throw new ObjectConflictException("Email ja cadastrado na base de dados...");
      }
    }
}
