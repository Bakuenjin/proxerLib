import Avatar from "./Avatar";

/**
 * Represents basic user information, that belongs to a comment.
 */
export default class CommentUserInfo {

    private _data: {
        id: number,
        name: string,
        avatar: Avatar
    }

    constructor(id: number, name: string, avatar: string) {
        this._data = {
            id: id,
            name: name,
            avatar: new Avatar(avatar)
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

}