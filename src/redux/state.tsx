
 export type dialogspropstypeType ={
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
 export type postType ={
    id: string
    message: string
    LikeCount: number
}
 export type profilepostsType ={
    posts: Array<postType>
}
 export type dialogsType={
    id: string
    name: string
}
 export type messagesType={
    id: string
    message: string
}


export type stateType ={
    profilePage: profilepostsType
    messagesPage: dialogspropstypeType
}


// let messages = [
//     {id: '1', message: 'Hi'},
//     {id: '2', message: 'Yo'},
// ]
// let dialogs = [
//     {id: '1', name: 'Anna'},
//     {id: '2', name: 'Bob'},
//     {id: '3', name: 'Joe'},
// ]
// let posts = [
//     {id: '1', message: 'Hi, how are you?', LikeCount: 15},
//     {id: '2', message: 'It\'s, my first post', LikeCount: 10},
//     {id: '3', message: 'Let\'s gO', LikeCount: 10},
//     {id: '4', message: 'Amazing!!!', LikeCount: 10}
// ]

let state:stateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', LikeCount: 15},
            {id: '2', message: 'It\'s, my first post', LikeCount: 10},
            {id: '3', message: 'Let\'s gO', LikeCount: 10},
            {id: '4', message: 'Amazing!!!', LikeCount: 10},
        ]
    },
    messagesPage: {
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'Yo'},
        ],
        dialogs: [
            {id: '1', name: 'Anna'},
            {id: '2', name: 'Bob'},
            {id: '3', name: 'Joe'},
        ],
    }
}

export default state