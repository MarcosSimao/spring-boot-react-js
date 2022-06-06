package com.backend.financas.model.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class StandarErrorResponse implements Serializable {
    private LocalDateTime timeStamp;
    private Integer status;
    private String message;
    private String path;
}
