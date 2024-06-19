const UserList = [
    {
        id: 1,
        name: "Jeff",
        username:"BallHog",
        age:"15",
        nationality:"AMERICA",
        friends:[
            {
                id: 2,
                name: "Jack",
                username:"BigBall",
                age:"27",
                nationality:"CHINA",
            }
        ]
    },
    {
        id: 2,
        name: "Jack",
        username:"BigBall",
        age:"27",
        nationality:"CHINA",
        friends:[
            {
                id: 1,
                name: "Jeff",
                username:"BallHog",
                age:"15",
                nationality:"AMERICA",
            }
        ]
    },
]

const MovieList = [
    {
        id:1,
        name: "Chef",
        year:2007
    },
    {
        id:2,
        name: "Deece",
        year:2011
    },
]

module.exports = {UserList, MovieList}