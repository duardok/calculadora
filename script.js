
function calcularIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0) {
        alert("Digite valores válidos!");
        return;
    }

    let imc = peso / (altura * altura);

    document.getElementById("resultadoIMC").innerHTML =
        "Seu IMC é: " + imc.toFixed(2);
}

function calcularTMB() {
    let idade = Number(document.getElementById("idade").value);
    let peso = Number(document.getElementById("pesoTMB").value);
    let altura = Number(document.getElementById("alturaTMB").value);
    let sexo = document.getElementById("sexo").value;

    if (idade <= 0 || peso <= 0 || altura <= 0) {
        alert("Digite valores válidos!");
        return;
    }

    let tmb;

    if (sexo == "masculino") {
        tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else {
        tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
    }

    document.getElementById("resultadoTMB").innerHTML =
        "Sua TMB é: " + tmb.toFixed(2) + " calorias por dia";
}

function calcularSalario() {
    let salario = Number(document.getElementById("salario").value);
    let desconto = Number(document.getElementById("desconto").value);

    if (salario <= 0 || desconto < 0 || desconto > salario) {
        alert("Digite valores válidos!");
        return;
    }

    let liquido = salario - desconto;

    document.getElementById("resultadoSalario").innerHTML =
        "Salário líquido: R$ " + liquido.toFixed(2);
}
