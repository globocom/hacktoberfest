import Service from "./Participants.service";

export interface Participant {
  githubID: string,
  githubUser: string,
  avatar: string,
  total_pull_requests: number,
  approved: boolean
}

export interface ParticipantsProps {
  edition: number,
  participants: Array<Participant>
}

export default {
  Service
}