import BaseAPI from "./BaseAPI";
import HttpClient from "../models/HttpClient";
import ProxerApiClass from "./enums/ProxerApiClass";
import UserApiFunction from "./enums/UserApiFunction";
import LoggedInUser from "../../models/LoggedInUser";
import User from "../../models/User";
import TopTenEntry from "../../models/TopTenEntry";
import UserListEntry from "../../models/UserListEntry";
import Comment from "../../models/Comment";
import HistoryEntry from "../../models/HistoryEntry";
import { Payload } from "./definitions/Payload";
import { 
    OptionalUserLoginParams, 
    OptionalUserInfoParams, OptionalUserTopTenParams, 
    OptionalUserListParams, 
    OptionalUserLatestCommentsParams,
    OptionalUserHistoryParams
} from "./definitions/UserParams";

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
    async login(username: string, password: string, optionalParams: OptionalUserLoginParams = {}) {
        const payload: Payload = {
            username: username,
            password: password,
            secretkey: optionalParams.secretKey
        }
        
        const url = [this._data.apiClass, UserApiFunction.Login]
        const data = await this._data.httpClient.post(url, payload)
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
        const url = [this._data.apiClass, UserApiFunction.Logout]
        await this._data.httpClient.post(url)
    }

    /**
     * Get info about the user specified by ID or name. If neither is specified, 
     * the info of the currently logged in user is retrieved. When both are specified, only the ID is used.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Getting info via userId
     * const user = await proxerAPI.user.info({
     *     userId: 815930
     * })
     * 
     * // Getting info via username
     * const user = await proxerAPI.user.info({
     *     username: 'Bakuenjin96'
     * })
     * 
     * // Getting info of logged in user
     * const user = await proxerAPI.user.info()
     * 
     * // Specifying both params
     * const user = await proxerAPI.user.info({
     *     userId: 815930,
     *     username: 'Bakuenjin96' // gets ignored
     * })
     */
    async info(optionalParams: OptionalUserInfoParams = {}) {
        const payload: Payload = {
            uid:        optionalParams.userId,
            username:   optionalParams.username
        }
        
        const url = [this._data.apiClass, UserApiFunction.UserInfo]
        const data = await this._data.httpClient.post(url, payload)
        return new User(data)
    }

    /**
     * Get the top ten list of the specified user.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Getting list via id
     * const topTenList = await proxerAPI.user.topTen({
     *     userId: 815930
     * })
     * // Apply filters
     * const topTenList = await proxerAPI.user.topTen({
     *     userId: 815930,
     *     category: ContentCategory.Anime,
     *     includeHentai: true // ( ͡° ͜ʖ ͡°)
     * })
     */
    async topTen(optionalParams: OptionalUserTopTenParams = {}) {
        const payload: Payload = {
            uid:        optionalParams.userId,
            username:   optionalParams.username,
            kat:        optionalParams.category,
            isH:        optionalParams.includeHentai
        }

        const url = [this._data.apiClass, UserApiFunction.TopTen]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new TopTenEntry(it))
    }

    /**
     * Get a filtered list of a users entries.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Using default parameter values
     * const list = await proxerAPI.user.list({
     *     userId: 815930
     * })
     * 
     * // Applying some filters
     * const list = await proxerAPI.user.list({
     *     userId: 815930,
     *     category: ContentCategory.Anime,
     *     searchText: 'Made in Abyss'
     * })
     */
    async list(optionalParams: OptionalUserListParams) {
        const payload: Payload = {
            uid:            optionalParams.userId,
            username:       optionalParams.username,
            kat:            optionalParams.category,
            p:              optionalParams.pageIndex,
            limit:          optionalParams.resultsPerPage,
            search:         optionalParams.searchText,
            search_start:   optionalParams.searchStartText,
            isH:            optionalParams.includeHentai,
            sort:           optionalParams.sortType,
            filter:         optionalParams.filter
        }
        
        const url = [this._data.apiClass, UserApiFunction.List]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new UserListEntry(it))
    }

    /**
     * Gets the latest comments of a user.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Using default parameters
     * const comments = await proxerAPI.user.latestComments({
     *     userId: 815930
     * })
     * 
     * // Applying some filters
     * const comments = await proxerAPI.user.latestComments({
     *     userId: 815930,
     *     pageIndex: 2,
     *     resultsPerPage: 42,
     *     minCommentLength: 1337
     * })
     */
    async latestComments(optionalParams: OptionalUserLatestCommentsParams) {
        const payload: Payload = {
            uid:        optionalParams.userId,
            username:   optionalParams.username,
            kat:        optionalParams.category,
            p:          optionalParams.pageIndex,
            limit:      optionalParams.resultsPerPage,
            length:     optionalParams.minCommentLength,
            has:        optionalParams.showCommentsWith
        }

        if (optionalParams.contentState)
            payload.state = optionalParams.contentState.join('+')
        
        const url = [this._data.apiClass, UserApiFunction.LatestComments]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new Comment(it))
    }

    async history(optionalParams: OptionalUserHistoryParams) {
        const payload: Payload = {
            uid:        optionalParams.userId,
            username:   optionalParams.username,
            p:          optionalParams.pageIndex,
            limit:      optionalParams.resultsPerPage
        }

        const url = [this._data.apiClass, UserApiFunction.History]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new HistoryEntry(it))
    }
}