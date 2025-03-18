
let amigos = []; //Variable que almacenará los amigos


function agregarAmigo() { //Funcion para agregar
    
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); //Mensaje de error si no se ingresa un nombre
        return;
    }   
    amigos.push(nombre);
    actualizarLista();    
    input.value = "";
}


function actualizarLista() { //Función para mostrar la lista
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
       for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}


function sortearAmigo() { //Funcion para sortear
        if (amigos.length === 0) { //Validación de lista no vacia
        alert("Debe agregar al menos un amigo para sortear.");
        return;
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Generar un numero aleatorio que sirve como indice de la lista de amigos
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo secreto: ${amigoSorteado}</li>`;
}