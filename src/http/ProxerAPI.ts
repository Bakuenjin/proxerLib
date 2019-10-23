import ProxerHttpClient from "./models/ProxerHttpClient";
import HttpClientConfiguration from "./models/HttpClientConfiguration";
import HttpClient from "./models/HttpClient";
import UserAPI from "./api/UserAPI";

type ApiSettings = {
    /**
     * The key that authorizes this app to communicate with the proxer API.
     */ 
    apiKey?: string
    /**
     * A token to communicate with the proxer API as a user.
     */
    userToken?: string
    /**
     * In test mode, no API key is required, but the responses are all predefined.
     */
    testMode?: boolean
    /**
     * It is recommended to define a custom user agent for your app to better identify it.
     */
    customUserAgent?: string
    /**
     * For testing purposes, a custom http client can be specified.
     * It should implement the `HttpClient` interface (when using typescript).
     */
    customHttpClient?: HttpClient
}

export default class ProxerAPI {
    
    private _data: {
        httpClient: HttpClient,
        user: UserAPI
    }

    constructor(apiSettings: ApiSettings = {}) {
        let httpClient: HttpClient
        if (apiSettings.customHttpClient) {
            httpClient = apiSettings.customHttpClient
        }
        else {
            const config = new HttpClientConfiguration(
                apiSettings.apiKey, 
                apiSettings.userToken, 
                apiSettings.testMode, 
                apiSettings.customUserAgent
            )
            httpClient = new ProxerHttpClient(config)
        }
        this._data = {
            httpClient: httpClient,
            user: new UserAPI(httpClient)
        }
    }

    get httpClient(): HttpClient {
        return this._data.httpClient
    }

    get user(): UserAPI {
        return this._data.user
    }

    /**
     * Sets the user token to the specified token.
     */
    setUserToken(userToken: string): void {
        if (this.httpClient instanceof ProxerHttpClient)
            this.httpClient.config.userToken = userToken
    }

    /**
     * Deletes the token.
     * This should be done after a logout from a user.
     */
    deleteUserToken(): void {
        if (this.httpClient instanceof ProxerHttpClient)
            this.httpClient.config.userToken = undefined
    }

}