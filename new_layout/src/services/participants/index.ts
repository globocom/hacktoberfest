import Service from "./Participants.service";

export interface ParticipantProps {
  githubID: string,
  githubUser: string,
  avatar: string,
  total_pull_requests: number,
  approved: boolean
}

export default {
  Service
}