import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartModal({ isOpen, onClose }) {
  // 🔥 Puxamos o clearCart do nosso contexto aqui
  const {
    cart,
    removeFromCart,
    clearCart,
    totalItems,
    addToCart,
    decreaseQuantity,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform bg-slate-800 border-l border-slate-700 p-6 shadow-2xl flex flex-col h-full text-slate-100">
          {/* Cabeçalho do Modal */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-700">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              🛒 Seu Carrinho
            </h2>

            <div className="flex items-center gap-2">
              {/* 🔥 Botão Limpar Carrinho: só aparece se tiver mais de 0 itens */}
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 px-2.5 py-1.5 rounded-lg border border-rose-500/20 transition-all cursor-pointer mr-2"
                >
                  Limpar tudo
                </button>
              )}

              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-700 hover:text-slate-100 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Lista de Itens (Scrollable) */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-slate-400 gap-2">
                <p>Seu carrinho está vazio.</p>
                <button
                  onClick={onClose}
                  className="text-sm text-emerald-400 hover:underline"
                >
                  Continuar comprando
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-slate-900/50 p-3 rounded-xl border border-slate-700/50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover bg-slate-900"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-200 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.category}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-300">
                        Qtd: <b className="text-emerald-400">{item.quantity}</b>
                      </span>
                      <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              // Diminui 1 se for maior que 1. Se o seu context tiver 'updateQuantity', use-o.
                              // Caso contrário, você pode passar a lógica ou uma função dedicada do seu Context:
                              decreaseQuantity(item.id);
                            } else {
                              // Se for 1 e o usuário clicar em menos, remove do carrinho
                              removeFromCart(item.id);
                            }
                          }}
                          className="px-2 py-0.5 text-xs font-bold text-slate-400 hover:bg-slate-700 hover:text-slate-200 transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <button
                          onClick={() => {
                            // Geralmente o seu addToCart já adiciona +1 se o item já existir no carrinho
                            addToCart(item);
                          }}
                          className="px-2 py-0.5 text-xs font-bold text-slate-400 hover:bg-slate-700 hover:text-slate-200 transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer text-sm"
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Rodapé */}
          {cart.length > 0 && (
            <div className="border-t border-slate-700 pt-4 bg-slate-800">
              <div className="flex justify-between text-base font-medium text-slate-100 mb-4">
                <span>Total de itens</span>
                <span className="text-xl font-black text-emerald-400">
                  {totalItems}
                  {totalItems === 1 ? " item" : " itens"}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-400 mb-4">
                Frete e taxas serão calculados no checkout.
              </p>
              <Link
                to="/checkout"
                onClick={onClose} // Fecha o modal ao navegar
                className="w-full block rounded-xl bg-emerald-500 py-3 text-center text-sm font-bold text-slate-950 shadow-xs hover:bg-emerald-400 active:scale-98 transition-all cursor-pointer"
              >
                Avançar
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
