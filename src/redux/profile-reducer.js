const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "Hi, hi how are you?", likesCount: "14" },
        { id: 2, message: "It is my first post", likesCount: "19" },
        { id: 3, message: "I always here", likesCount: "19" },
        { id: 4, message: "tuk-tuk", likesCount: "19" },
    ],
    newPostText: 'put new text here'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            };

        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPosTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;