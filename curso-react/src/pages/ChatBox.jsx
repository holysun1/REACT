import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function ChatBox() {
  const { tasks } = useContext(TaskContext);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch("http://localhost:3001/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, tasks }),
    });

    const data = await res.json();
    const botMessage = { role: "assistant", content: data.reply };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        💬
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "30px",
            width: "320px",
            height: "420px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#4f46e5",
              color: "white",
              padding: "12px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Assistente IA
          </div>

          {/* Área de mensagens */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.role === "user" ? "right" : "left",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    background: msg.role === "user" ? "#d1d5db" : "#e0e7ff",
                    maxWidth: "80%",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Campo de entrada */}
          <div style={{ display: "flex", borderTop: "1px solid #eee" }}>
            <input
              style={{
                flex: 1,
                border: "none",
                padding: "10px",
                outline: "none",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite uma mensagem..."
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#4f46e5",
                color: "white",
                border: "none",
                padding: "10px 16px",
                cursor: "pointer",
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
