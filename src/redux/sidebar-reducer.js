let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;