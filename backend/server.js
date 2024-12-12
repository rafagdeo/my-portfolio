const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Para carregar variáveis do .env

const app = express();
const PORT = process.env.PORT || 3001;  // Usando a porta do .env ou 3001 como padrão

app.use(cors());
app.use(express.json());

// Endpoint para enviar e-mail
app.post('/send-email', (req, res) => {
  const { email, subject, message } = req.body;
  
  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
  }

  console.log(`E-mail enviado para: ${email}, Assunto: ${subject}`);
  res.status(200).json({ message: 'E-mail enviado com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
