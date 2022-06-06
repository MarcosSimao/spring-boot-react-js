package com.backend.financas.service;

import com.backend.financas.model.Usuario;

public interface IUsuarioService {

    Usuario autenticar(String email,String senha);
    Usuario salvarUsuario(Usuario usuario);
    void validarEmail(String email);
}
