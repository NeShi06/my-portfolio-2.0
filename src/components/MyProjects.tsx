import ProjectsContextProvider from '@/context/ProjectsContext'

import CardsContainer from '@/components/CardsContainer'
import FilterBtn from '@/components/FilterBtn'

function MyProjects ({ projects }: { projects: Project[] }) {
  return (
    <ProjectsContextProvider currentProjects={projects}>
      <FilterBtn />
      <CardsContainer />
    </ProjectsContextProvider>
  )
}

export default MyProjects