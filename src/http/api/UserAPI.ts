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
import ContentCategory from "../../models/enums/ContentCategory";
import UserContentListSort from "../../models/enums/UserContentListSort";
import ContentStateFilter from "../../models/enums/ContentStateFilter";
import UserAbout from "../../models/UserAbout";
import Friend from "../../models/Friend";
import resolveUser from "../utils/resolve-user";
import { Payload } from "./definitions/Payload";

/**
 * The ID, username or class instance of any type of user.
 */
type UserResolvable = number | string | Friend | LoggedInUser | User

type OptionalUserLoginParams = {
    /**
     * The key of the 2FA, if the user has this service activated.
     */
    secretKey?: string
}

type OptionalUserTopTenParams = {
    /**
     * The category of the content. `anime` or `manga`.
     */
    category?: ContentCategory,
    /**
     * Should hentai be included?
     */
    includeHentai?: boolean
}

type OptionalUserListParams = {
    /**
     * The category of the content. `anime` or `manga`.
     */
    category?: ContentCategory,
    /**
     * Results are returned in pages.
     * With this index, the page number can be defined.
     */
    pageIndex?: number,
    /**
     * The amount of results per page.
     */
    resultsPerPage?: number,
    /**
     * Only shows results that include this text as a substring **anywhere** in their name.
     */
    searchText?: string,
    /**
     * Only shows results that **begin** with this text in their name.
     */
    searchStartText?: string,
    /**
     * Should hentai be included?
     */
    includeHentai?: boolean,
    /**
     * Define the way the results should be sorted.
     */
    sortType?: UserContentListSort,
    /**
     * Filters results based on the watch status of the user.
     */
    filter?: ContentStateFilter
}

type OptionalUserLatestCommentsParams = {
    /**
     * The category of the content. `anime` or `manga`.
     */
    category?: ContentCategory,
    /**
     * Results are returned in pages.
     * With this index, the page number can be defined.
     */
    pageIndex?: number,
    /**
     * The amount of results per page.
     */
    resultsPerPage?: number,
    /**
     * The minimum character length of a comment.
     */
    minCommentLength?: number,
    /**
     * Filters the comments based on the specified states.
     */
    contentState?: number[],
    /**
     * Filters the comments by the type of data they in include.
     * Comments can have a rating, a comment text or both.
     */
    showCommentsWith?: CommentDetail
}

type OptionalUserHistoryParams = {
    /**
     * Results are returned in pages.
     * With this index, the page number can be defined.
     */
    pageIndex?: number,
    /**
     * The amount of results per page.
     */
    resultsPerPage?: number
}

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
     * Get info about the specified user.
     * If the identifier is not set, the currently logged in user is used.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Getting info via id
     * const user = await proxerAPI.user.info(815930)
     * 
     * // Getting info via username
     * const user = await proxerAPI.user.info('Bakuenjin96')
     * 
     * // Getting info of logged in user
     * const user = await proxerAPI.user.info()
     * @param user The ID, username or class instance of any type of user.
     */
    async info(user?: UserResolvable) {
        const payload: Payload = {}
        if (typeof user !== 'undefined') {
            const identifier = resolveUser(user)
            if (typeof identifier === 'number')
                payload.uid = identifier
            else payload.username = identifier
        }

        const url = [this._data.apiClass, UserApiFunction.UserInfo]
        const data = await this._data.httpClient.post(url, payload)
        return new User(data)
    }

    /**
     * Loads the top ten list of the specified user.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Getting list via id
     * const topTenList = await proxerAPI.user.topTen(815930)
     * // Apply filters
     * const topTenList = await proxerAPI.user.topTen(815930, {
     *     category: ContentCategory.Anime,
     *     includeHentai: true // ( ͡° ͜ʖ ͡°)
     * })
     * @param user The ID, username or class instance of any type of user.
     */
    async topTen(user: UserResolvable, optionalParams: OptionalUserTopTenParams = {}) {
        const payload: Payload = {
            kat: optionalParams.category,
            isH: optionalParams.includeHentai
        }

        const identifier = resolveUser(user)
        if (typeof identifier === 'number')
            payload.uid = identifier
        else payload.username = identifier

        const url = [this._data.apiClass, UserApiFunction.TopTen]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new TopTenEntry(it))
    }

    /**
     * Loads a filtered entrylist of the specified user.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Using default parameter values
     * const list = await proxerAPI.user.list(815930)
     * 
     * // Applying some filters
     * const list = await proxerAPI.user.list(815930, {
     *     category: ContentCategory.Anime,
     *     searchText: 'Made in Abyss'
     * })
     * @param user The ID, username or class instance of any type of user.
     */
    async list(user: UserResolvable, optionalParams: OptionalUserListParams = {}) {
        const payload: Payload = {
            kat:            optionalParams.category,
            p:              optionalParams.pageIndex,
            limit:          optionalParams.resultsPerPage,
            search:         optionalParams.searchText,
            search_start:   optionalParams.searchStartText,
            isH:            optionalParams.includeHentai,
            sort:           optionalParams.sortType,
            filter:         optionalParams.filter
        }
        
        const identifier = resolveUser(user)
        if (typeof identifier === 'number')
            payload.uid = identifier
        else payload.username = identifier

        const url = [this._data.apiClass, UserApiFunction.List]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new UserListEntry(it))
    }

    /**
     * Loads the latest comments of a user.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Using default parameters
     * const comments = await proxerAPI.user.latestComments(815930)
     * 
     * // Applying some filters
     * const comments = await proxerAPI.user.latestComments(815930, {
     *     pageIndex: 2,
     *     resultsPerPage: 42,
     *     minCommentLength: 1337
     * })
     * @param user The ID, username or class instance of any type of user.
     */
    async latestComments(user: UserResolvable, optionalParams: OptionalUserLatestCommentsParams = {}) {
        const payload: Payload = {
            kat:    optionalParams.category,
            p:      optionalParams.pageIndex,
            limit:  optionalParams.resultsPerPage,
            length: optionalParams.minCommentLength,
            has:    optionalParams.showCommentsWith
        }

        if (optionalParams.contentState)
            payload.state = optionalParams.contentState.join('+')
        
        const identifier = resolveUser(user)
        if (typeof identifier === 'number')
            payload.uid = identifier
        else payload.username = identifier

        const url = [this._data.apiClass, UserApiFunction.LatestComments]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new Comment(it))
    }

    /**
     * Loads the history of a user.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Using default parameters
     * const history = await proxerAPI.user.history(815930)
     * 
     * // Applying some additional parameters
     * const history = await proxerAPI.user.history(815930, {
     *     pageIndex: 2,
     *     resultsPerPage: 50
     * })
     * @param user The ID, username or class instance of any type of user.
     */
    async history(user: UserResolvable, optionalParams: OptionalUserHistoryParams = {}) {
        const payload: Payload = {
            p:      optionalParams.pageIndex,
            limit:  optionalParams.resultsPerPage
        }

        const identifier = resolveUser(user)
        if (typeof identifier === 'number')
            payload.uid = identifier
        else payload.username = identifier

        const url = [this._data.apiClass, UserApiFunction.History]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new HistoryEntry(it))
    }

    /**
     * Loads 'about' information of the specified user.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Using id
     * const about = await proxerAPI.user.about(815930)
     * // Using username
     * const about = await proxerAPI.user.about('Bakuenjin96')
     * @param user The ID, username or class instance of any type of user.
     */
    async about(user: UserResolvable) {
        const payload: Payload = {}

        const identifier = resolveUser(user)
        if (typeof identifier === 'number')
            payload.uid = identifier
        else payload.username = identifier

        const url = [this._data.apiClass, UserApiFunction.About]
        const data = await this._data.httpClient.get(url, payload)
        return new UserAbout(data)
    }

    /**
     * Loads the users friendlist.
     * @example
     * const proxerAPI = new ProxerAPI()
     * // Using id
     * const about = await proxerAPI.user.friends(815930)
     * // Using username
     * const about = await proxerAPI.user.friends('Bakuenjin96')
     * @param user The ID, username or class instance of any type of user.
     */
    async friends(user: UserResolvable) {
        const payload: Payload = {}

        const identifier = resolveUser(user)
        if (typeof identifier === 'number')
            payload.uid = identifier
        else payload.username = identifier

        const url = [this._data.apiClass, UserApiFunction.Friends]
        const data: any[] = await this._data.httpClient.get(url, payload)
        return data.map(it => new Friend(it))
    }

    /**
     * Requests an authorization for the specified user via link.
     * @example
     * const proxerAPI = new ProxerAPI()
     * const authUrl = await proxerAPI.user.requestAuth(
     *     815930, // The id of the user
     *     'RANDOM_100_CHARS_LONG_CODE',
     *     'YOUR_APP_NAME'
     * )
     * @param user The ID, username or class instance of any type of user.
     * @param code A random 100 char long string. Needs to be unique per user.
     * @param appName The name of the app. Should be clearly.
     */
    async requestAuth(user: UserResolvable, code: string, appName: string) {
        const payload: Payload = {
            code: code,
            name: appName
        }

        const identifier = resolveUser(user)
        if (typeof identifier === 'number')
            payload.uid = identifier
        else payload.username = identifier
        
        const url = [this._data.apiClass, UserApiFunction.RequestAuth]
        await this._data.httpClient.post(url, payload)
        return `proxer.me/auth?code=${code}&name=${appName}`
    }

    /**
     * Checks if the authorization was successful.
     * Throws an error when unsuccessful.
     * @example
     * const proxerAPI = new ProxerAPI()
     * const user = await proxerAPI.user.checkAuth(
     *     'SAME_RANDOM_100_CHARS_LONG_CODE_AS_USED_FOR_REQUEST',
     *     'YOUR_APP_NAME'
     * )
     * @param code A random 100 char long string. Needs to be the same as the one used for `requestAuth()`
     * @param appName The name of the app. Should be clearly.
     */
    async checkAuth(code: string, appName: string) {
        const payload: Payload = {
            code: code,
            name: appName
        }

        const url = [this._data.apiClass, UserApiFunction.CheckAuth]
        const data = await this._data.httpClient.post(url, payload)
        return new LoggedInUser(data)
    }
}