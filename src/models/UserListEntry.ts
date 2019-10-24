import ContentMedium from "./enums/ContentMedium";
import UserListEntryComment from "./UserListEntryComment";

/**
 * Represents an entry of a users list.
 */
export default class UserListEntry {

    private _data: {
        id: number,
        name: string,
        episodeCount: number,
        medium: ContentMedium,
        entryState: string,
        rating: number,
        comment: UserListEntryComment
    }

    constructor(data: { [key: string]: any } ) {
        this._data = {
            id: data.id,
            name: data.name,
            episodeCount: data.count,
            medium: data.medium,
            entryState: data.estate,
            rating: data.rating,
            comment: new UserListEntryComment(data.cid, data.comment, data.state, data.episode, data.data, data.timestamp)
        }
    }

    /**
     * The unique ID of this entrys content.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * The name of this entry.
     */
    get name(): string {
        return this._data.name
    }

    /**
     * the amount of episodes / chapters this entry has.
     */
    get episodeCount(): number {
        return this._data.episodeCount
    }

    /**
     * The medium of this entry.
     */
    get medium(): ContentMedium {
        return this._data.medium
    }

    /**
     * The state of this entry.
     */
    get entryState(): string {
        return this._data.entryState
    }

    /**
     * The rating the user placed.
     */
    get rating(): number {
        return this._data.rating
    }

    /**
     * The comment the user wrote for this entry.
     */
    get comment(): UserListEntryComment {
        return this._data.comment
    }

}