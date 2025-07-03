document.getElementById("form-agendamento").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;

  if (!nome || !data || !horario) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Simulando horários disponíveis
  const horariosDisponiveis = ["10:00", "11:00", "14:00", "15:00", "16:00"];

  if (!horariosDisponiveis.includes(horario)) {
    alert("Este horário não está mais disponível.");
    return;
  }

  // Aqui você pode depois integrar com API Google ou backend
  alert(`Agendamento confirmado para ${nome} no dia ${data} às ${horario}. Entraremos em contato via WhatsApp.`);

  // Resetar formulário
  this.reset();
});
