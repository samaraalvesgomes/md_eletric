const botao = document.querySelector("#btn_servicos");
const elementoPlataformas = document.querySelector("#btn_servicos  #servicos");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

document.getElementById('toggleButton1').addEventListener('click', function() {
    var content = document.querySelector('.ocult_btn_topicos1');
    content.classList.toggle('ocult_btn_topicos1_visible');
});

document.getElementById('toggleButton2').addEventListener('click', function() {
    var content = document.querySelector('.ocult_btn_topicos2');
    content.classList.toggle('ocult_btn_topicos2_visible');
});

document.getElementById('toggleButton3').addEventListener('click', function() {
    var content = document.querySelector('.ocult_btn_topicos3');
    content.classList.toggle('ocult_btn_topicos3_visible');
});