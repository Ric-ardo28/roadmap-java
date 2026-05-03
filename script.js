const STORAGE_KEY = "roadmap-java-backend-junior-progress";

const roadmapPhases = [
  {
    id: "fase-1",
    title: "Fase 1 — Base de Programação e Java",
    description: "Lógica, sintaxe, POO, Collections, exceptions e datas.",
    items: [
      "Variáveis, tipos primitivos e operadores",
      "Condicionais: if, else e switch",
      "Laços: for, while e do while",
      "Arrays e métodos",
      "Manipulação de String",
      "Classes e objetos",
      "Construtores",
      "Encapsulamento",
      "Herança e polimorfismo",
      "Interfaces e enums",
      "Collections: List, Set e Map",
      "Exceptions",
      "LocalDate e DateTimeFormatter"
    ]
  },
  {
    id: "fase-2",
    title: "Fase 2 — Banco de Dados e Fundamentos Web",
    description: "SQL, PostgreSQL, HTTP, JSON, REST e Postman.",
    items: [
      "Banco de dados relacional",
      "Tabelas, colunas e tipos de dados",
      "Primary key e foreign key",
      "Relacionamentos 1:1, 1:N e N:N",
      "SELECT, INSERT, UPDATE e DELETE",
      "WHERE, ORDER BY, GROUP BY",
      "JOIN",
      "Transações",
      "HTTP request e response",
      "JSON",
      "Status codes",
      "Métodos GET, POST, PUT, PATCH e DELETE",
      "REST",
      "Testes no Postman ou Insomnia"
    ]
  },
  {
    id: "fase-3",
    title: "Fase 3 — Spring Boot Profissional",
    description: "Criação de APIs REST com Java e Spring Boot.",
    items: [
      "Spring Initializr",
      "Maven",
      "Estrutura de projeto",
      "application.properties",
      "Controller",
      "Service",
      "Repository",
      "Entity",
      "DTO",
      "Injeção de dependência",
      "@RestController",
      "@RequestMapping",
      "@GetMapping",
      "@PostMapping",
      "@PutMapping",
      "@DeleteMapping",
      "Spring Data JPA",
      "JpaRepository",
      "Relacionamentos com JPA",
      "Paginação com Pageable"
    ]
  },
  {
    id: "fase-4",
    title: "Fase 4 — Boas Práticas, Segurança e Testes",
    description: "Validação, tratamento de erros, autenticação e testes.",
    items: [
      "DTO de entrada e saída",
      "Bean Validation",
      "@Valid",
      "@NotBlank, @NotNull, @Email e @Size",
      "ControllerAdvice",
      "ExceptionHandler",
      "Resposta de erro padronizada",
      "Spring Security",
      "BCrypt",
      "JWT",
      "Roles USER e ADMIN",
      "Rotas públicas e privadas",
      "JUnit",
      "Mockito",
      "Testes de service",
      "Testes de controller",
      "MockMvc"
    ]
  },
  {
    id: "fase-5",
    title: "Fase 5 — Docker, Deploy e Documentação",
    description: "Preparar projeto para rodar fora da máquina local.",
    items: [
      "Docker",
      "Imagem e container",
      "Dockerfile",
      "Docker Compose",
      "PostgreSQL com Docker",
      "Variáveis de ambiente",
      "Build com Maven",
      "Deploy da API",
      "Deploy do banco",
      "CORS",
      "Swagger/OpenAPI",
      "README profissional",
      "GitHub Actions",
      "CI/CD básico"
    ]
  },
  {
    id: "fase-6",
    title: "Fase 6 — Preparação para Vaga Júnior",
    description: "GitHub, LinkedIn, currículo e entrevistas.",
    items: [
      "Git init, add, commit e push",
      "Branch e merge",
      "Pull Request",
      "README bem escrito",
      "GitHub organizado",
      "Currículo com projeto forte",
      "LinkedIn atualizado",
      "Postar evolução dos estudos",
      "Explicar Controller, Service e Repository",
      "Explicar Entity e DTO",
      "Explicar autenticação JWT",
      "Explicar deploy do projeto",
      "Resolver desafios básicos em Java"
    ]
  }
];

const journeySummary = [
  {
    number: "01",
    icon: "☕",
    title: "Java",
    description: "Base sólida em lógica, POO, Collections, exceptions e datas."
  },
  {
    number: "02",
    icon: "🗄️",
    title: "Banco de Dados",
    description: "SQL, PostgreSQL, relacionamentos, transações e fundamentos web."
  },
  {
    number: "03",
    icon: "⚙️",
    title: "Spring Boot",
    description: "APIs REST com camadas, JPA, DTOs, validação, segurança e testes."
  },
  {
    number: "04",
    icon: "🚀",
    title: "Deploy",
    description: "Docker, documentação, CI/CD básico e projeto pronto para portfólio."
  }
];

const portfolioFeatures = [
  "Cadastro de usuário",
  "Login com JWT",
  "Criação de trilhas de estudo",
  "Criação de tópicos dentro da trilha",
  "Criação de tarefas",
  "Marcar tarefa como concluída",
  "Registrar sessão de estudo",
  "Registrar horas estudadas",
  "Ver progresso por trilha",
  "Filtrar tarefas por status",
  "Buscar tarefas por prazo",
  "Dashboard com estatísticas"
];

const portfolioTech = [
  "Java",
  "Spring Boot",
  "Spring Data JPA",
  "Spring Security",
  "JWT",
  "PostgreSQL",
  "Docker",
  "JUnit",
  "Mockito",
  "Swagger",
  "GitHub Actions"
];

const projectItems = [
  "Criar repositório no GitHub",
  "Criar projeto Spring Boot",
  "Configurar PostgreSQL",
  "Criar entidades",
  "Criar repositories",
  "Criar services",
  "Criar controllers",
  "Criar DTOs",
  "Criar validações",
  "Criar tratamento de erros",
  "Criar autenticação JWT",
  "Criar testes",
  "Criar Dockerfile",
  "Criar docker-compose.yml",
  "Adicionar Swagger",
  "Fazer deploy",
  "Criar README final",
  "Publicar no LinkedIn"
];

const readyItems = [
  "Criar API CRUD sem seguir tutorial linha por linha",
  "Explicar Controller, Service e Repository",
  "Explicar Entity e DTO",
  "Conectar API com PostgreSQL",
  "Fazer login com JWT",
  "Criar README organizado",
  "Subir projeto no GitHub",
  "Fazer deploy simples",
  "Explicar decisões técnicas do projeto",
  "Resolver problemas básicos de lógica em Java"
];

const plan90Days = [
  {
    badge: "01",
    month: "Mês 1 — Base forte",
    weeks: [
      "Semana 1: Java básico e lógica",
      "Semana 2: POO",
      "Semana 3: Collections, Exceptions e Datas",
      "Semana 4: Git, GitHub e README"
    ]
  },
  {
    badge: "02",
    month: "Mês 2 — Banco, Web e Spring Boot",
    weeks: [
      "Semana 5: SQL e PostgreSQL",
      "Semana 6: HTTP, JSON, REST e Postman",
      "Semana 7: Primeira API Spring Boot",
      "Semana 8: Spring Data JPA e relacionamentos"
    ]
  },
  {
    badge: "03",
    month: "Mês 3 — Projeto profissional",
    weeks: [
      "Semana 9: DTOs, validações e erros",
      "Semana 10: Spring Security e JWT",
      "Semana 11: Testes com JUnit e Mockito",
      "Semana 12: Docker, Deploy, Swagger e README"
    ]
  }
];

const weeklyRoutine = [
  ["Segunda", "bi-journal-code", "teoria + prática + commit"],
  ["Terça", "bi-arrow-repeat", "exercícios + revisão de erros"],
  ["Quarta", "bi-kanban", "aplicar no projeto principal"],
  ["Quinta", "bi-file-earmark-text", "documentação + melhoria de código"],
  ["Sexta", "bi-lightning-charge", "nova funcionalidade + testes no Postman"],
  ["Sábado", "bi-github", "revisar semana + atualizar README + post no LinkedIn"],
  ["Domingo", "bi-cup-hot", "descanso ou revisão leve"]
];

let progressState = loadProgress();

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progressState));
}

function createCheckboxId(groupId, index) {
  return `${groupId}-item-${index + 1}`;
}

function createChecklist(container, groupId, items) {
  container.innerHTML = "";

  items.forEach((item, index) => {
    const id = createCheckboxId(groupId, index);
    const label = document.createElement("label");
    label.className = "check-item";
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.dataset.group = groupId;
    input.checked = Boolean(progressState[id]);

    input.addEventListener("change", () => {
      progressState[id] = input.checked;
      saveProgress();
      updateAllProgress();
    });

    const text = document.createElement("span");
    text.textContent = item;

    label.append(input, text);
    container.appendChild(label);
  });
}

function createRoadmapCards() {
  const grid = document.querySelector("#roadmapGrid");

  roadmapPhases.forEach((phase) => {
    const card = document.createElement("article");
    card.className = "study-card";
    card.dataset.phase = phase.id;

    const checklistId = `${phase.id}-checklist`;

    card.innerHTML = `
      <div class="phase-topline">
        <div>
          <h3>${phase.title}</h3>
          <p>${phase.description}</p>
        </div>
        <span class="phase-counter" id="${phase.id}-counter">0/0</span>
      </div>
      <div class="progress-track small">
        <div class="progress-fill" id="${phase.id}-bar"></div>
      </div>
      <div id="${checklistId}" class="checklist"></div>
      <div class="card-actions">
        <button class="btn btn-primary" type="button" data-complete-phase="${phase.id}">
          <i class="bi bi-check2-circle"></i>
          Marcar fase como concluída
        </button>
        <button class="btn btn-outline" type="button" data-clear-phase="${phase.id}">
          <i class="bi bi-eraser"></i>
          Limpar fase
        </button>
      </div>
    `;

    grid.appendChild(card);
    createChecklist(card.querySelector(`#${checklistId}`), phase.id, phase.items);
  });
}

function createJourneySummary() {
  const grid = document.querySelector("#journeyGrid");

  journeySummary.forEach((item) => {
    const card = document.createElement("article");
    card.className = "journey-card";
    card.dataset.number = item.number;
    card.innerHTML = `
      <span class="journey-badge">${item.icon}</span>
      <strong>${item.title}</strong>
      <p>${item.description}</p>
    `;
    grid.appendChild(card);
  });
}

function createStaticSections() {
  createJourneySummary();

  const featureList = document.querySelector("#portfolioFeatures");
  portfolioFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });

  const techGroup = document.querySelector("#portfolioTech");
  portfolioTech.forEach((tech) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tech;
    techGroup.appendChild(span);
  });

  createChecklist(document.querySelector("#projectChecklist"), "portfolio-project", projectItems);
  createChecklist(document.querySelector("#readyChecklist"), "ready-apply", readyItems);

  const planGrid = document.querySelector("#planGrid");
  plan90Days.forEach((plan) => {
    const card = document.createElement("article");
    card.className = "info-card";
    card.innerHTML = `
      <span class="month-badge">${plan.badge}</span>
      <h3>${plan.month}</h3>
      <ul>${plan.weeks.map((week) => `<li>${week}</li>`).join("")}</ul>
    `;
    planGrid.appendChild(card);
  });

  const weeklyGrid = document.querySelector("#weeklyGrid");
  weeklyRoutine.forEach(([day, icon, activity]) => {
    const card = document.createElement("article");
    card.className = "weekly-card";
    card.innerHTML = `
      <span class="weekly-icon"><i class="bi ${icon}"></i></span>
      <strong>${day}</strong>
      <p>${activity}</p>
    `;
    weeklyGrid.appendChild(card);
  });
}

function getGroupStats(groupId, total) {
  const done = Array.from({ length: total }, (_, index) => createCheckboxId(groupId, index))
    .filter((id) => progressState[id]).length;

  return {
    done,
    total,
    percent: total === 0 ? 0 : Math.round((done / total) * 100)
  };
}

function updateGroupProgress(groupId, total, counterId, barId) {
  const stats = getGroupStats(groupId, total);
  document.querySelector(counterId).textContent = `${stats.done}/${stats.total}`;
  document.querySelector(barId).style.width = `${stats.percent}%`;
}

function updateAllProgress() {
  let totalItems = 0;
  let completedItems = 0;

  roadmapPhases.forEach((phase) => {
    const stats = getGroupStats(phase.id, phase.items.length);
    totalItems += stats.total;
    completedItems += stats.done;
    updateGroupProgress(phase.id, phase.items.length, `#${phase.id}-counter`, `#${phase.id}-bar`);
  });

  const projectStats = getGroupStats("portfolio-project", projectItems.length);
  const readyStats = getGroupStats("ready-apply", readyItems.length);
  totalItems += projectStats.total + readyStats.total;
  completedItems += projectStats.done + readyStats.done;

  updateGroupProgress("portfolio-project", projectItems.length, "#projectCounter", "#projectBar");
  updateGroupProgress("ready-apply", readyItems.length, "#readyCounter", "#readyBar");

  const percent = totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);

  document.querySelector("#overallPercent").textContent = `${percent}%`;
  document.querySelector("#overallBar").style.width = `${percent}%`;
  document.querySelector("#overallCount").textContent = `${completedItems} de ${totalItems} itens concluídos`;
  document.querySelector("#heroPercent").textContent = `${percent}%`;
  document.querySelector("#heroDone").textContent = completedItems;
}

function setGroupChecked(groupId, total, checked) {
  for (let index = 0; index < total; index += 1) {
    const id = createCheckboxId(groupId, index);
    progressState[id] = checked;
    const checkbox = document.getElementById(id);

    if (checkbox) {
      checkbox.checked = checked;
    }
  }

  saveProgress();
  updateAllProgress();
}

function bindActions() {
  document.addEventListener("click", (event) => {
    const completeButton = event.target.closest("[data-complete-phase]");
    const clearButton = event.target.closest("[data-clear-phase]");

    if (completeButton) {
      const phase = roadmapPhases.find((item) => item.id === completeButton.dataset.completePhase);
      setGroupChecked(phase.id, phase.items.length, true);
    }

    if (clearButton) {
      const phase = roadmapPhases.find((item) => item.id === clearButton.dataset.clearPhase);
      setGroupChecked(phase.id, phase.items.length, false);
    }
  });

  document.querySelector("#resetAllBtn").addEventListener("click", () => {
    const confirmed = window.confirm("Tem certeza que deseja resetar todo o progresso salvo?");

    if (!confirmed) {
      return;
    }

    progressState = {};
    localStorage.removeItem(STORAGE_KEY);
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateAllProgress();
  });
}

function init() {
  createRoadmapCards();
  createStaticSections();
  bindActions();
  updateAllProgress();
}

document.addEventListener("DOMContentLoaded", init);
