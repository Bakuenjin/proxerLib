/**
 * Represents the comment data of a UserListEntry.
 */
export default class UserListEntryComment {

    private _data: {
        id: number,
        text: string,
        state: string,
        episode: number,
        details: string,
        timestamp: Date
    }

    constructor(id: number, text: string, state: string, episode: number, details: string, timestamp: number) {
        this._data = {
            id: id,
            text: text,
            state: state,
            episode: episode,
            details: details,
            timestamp: new Date(timestamp * 1000)
        }
    }

    /**
     * The unqiue ID of this comment.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * The actual comment text.
     */
    get text(): string {
        return this._data.text
    }

    /**
     * The state of this comment.
     */
    get state(): string {
        return this._data.state
    }

    /**
     * The amount of watched episodes of the content this comment belongs to.
     */
    get episode(): number {
        return this._data.episode
    }

    /**
     * Additional comment data.
     */
    get details(): string {
        return this._data.details
    }

    /**
     * The timestamp of this comment.
     */
    get timestamp(): Date {
        return this._data.timestamp
    }
}