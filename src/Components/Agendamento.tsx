// src/components/Agendamento.tsx
import React, { useState, useEffect } from "react";

export const Agendamento: React.FC = () => {
  const horariosDisponiveis: Record<string, string[]> = {
    "2025-07-03": ["10:00", "11:00", "14:00", "16:00"],
    "2025-07-04": ["09:00", "13:00", "15:00"],
  };

  const [data, setData] = useState("");
  const [horarios, setHorarios] = useState<string[]>([]);

  useEffect(() => {
    if (horariosDisponiveis[data]) {
      setHorarios(horariosDisponiveis[data]);
    } else {
      setHorarios([]);
    }
  }, [data]);

  return (
    <form id="form-agendamento" className="section" style={{ textAlign: "center" }}>
      <input type="text" placeholder="Seu nome" required />
      <input type="tel" placeholder="Seu WhatsApp" required />
      <select required>
        <option value="">Selecione um serviço</option>
        <option value="Alongamento em Acrílico">Alongamento em Acrílico</option>
        <option value="Esmaltação em Gel">Esmaltação em Gel</option>
        <option value="Manutenção">Manutenção</option>
        <option value="Blindagem em Acrílico">Blindagem em Acrílico</option>
      </select>
      <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      <select required>
        <option value="">Selecione um horário</option>
        {horarios.length > 0
          ? horarios.map((h) => <option key={h} value={h}>{h}</option>)
          : <option value="">Sem horários disponíveis</option>}
      </select>
      <button type="submit">Agendar</button>
    </form>
  );
};
