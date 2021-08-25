import Service from "./Hacktoberfest.service";


interface EditionMetadata {
    shirtColors: Array<string>
}

export interface HacktoberfestEditionProps {
    year: number,
    metadata: EditionMetadata
}

export default {
    Service
}