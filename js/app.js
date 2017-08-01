// Initialize Firebase
var config = {
    apiKey: "AIzaSyBqBjh6njsVlBTxGt3eQ7BHxYlyu7b410Y",
    authDomain: "super-proyecto-f960b.firebaseapp.com",
    databaseURL: "https://super-proyecto-f960b.firebaseio.com",
    projectId: "super-proyecto-f960b",
    storageBucket: "super-proyecto-f960b.appspot.com",
    messagingSenderId: "980289145619"
};
firebase.initializeApp(config);
//inicializamos nuestra app con la configuracion de este objeto

var objetobd = {
    usuarios: []
};

var formulario = document.getElementById("crear-usuario");
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    objetobd.usuarios.push({
       name: nombre,
        mail: correo,
        password: password
    });
    
    guardarDatos(objetobd);
});

function guardarDatos(usuario){
    database.ref("/").set(objetobd);
}

function mostrarUsuarios(usuarios){
    document.getElementById("usuarios").innerHTML= "";    usuarios.forEach(function(usuario){
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var p = document.createElement("p");
        
        h3.textContent = usuario.name;
        p.innerHTML = "<strong>Email:</strong>" + usuario.mail;
        
        div.appendChild(h3);
        div.appendChild(p);
        document.getElementById("usuarios").appendChild(div);
    });
}

// Get a reference to the database service
//Guardar datos que yo cree usando el metodo set
  var database = firebase.database();
    
//Leer datos es el método on y escuchar es el método value
database.ref("/usuarios").on("value", function(snapshot){
    var usuarios=snapshot.val();
    objetobd.usuarios = usuarios;
    mostrarUsuarios(usuarios);
});
