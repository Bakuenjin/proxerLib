export default class UserPoints {

    private _data: {
        upload: number,
        anime: number,
        manga: number,
        info: number,
        forum: number,
        misc: number,
        totalPoints: number
    }

    constructor(upload: number, anime: number, manga: number, info: number, forum: number, misc: number) {
        this._data = {
            upload, info, anime, manga, forum, misc,
            totalPoints: upload + info + anime + manga + forum + misc
        }
    }

    /**
     * The points the user has for uploading / linking content.
     */
    get upload(): number {
        return this._data.upload
    }

    /**
     * The points the user has for watching anime.
     */
    get anime(): number {
        return this._data.anime
    }

    /**
     * The points the user has for reading manga.
     */
    get manga(): number {
        return this._data.manga
    }

    /**
     * The points the user has for basic information.
     */
    get info(): number {
        return this._data.info
    }

    /**
     * The points the user has for his forum activity.
     */
    get forum(): number {
        return this._data.forum
    }

    /**
     * The points the user has for doing miscellaneous things.
     */
    get misc(): number {
        return this._data.misc
    }

    /**
     * The total points the user has accumulated.
     */
    totalPoints(): number {
        return this._data.totalPoints
    }

}