const consejos = [
    {
      titulo: "¿Cómo almacenar los medicamentos correctamente?",
      contenido: "Guardalos en un lugar seco y fresco. Evitá la exposición al sol y la humedad para que no pierdan efectividad."
    },
    {
      titulo: "¿Cuáles medicamentos se pueden donar?",
      contenido: "Solo aquellos que estén cerrados, sin vencer y en buen estado. Nada vencido ni manipulado."
    },
    {
      titulo: "¿Qué hacer con medicamentos vencidos?",
      contenido: "Llevalos a puntos de recolección para desecho seguro. No los tires al inodoro ni a la basura común."
    },
    {
      titulo: "¿Puedo donar medicamentos abiertos?",
      contenido: "No, por razones de seguridad e higiene, solo se aceptan medicamentos en su empaque original cerrado."
    },
    {
      titulo: "Consejos para donar con responsabilidad",
      contenido: "Revisá la fecha de vencimiento, el estado del empaque y etiquetá bien los medicamentos antes de entregarlos."
    }
  ];
  
 
  function renderConsejos() {
    const container = document.getElementById("consejos-container");
    consejos.forEach(consejo => {
      const card = document.createElement("div");
      card.className = "card-consejo";
  
      card.innerHTML = `
        <h3>${consejo.titulo}</h3>
        <p>${consejo.contenido}</p>
      `;
  
      container.appendChild(card);
    });
  }
  

  document.addEventListener("DOMContentLoaded", renderConsejos);