import Marquee from 'react-fast-marquee'
import useReveal from '../../hooks/useReveal'


const techs = [
  { name: 'Next.js', icon: <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="h-10 w-10" /> },
  { name: 'React', icon: <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="h-10 w-10" /> },
  { name: 'TypeScript', icon: <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="h-10 w-10" /> },
  { name: 'JavaScript', icon: <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="h-10 w-10" /> },
  { name: 'Node.js', icon: <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="h-10 w-10" /> },
  { name: 'Express.js', icon: <img src="https://cdn.simpleicons.org/express/000000" alt="Express.js" className="h-10 w-10" /> },
  { name: 'Python', icon: <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="h-10 w-10" /> },
  { name: 'Django', icon: <img src="https://cdn.simpleicons.org/django/092E20" alt="Django" className="h-10 w-10" /> },
  { name: 'PostgreSQL', icon: <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" className="h-10 w-10" /> },
  { name: 'MongoDB', icon: <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" className="h-10 w-10" /> },
  { name: 'Docker', icon: <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="h-10 w-10" /> },
  { name: 'Git', icon: <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" className="h-10 w-10" /> },
  { name: 'Tailwind', icon: <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind" className="h-10 w-10" /> },
  { name: 'Sass', icon: <img src="https://cdn.simpleicons.org/sass/CC6699" alt="Sass" className="h-10 w-10" /> },
  { name: 'Vue.js', icon: <img src="https://cdn.simpleicons.org/vuedotjs/4FC08D" alt="Vue.js" className="h-10 w-10" /> },
  { name: 'AWS', icon: <img src="https://cdn.simpleicons.org/amazonwebservices/232F3E" alt="AWS" className="h-10 w-10" /> },
]

export default function Stack() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="stack"
      ref={ref}
      className={`py-28 bg-slate-50 dark:bg-slate-900 reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-gray-100 mb-4">
            Stack Tecnológica
          </h2>
          <p className="text-slate-600 dark:text-gray-300">
            Tecnologias modernas e consolidadas.
          </p>
        </div>

        <div className="relative w-full py-6">
          <Marquee speed={50} gradient={true} gradientColor={visible ? 'rgb(248, 250, 252)' : 'rgb(30, 41, 59)'}>
            {techs.map((tech, i) => (
              <div
                key={i}
                className="h-24 w-24 shrink-0 flex items-center justify-center rounded-full border dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-gray-200 font-medium mr-8"
              >
                {tech.icon}
              </div>
            ))}
          </Marquee>
        </div>      </div>
    </section>
  )
}
