const userMock = {
    "login": {
        "error": 0,
        "data": {
            "uid": 1234,
            "avatar": "blub.jpg",
            "isTeam": false,
            "isDonator": false,
            "token": "token"
        }
    },
    "userinfo": {
        "error": 0,
        "data": {
            "uid": 1234,
            "username": "Bakuenjin96",
            "avatar": "blub.jpg",
            "status": "test",
            "status_time": 1571852857,
            "points_uploads": 0,
            "points_anime": 1,
            "points_manga": 2,
            "points_info": 3,
            "points_forum": 4,
            "points_misc": 5,
            "isTeam": false,
            "isDonator": false
        }
    },
    "topten": {
        "error": 0,
        "data": [
            {
                "eid": 1234,
                "name": "Topten 1",
                "kat": "anime",
                "medium": "animeseries"
            },
            {
                "eid": 5678,
                "name": "Topten 2",
                "kat": "manga",
                "medium": "doujin"
            }
        ]
    },
    "list": {
        "error": 0,
        "data": [
            {
                "id": 1234,
                "name": "List Item 1",
                "count": 42,
                "medium": "ova",
                "estate": "Entry state",
                "cid": 1337,
                "comment": "Blub",
                "state": "Comment state",
                "episode": 9,
                "data": "comment data",
                "rating": 4,
                "timestamp": 1571871305
            },
            {
                "id": 5678,
                "name": "List Item 2",
                "count": 69,
                "medium": "hentai",
                "estate": "Entry state",
                "cid": 4200,
                "comment": "Blab",
                "state": "Comment state",
                "episode": 27,
                "data": "comment data",
                "rating": 6,
                "timestamp": 1571871315
            }
        ]
    },
    "comments": {
        "error": 0,
        "data": [
            {
                "id": 3456,
                "tid": 2345,
                "name": "Comment Entry 1",
                "medium": "animeseries",
                "kat": "anime",
                "state": 0,
                "data": "some data",
                "comment": "Good anime",
                "rating": 9,
                "episode": 21,
                "positive": 2,
                "timestamp": 1571871315,
                "username": "Bakuenjin96",
                "uid": 1234,
                "avatar": "blub.jpg"
            },
            {
                "id": 3457,
                "tid": 2346,
                "name": "Comment Entry 2",
                "medium": "animeseries",
                "kat": "anime",
                "state": 0,
                "data": "some data",
                "comment": "Good anime",
                "rating": 9,
                "episode": 21,
                "positive": 2,
                "timestamp": 1571871315,
                "username": "Bakuenjin96",
                "uid": 1234,
                "avatar": "blub.jpg"
            }
        ]
    },
    "history": {
        "error": 0,
        "data": [
            {
                "id": 2233,
                "eid": 3344,
                "name": "History 1",
                "language": "ger",
                "episode": 7,
                "medium": "movie",
                "kat": "anime"
            },
            {
                "id": 2234,
                "eid": 3345,
                "name": "History 2",
                "language": "ger",
                "episode": 17,
                "medium": "mangaseries",
                "kat": "manga"
            }
        ]
    },
    "about": {
        "error": 0,
        "data": {
            "info_website": "website",
            "info_occupation": "dev",
            "info_interests": "gaming",
            "info_city": "Tokyo",
            "info_country": "Japan",
            "info_about": "Text about me",
            "info_facebook": "Name",
            "info_youtube": "Channel",
            "info_chatango": "Chat name",
            "info_twitter": "Bird",
            "info_skype": "Bad software",
            "info_deviantart": "pixiv for noobs",
            "info_birthday": "2000-10-20",
            "info_gender": "o",
            "info_relationshipstatus": "not-searching"
        }
    },
    "friends": {
        "error": 0,
        "data": [
            {
                uid: 6249,
                username: 'No one',
                date: 1571871315,
                description: 'Someone',
                avatar: 'nothing.jpg'
            },
            {
                uid: 6250,
                username: 'Not a single person',
                date: 1571871315,
                description: 'Another one',
                avatar: 'null.jpg'
            }
        ]
    },
    "requestauth": {
        error: 0
    }
}

export default userMock