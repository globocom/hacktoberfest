import doRequest from "../api.service"
import { ProjectProps } from "./index"

export default class ProjectsService {
  private static _projectsService: ProjectsService

  static getInstance(): ProjectsService {
    if (!this._projectsService) {
      this._projectsService = new ProjectsService()
    }

    return this._projectsService
  }

  async GetProjects(): Promise<Array<ProjectProps>> {
    const res = await doRequest({ path: "/projects", method: "GET" })
    return res.data
  }
}
