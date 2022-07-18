Olá! <br><br>
Essa aplicação chamada <b>MENU</b> é um projeto pessoal desenvolvido apenas por mim. <br>

<br>Esse <b>MENU</b> é estilo um ( cardápio digital ) feito para que os pacientes internados de um determinado hospital solicitem <b>ITENS</b> de algumas <b>CATEGORias</b>🏥
<br><br>Esses pacientes serão cadastrados por algum funcionário. Esse funcionário irá inserir os dados conformes passado para eles e seguindo o fluxo da aplicação. 
<br><br>SÃO ELAS 🚀🔥: 
 
 <div>
  <ul>
    - COMIDA PREFERIDA 🍓🍇🍉🍔🍕 <br>
    - MÚSICA PREFEIDA 🎶🎵📻🎸🎺 <br>
    - LEITURA PREFERIDA 📕📚📰 <br>
    - FILME PREFERIDO 📽🎞🎬 <br>
    - ESPORTE PREFERIDO ⛹🏻‍♂🚴🏋🏻🏀 <br>
    - PREFERÊNCIAS PESSOAIS ❤📲👩‍❤‍👨 <br>
    </ul>
 </div>
  
Inicialmente ele funcionará com os seguintes passos: 

<br><b>1º Cadastrar o paciente </b><br>
  <br>- Nome completo.
  <br>- Selecionar o leito na aba de leitos disponíveis.

  <h4> 
    #Um paciente não poderá ocupar mais de um leito.
    <br>#Um leito poderá ser ocupado por mais de um paciente.<br>
  </h4>
 
<b>2º Cadastrar o pedido do paciente.</b><br>
<b><br>#Um paciente não poderá ter mais de um pedido por vez.</b><br>
  <br>- Selecione o paciente desejado.
  <br>- Digite o PEDIDO.
  <br>- Informe o leito que o PACIENTE se encontra.
  <br>- Quando terminar clique em ENVIAR. <br><br>

<b>Caso alguma categoria esteja faltando, será possível criar a categoria.</b>
<br>Basta clicar no <b>MENU</b> 🔜 <b>CATEGORIAS</b> 🔜 <b>CADASTRAR.</b><br>
<br>- Insira o nome da <b>CATEGORIA</b> e clique em <b>ENVIAR.</b><br>

<br>O último <b>MENU</b> chamado <b>LEITOS</b> é reservado apenas para: 
  <br><br>- Todos os leitos CADASTRADOS.<br>
  - Todos os leitos Ocupados.<br>
  - Todos os leitos Vagos.<br>
 

 <br>Em cada <b>MENU</b> temos operações de:
  <br><br>
  - Criar <br>
  - Visualizar <br>
  - Atualizar <br>
  - Deletar <br>

<br>COM EXCESSÃO DO <b>MENU</b> <b>LEITOS</b> esse será apenas para <b>CONSULTA</b>

<br><b>DESACOPLEI O MÁXIMO DO PROJETO POSSÍVEL PARA EVITAR DE QUE PROBLEMAS EM UM CÓDIGO DANIFICASSE 
  OUTRA PARTE DE OUTRO CÓDIGO OU REGRA DE NEGÓCIO.</b>

arquivo de teste será upado
<img src="menu-hss/server/assets/teste/tables.png" alt="Todas as tabelas que foram feitos os teste">
<img src="menu-hss/server/assets/teste/beds.png" alt="Todas as funcionalidades que foram feitos os teste na tabela leitos">
<img src="menu-hss/server/assets/teste/categories.png" alt="Todas as funcionalidades que foram feitos os teste na tabela categorias">
<img src="menu-hss/server/assets/teste/orders.png" alt="Todas as funcionalidades que foram feitos os teste na tabela pedidos">
<img src="menu-hss/server/assets/teste/patientes.png" alt="Todas as funcionalidades que foram feitos os teste na tabela pacientes">

<br><br><b>IMAGENS DA APLICAÇÃO</b>

<a href="https://ibb.co/jbcbmZG"><img src="https://i.ibb.co/Qp2pLjn/1home-Principal.png" alt="1home-Principal" border="0"></a>
<a href="https://ibb.co/HF7FvqW"><img src="https://i.ibb.co/7YvYcKw/2home-Patients.png" alt="2home-Patients" border="0"></a>
<a href="https://ibb.co/kH9sY6V"><img src="https://i.ibb.co/f1nzmGV/3home-Orders.png" alt="3home-Orders" border="0"></a>
<a href="https://ibb.co/RB0NyS1"><img src="https://i.ibb.co/WPy0t3Q/4home-Categories.png" alt="4home-Categories" border="0"></a>
<a href="https://ibb.co/0Q9yHv8"><img src="https://i.ibb.co/wYQh5j3/5home-Beds.png" alt="5home-Beds" border="0"></a>
<a href="https://ibb.co/cvMVkHn"><img src="https://i.ibb.co/0X8vmSb/6ex-Update.png" alt="6ex-Update" border="0"></a>

<b>Tecnologias utilizadas:</b>
<br>- TYPESCRIPT 
<br>- ES6
<br>- NODEJS
<br>- EXPRESS
<br>- API REST
<br>- INTERFACES 
<br>- DATABASE .ENV ( SQLITE ) 🔥 
<br>- QUERY BUILDER ( PRISMA ORM. CHAVES PRIMÁRIAS/ESTRANGEIRAS E RELACIONAMENTOS ) 🔥 
<br>- JEST
<br>- SOLID ( INVERSÃO DE DEPENDÊNCIA ROUTES.TS )
<br>- REPOSITORY PATTERN
<br>- USE CASE ( REGRA DE NEGÓCIO )
<br>- VITE
<br>- REACT DOM 
<br>- AXIOS
<br>- PHOSPHOR-ICONS
<br>- TAILWINDCSS 
<br>- HEADLESSUI ( ACESSIBILIDADE )


<h2>INSTALAÇÃO: </h2>

<br>1º Você deverá fazer o gitclone ou baixar diretament no diretório. 
<br>2º Você deverá acessar a pasta <b>SERVER</b>
  <br>Rodar os seguintes comandos:  
  <br>YARN ( baixar os pacotes ( dependencies/devDependencies ) utilizados no projeto )
  <br>YARN DEV ( para rodar o servidor via http://localhost:3333/ )
  <br>ROTAS: 
  <br>- /pacientes
  <br>- /leitos
  <br>- /leitos/vagos
  <br>- /leitos/ocupados
  <br>- /categorias
  <br>- /pedidos
<br>2.1º Caso queira ver o banco ( pedir o .env via <b>LINKEDIN</b> ) 
<br>rode o YARN PRISMA STUDIO ( localhost:5555 )
  <br>- Será necessário o .env na raiz do projeto

<br>3º Você deverá acessar a pasta <b>WEB</b>
<br>Rodar os seguintes comandos:  
<br>YARN ( baixar os pacotes ( dependencies/devDependencies ) utilizados no projeto )
<br>YARN DEV ( para rodar o servidor via http://localhost:3000/ )
