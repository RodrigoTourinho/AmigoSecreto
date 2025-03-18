let amigos = [];
let resultadoSorteio = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarListaAmigos();
    input.value = "";
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (const amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function selecionarAmigoAleatorio() {
    if (amigos.length === 0) {
        return null;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    return amigos[indiceSorteado];
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }
    const amigoSorteado = selecionarAmigoAleatorio();
    resultadoSorteio.push(amigoSorteado);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
