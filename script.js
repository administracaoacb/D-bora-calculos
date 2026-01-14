let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function salvar() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const valor = parseFloat(document.getElementById("valor").value);

    if (!nome || isNaN(valor)) {
        alert("Preencha todos os campos");
        return;
    }

    produtos.push({ nome, valor });
    salvar();
    atualizarLista();

    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
}

function removerProduto(index) {
    produtos.splice(index, 1);
    salvar();
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("lista");
    const totalEl = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    produtos.forEach((p, i) => {
        total += p.valor;
        lista.innerHTML += `
            <li>
                ${p.nome} - R$ ${p.valor.toFixed(2)}
                <button onclick="removerProduto(${i})">X</button>
            </li>
        `;
    });

    totalEl.innerText = `Total: R$ ${total.toFixed(2)}`;
}

atualizarLista();
