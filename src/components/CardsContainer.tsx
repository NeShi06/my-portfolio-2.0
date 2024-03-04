import { For } from 'solid-js'

import { useProjectsContext } from '@/context/ProjectsContext'

import ProjectCard from '@/components/ProjectCard'

function CardsContainer() {
  const store = useProjectsContext()

  return (
    <article class="group/projectcard mt-8 space-y-20">
      <For each={
        store.currentFilter === 'all' 
          ? store.projects
          : store.projects.filter(type => (
            type.type === store.currentFilter
          ))
        }
      >
        { (project) => <ProjectCard project={project} />}
      </For>
    </article>
  )
}

export default CardsContainer
