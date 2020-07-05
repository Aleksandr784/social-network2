import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, hi how are you?", likesCount: "14"},
                {id: 2, message: "It is my first post", likesCount: "19"},
                {id: 3, message: "I always here", likesCount: "19"},
                {id: 4, message: "tuk-tuk", likesCount: "19"},
            ],
            newPostText: 'put new text here'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Dimychee",
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0Z9ImKlj6HEE4wvgOMavvC5Xc839ChnF8nYqrTvFiwQaH2crc&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Andrey",
                    photo: "https://www.macworld.co.uk/cmsdata/features/3678444/how_to_make_memoji_1200home_thumb800.jpg"
                },
                {
                    id: 3,
                    name: "Sveta",
                    photo: "https://cdn1.vectorstock.com/i/1000x1000/78/80/young-woman-head-avatar-cartoon-face-character-vector-21787880.jpg"
                },
                {
                    id: 4,
                    name: "Sasha",
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ9_txDC4vk8TofX6MI4YksfozDwVS0cCj_Ko1gGmTTLtn6Vg_&usqp=CAU"
                },
                {id: 5, name: "Victor", photo: "https://i.thecartoonist.me/cartoon-face-of-white-male.png"},
                {
                    id: 6,
                    name: "Valerij",
                    photo: "https://lh5.googleusercontent.com/proxy/_VOA2I_PYSHh6IJqFIPTVKP0RNPx5_KYNAdEheA8lgwbYEGMwj6QzA_UbZ9WX9oSFfnQUGtVXGeqseXf1SQwOU_k"
                },
            ],
            messages: [
                {id: 1, mess: "Hi everyone", whoseAnswer: "myAnswer"},
                {id: 2, mess: "How is your doings?", whoseAnswer: "somebodyAnswer"},
                {id: 3, mess: "Yo. I am fine", whoseAnswer: "myAnswer"},
                {id: 4, mess: "Yohhh", whoseAnswer: "somebodyAnswer"},
                {id: 5, mess: "Yo. I am fine", whoseAnswer: "myAnswer"},
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Andrey",
                    photo: "https://www.macworld.co.uk/cmsdata/features/3678444/how_to_make_memoji_1200home_thumb800.jpg"
                },
                {
                    id: 2,
                    name: "Sveta",
                    photo: "https://cdn1.vectorstock.com/i/1000x1000/78/80/young-woman-head-avatar-cartoon-face-character-vector-21787880.jpg"
                },
                {
                    id: 3,
                    name: "Sasha",
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ9_txDC4vk8TofX6MI4YksfozDwVS0cCj_Ko1gGmTTLtn6Vg_&usqp=CAU"
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}



export default store;
window.state = store;