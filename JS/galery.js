// Seleccionamos todas las miniaturas
const thumbnails = document.querySelectorAll(".thumbnail img");

// Creamos un contenedor para el modal
const modal = document.createElement("div");
modal.classList.add("modal");
modal.style.display = "none";
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <img src="" alt="Ampliación">
    </div>
`;
document.body.appendChild(modal);

// Seleccionamos elementos del modal
const modalImg = modal.querySelector("img");
const closeBtn = modal.querySelector(".close");

// Función para abrir el modal
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        const imgSrc = thumbnail.src; // Obtenemos la ruta de la imagen
        modalImg.src = imgSrc; // La mostramos en el modal
        modal.style.display = "flex"; // Hacemos visible el modal
    });
});

// Función para cerrar el modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerramos el modal al hacer clic fuera de la imagen
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});