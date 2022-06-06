package com.backend.financas.model;

import com.backend.financas.model.enuns.StatusLancamento;
import com.backend.financas.model.enuns.TipoLancamento;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "TB_Lancamento",schema = "financas")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Lancamento implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descricao;
    private Integer mes;
    private Integer ano;
    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
    private BigDecimal valor;
    @Convert(converter = Jsr310JpaConverters.LocalDateConverter.class)
    private LocalDate dataCadastro;
    @Enumerated(value = EnumType.STRING)
    private TipoLancamento tipoLancamento;
    @Enumerated(value = EnumType.STRING)
    private StatusLancamento status;
}
