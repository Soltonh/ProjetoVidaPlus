import express from 'express';

const app = express();
app.use(express.json());

// ↓ “Controller” e rota de health
app.get('/ConsultasMarcadas/264', async (req, res) => {
  try {
    const dados = [
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Especialidade: "Cardiologia",
          Médico: "Dr. Fulano",
          Tipo: "Consulta",
          Status: "Cancelada",
        },
        {
          Data: "02/05/2025",
          Horário: "14:00",
          Especialidade: "Cardiologia",
          Médico: "Dr. Fulano",
          Tipo: "Consulta",
          Status: "Concluída",
        },
        {
          Data: "15/05/2025",
          Horário: "15:30",
          Especialidade: "Dermatologia",
          Médico: "Dra. Beltrana",
          Tipo: "Retorno",
          Status: "Concluída",
        },
        {
          Data: "28/05/2025",
          Horário: "14:00",
          Especialidade: "Cardiologia",
          Médico: "Dr. Fulano",
          Tipo: "Consulta",
          Status: "Concluída",
        },
        {
          Data: "18/07/2025",
          Horário: "15:30",
          Especialidade: "Dermatologia",
          Médico: "Dra. Beltrana",
          Tipo: "Retorno",
          Status: "Cancelada",
        },
        {
          Data: "10/08/2025",
          Horário: "15:30",
          Especialidade: "Dermatologia",
          Médico: "Dra. Beltrana",
          Tipo: "Retorno",
          Status: "Concluída",
        },
      ];

    res.json({ dados });
  } catch (err) {
    res.json(err)
  }
});

// ↓ Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
