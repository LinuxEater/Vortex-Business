import useReveal from '../../hooks/useReveal'


export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="sobre"
      ref={ref}
      className={`py-28 bg-white dark:bg-slate-800 reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-gray-100">
            Sobre a Vertex Labs
          </h2>

          <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
            A Vertex Labs é uma empresa de tecnologia especializada no
            desenvolvimento de soluções digitais modernas, seguras e escaláveis.
          </p>

          <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
            Atuamos com foco em engenharia de software, arquitetura sólida e alta
            performance, atendendo empresas que exigem confiabilidade técnica.
          </p>

          <div className="space-y-4 pt-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-gray-100">
              Nosso Objetivo
            </h3>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              A Vertex Labs nasceu com a missão de transformar desafios tecnológicos em soluções inovadoras e de alto impacto. Nosso foco é impulsionar o sucesso de nossos clientes, entregando produtos de software robustos, escaláveis e que superem as expectativas do mercado. Combinamos expertise técnica com uma abordagem estratégica para garantir que cada projeto não apenas atenda, mas também crie novas oportunidades.
            </p>
          </div>

          <a
            href="#contato"
            className="inline-flex text-blue-600 dark:text-blue-400 font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-cyan-400 dark:after:bg-blue-400 after:scale-x-0 after:origin-left after:transition hover:after:scale-x-100"
          >
            Fale conosco
          </a>
        </div>

        <div className="w-full h-[360px] rounded-2xl bg-slate-100 dark:bg-slate-700 border dark:border-slate-600 flex items-center justify-center text-slate-400 dark:text-gray-400">
          Vídeo institucional
        </div>
      </div>
    </section>
  )
}
