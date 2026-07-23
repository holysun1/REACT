import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();

  // Estado para capturar o nome do cliente na simulação de orçamento
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  // 📝 INSIRA O WHATSAPP COMERCIAL DO SEU CLIENTE AQUI (Apenas números, com DDD e código do país)
  const WHATSAPP_NUMBER = "+5515991940984";

  const handleSendBudget = (e) => {
    e.preventDefault();

    if (!customerName) {
      alert("Por favor, preencha seu nome para o orçamento.");
      return;
    }

    // 1. Cria o cabeçalho da mensagem
    let textMessage = `Olá! Gostaria de solicitar um orçamento:\n\n`;
    textMessage += `👤 *Cliente:* ${customerName}\n`;
    if (customerPhone) textMessage += `📞 *Contato:* ${customerPhone}\n`;
    textMessage += `──────────────────────\n\n`;
    textMessage += `📦 *Itens solicitados:*\n`;

    // 2. Varre o carrinho e monta a lista de produtos
    cart.forEach((item) => {
      textMessage += `• ${item.name} (x${item.quantity})\n`;
    });

    textMessage += `\n──────────────────────\n`;
    textMessage += `Aguardo o retorno com as condições de fornecimento e prazo!`;

    // 3. Codifica o texto para o formato aceito em URLs
    const formattedUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(textMessage)}`;

    // 4. Abre o WhatsApp em uma nova aba
    window.open(formattedUrl, "_blank");

    // 5. Opcional: Limpa o carrinho local após a solicitação ser enviada
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-slate-400 gap-4">
        <p className="text-lg">Sua lista de orçamento está vazia. 🛍️</p>
        <Link to="/" className="text-emerald-400 hover:underline">
          Voltar para a vitrine
        </Link>
      </div>
    );
  }

  return (
    <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-8">
        Solicitar Orçamento
      </h1>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
        {/* Formulário de Identificação do Usuário */}
        <form
          onSubmit={handleSendBudget}
          className="lg:col-span-7 bg-slate-100 p-6 rounded-2xl border border-slate-800 space-y-6"
        >
          <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-700 pb-2">
            📋 Seus Dados
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-900 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ex: João Silva"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-sm text-slate-100 focus:border-amber-400 focus:outline-hidden transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-slate-800 mb-1">
                Telefone / WhatsApp (Opcional)
              </label>
              <input
                type="text"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Ex: (11) 99999-9999"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-sm text-slate-100 focus:border-amber-400 focus:outline-hidden transition-colors"
              />
            </div>
          </div>
          <p className="text-xs text-slate-900 font-bold">
            * Seus dados serão enviados junto com a lista de itens para que a
            empresa possa entrar em contato com você.
          </p>
        </form>

        {/* Resumo do Orçamento (Direita) */}
        <div className="lg:col-span-5 bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col h-fit sticky top-24">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2 mb-4">
            📦 Lista de Itens
          </h2>

          <div className="divide-y divide-slate-700 overflow-y-auto max-h-60 mb-4 pr-1">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between py-3 text-sm">
                <span className="text-slate-300 truncate max-w">
                  {item.name}
                </span>
                <span className="font-medium text-slate-200">
                  {item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 pt-4 flex justify-between font-bold text-base text-slate-100 mb-6">
            <span>Quantidade Total</span>
            <span className="text-xl text-slate-100">{cartTotal}</span>
          </div>

          {/* Botão de Envio */}
          <button
            onClick={handleSendBudget}
            className="w-full rounded-xl bg-amber-400 py-3.5 text-center font-bold text-black hover:bg-blue-800 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>💬</span> Enviar via WhatsApp
          </button>
        </div>
      </div>
    </main>
  );
}
