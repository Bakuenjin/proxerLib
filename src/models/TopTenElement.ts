import ContentCategory from "./enums/ContentCategory"
import ContentMedium from "./enums/ContentMedium"

export default class TopTenElement {

    private _id: number
    private _name: string
    private _category: ContentCategory
    private _medium: ContentMedium

    constructor(data: { [key: string]: any }) {
        this._id = data.eid
        this._name = data.name
        this._category = data.kat
        this._medium = data.medium
    }

}