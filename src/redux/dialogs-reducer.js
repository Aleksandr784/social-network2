const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
        { id: 5, name: "Victor", photo: "https://i.thecartoonist.me/cartoon-face-of-white-male.png" },
        {
            id: 6,
            name: "Valerij",
            photo: "https://lh5.googleusercontent.com/proxy/_VOA2I_PYSHh6IJqFIPTVKP0RNPx5_KYNAdEheA8lgwbYEGMwj6QzA_UbZ9WX9oSFfnQUGtVXGeqseXf1SQwOU_k"
        },
    ],
    messages: [
        { id: 1, mess: "Hi everyone", whoseAnswer: "myAnswer" },
        { id: 2, mess: "How is your doings?", whoseAnswer: "somebodyAnswer" },
        { id: 3, mess: "Yo. I am fine", whoseAnswer: "myAnswer" },
        { id: 4, mess: "Yohhh", whoseAnswer: "somebodyAnswer" },
        { id: 5, mess: "Yo. I am fine", whoseAnswer: "myAnswer" },
    ],
    newMessageBody: ''
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body, whoseAnswer: "myAnswer" }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;