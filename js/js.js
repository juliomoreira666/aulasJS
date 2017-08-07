var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdpeso = paciente.querySelector(".info-peso");
  var peso = tdpeso.textContent;

  var tdaltura = paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;

  var tdimc = paciente.querySelector(".info-imc");

  var pesoEvalido = true;
  var alturaEvalida = true;

  if (peso < 0 || peso >= 1000) {
    console.log("Peso Inválido!");
    pesoEvalido = false;
    tdimc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");

  }

  if (altura <= 0 || altura >= 3.00) {
    console.log("Altura Invalida!");
    alturaEvalida = false;
    tdimc.textContent = "Altura inválido!";
    paciente.classList.add("paciente-invalido");

  }

  if (pesoEvalido && alturaEvalida ) {
    var calculo = peso / (altura * altura);
    tdimc.textContent = calculo.toFixed(2);
  }
}

var botaoForm = document.querySelector("#adicionar-paciente");
botaoForm.addEventListener("click",function(event){
  event.preventDefault();
  var form = document.querySelector("#forminho");

  var nomef = form.nome.value;
  var pesof = form.peso.value;
  var alturaf = form.altura.value;
  var gorduraf = form.gordura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nomef;
  pesoTd.textContent = pesof;
  alturaTd.textContent = alturaf;
  gorduraTd.textContent = gorduraf;
  imcTd.textContent =  tdimc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});
