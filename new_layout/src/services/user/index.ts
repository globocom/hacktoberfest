import Service from "./User.service";

interface Achievements {
    opened: boolean,
    merged: boolean,
    firsts: boolean,
    completed: boolean
}

export interface Participation {
    opened: number,
    merged: number,
    achievements: Achievements
}

interface Progress{
    progress: Participation
}

interface Edition {
    [year: string]: Progress
}

interface Hacktoberfest {
    edition: Edition
}

export interface UserProps {
    id: string,
    name: string,
    email: string,
    avatarURL: string,
    githubUser: string,
    githubID: string,
    city: string,
    postal: string,
    state: string,
    address: string,
    shirtSize: string,
    shirtColor: string,
    hacktoberfest?: Hacktoberfest
}


export default {
    Service
}