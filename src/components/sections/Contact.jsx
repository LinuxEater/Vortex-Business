import useReveal from '../../hooks/useReveal'


export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      id="contato"
      className={`py-28 bg-gradient-to-b from-white dark:from-slate-900 to-blue-50 dark:to-slate-800 reveal ${
        visible ? 'reveal-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="rounded-3xl bg-blue-50 dark:bg-slate-700 p-16 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Sua Visão, Nossa Expertise: Transformando Ideias em Sucesso.
            </h2>
            <p className="text-slate-700 dark:text-gray-300 max-w-xl">
              Engenharia de software de ponta para projetos que exigem excelência, escala e resultados impactantes. Pronto para inovar?
            </p>
          </div>

          <a
            href="mailto:contato@vertexlabs.com"
            className="px-10 py-4 rounded-lg bg-primary text-white font-medium hover:scale-105 transition"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  )
}
