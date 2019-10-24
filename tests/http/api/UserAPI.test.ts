import ProxerAPI from "../../../src/http/ProxerAPI"
import ProxerHttpClient from '../../../src/http/models/ProxerHttpClient'
import HttpClientConfiguration from "../../../src/http/models/HttpClientConfiguration"
import ContentCategory from "../../../src/models/enums/ContentCategory"
import ContentMedium from "../../../src/models/enums/ContentMedium"
import UserGender from "../../../src/models/enums/UserGender"
import UserRelationshipStatus from "../../../src/models/enums/UserRelationshipStatus"
import UserAbout from "../../../src/models/UserAbout"

const config = new HttpClientConfiguration()
const httpClient = new ProxerHttpClient(config, 'http://127.0.0.1:3000')
const proxerAPI = new ProxerAPI({ customHttpClient: httpClient })

describe('UserAPI class', () => {
    it('can log in a user', async () => {
        const user = await proxerAPI.user.login('Hello', 'World')
        expect(user.id).toBe(1234)
        expect(user.avatar.imageId).toBe('blub.jpg')
        expect(user.isTeam).toBe(false)
        expect(user.isDonator).toBe(false)
        expect(user.token).toBe('token')
    })

    it('can log an user off', async () => {
        await proxerAPI.user.logout()
    })

    it('can load user info by ID', async () => {
        const info = await proxerAPI.user.info(1234)
        expect(info.name).toBe('Bakuenjin96')
        expect(info.avatar.imageId).toBe('blub.jpg')
        expect(info.status.text).toBe('test')
        expect(info.status.timestamp).toBeTruthy()
        expect(info.points.upload).toBe(0)
        expect(info.points.anime).toBe(1)
        expect(info.points.manga).toBe(2)
        expect(info.points.info).toBe(3)
        expect(info.points.forum).toBe(4)
        expect(info.points.misc).toBe(5)
        expect(info.isTeam).toBe(false)
        expect(info.isDonator).toBe(false)
    })

    it('can load user info by name', async () => {
        const info = await proxerAPI.user.info('Bakuenjin96')
        expect(info.name).toBe('Bakuenjin96')
    })

    it('can load user info when logged in', async () => {
        const info = await proxerAPI.user.info()
        expect(info.name).toBe('Bakuenjin96')
    })

    it('can load user top ten by id', async () => {
        const topTen = await proxerAPI.user.topTen(1234)
        expect(topTen.length).toBe(2)
        expect(topTen[0].id).toBe(1234)
        expect(topTen[0].name).toBe('Topten 1')
        expect(topTen[0].category).toBe(ContentCategory.Anime)
        expect(topTen[0].medium).toBe(ContentMedium.AnimeSeries)
        expect(topTen[1].id).toBe(5678)
        expect(topTen[1].name).toBe('Topten 2')
        expect(topTen[1].category).toBe(ContentCategory.Manga)
        expect(topTen[1].medium).toBe(ContentMedium.Doujin)
    })

    it('can load user top ten by name', async () => {
        const topTen = await proxerAPI.user.topTen('Bakuenjin96')
        expect(topTen.length).toBe(2)
    })

    it('can load user list by id', async () => {
        const list = await proxerAPI.user.list(1234)
        expect(list.length).toBe(2)
        expect(list[0].id).toBe(1234)
        expect(list[0].name).toBe('List Item 1')
        expect(list[0].episodeCount).toBe(42)
        expect(list[0].medium).toBe(ContentMedium.OVA)
        expect(list[0].entryState).toBe('Entry state')
        expect(list[0].rating).toBe(4)
        expect(list[0].comment.id).toBe(1337)
        expect(list[0].comment.text).toBe('Blub')
        expect(list[0].comment.state).toBe('Comment state')
        expect(list[0].comment.episode).toBe(9)
        expect(list[0].comment.details).toBe('comment data')
        expect(list[0].comment.timestamp.getTime()).toBe(1571871305 * 1000)
    })

    it('can load user list by name', async () => {
        const list = await proxerAPI.user.list('Bakuenjin96')
        expect(list.length).toBe(2)
    })

    it('can load user comments by id', async () => {
        const comments = await proxerAPI.user.latestComments(1234)
        expect(comments.length).toBe(2)
        expect(comments[0].id).toBe(3456)
        expect(comments[0].state).toBe(0)
        expect(comments[0].details).toBe('some data')
        expect(comments[0].text).toBe('Good anime')
        expect(comments[0].contentInfo.id).toBe(2345)
        expect(comments[0].contentInfo.name).toBe('Comment Entry 1')
        expect(comments[0].contentInfo.rating).toBe(9)
        expect(comments[0].contentInfo.progress).toBe(21)
        expect(comments[0].contentInfo.category).toBe(ContentCategory.Anime)
        expect(comments[0].contentInfo.medium).toBe(ContentMedium.AnimeSeries)
        expect(comments[0].userInfo.id).toBe(1234)
        expect(comments[0].userInfo.name).toBe('Bakuenjin96')
        expect(comments[0].userInfo.avatar.imageId).toBe('blub.jpg')
    })

    it('can load user comments by name and with params', async () => {
        const comments = await proxerAPI.user.latestComments('Bakuenjin96', { contentState: [0, 1] })
        expect(comments.length).toBe(2)
    })

    it('can load user history by id', async () => {
        const history = await proxerAPI.user.history(1234)
        expect(history.length).toBe(2)
        expect(history[0].id).toBe(2233)
        expect(history[0].contentId).toBe(3344)
        expect(history[0].name).toBe('History 1')
        expect(history[0].language).toBe('ger')
        expect(history[0].viewedEpisode).toBe(7)
        expect(history[0].medium).toBe(ContentMedium.Movie)
        expect(history[0].category).toBe(ContentCategory.Anime)
    })

    it('can load user history by name', async () => {
        const history = await proxerAPI.user.history('Bakuenjin96')
        expect(history.length).toBe(2)
    })

    it('can load user about info by id', async () => {
        const about = await proxerAPI.user.about(1234)
        expect(about.website).toBe('website')
        expect(about.occupation).toBe('dev')
        expect(about.interests).toBe('gaming')
        expect(about.city).toBe('Tokyo')
        expect(about.country).toBe('Japan')
        expect(about.text).toBe('Text about me')
        expect(about.facebook).toBe('Name')
        expect(about.youtube).toBe('Channel')
        expect(about.chatango).toBe('Chat name')
        expect(about.twitter).toBe('Bird')
        expect(about.skype).toBe('Bad software')
        expect(about.deviantArt).toBe('pixiv for noobs')
        if (about.birthday)
            expect(about.birthday.getTime()).toBe(972000000000)
        expect(about.gender).toBe(UserGender.Other)
        expect(about.relationshipStatus).toBe(UserRelationshipStatus.NotSearching)
    })

    it('can load user about info by name', async () => {
        const about = await proxerAPI.user.about('Bakuenjin96')
        expect(about).toBeInstanceOf(UserAbout)
    })

    it('can load friend list by id', async () => {
        const friends = await proxerAPI.user.friends(1234)
        expect(friends.length).toBe(2)
        expect(friends[0].id).toBe(6249)
        expect(friends[0].username).toBe('No one')
        expect(friends[0].friendsSince.getTime()).toBe(1571871315000)
        expect(friends[0].description).toBe('Someone')
        expect(friends[0].avatar.imageId).toBe('nothing.jpg')
    })

    it('can load friend list by name', async () => {
        const friends = await proxerAPI.user.friends('Bakuenjin96')
        expect(friends.length).toBe(2)
    })

    it('can request authentification by id', async () => {
        const requestLink = await proxerAPI.user.requestAuth(1234, 'CODE', 'APP_NAME')
        expect(requestLink).toBe('proxer.me/auth?code=CODE&name=APP_NAME')
    })

    it('can request authentification by name', async () => {
        const requestLink = await proxerAPI.user.requestAuth('Bakuenjin96', 'CODE', 'APP_NAME')
        expect(requestLink).toBe('proxer.me/auth?code=CODE&name=APP_NAME')
    })

    it('can check authentification by id', async () => {
        const user = await proxerAPI.user.checkAuth('CODE', 'APP_NAME')
        expect(user.id).toBe(1234)
        expect(user.avatar.imageId).toBe('blub.jpg')
        expect(user.isTeam).toBe(false)
        expect(user.isDonator).toBe(false)
        expect(user.token).toBe('token')
    })

})