import CardSkill from "./partials/CardSkill";

import imgHtml from '../../images/icons/html.svg'
import imgCss from '../../images/icons/css.svg'
import imgJs from '../../images/icons/js.svg'
import imgVue from '../../images/icons/vue.svg'
import imgNuxt from '../../images/icons/nuxt.svg'
import imgSass from '../../images/icons/sass.svg'
function Skills () {
  const skills = [
    {
      name: 'HTML',
      rating: 'Expert',
      img: imgHtml
    },
    {
      name: 'CSS',
      rating: 'Intermediate',
      img: imgCss
    },
    {
      name: 'Javascript',
      rating: 'Expert',
      img: imgJs
    },
    {
      name: 'Vue',
      rating: 'Expert',
      img: imgVue
    },
    {
      name: 'Nuxt',
      rating: 'Intermediate',
      img: imgNuxt
    },
    {
      name: 'SASS',
      rating: 'Expert',
      img: imgSass
    }
  ]
  return (
    <div className="container py-6">
      <div className="flex flex-col">
        <h3 className="text-3xl mb-5 font-bold">
          My Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            skills.map((skill) => {
              return <CardSkill skill={skill} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
