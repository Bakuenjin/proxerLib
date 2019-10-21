import BaseAPI from "./BaseAPI";
import HttpClient from "../models/HttpClient";
import ProxerApiClass from "./enums/ProxerApiClass";
import UserApiFunction from "./enums/UserApiFunction";
import LoggedInUser from "../../models/LoggedInUser";
import { Payload } from "./definitions/Payload";
import User from "../../models/User";
import ContentCategory from "../../models/enums/ContentCategory";

export default class UserAPI extends BaseAPI {

    constructor(httpClient: HttpClient) {
        super(httpClient, ProxerApiClass.User)
    }

    /**
     * Logs the user in.
     * @param username - The name of the user.
     * @param password - The password of the user.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Logging in with username and password
     * const user = await proxerAPI.user.login(
     *    'USERNAME', 
     *    'PASSWORD'
     * )
     * 
     * // Logging in with 2FA authentification
     * const user = await proxerAPI.user.login(
     *    'USERNAME',
     *    'PASSWORD',
     *    { secretKey: 'YOUR_2FA_KEY' }
     * )
     */
    async login(username: string, password: string, optionalParams: { secretKey?: string } = {}) {
        const payload: Payload = {
            username,
            password
        }
        if (optionalParams.secretKey)
            payload.secretkey = optionalParams.secretKey
        
        const data = await this._data.httpClient.post([this._data.apiClass, UserApiFunction.Login], payload)
        return new LoggedInUser(data)
    }

    /**
     * Logs the current user off.
     * 
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Awaiting the logout
     * await proxerAPI.user.logout()
     * // Removing the token from the http client.
     * proxerAPI.deleteUserToken()
     */
    async logout() {
        await this._data.httpClient.post([this._data.apiClass, UserApiFunction.Logout])
    }

    /**
     * Get info about the user specified by ID or name. If neither is specified, 
     * the info of the currently logged in user is retrieved. When both are specified, only the ID is used.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Getting info via userId
     * const user = await proxerAPI.user.userInfo({
     *     userId: 815930
     * })
     * 
     * // Getting info via username
     * const user = await proxerAPI.user.userInfo({
     *     username: 'Bakuenjin96'
     * })
     * 
     * // Getting info of logged in user
     * const user = await proxerAPI.user.userInfo()
     * 
     * // Specifying both params
     * const user = await proxerAPI.user.userInfo({
     *     userId: 815930,
     *     username: 'Bakuenjin96' // gets ignored
     * })
     */
    async userInfo(optionalParams: { userId?: number, username?: string } = {}) {
        const payload: Payload = {}
        if (optionalParams.userId)
            payload.uid = optionalParams.userId
        if (optionalParams.username)
            payload.username = optionalParams.username
        
        const data = await this._data.httpClient.post([this._data.apiClass, UserApiFunction.UserInfo], payload)
        return new User(data)
    }

    async topTen(optionalParams: { userId?: number, username?: string, category?: ContentCategory, includeHentai?: boolean } = {}) {
        const payload: Payload = {}
        if (optionalParams.userId)
            payload.uid = optionalParams.userId
        if (optionalParams.username)
            payload.username = optionalParams.username
        if (optionalParams.category)
            payload.kat = optionalParams.category
        if (optionalParams.includeHentai)
            payload.isH = optionalParams.includeHentai

        const data = await this._data.httpClient.get([this._data.apiClass, UserApiFunction.TopTen], payload)

    }
}