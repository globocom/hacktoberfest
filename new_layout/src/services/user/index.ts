import Service from "./User.service";

interface Achievements {
    opened: boolean,
    merged: boolean,
    firsts: boolean,
    completed: boolean
}

export interface Progress {
    opened: number,
    merged: number,
    achievements: Achievements
}

interface Hacktoberfest {
  [year: string]: Progress
}

export interface UserProps {
    id: string,
    name: string,
    email: string,
    avatarURL: string,
    githubUser: string,
    githubID: string,
    city: string,
    postalCode: string,
    state: string,
    address: string,
    shirtSize: string,
    shirtColor: string,
    hacktoberfest?: Hacktoberfest
}


export default {
    Service
}