import ContentMedium from "./enums/ContentMedium";
import ContentCategory from "./enums/ContentCategory";

/**
 * Represents a history entry of a user.
 * They are created by proxer.me when a user watches an anime or reads a manga.
 */
export default class HistoryEntry {

    private _data: {
        id: number,
        contentId: number,
        name: string,
        language: string,
        viewedEpisode: number,
        medium: ContentMedium,
        category: ContentCategory
    }

    constructor(data: { [key: string]: any }) {
        this._data = {
            id: data.id,
            contentId: data.eid,
            name: data.name,
            language: data.language,
            viewedEpisode: data.episode,
            medium: data.medium,
            category: data.kat
        }
    }
    
    /**
     * The unique ID of this history element.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * The unique ID of the content.
     */
    get contentId(): number {
        return this._data.contentId
    }

    /**
     * The name of the content.
     */
    get name(): string {
        return this._data.name
    }

    /**
     * The language of the content.
     */
    get language(): string {
        return this._data.language
    }

    /**
     * The episode / chapter that the user watched / read.
     */
    get viewedEpisode(): number {
        return this._data.viewedEpisode
    }

    /**
     * The medium of this content.
     */
    get medium(): ContentMedium {
        return this._data.medium
    }

    /**
     * The category of this history element (Anime / Manga).
     */
    get category(): ContentCategory {
        return this._data.category
    }

}