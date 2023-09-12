function conteo()
{
    
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let nombre = (document.getElementById("nombre").value);

    if(isNaN(cantidad) || nombre == "")
    {
        alert("Por favor, Llena todos los campos.");
        return;
   }
   let resultadoElement = document.getElementById("name");
    resultadoElement.innerHTML = "Hola " + nombre + ", tu retiro ha sido realizado y has retirado: $" + cantidad;

    let cien = 0
    let diez = 0
    let cincuenta = 0
    let veinte = 0
    let cinco = 0
    let uno = 0

    let Elementcien = document.getElementById("cien");
    let Elementcincuenta = document.getElementById("cincuenta");
    let Elementveinte = document.getElementById("veinte");
    let Elementdiez = document.getElementById("diez");
    let Elementcinco = document.getElementById("cinco");
    let Elementuno = document.getElementById("uno");

    if (cantidad >= 100)
    {
        cien = parseInt(cantidad / 100)
        cantidad = cantidad -(cien * 100)
    }
    if (cantidad >= 50)
    {
        cincuenta = parseInt(cantidad / 50)
        cantidad = cantidad -(cincuenta * 50)
    }
    if (cantidad >= 20)
    {
        veinte = parseInt(cantidad / 20)
        cantidad = cantidad -(veinte * 20)
    }
    if (cantidad >= 10)
    {
        diez = parseInt(cantidad / 10)
        cantidad = cantidad -(diez * 10)
    }
    if (cantidad >= 5)
    {
        cinco = parseInt(cantidad / 5)
        cantidad = cantidad -(cinco * 5)
    }
    if (cantidad >= 1)
    {
        uno = parseInt(cantidad / 1)
        cantidad = cantidad -(uno * 1)
    }

   
    Elementcien.innerHTML = cien  
    Elementcincuenta.innerHTML = cincuenta  
    Elementveinte.innerHTML = veinte
    Elementdiez.innerHTML = diez   
    Elementcinco.innerHTML = cinco
    Elementuno.innerHTML = uno
}
document.getElementById("retiroBtn").addEventListener("click", conteo);



