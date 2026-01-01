import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900 dark:text-gray-100">
        Projeto não encontrado
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 py-28">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 font-medium"
        >
          ← Voltar
        </Link>

        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-gray-100">
            {project.title}
          </h1>

          <p className="text-slate-600 dark:text-gray-300 max-w-3xl">
            {project.longDescription}
          </p>
        </header>

        {project.objective && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-gray-100 mb-2">
              Objetivo
            </h2>
            <p className="text-slate-600 dark:text-gray-300 max-w-3xl">
              {project.objective}
            </p>
          </section>
        )}

        {project.github_url && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-gray-100 mb-2">
              Documentação
            </h2>
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Ver no GitHub
            </a>
          </section>
        )}

        {project.video_url && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-gray-100 mb-4">
              Vídeo / Demonstração
            </h2>
            <div className="relative aspect-video w-full rounded-lg shadow-md dark:shadow-lg overflow-hidden">
              <iframe
                src={project.video_url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </section>
        )}

        {project.gallery_images && project.gallery_images.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-gray-100 mb-4">
              Galeria de Imagens
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery_images.map((image, index) => (
                <div key={index} className="aspect-video w-full rounded-lg shadow-md dark:shadow-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-gray-100 mb-4">
            Stack utilizada
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
