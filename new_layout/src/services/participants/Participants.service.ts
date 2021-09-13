import doRequest from '../api.service'
import { ParticipantsProps } from './index'

export default class ParticipantsService {

    private static _participantsService: ParticipantsService

    static getInstance(): ParticipantsService{
        if(!this._participantsService){
            this._participantsService = new ParticipantsService()
        }
        
        return this._participantsService
    }

    async GetParticipants(): Promise<Array<ParticipantsProps>>{
        const res = await doRequest({ path: "/status", method: "GET" })
        return res.data
    }
}
