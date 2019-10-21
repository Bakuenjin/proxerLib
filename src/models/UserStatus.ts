/**
 * Represents the status of a proxer.me user.
 */
export default class UserStatus {

    private _data: {
        text: string,
        timestamp: Date | null
    }

    constructor(text: string, timestamp?: number) {
        this._data = {
            text: text,
            timestamp: timestamp ? new Date(timestamp) : null
        }
    }

    /**
     * The status text.
     */
    get text(): string {
        return this._data.text
    }

    /**
     * The timestamp of the latest status change.
     */
    get timestamp(): Date | null {
        return this._data.timestamp
    }
}