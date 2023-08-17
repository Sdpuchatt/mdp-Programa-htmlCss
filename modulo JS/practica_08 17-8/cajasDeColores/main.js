function agregarCuadrado(){
    let nombre = document.querySelector("#nombre")
    let fondo = document.querySelector("#fondo")
    let colorLetra = document.querySelector("#colorLetra")
    let tamanoLetra = document.querySelector("#tamanoLetra")

    let cuadrado = document.createElement('div')
    cuadrado.textContent = nombre.value;
    cuadrado.style.backgroundColor = fondo.value;
    cuadrado.style.color = colorLetra.value;
    cuadrado.style.fontSize = tamanoLetra.value+"px";
    // cuadrado.style.width = "100px"
    cuadrado.style.height = `${tamanoLetra.value*2}px`
    cuadrado.style.padding = "10px"
    cuadrado.style.margin = "5px"
    // cuadrado.setAttribute("class","bg-primary")
    let contenedorCaja = document.getElementById("contenedorCaja");
    contenedorCaja.append(cuadrado)
}