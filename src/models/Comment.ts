import Avatar from "./Avatar";
import CommentUserInfo from "./CommentUserInfo";
import CommentContentInfo from "./CommentContentInfo";

/**
 * Represents a comment on proxer.me
 */
export default class Comment {

    private _data: {
        id: number,
        user: CommentUserInfo
        content: CommentContentInfo,
        text: string,
        type: string,   // TODO
        state: string,
        details: string,
        rating: number,
        timestamp: Date
    }

    constructor(data: { [key: string]: any }) {
        this._data = {
            id: data.id,
            user: new CommentUserInfo(data.uid, data.username, data.avatar),
            content: new CommentContentInfo(data.tid, data.episode, data.rating),
            text: data.comment,
            type: data.type,
            state: data.state,
            details: data.data,
            rating: data.positive,
            timestamp: new Date(data.timestamp * 1000)
        }
    }

    /**
     * The unique ID of this comment.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * Information about the user that created this comment.
     */
    get userInfo(): CommentUserInfo {
        return this._data.user
    }

    /**
     * Information about the content (anime / manga) of this manga.
     */
    get contentInfo(): CommentContentInfo {
        return this._data.content
    }

    /**
     * The actual comment text.
     */
    get text(): string {
        return this._data.text
    }

    /**
     * The comments type.
     */
    get type(): string {
        return this._data.type
    }

    /**
     * This comments current state.
     */
    get state(): string {
        return this._data.state
    }

    /**
     * Additional comment data.
     */
    get details(): string {
        return this._data.details
    }

    /**
     * The amount of 'likes' this comment got.
     */
    get rating(): number {
        return this._data.rating
    }

    /**
     * The timestamp of the comments latest edit.
     * If no edits were done yet, it is the time when the comment was created.
     */
    get timestamp(): Date {
        return this._data.timestamp
    }

}