let jogos = JSON.parse(localStorage.getItem("jogos"));

if (!jogos) {
    jogos = [];
}

document.getElementById("botao_cadastrar").addEventListener("click", () => {
    let nomeJogo = document.getElementById("nome_jogo").value;
    let categoriaJogo = document.getElementById("categoria_jogo").value;
 //   let desenvolvedorJogo = document.getElementById("desenvolvedor_jogo").value;

    if (nomeJogo === "" ||categoriaJogo === "" ) 
     //   || desenvolvedorJogo === ""
        {
        alert("Preencha todos os campos.");
        return;
    }

    jogos.push({
        nome: nomeJogo,
        categoria: categoriaJogo,
//        desenvolvedor: desenvolvedorJogo
    });

    localStorage.setItem("jogos", JSON.stringify(jogos));

    document.getElementById("nome_jogo").value = "";
    document.getElementById("categoria_jogo").value = "";
 //   document.getElementById("desenvolvedor_jogo").value = "";

    listar();
});

function listar() {
    document.getElementById("tabela_jogos").innerHTML = "";

    let indice = 0;

    for (const jogo of jogos) {
        document.getElementById("tabela_jogos").innerHTML +=
         // <td>${jogo.desenvolvedor}</td> 
        `
            <tr>
                <td>${jogo.nome}</td>
                <td>${jogo.categoria}</td>
                <td>
                    <button onclick="excluir(${indice})">
                        Excluir
                    </button>

                    <button onclick="carregar(${indice})">
                        Carregar
                    </button>
                </td>
            </tr>
        `;

        indice++;
    }
}

function excluir(indice) {
    jogos.splice(indice, 1);

    localStorage.setItem("jogos", JSON.stringify(jogos));

    listar();
}

function carregar(indice) {
    document.getElementById("nome_jogo").value =
        jogos[indice].nome;

    document.getElementById("categoria_jogo").value =
        jogos[indice].categoria;

  //  document.getElementById("desenvolvedor_jogo").value =
   //     jogos[indice].desenvolvedor;

    document.getElementById("area_alterar").innerHTML = `
        <button onclick="alterar(${indice})">
            Alterar jogo
        </button>
    `;
}

function alterar(indice) {
    let novoNome =
        document.getElementById("nome_jogo").value;

    let novaCategoria =
        document.getElementById("categoria_jogo").value;

   // let novoDesenvolvedor =
    //    document.getElementById("desenvolvedor_jogo").value;

    if (novoNome === "" ||novaCategoria === "" )// ||novoDesenvolvedor === ""
    {
        alert("Preencha todos os campos.");
        return;
    }

    jogos[indice].nome = novoNome;
    jogos[indice].categoria = novaCategoria;
    jogos[indice].desenvolvedor = novoDesenvolvedor;

    localStorage.setItem("jogos", JSON.stringify(jogos));

    document.getElementById("area_alterar").innerHTML = "";

    document.getElementById("nome_jogo").value = "";
    document.getElementById("categoria_jogo").value = "";
 //   document.getElementById("desenvolvedor_jogo").value = "";

    listar();
}