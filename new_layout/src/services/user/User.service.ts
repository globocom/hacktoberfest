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
            postalCode: res.data?.postalCode,
            state: res.data?.state,
            address: res.data?.address,
            shirtSize: res.data?.shirtSize,
            shirtColor: res.data?.shirtColor,
            hacktoberfest: res.data?.hacktoberfest,
            editions: res.data?.editions
        }
    }

    async UpdateUser(data: any){
        await doRequest({path: "/subscribe",  sendCookies: true, method: "POST", body: data})
    }

    async UpdateUserEmail(data: any){
      await doRequest({path: "/subscribeEmail",  sendCookies: true, method: "POST", body: data})
  }

}
