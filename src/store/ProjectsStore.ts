import { createWithStore } from 'solid-zustand'

export const useProjectsStore = ({ currentProjects }: { currentProjects: Project[] }) => {
  const store = createWithStore<ProjectState>(set => ({
    projects: currentProjects,
    selectedTab: currentProjects,
    currentFilter: 'front-end',
    setSelectedTab: (content: Project[]) => set({ selectedTab: content }),
    setCurrentFilter: (newType: string) => set({ currentFilter: newType as ProjectTypes })
  }))

  return store(state => ({
    projects: state.projects,
    selectedTab: state.selectedTab,
    currentFilter: state.currentFilter,
    setSelectedTab: state.setSelectedTab,
    setCurrentFilter: state.setCurrentFilter
  }))
}