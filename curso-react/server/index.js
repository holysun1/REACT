import express from "express";
import cors from "cors";
import { askAI } from "./chat.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message, tasks } = req.body;

  const resposta = await askAI(
    `Pergunta do usuário: ${message}. 
     Aqui estão as tarefas atuais: ${JSON.stringify(tasks)}`
  );

  res.json({ reply: resposta });
});
const PORT = 3001;
app.listen(PORT, () =>
  console.log("Servidor rodando em http://localhost:" + PORT)
);
