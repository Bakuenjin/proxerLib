import ProxerHttpClient from "./models/ProxerHttpClient";
import HttpClientConfiguration from "./models/HttpClientConfiguration";
import HttpClient from "./models/HttpClient";
import UserAPI from "./api/UserAPI";

type ApiSettings = { 
    apiKey?: string
    userToken?: string
    testMode?: boolean
    customUserAgent?: string
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