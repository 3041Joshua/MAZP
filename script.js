const memories = [
  {
    img: "fotos/recuerdo-1.png",
    label: "RECUERDO 01",
    title: "Hay momentos que se quedan.",
    text: "Esta foto me recuerda que hubo una etapa en la que simplemente estar juntos hacía que cualquier lugar se sintiera especial. Tal vez para alguien más sea solamente una foto, pero para mí guarda una pequeña parte de una historia que nunca voy a considerar insignificante."
  },
  {
    img: "fotos/recuerdo-2.png",
    label: "RECUERDO 02",
    title: "Una sonrisa también puede ser un recuerdo.",
    text: "Me gusta recordar las cosas sencillas: una mirada, una risa, una foto tomada sin pensar demasiado. Son precisamente esos pequeños momentos los que terminan siendo los que más se extrañan cuando pasa el tiempo."
  },
  {
    img: "fotos/recuerdo-3.png",
    label: "RECUERDO 03",
    title: "Éramos nosotros contra el mundo.",
    text: "Hubo una época en la que no necesitábamos grandes planes. Bastaba con estar cerca, abrazarnos y disfrutar el momento. No importa cuánto cambie la vida: esa sensación de haber encontrado un lugar seguro en alguien siempre será algo que voy a valorar."
  },
  {
    img: "fotos/recuerdo-4.png",
    label: "RECUERDO 04",
    title: "Lo bonito también merece quedarse.",
    text: "No quiero mirar atrás solamente pensando en lo que salió mal. Quiero recordar que también hubo cariño, complicidad y momentos en los que fuimos muy felices. Esta foto representa precisamente eso: una parte bonita de nuestra historia."
  },
  {
    img: "fotos/recuerdo-5.png",
    label: "RECUERDO 05",
    title: "Algunas imágenes dicen demasiado.",
    text: "Hay recuerdos que no necesitan explicación. Esta es una de esas fotos. Puede que el tiempo haya cambiado muchas cosas, pero no puede borrar lo que significaron para mí ciertos momentos que vivimos juntos."
  },
  {
    img: "fotos/recuerdo-6.png",
    label: "RECUERDO 06",
    title: "Gracias por haber sido parte de mi historia.",
    text: "Quizá esta sea la parte que más quería decirte: gracias. Gracias por todo lo vivido, por lo aprendido y por los recuerdos que todavía me hacen sonreír. Te quiero mucho y, aunque nuestras vidas tomen caminos diferentes, siempre voy a desear que te vaya increíble."
  }
];

let index = 0;
const photo = document.getElementById("memoryPhoto");
const label = document.getElementById("memoryLabel");
const title = document.getElementById("memoryTitle");
const text = document.getElementById("memoryText");
const number = document.getElementById("currentNumber");
const wrap = document.querySelector(".photo-wrap");
const dots = document.getElementById("dots");

memories.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.addEventListener("click", () => showMemory(i));
  dots.appendChild(dot);
});

function showMemory(newIndex) {
  index = (newIndex + memories.length) % memories.length;
  const item = memories[index];

  wrap.classList.add("changing");
  setTimeout(() => {
    photo.src = item.img;
    label.textContent = item.label;
    title.textContent = item.title;
    text.textContent = item.text;
    number.textContent = String(index + 1).padStart(2, "0");

    [...dots.children].forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    wrap.classList.remove("changing");
  }, 220);
}

document.getElementById("prevBtn").addEventListener("click", () => showMemory(index - 1));
document.getElementById("nextBtn").addEventListener("click", () => showMemory(index + 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showMemory(index - 1);
  if (e.key === "ArrowRight") showMemory(index + 1);
});

// Pequeño efecto de aparición al entrar a secciones
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {threshold: .08});

document.querySelectorAll(".paper, .memory-card, .final-message").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(25px)";
  el.style.transition = "opacity .9s ease, transform .9s ease";
  observer.observe(el);
});
