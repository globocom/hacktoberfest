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

export interface Edition {
  approved: boolean,
	completed: string,
	completedat: string,
	totalMergerequests: number,
	totalMergerequestsMerged: number,
	shirtSize: string,
	shirtColor: string,
}

interface Hacktoberfest {
  [year: string]: Progress
}

interface UserEditions {
  [year: number]: Edition
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
    hacktoberfest?: Hacktoberfest,
    editions?: UserEditions
}


export default {
    Service
}