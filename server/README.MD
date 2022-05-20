autenticação JWT - login 

paciente
    index
    show
    store
    update
    delete

faça pedido 
    select paciente
        
    
    FLUXOGRAMA
    \
    \
    \
    \
    \-> PACIENTES
    
        CADASTRAR-PACIENTE 
            NOME
            SELECT-UNIDADE-INTERNAÇÃO
            SELECT-LEITO-DISPONIVEL
        
        VISUALIZAR-PACIENTES
    
        VISUALIZAR-PACIENTE
            ID-PACIENTE
        
        ATUALIZAR-PACIENTES
            NOME
            SELECT-UNIDADE-INTERNAÇÃO
            SELECT-LEITO-DISPONIVEL
        
        DELETAR-PACIENTE
            ID
        
    
    FLUXOGRAMA
    \
    \
    \
    \
    \-> PEDIDOS
    
    CADASTRAR-PEDIDO
        SELECT-PACIENTE
        
            
ENFERMARIA A
ENFERMARIA B
ENFERMARIA C
TOTAL = 60 LEITOS


