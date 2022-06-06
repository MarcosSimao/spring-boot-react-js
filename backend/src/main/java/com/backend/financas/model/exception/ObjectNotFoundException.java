package com.backend.financas.model.exception;

public class ObjectNotFoundException extends RuntimeException{

    public ObjectNotFoundException(String msg){
        super(msg);
    }
}
