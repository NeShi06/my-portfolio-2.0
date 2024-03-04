/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type ProjectTypes = 'all' | 'front-end' | 'back-end' | 'full-stack'

interface KnowledgeData {
  title: string
  color: string
}

interface Project {
  title: string
  body: string
  links: {
    Front: {
      link: string
    }
    Back?: {
      link: string
    }
    Github?: {
      link: string
    }
  };
  img: string
  altImg: string
  tags: KnowledgeData[]
  type: ProjectTypes
}

interface ProjectsProps {
  projects: Project[]
  selectedTab: Project[]
  currentFilter: ProjectTypes
}

interface ProjectState extends ProjectsProps {
  setSelectedTab: (content: Project[]) => void
  setCurrentFilter: (newType: string) => void
}