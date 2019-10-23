/**
 * Represents the about section of a user.
 */
export default class UserAbout {

    private _data: {
        website: string,
        occupation: string,
        interests: string,
        city: string,
        country: string,
        text: string,
        facebook: string,
        youtube: string,
        chatango: string,
        twitter: string,
        skype: string,
        deviantArt: string,
        birthday: Date | undefined,
        gender: UserGender,
        relationshipStatus: UserRelationshipStatus
    }

    constructor(data: { [key: string]: any }) {

        const parsedDate: number  = Date.parse(data.info_birthday)

        this._data = {
            website: data.info_website,
            occupation: data.info_occupation,
            interests: data.info_interests,
            city: data.info_city,
            country: data.info_country,
            text: data.info_about,
            facebook: data.info_facebook,
            youtube: data.info_youtube,
            chatango: data.info_chatango,
            twitter: data.info_twitter,
            skype: data.info_skype,
            deviantArt: data.info_deviantart,
            birthday: isNaN(parsedDate) ? undefined : new Date(parsedDate),
            gender: data.info_gender,
            relationshipStatus: data.data.info_relationshipstatus
        }
    }

    /**
     * The users website.
     * Could be a link, or maybe just a name.
     */
    get website(): string {
        return this._data.website
    }

    /**
     * The users occupation.
     */
    get occupation(): string {
        return this._data.occupation
    }

    /**
     * The users interests.
     */
    get interests(): string {
        return this._data.interests
    }

    /**
     * The city of the user.
     */
    get city(): string {
        return this._data.city
    }

    /**
     * The country of the user.
     */
    get country(): string {
        return this._data.country
    }

    /**
     * The about text of the user.
     * Can contain HTML tags.
     */
    get text(): string {
        return this._data.text
    }

    /**
     * Facebook information.
     * Could be a link, or maybe just a name.
     */
    get facebook(): string {
        return this._data.facebook
    }

    /**
     * YouTube information.
     * Could be a link, or maybe just a name.
     */
    get youtube(): string {
        return this._data.youtube
    }

    /**
     * Chatango information.
     * Could be a link, or maybe just a name.
     */
    get chatango(): string {
        return this._data.chatango
    }

    /**
     * Twitter information.
     * Could be a link, or maybe just a name.
     */
    get twitter(): string {
        return this._data.twitter
    }

    /**
     * Skype information.
     * Could be a link, or maybe just a name.
     */
    get skype(): string {
        return this._data.skype
    }

    /**
     * Deviant Art information.
     * Could be a link, or maybe just a name.
     */
    get deviantArt(): string {
        return this._data.deviantArt
    }

    /**
     * The birthday of the user.
     */
    get birthday(): Date | undefined {
        return this._data.birthday
    }

    /**
     * The gender of the user.
     */
    get gender(): UserGender {
        return this._data.gender
    }

    /**
     * The relationship status of the user.
     */
    get relationshipStatus(): UserRelationshipStatus {
        return this._data.relationshipStatus
    }
}