import doRequest from '../api.service'
import { HacktoberfestEditionProps } from './index'

export default class HacktoberFestService {

    private static _hacktoberfestServiceInstace: HacktoberFestService


    static getInstance(): HacktoberFestService{
        if(!this._hacktoberfestServiceInstace){
            this._hacktoberfestServiceInstace = new HacktoberFestService()
        }
        
        return this._hacktoberfestServiceInstace
    }

    async GetEdition(): Promise<HacktoberfestEditionProps> {
        const res = await doRequest({path: "/edition", method: "GET"})
        return Promise.resolve(res.data)
    }

}
