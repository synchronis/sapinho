const tarefaInput = document.getElementById("tarefaInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");
const filtros = document.querySelectorAll(".filtro");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

let filtroAtual = "todas";

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function atualizarContador() {
    const pendentes = tarefas.filter(tarefa => !tarefa.concluida).length;

    if (pendentes === 1) {
        contador.textContent = "1 tarefa pendente";
    } else {
        contador.textContent = `${pendentes} tarefas pendentes`;
    }
}

function mostrarTarefas() {
    listaTarefas.innerHTML = "";

    let tarefasFiltradas = tarefas;

    if (filtroAtual === "pendentes") {
        tarefasFiltradas = tarefas.filter(
            tarefa => !tarefa.concluida
        );
    }

    if (filtroAtual === "concluidas") {
        tarefasFiltradas = tarefas.filter(
            tarefa => tarefa.concluida
        );
    }

    tarefasFiltradas.forEach(tarefa => {
        const li = document.createElement("li");

        li.classList.add("tarefa");

        if (tarefa.concluida) {
            li.classList.add("concluida");
        }

        const texto = document.createElement("span");
        texto.textContent = tarefa.texto;

        const acoes = document.createElement("div");
        acoes.classList.add("acoes");

        const concluirBtn = document.createElement("button");
        concluirBtn.classList.add("concluir");
        concluirBtn.textContent = tarefa.concluida
            ? "Desfazer"
            : "Concluir";

        concluirBtn.addEventListener("click", () => {
            tarefa.concluida = !tarefa.concluida;

            salvarTarefas();
            mostrarTarefas();
        });

        const excluirBtn = document.createElement("button");
        excluirBtn.classList.add("excluir");
        excluirBtn.textContent = "Excluir";

        excluirBtn.addEventListener("click", () => {
            tarefas = tarefas.filter(item => item.id !== tarefa.id);

            salvarTarefas();
            mostrarTarefas();
        });

        acoes.appendChild(concluirBtn);
        acoes.appendChild(excluirBtn);

        li.appendChild(texto);
        li.appendChild(acoes);

        listaTarefas.appendChild(li);
    });

    atualizarContador();
}

function adicionarTarefa() {
    const texto = tarefaInput.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };

    tarefas.push(novaTarefa);

    salvarTarefas();
    mostrarTarefas();

    tarefaInput.value = "";
    tarefaInput.focus();
}

adicionarBtn.addEventListener("click", adicionarTarefa);

tarefaInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

filtros.forEach(botao => {
    botao.addEventListener("click", () => {

        filtros.forEach(btn => {
            btn.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        filtroAtual = botao.dataset.filtro;

        mostrarTarefas();
    });
});

mostrarTarefas();