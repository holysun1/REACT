import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askAI(userMessage) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "Você é a assistente técnica do sistema. Ajude o usuário com clareza e objetividade.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (err) {
    console.error("ERRO OpenAI (chat.js):", err);
    return "Erro ao conversar com a IA.";
  }
}
