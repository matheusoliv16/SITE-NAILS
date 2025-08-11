import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button } from "./styles";

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
    <Form id="form-agendamento">
      <Input type="text" placeholder="Seu nome" required />
      <Input type="tel" placeholder="Seu WhatsApp" required />
      <Select required>
        <option value="">Selecione um serviço</option>
        <option value="Alongamento em Acrílico">Alongamento em Acrílico</option>
        <option value="Esmaltação em Gel">Esmaltação em Gel</option>
        <option value="Manutenção">Manutenção</option>
        <option value="Blindagem em Acrílico">Blindagem em Acrílico</option>
      </Select>
      <Input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      <Select required>
        <option value="">Selecione um horário</option>
        {horarios.length > 0
          ? horarios.map((h) => <option key={h} value={h}>{h}</option>)
          : <option value="">Sem horários disponíveis</option>}
      </Select>
      <Button type="submit">Agendar</Button>
    </Form>
  );
};