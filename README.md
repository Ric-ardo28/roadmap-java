# Roadmap Java Back-End Júnior

Landing page responsiva e interativa para acompanhar os estudos de uma pessoa em transição de carreira rumo à primeira vaga como Desenvolvedor Java Back-End Júnior.

O projeto funciona como um painel de controle de estudos: divide o aprendizado em fases, permite marcar checklists, calcula o progresso automaticamente e mantém os dados salvos no navegador usando `localStorage`.

## Visão geral

Este projeto foi criado para organizar uma jornada prática de estudos em Java Back-End, cobrindo desde fundamentos de programação até deploy, documentação, testes, segurança e preparação para entrevistas.

A proposta não é apenas listar conteúdos, mas transformar o roadmap em uma ferramenta visual de acompanhamento, com progresso por fase, progresso geral e um projeto principal de portfólio.

## Demonstração

Repositório:

```text
https://github.com/Ric-ardo28/roadmap-java
```

Para visualizar localmente, abra o arquivo `index.html` no navegador ou use a extensão Live Server no VS Code.

## Funcionalidades

- Landing page moderna com identidade visual tecnológica.
- Layout responsivo para desktop, tablet e celular.
- Header destacado com chamadas para ação.
- Hero section com resumo visual do progresso.
- Seção de progresso geral com:
  - percentual concluído;
  - total de itens concluídos;
  - barra de progresso dinâmica.
- Roadmap separado em 6 fases de estudo.
- Checklist marcável em cada fase.
- Barra de progresso individual por fase.
- Botão para marcar uma fase inteira como concluída.
- Botão para limpar uma fase.
- Botão para resetar todo o progresso com confirmação.
- Salvamento automático no `localStorage`.
- Seção destacada para projeto principal de portfólio.
- Checklist exclusivo para evolução do projeto.
- Plano de estudos de 90 dias.
- Rotina semanal sugerida.
- Checklist de prontidão para aplicar para vagas.
- Microinterações em botões, cards, checkboxes e barras de progresso.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- Bootstrap Icons
- Google Fonts - Inter
- localStorage

Não há backend neste primeiro momento. Todo o estado da aplicação é salvo no próprio navegador.

## Identidade visual

A interface usa uma paleta escura, elegante e profissional baseada nas seguintes cores:

| Cor | Hex |
| --- | --- |
| Prussian Blue | `#13293D` |
| Sapphire Blue | `#006494` |
| Celadon Blue | `#247BA0` |
| Carolina Blue | `#1B98E0` |
| Azure X 11 Web Color | `#E8F1F2` |

O visual foi pensado para parecer um painel premium de acompanhamento de estudos, com:

- glassmorphism;
- gradientes sutis;
- sombras suaves;
- cards em camadas;
- bordas translúcidas;
- barras de progresso com destaque;
- bom contraste para leitura.

## Estrutura do projeto

```text
roadmap-java/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## Como executar

### Opção 1: Abrir direto no navegador

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html`.
3. Use a página normalmente.

### Opção 2: Usar Live Server

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão Live Server, caso ainda não tenha.
3. Clique com o botão direito no `index.html`.
4. Selecione `Open with Live Server`.

## Como clonar o projeto

```bash
git clone https://github.com/Ric-ardo28/roadmap-java.git
cd roadmap-java
```

Depois, abra o `index.html` no navegador.

## Como funciona o progresso

Cada item do checklist possui um ID único gerado no JavaScript.

Exemplo:

```text
fase-1-item-1
fase-1-item-2
portfolio-project-item-1
ready-apply-item-1
```

Quando o usuário marca ou desmarca um checkbox, o JavaScript atualiza um objeto de progresso e salva esse objeto no `localStorage`.

Chave usada no navegador:

```text
roadmap-java-backend-junior-progress
```

Ao recarregar a página, o script lê essa chave e restaura automaticamente todos os itens marcados.

## Principais funções do JavaScript

| Função | Responsabilidade |
| --- | --- |
| `loadProgress()` | Carrega o progresso salvo no `localStorage`. |
| `saveProgress()` | Salva o estado atual dos checkboxes. |
| `createCheckboxId()` | Gera IDs únicos para cada item. |
| `createChecklist()` | Renderiza os checklists dinamicamente. |
| `createRoadmapCards()` | Cria os cards das fases do roadmap. |
| `createStaticSections()` | Renderiza tecnologias, plano de 90 dias e rotina semanal. |
| `updateAllProgress()` | Recalcula progresso geral, por fase e por seção. |
| `setGroupChecked()` | Marca ou limpa todos os itens de uma fase. |
| `bindActions()` | Registra os eventos dos botões e checkboxes. |

## Fases do roadmap

O roadmap está dividido em seis etapas:

1. Base de Programação e Java
2. Banco de Dados e Fundamentos Web
3. Spring Boot Profissional
4. Boas Práticas, Segurança e Testes
5. Docker, Deploy e Documentação
6. Preparação para Vaga Júnior

Cada fase possui:

- título;
- descrição;
- checklist;
- contador de itens concluídos;
- barra de progresso;
- botão para concluir a fase;
- botão para limpar a fase.

## Projeto principal de portfólio

O projeto sugerido dentro do roadmap é:

```text
DevStudy API — Plataforma de Controle de Estudos para Desenvolvedores
```

Descrição:

API REST para controle de estudos de desenvolvedores, com cadastro de usuários, autenticação JWT, trilhas de estudo, tarefas, sessões de estudo, progresso e dashboard.

Funcionalidades previstas:

- cadastro de usuário;
- login com JWT;
- criação de trilhas de estudo;
- criação de tópicos;
- criação de tarefas;
- marcação de tarefas como concluídas;
- registro de sessões de estudo;
- controle de horas estudadas;
- progresso por trilha;
- filtros por status e prazo;
- dashboard com estatísticas.

Tecnologias sugeridas para esse projeto:

- Java
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT
- PostgreSQL
- Docker
- JUnit
- Mockito
- Swagger
- GitHub Actions

## Onde alterar os itens do roadmap

Os conteúdos ficam centralizados no arquivo `script.js`.

Para editar as fases, altere o array:

```javascript
const roadmapPhases = [];
```

Para editar o checklist do projeto principal:

```javascript
const projectItems = [];
```

Para editar o checklist de prontidão para vagas:

```javascript
const readyItems = [];
```

Para editar o plano de 90 dias:

```javascript
const plan90Days = [];
```

Para editar a rotina semanal:

```javascript
const weeklyRoutine = [];
```

## Classes CSS principais

| Classe | Uso |
| --- | --- |
| `.site-header` | Header fixo com glassmorphism. |
| `.hero-section` | Seção principal da landing page. |
| `.hero-panel` | Card lateral com estatísticas do progresso. |
| `.btn`, `.btn-primary`, `.btn-outline` | Botões e estados de interação. |
| `.study-card` | Cards das fases e checklists. |
| `.progress-track`, `.progress-fill` | Barras de progresso. |
| `.check-item` | Itens individuais dos checklists. |
| `.portfolio-section` | Área destacada do projeto principal. |
| `.tag` | Chips de tecnologias. |
| `.info-card` | Cards do plano de 90 dias. |
| `.weekly-card` | Cards da rotina semanal. |

As variáveis principais de tema ficam no início do `style.css`, dentro de `:root`.

## Possíveis melhorias futuras

- Criar autenticação de usuários.
- Salvar progresso em banco de dados.
- Criar dashboard com gráficos reais.
- Adicionar filtros por fase, dificuldade ou status.
- Permitir edição dos itens pela interface.
- Criar modo exportar progresso em PDF.
- Adicionar integração com GitHub para buscar commits do projeto.
- Publicar a página no GitHub Pages, Vercel ou Netlify.
- Transformar o roadmap em uma aplicação full stack.

## Evolução para backend com Spring Boot

Uma evolução natural deste projeto é transformar o painel em uma aplicação com backend.

Sugestão de arquitetura:

```text
Frontend HTML/CSS/JS
        ↓
API REST Spring Boot
        ↓
PostgreSQL
```

Possíveis entidades:

- `User`
- `StudyPhase`
- `StudyItem`
- `UserProgress`
- `PortfolioProject`
- `StudySession`

Endpoints possíveis:

```text
POST   /auth/register
POST   /auth/login
GET    /roadmap/phases
GET    /users/me/progress
PATCH  /users/me/progress/items/{itemId}
POST   /study-sessions
GET    /dashboard
```

Com essa evolução, o `localStorage` poderia ser substituído por dados persistidos no PostgreSQL, permitindo que cada usuário tenha sua própria conta e acompanhe o progresso em qualquer dispositivo.

## Objetivo profissional

Este projeto também serve como peça de portfólio para demonstrar:

- organização de estudos;
- HTML semântico;
- CSS responsivo;
- JavaScript para manipulação de DOM;
- persistência local no navegador;
- preocupação com experiência do usuário;
- documentação clara;
- planejamento de evolução para backend Java.

## Autor

Desenvolvido como parte da jornada de estudos para a primeira vaga como Desenvolvedor Java Back-End Júnior.

```text
Java.Dev | Estudos, prática e portfólio
```
