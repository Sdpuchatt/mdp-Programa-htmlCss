document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "usuario" && password === "contraseña") {
        document.getElementById("message").textContent = "Inicio de sesión exitoso!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
        document.getElementById("message").style.color = "red";
    }
});