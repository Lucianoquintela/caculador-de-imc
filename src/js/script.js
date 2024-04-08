function verImc() {
    const valorPeso = parseFloat(document.getElementById("peso").value);
    const valorAltura = parseFloat(document.getElementById("altura").value);
    const resultImc = valorPeso / (valorAltura * valorAltura);

    console.log(resultImc.toFixed(2));

    document.getElementById("resultado").innerHTML = resultImc.toFixed(2);

    //toFixed(2) limita o número de casas decimais para duas

    const sexoEscolhido = document.querySelector('input[name="sexo"]:checked').value;

    if (sexoEscolhido === "masculino" && resultImc < 20) {
        document.getElementById("exibirClassificacao").innerHTML = "Abaixo do peso"
    } else if (sexoEscolhido === "masculino" && resultImc >= 20 && resultImc <= 24.9) {
        document.getElementById("exibirClassificacao").innerHTML = "Normal";
    } else if (sexoEscolhido === "masculino" && resultImc >= 25 && resultImc <= 29.9) {
        document.getElementById("exibirClassificacao").innerHTML = "Obesidade leve"
    } else if (sexoEscolhido === "masculino" && resultImc >= 30 && resultImc <= 39.9) {
        document.getElementById("exibirClassificacao").innerHTML = "Obesidade moderada"
    } else if (sexoEscolhido === "masculino" && resultImc > 40) {
        document.getElementById("exibirClassificacao").innerHTML = "Obesidade mórbida"
    } else if (sexoEscolhido === "feminino" && resultImc < 19) {
        document.getElementById("exibirClassificacao").innerHTML = "Abaixo do peso"
    } else if (sexoEscolhido === "feminino" && resultImc >= 19 && resultImc <= 23.9) {
        document.getElementById("exibirClassificacao").innerHTML = "Normal"
    } else if (sexoEscolhido === "feminino" && resultImc >= 24 && resultImc <= 28.9) {
        document.getElementById("exibirClassificacao").innerHTML = "Obesidade leve"
    } else if (sexoEscolhido === "feminino" && resultImc >= 29 && resultImc <= 38.9) {
        document.getElementById("exibirClassificacao").innerHTML = "Obesidade moderada"
    } else if (sexoEscolhido === "feminino" && resultImc > 39) {
        document.getElementById("exibirClassificacao").innerHTML = "Obesidade mórbida"
    } else {
        alert("Opss... Você preencheu tudo direitinho?")
    }
}
