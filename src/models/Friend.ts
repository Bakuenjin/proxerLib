import Avatar from "./Avatar";

/**
 * Represents a friend of a user.
 */
export default class Friend {

    private _data: {
        id: number,
        username: string,
        friendsSince: Date,
        description: string,
        avatar: Avatar
    }

    constructor(data: { [key: string]: any }) {
        this._data = {
            id: data.uid,
            username: data.username,
            friendsSince: new Date(data.date * 1000),
            description: data.description,
            avatar: new Avatar(data.avatar)
        }
    }

    /**
     * The id of this user.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * The name of this user.
     */
    get username(): string {
        return this._data.username
    }

    /**
     * The date both users got friends.
     */
    get friendsSince(): Date {
        return this._data.friendsSince
    }

    /**
     * A description of this friend.
     */
    get description(): string {
        return this._data.description
    }

    /**
     * The avatar of this user.
     */
    get avatar(): Avatar {
        return this._data.avatar
    }

}