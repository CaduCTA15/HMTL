const produtos = [

    {
        id: 1,
        produto: "Arroz 6kg",
        Qtde: 10
    },


    {
        id: 2,
        produto: "Café 1kg",
        Qtde: 50
    },


    {
        id: 3,
        produto: "Leite integral 1L",
        Qtde: 25
    }

];

let nextId = 4;

function listarProduto(){

    const tabela =

        document.getElementById("tabelaProdutos");

    tabela.innerHTML = "";

    for(let c of produtos){

        const linha =

            document.createElement("tr");

        linha.innerHTML = `

            <td>${c.id}</td>

            <td>${c.produto}</td>

            <td>${c.Qtde}</td>

        `;

        tabela.appendChild(linha);
    }
}

window.onload = function(){

    listarProduto();

    const btnAdicionar =

        document.getElementById("btnAdicionar");

    btnAdicionar.addEventListener('click', function(){

        const produto =

            document.getElementById("Produto");

        const qtde =

            document.getElementById("Qtde");

        produtos.push({

            id: nextId,

            produto: produto.value,

            Qtde: qtde.value
        });

        nextId++;

        produto.value = "";

        qtde.value = "";

        listarProduto();
    });

    const btnConfirmar =

        document.getElementById("btnConfirmar");

    btnConfirmar.addEventListener('click', function(){

        const prdId =

            document.getElementById("prdId");

        const quantidade =

            document.getElementById("quantidade");

        const adicionar =

            document.getElementById("adicionar");

        for(let p of produtos){

            if(p.id == prdId.value){

                if(adicionar.checked){

                    p.Qtde =
                        Number(p.Qtde) +

                        Number(quantidade.value);

                }else{

                    p.Qtde =
                        Number(p.Qtde) -

                        Number(quantidade.value);
                }
            }
        }

        listarProduto();

        prdId.value = "";
        
        quantidade.value = "";
    });
}