/**
 * Represents the avatar from any proxer.me user.
 */
export default class Avatar {

    private _data: {
        imageId: string
    }

    constructor(imageId: string) {
        this._data = { imageId }
    }

    get imageId(): string {
        return this._data.imageId
    }

    /**
     * The thumbnail of this profile picture.
     */
    get thumbnail(): string {
        return `https://cdn.proxer.me/avatar/tn/${this._data.imageId}`
    }

    /**
     * The full-size profile picture.
     */
    get fullImage(): string {
        return `https://cdn.proxer.me/avatar/${this._data.imageId}`
    }

}