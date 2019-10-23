import Avatar from "./Avatar"
import UserStatus from "./UserStatus"
import UserPoints from "./UserPoints"

/**
 * Represents a proxer.me user.
 */
export default class User {

    private _data: {
        id: number,
        name: string,
        avatar: Avatar,
        status: UserStatus,
        points: UserPoints,
        isTeam: boolean,
        isDonator: boolean
    }


    constructor(data: { [key: string]: any }) {
        this._data = {
            id: data.uid,
            name: data.username,
            avatar: new Avatar(data.avatar),
            status: new UserStatus(data.status, data.status_time ? data.status_time : undefined),
            points: new UserPoints(data.points_uploads, data.points_anime, data.points_manga, data.points_info, data.points_forum, data.points_misc),
            isTeam: data.isTeam,
            isDonator: data.isDonator
        }
    }

    /**
     * The unique ID of this user.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * The name of this user.
     */
    get name(): string {
        return this._data.name
    }

    /**
     * The avatar of this user.
     */
    get avatar(): Avatar {
        return this._data.avatar
    }

    /**
     * Information about this users status.
     */
    get status(): UserStatus {
        return this._data.status
    }

    /**
     * The points this user has accumulated.
     */
    get points(): UserPoints {
        return this._data.points
    }

    /**
     * Is this user a team member?
     */
    get isTeam(): boolean {
        return this._data.isTeam
    }

    /**
     * Is this user a donator?
     */
    get isDonator(): boolean {
        return this._data.isDonator
    }
}