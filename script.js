// JS mínimo para demo (podés reemplazarlo por tu lógica real)
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("btn-whatsapp").addEventListener("click", (e) => {
  e.preventDefault();

  // Placeholder: reemplazá por tu número y mensaje
  const phone = "5511999999999"; // DDI 55 + número
  const msg = encodeURIComponent("Hola! Quiero cotizar un transfer. Origen, destino, fecha y horario:");
  const url = `https://wa.me/${phone}?text=${msg}`;

  window.open(url, "_blank", "noopener,noreferrer");
});
