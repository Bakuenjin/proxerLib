import Avatar from "./Avatar"

/**
 * Represents a logged in proxer.me user.
 */
export default class LoggedInUser {

    private _data: {
        id: number,
        avatar: Avatar,
        isTeam: boolean,
        isDonator: boolean,
        token: string
    }

    constructor(data: { [key: string]: any }) {
        this._data = {
            id: data.uid,
            avatar: new Avatar(data.avatar),
            isTeam: data.isTeam,
            isDonator: data.isDonator,
            token: data.token
        }
    }

    /**
     * The unique ID of the logged in user.
     */
    get id(): number {
        return this._data.id
    }
    
    /**
     * The avatar of the logged in user.
     */
    get avatar(): Avatar {
        return this._data.avatar
    }

    /**
     * Is the user a team member?
     */
    get isTeam(): boolean {
        return this._data.isTeam
    }

    /**
     * Is the user a donator?
     */
    get isDonator(): boolean {
        return this._data.isDonator
    }

    /**
     * The unique token for communicating with the server as the logged in user.
     */
    get token(): string {
        return this._data.token
    }

}