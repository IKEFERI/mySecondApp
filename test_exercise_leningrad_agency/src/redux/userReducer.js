import React from "react";

const addPost = "addPost";
const newPostTitle = "newPostTitle";
const newPostText = "newPostText";
const newPostImgUrl = "newPostImgUrl";
// const inputPostField = "inputPostField";


let initState = {
    userPhoto: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
    userInfo: {
        name: "Ares Vasilyevich"

    },
    postItems: [
        {
            "img": "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg",
            "title": "New blog post",
            "date": "10:00",
            "text": <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>,
            "likes": "12",
            "comments": "3",
            "reposts": "10",
            "id": "2"
        }
    ],
    newPostTitle: "",
    newPostText: "",
    newPostImgUrl: ""

}


const userReducer = (state = initState, action) => {
    let copyState = {...state};
    switch (action.type) {

        case addPost:

            let date = new Date();
            let _time = date.getDate();

            return {
                ...state,
                postItems: [
                    ...state.postItems,
                    {
                        "title": state.newPostTitle,
                        "name": state.userInfo.name, //state.userInfo.name,
                        "time": _time,
                        "text": state.newPostText,
                        "img": state.newPostImgUrl,
                        "id": state.postItems[Object.keys(copyState.postItems).length - 1].id + 1
                    }],
                newPostTitle: "",
                newPostText: "",
                newPostImgUrl: ""
            };
        case newPostTitle:
            console.log(action);
            console.log(action.value);
            return { ...state, newPostTitle : action.value };
        case newPostText:
            console.log(action);
            console.log(action.value);
            return { ...state, newPostText : action.value };
        case newPostImgUrl:
            console.log(action);
            console.log(action.value);
            return { ...state, newPostImgUrl : action.value };
        default:
            return state;


    }
}

export const addPostActionCreator = () => ({
    type: addPost
});

export const newPostTitleActionCreator = (val, input) => ({type: newPostTitle, value: val});
export const newPostTextActionCreator = (val, input) => ({type: newPostText, value: val});
export const newPostImgUrlActionCreator = (val, input) => ({type: newPostImgUrl, value: val});

export default userReducer;