// Simulação de horários disponíveis para teste (ideal vir do back-end)
const horariosDisponiveis = {
  "2025-07-03": ["10:00", "11:00", "14:00", "16:00"],
  "2025-07-04": ["09:00", "13:00", "15:00"]
};

document.getElementById("data").addEventListener("change", function() {
  const dataSelecionada = this.value;
  const horarioSelect = document.getElementById("horario");

  // Limpa os horários
  horarioSelect.innerHTML = '<option value="">Selecione um horário</option>';

  if (horariosDisponiveis[dataSelecionada]) {
    horariosDisponiveis[dataSelecionada].forEach(horario => {
      const option = document.createElement("option");
      option.value = horario;
      option.textContent = horario;
      horarioSelect.appendChild(option);
    });
  } else {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Sem horários disponíveis";
    horarioSelect.appendChild(option);
  }
});
