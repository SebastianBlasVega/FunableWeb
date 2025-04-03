document.getElementById("calcular").addEventListener("click", function() {
    let peso = document.getElementById("peso").value;
    let resultado = document.getElementById("resultado");
    
    if (peso === "" || isNaN(peso) || peso <= 0) {
        resultado.textContent = "Por favor, ingrese un peso válido.";
        resultado.style.color = "red";
    } else if (peso > 70) {
        resultado.innerHTML = `<img src="./img/image.png" alt="Gif de error">`;
        resultado.style.color = "red";
    }
        else{
        resultado.textContent = `Andas piola baby`;
        resultado.style.color = "green";
    }
});