import { createContext, useContext } from 'solid-js'
import { useProjectsStore } from '@/store/ProjectsStore'

const ProjectsContext = createContext<ReturnType<typeof useProjectsStore>>()

export default function ProjectsContextProvider(props: any) {
  const myProjects = useProjectsStore({ currentProjects: props.currentProjects })

  return (
    <ProjectsContext.Provider value={myProjects}>
      {props.children}
    </ProjectsContext.Provider>
  )
}

export const useProjectsContext = () => {
  const contextContent = useContext(ProjectsContext)
  if (!contextContent) throw new Error('Missing ProjectsContext.Provider in the tree')
  return contextContent
}



