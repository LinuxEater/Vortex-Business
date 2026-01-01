import useReveal from '../../hooks/useReveal'

const services = [
  {
    title: 'Desenvolvimento Web Customizado',
    description: 'Criação de aplicações web robustas e escaláveis, projetadas para atender às suas necessidades específicas de negócio.',
  },
  {
    title: 'Aplicativos Mobile',
    description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android, proporcionando uma experiência de usuário impecável e performática.',
  },
  {
    title: 'Consultoria em Tecnologia',
    description: 'Orientação estratégica para otimizar suas escolhas tecnológicas, arquitetura de sistemas e processos de desenvolvimento.',
  },
  {
    title: 'Manutenção e Suporte',
    description: 'Garanta a performance, segurança e atualização contínua de seus sistemas com nossos serviços de manutenção e suporte especializado.',
  },
  {
    title: 'Análise de Dados e Business Intelligence',
    description: 'Transforme dados brutos em insights acionáveis para decisões de negócio estratégicas e baseadas em evidências.',
  },
  {
    title: 'Criação de Bots e Chatbots Integrados com IA',
    description: 'Desenvolvimento de bots e chatbots inteligentes, utilizando IA para automação de atendimento, otimização de processos e engajamento do cliente.',
  },
  {
    title: 'Segurança da Informação',
    description: 'Proteja seus ativos digitais, dados sensíveis e infraestrutura com soluções robustas de cibersegurança e conformidade regulatória.',
  },
  {
    title: 'Cloud Computing e DevOps',
    description: 'Otimize sua infraestrutura com soluções flexíveis em nuvem e implemente práticas de DevOps para agilidade, escalabilidade e entrega contínua.',
  },
]

export default function Services() {
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`py-28 bg-white dark:bg-slate-900 reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-gray-100 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluções personalizadas para impulsionar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-200 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}