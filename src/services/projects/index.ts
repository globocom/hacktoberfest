import Service from "./Projects.service"

export interface ProjectProps {
  id: string
  name: string
  site: string
  repo: string
  isHighlighted: boolean
  imageUrl: ProjectImage
  docs: string
  description: string
  language: string
  stats: ProjectStats
}

interface ProjectImage {
  name: string
  rightsHolder: string
  thumborUrl: string
}

interface ProjectStats {
  repository: ProjectRepository
}
interface ProjectRepository {
  object: { commit: { history: { totalCount: number } } }
  issues: { totalCount: number }
  pullRequests: { totalCount: number }
  stars: { totalCount: number }
}

export default {
  Service,
}
