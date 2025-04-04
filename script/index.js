//declaracion de variables
document.getElementById("calcular").addEventListener("click", function() {
    let genero = document.getElementById("genero").value;
    let peso = document.getElementById("peso").value;
    let resultado = document.getElementById("container");
    let validacion=document.getElementById("validacion");
    

//validacion de datos
    if (peso === "" || isNaN(peso) || peso <= 0) {
        validacion.textContent = "Por favor, ingrese un peso válido.";
        validacion.style.color = "red";
        return;}

    if (genero !== "masculino" && genero !== "femenino") {
        validacion.textContent = "Por favor, seleccione un género válido.";
        validacion.style.color = "red";
        return;}
//respuesta segun el genero y peso
    if( genero === "masculino") {
        if(peso >= 90) {
            resultado.innerHTML= '<img src="./img/lol.jpg" alt="Gif de error" height="600px"><button class="btn" onclick="location.reload()">Volver</button>';
        } else if (peso <= 50) {
            resultado.innerHTML = `<img src="./img/larry.webp" alt="Gif de error" height="600px">  <button class="btn" onclick="location.reload()">Volver</button>`;
        } else{
            resultado.innerHTML= '<img src="./img/sigma.jpg" alt="sigmaboy"height="600px"><h1>Andas piola bro</h1> <button class="btn" onclick="location.reload()">Volver</button>'
        }
    } else{
        if (peso >= 61) {
            resultado.innerHTML= `<img src="./img/image.png" alt="Gif de error" height="600px" ><Audio src="./music/si tu.mp3" autoplay></Audio>  <button class="btn" onclick="location.reload()">Volver</button>`;
        
        } else{
            resultado.innerHTML= '<h1>Andas piola baby</h1> <button class="btn" onclick="location.reload()">Volver</button>';
    }
}})