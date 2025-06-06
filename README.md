# RELATÓRIO: GERÊNCIA DE CONFIGURAÇÕES E DEPENDÊNCIAS - SPOTIFY: FULL STACK 
 
# GRUPO:

Guilherme Pietro Luna Diniz - 01576841

Jenyffer Mery Gomes Andrade - 01599642

Luiz Vinicius Lima da Silva - 01603161

Ronaldo de Souza Paixão Junior - 01604034

Rosilene da Silva Lima - 01619051

# INTRODUÇÃO:

O presente relatório tem como objetivo apresentar as práticas adotadas
durante o desenvolvimento do projeto intitulado "Player de Música", no contexto
da disciplina de Gerência de Configuração e Dependência. A proposta visa com
ênfase na utilização de ferramentas e metodologias voltadas para o controle
eficiente do ciclo de vida do sistema.

O desenvolvimento do projeto envolveu a implementação de um reprodutor
de músicas digitais, com funcionalidades básicas de execução, pausa, avanço,
retrocesso e seleção de faixas, além de recursos visuais para a interação com o
usuário. Para garantir a organização, integridade e rastreabilidade do sistema ao
longo das fases de desenvolvimento, foram aplicadas práticas específicas de
controle de versão, planejamento de releases, rastreabilidade de mudanças e
auditoria de artefatos.

A adoção dessas práticas permitiu um acompanhamento sistemático da
evolução do projeto, assegurando que cada modificação realizada pudesse ser
devidamente registrada, validada e, se necessário, revertida. O uso de
ferramentas como sistemas de controle de versão, como o GitHub, também foi
essencial para a colaboração entre os membros da equipe e para a manutenção
da integridade do produto final.

Este relatório, portanto, visa evidenciar como a Gerência de Configuração
e Dependência contribuiu significativamente para uma entrega mais controlada,
segura e alinhada aos padrões de qualidade exigidos no desenvolvimento de
software.

# ARQUITETURA DO PROJETO:

A aplicação é um player de música desenvolvido em arquitetura full stack,
com backend responsável pela gestão de dados das músicas e frontend para
interação com o usuário. As funcionalidades incluem reprodução de músicas,
pausa, avanço de faixas, exibição de informações das músicas e interface
responsiva.

O sistema foi desenvolvido com arquitetura full stack, utilizando:

- Frontend: React.js;
- Backend: Node.js com dados mockados
- Testes: Jest para testes unitários e integração
- Gerenciador de pacotes: npm

O projeto foi dividido em módulos separados por funcionalidades,
mantendo pastas distintas para componentes, rotas, serviços e testes.

# OBJETIVOS:

# OBJETIVO GERAL:

Garantir que as funcionalidades básicas de um player de música, como
reprodução, pausa e exibição de informações funcionem corretamente e
ofereçam uma boa experiência ao usuário.

# OBJETIVOS ESPECÍFICOS:

- Verificar reprodução de músicas: O player deve tocar, pausar e navegar
entre faixas corretamente;
- Checar exibição das informações da música: título, artista e duração
devem aparecer corretamente formatados;
- Testar comportamento da interface: botões e controles devem funcionar
como esperado em diferentes tamanhos de tela;
- Confirmar formatação correta dos dados (ex.: função formatSong);
- Testar tratamento de erros simples, como ausência de
duração da música.

# PLANEJAMENTO E CICLO DE RELEASES:

O desenvolvimento foi estruturado em cinco releases principais:

- VERSÃO: v0.2
FUNCIONALIDADES ENTREGUES: Interface inicial, botão Play/Pause;


- VERSÃO: v0.4
FUNCIONALIDADES ENTREGUES: Exibição de informações musicais (mock);


- VERSÃO: v0.6
FUNCIONALIDADES ENTREGUES: Backend local, função formatSong, testes unitários;
  

- VERSÃO: v0.8
FUNCIONALIDADES ENTREGUES: Integração da API, testes de integração, melhorias visuais;


- VERSÃO: v1.0
FUNCIONALIDADES ENTREGUES: Versão final com testes completos e responsividade

Cada release foi precedida por testes e documentação, facilitando a validação incremental do sistema.

# ESCOPOS:

# INCLUÍDO NO ESCOPO:

- ÁREA DO SISTEMA: Player de música
- FUNCIONALIDADES INCLUÍDAS: Play, pause, próxima música, voltar
música, barra de progresso;

- ÁREA DO SISTEMA: Exibição de música
- FUNCIONALIDADES INCLUÍDAS: Mostrar título, artista, duração e
imagem (se houver);

- ÁREA DO SISTEMA: Formatação de dados FUNCIONALIDADES INCLUÍDAS: Funções como formatSong, além do
tratamento de dados incompletos;

- ÁREA DO SISTEMA: Interface responsiva FUNCIONALIDADES INCLUÍDAS: Verificação visual e funcional em
diferentes tamanhos de tela e dispositivos.

# FORA DO ESCOPO:

- FORA DO ESCOPO: Login JUSTIFICATIVA: Não implementado;
  
- FORA DO ESCOPO: Playlist JUSTIFICATIVA: Não existe essa funcionalidade no projeto atual;

- FORA DO ESCOPO: Busca de Conteúdo JUSTIFICATIVA: Ainda não faz parte do sistema;

- FORA DO ESCOPO: Integração com API’s externas (Spotify etc) JUSTIFICATIVA: Projeto é local/ simulado no momento.

# CONTROLE DE CONFIGURAÇÃO:

O controle de configuração foi feito por meio de:

- Git: sistema de versionamento distribuído;
- Commits organizados: com mensagens descritivas;
- Tags de versão: v0.2, v0.4, v0.6, v0.8 e v1.0;
- Padronização de commits por funcionalidade.

# CONTROLE DE MUDANÇAS:

A cada release, foram registradas as funcionalidades adicionadas ou
ajustadas. As mudanças foram motivadas por:

- Correções de bugs identificados nos testes;
- Melhorias na interface e responsividade;
- Ajustes na lógica de negócio com base em feedback do grupo;
- As decisões foram documentadas via commits e no histórico de
testes e auditoria.
