// Archivo script.js

const programasContainer = document.getElementById("programas-container");

for (let i = 1; i <= 30; i++) {
    const programaDiv = document.createElement("div");
    programaDiv.classList.add("programa");

    const programaTitle = document.createElement("h3");
    programaTitle.textContent = `Programa ${i}: Nombre del Programa`;

    const programaDescription = document.createElement("p");
    programaDescription.textContent = `Descripción del programa ${i}`;

    const programaAudio = document.createElement("audio");
    const audioSource = document.createElement("source");
    audioSource.src = `ruta_del_programa${i}.mp3`;
    audioSource.type = "audio/mpeg";
    programaAudio.appendChild(audioSource);
    programaAudio.textContent = "Tu navegador no admite el elemento de audio.";

    programaDiv.appendChild(programaTitle);
    programaDiv.appendChild(programaDescription);
    programaDiv.appendChild(programaAudio);

    programasContainer.appendChild(programaDiv);
}