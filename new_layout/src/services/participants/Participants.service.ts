import doRequest from '../api.service'
import { ParticipantProps } from './index'

export default class ParticipantsService {

    private static _participantsService: ParticipantsService

    static getInstance(): ParticipantsService{
        if(!this._participantsService){
            this._participantsService = new ParticipantsService()
        }
        
        return this._participantsService
    }

    async GetParticipants(edition: number): Promise<Array<ParticipantProps>>{
        const res = await doRequest({ path: `/status?edition=${edition}`, method: "GET" })
        return res.data
    }
}
