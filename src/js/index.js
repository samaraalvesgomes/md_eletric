const botao = document.querySelector("#btn_servicos");
const elementoPlataformas = document.querySelector("#btn_servicos  #servicos");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});