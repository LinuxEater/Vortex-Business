import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal'
import { projects } from '../../data/projects'

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="projetos"
      ref={ref}
      className={`py-28 bg-white reveal ${
        visible ? 'reveal-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Projetos
          </h2>
          <p className="text-slate-600">
            Soluções desenvolvidas com foco em engenharia, performance e
            escalabilidade.
          </p>
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {projects.map(project => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group border border-slate-200 rounded-2xl overflow-hidden bg-white transition duration-300 hover:shadow-xl hover:border-blue-700 hover:border-2"
            >
              {/* VÍDEO / PREVIEW */}
              <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                Vídeo demonstrativo
              </div>

              {/* CONTEÚDO */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-blue-600">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* STACK */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}
