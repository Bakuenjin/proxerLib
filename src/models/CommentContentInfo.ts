import ContentCategory from "./enums/ContentCategory"
import ContentMedium from "./enums/ContentMedium"

/**
 * Represents content information of a comment.
 */
export default class CommentContentInfo {

    private _data: {
        id: number,
        name: string
        progress: number,
        rating: number,
        category: ContentCategory,
        medium: ContentMedium
    }

    constructor(id: number, name: string, progress: number, rating: number, category: ContentCategory, medium: ContentMedium) {
        this._data = {
            id, name, progress, rating, category, medium
        }
    }

    /**
     * The unique ID of this content.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * The name of this content.
     */
    get name(): string {
        return this._data.name
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

    /**
     * The category of this content.
     */
    get category(): ContentCategory {
        return this._data.category
    }

    /**
     * The medium of this content.
     */
    get medium(): ContentMedium {
        return this._data.medium
    }

}