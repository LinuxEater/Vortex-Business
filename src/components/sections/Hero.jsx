export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-hero font-semibold text-primary leading-tight">
            Engenharia de software
            <br />
            para soluções digitais
            <span className="text-tech"> robustas</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl">
            A Vertex Labs desenvolve sistemas de alta performance, focados em
            escalabilidade, segurança e resultados reais para empresas.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="text-primary font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-tech after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* Bloco visual */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="w-full h-[420px] rounded-2xl bg-white shadow-2xl border border-slate-100 flex items-center justify-center">
            <span className="text-slate-400 text-sm">
              Vídeo institucional
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
