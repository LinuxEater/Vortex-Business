export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Marca */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white dark:text-gray-200">
            Vertex Labs
          </h3>
          <p className="text-sm font-medium text-blue-400 dark:text-blue-300">
            Inovação. Performance. Resultados.
          </p>
          <p className="text-sm leading-relaxed text-slate-400 dark:text-gray-400 max-w-sm">
            Engenharia de software aplicada ao desenvolvimento de soluções
            digitais robustas, escaláveis e orientadas a performance.
          </p>
          <div className="flex gap-4 items-center mt-4">
            <a href="#" aria-label="WhatsApp" className="text-slate-400 hover:text-white transition">
              <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white transition">
              <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-white transition">
              <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Telegram" className="text-slate-400 hover:text-white transition">
              <img src="https://cdn.simpleicons.org/telegram/26A5E4" alt="Telegram" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white dark:text-gray-200 uppercase tracking-wide">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-white dark:hover:text-gray-100 transition">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-white dark:hover:text-gray-100 transition">Projetos</a></li>
            <li><a href="#stack" className="hover:text-white dark:hover:text-gray-100 transition">Stack</a></li>
            <li><a href="#contato" className="hover:text-white dark:hover:text-gray-100 transition">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white dark:text-gray-200 uppercase tracking-wide">
            Contato
          </h4>
          <p className="text-sm text-slate-400 dark:text-gray-400">
            contato@vertexlabs.com
          </p>
          <p className="text-sm text-slate-400 dark:text-gray-400">
            Atendimento profissional e direto
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-500 dark:text-gray-500 flex justify-between items-center">
          <span>© {new Date().getFullYear()} Vertex Labs</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  )
}
