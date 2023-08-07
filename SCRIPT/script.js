cep.addEventListener("change", pesquisarEndereco);

function pesquisarEndereco() {
    let cepInformado = cep.value;
    let urlAPI = `https://viacep.com.br/ws/${cepInformado}/json`;

    fetch(urlAPI).then(
        (informacoes) => {
            informacoes.json().then(
              (enderecoViaCep) => {
                logradouro.value = enderecoViaCep.logradouro;
                bairro.value = enderecoViaCep.bairro;
                localidade.value = enderecoViaCep.localidade;
                uf.value = enderecoViaCep.uf;
             }
          );
        }
    );
}

btnApagar.addEventListener("click", apagarConta);
function apagarConta () {
const formulario = document.querySelector("#form");
formulario.reset();
}