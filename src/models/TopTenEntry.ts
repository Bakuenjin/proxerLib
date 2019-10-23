import ContentCategory from "./enums/ContentCategory"
import ContentMedium from "./enums/ContentMedium"

export default class TopTenEntry {

    private _data: {
        id: number,
        name: string,
        category: ContentCategory,
        medium: ContentMedium
    }

    constructor(data: { [key: string]: any }) {
        this._data = {
            id: data.eid,
            name: data.name,
            category: data.kat,
            medium: data.medium
        }
    }

    /**
     * The unique ID of this content element.
     */
    get id(): number {
        return this._data.id
    }

    /**
     * The name of this elements content.
     */
    get name(): string {
        return this._data.name
    }

    /**
     * The category of this top ten element.
     */
    get category(): ContentCategory {
        return this._data.category
    }

    /**
     * The medium of this top ten element.
     */
    get medium(): ContentMedium {
        return this._data.medium
    }

}