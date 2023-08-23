
const registrar = document.querySelector("#registrar");
const ingresar = document.querySelector("#ingresar")
let usuario = document.getElementById("usuario");
let contrasena = document.querySelector("#contrasena");


function comprobarRegistro(usuario){
    if(localStorage.length > 0){
       for(let i=0;i<localStorage.length; i++){
           if(localStorage.key(i)===usuario){
             // console.log(localStorage.key(i))
                console.log("ya se encuentra registrado")
                return false;
            }else{
                // console.log("se puede registrar")
                return true;      
            } 
       }
    }else{
        console.log("salio por aca")
        return true;

    }
}
function comprobarContrasena(usuario,contrasena){
        if(localStorage.getItem(usuario)=== contrasena){
            return true;
        }
        else{
            return false;
        }
}


registrar.addEventListener("click",(e)=>{
    e.preventDefault();

    if(comprobarRegistro(usuario.value)){
        localStorage.setItem(usuario.value,contrasena.value);
        console.log(`Usuario: ${usuario.value} contra: ${localStorage.getItem(usuario.value)}`)
        alert("exito, usuario registrado");
        mostrarRegistro();
    }
});
ingresar.addEventListener("click",(e)=>{
    e.preventDefault();
    if(localStorage.length>0){
        if(comprobarContrasena(usuario.value,contrasena.value)){
            alert("Bienvenido")
        }else{
            alert("usuario o contreña INCORRECTOS verifique los datos")
        }
    }else{
        alert("verifique los datos");
    }
});
function mostrarRegistro(){
    const listaUsuarios = document.querySelector("#listaUsuarios");
    let auxListaUsuarios;
    if(localStorage.length>0){
        for(let i=0; i<localStorage.length;i++){
            auxListaUsuarios += `<tr>
                                    <td>${localStorage.key(i)}</td>
                                    <td>${localStorage.getItem(localStorage.key(i))}</td>
                                 </tr>`
        }
        listaUsuarios.innerHTML = auxListaUsuarios;
    }else{
        listaUsuarios.innerHTML = `<tr>
        <td class="text-center" colspan="2">NO HAY USUARIOS REGISTRADOS</td>
    </tr>`;
    }
 }
 mostrarRegistro();
    