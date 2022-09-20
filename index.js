
/*Calcular costo + impuestos*/

function Calculoviaje (precio,pasajeros){
    precio = document.getElementById('precio').value;
    pasajeros = document.getElementById('pasajeros').value;
    let costo= (precio * pasajeros) * 1.21;
    alert ("El costo Neto es: $"+ costo);
}

let boton= document.getElementById('boton');
boton.addEventListener('click',()=> Calculoviaje ());


