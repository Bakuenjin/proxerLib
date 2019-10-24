import resolveUser from "../../../src/http/utils/resolve-user"
import LoggedInUser from "../../../src/models/LoggedInUser"
import User from "../../../src/models/User"
import Friend from "../../../src/models/Friend"

describe('resolve user function', () => {
    it('resolves ID', () => {
        const id = 1234
        const resolved = resolveUser(id)
        expect(resolved).toBe(1234)
    })

    it('resolves username', () => {
        const name = 'Hello'
        const resolved = resolveUser(name)
        expect(resolved).toBe('Hello')
    })

    it('resolves LoggedInUser instance', () => {
        const loggedInUser = new LoggedInUser({
            uid: 1234,
            avatar: 'blub.jpg',
            isTeam: false,
            isDonator: false,
            token: 'token'
        })

        const resolved = resolveUser(loggedInUser)
        expect(resolved).toBe(1234)
    })

    it('resolves User instance', () => {
        const user = new User({
            uid: 1234,
            username: 'Name',
            avatar: 'blub.jpg',
            status: 'text',
            status_time: 1571852857,
            points_uploads: 0,
            points_anime: 1,
            points_manga: 2,
            points_info: 3,
            points_forum: 4,
            points_misc: 5,
            isTeam: false,
            isDonator: false
        })

        const resolved = resolveUser(user)
        expect(resolved).toBe(1234)
    })

    it('resolves Friend instance', () => {
        const friend = new Friend({
            uid: 1234,
            username: 'Name',
            date: 1571852857,
            description: 'text',
            avatar: 'blub.jpg'
        })

        const resolved = resolveUser(friend)
        expect(resolved).toBe(1234)
    })
})