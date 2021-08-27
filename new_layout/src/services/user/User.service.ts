import doRequest from '../api.service'
import { UserProps } from './index'

export default class UserService {

    private static _userService: UserService

    static getInstance(): UserService{
        if(!this._userService){
            this._userService = new UserService()
        }
        
        return this._userService
    }

    async isLogged(): Promise<boolean> {
        const isLogged = await this.GetUser();
        if(isLogged.id) return true
        return false
    }

    async GetUser(): Promise<UserProps>{
        const res = await doRequest({path: "/user", sendCookies: true, method: "GET"})
        return {
            id: res.data?.id,
            name: res.data?.name,
            email: res.data?.email,
            avatarURL: res.data?.avatarURL,
            githubUser: res.data?.githubUser,
            githubID: res.data?.githubID,
            city: res.data?.city,
            postal: res.data?.postal,
            state: res.data?.state,
            address: res.data?.address,
            shirtSize: res.data?.shirtSize,
            shirtColor: res.data?.shirtColor,
            hacktoberfest: res.data?.hacktoberfest
        }
    }

    async UpdateUser(data: any){
        console.log('Doing Request')
        await doRequest({path: "/update/user",  method: "POST", body: data})
    }

}
