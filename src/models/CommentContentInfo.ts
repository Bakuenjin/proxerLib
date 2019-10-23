/**
 * Represents content information of a comment.
 */
export default class CommentContentInfo {

    private _data: {
        id: number,
        progress: number,
        rating: number   
    }

    constructor(id: number, progress: number, rating: number) {
        this._data = {
            id, progress, rating
        }
    }

    /**
     * The unique ID of this content.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * The progress the commenter has on this content.
     */
    get progress(): number {
        return this._data.progress
    }

    /**
     * The rating the comment placed for this content.
     */
    get rating(): number {
        return this._data.rating
    }

}