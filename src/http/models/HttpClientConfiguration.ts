/**
 * Configuration for the http client.
 */
export default class HttpClientConfiguration {

    /**
     * The key used to communicate with the API.
     */
    public apiKey: string | undefined

    /**
     * The token used to cast calls with a logged in user.
     */
    public userToken: string | undefined

    /**
     * Overrides the default user agent.
     * This should be used to identify the app you are building.
     */
    public customUserAgent: string | undefined

    /**
     * Should the API be called in a test mode?
     */
    public testMode: boolean | undefined

    constructor(apiKey?: string, userToken?: string, testMode?: boolean, customUserAgent?: string) {
        this.apiKey = apiKey
        this.userToken = userToken
        this.testMode = testMode
        this.customUserAgent = customUserAgent
    }

}