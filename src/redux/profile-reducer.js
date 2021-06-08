const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
	posts: [
		{
			likes: 15,
			img:
				"https://i.dailymail.co.uk/i/pix/2014/04/09/article-2599775-6OgQfEryD-HSK1-700_634x796.jpg",
			text:
				"Hi Max, are you awaited for strolling all the summers night or you choose your Front-end again?",
		},
		{
			likes: 200,
			img: "https://jooinn.com/images/man-20.jpg",
			text: "Its my new app, trying to forget about the semicolons.... x)",
		},
	],
	newPostText: "Bitcoin will hit 100k until 2022",
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length,
				text: state.newPostText,
				likes: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: "",
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}

		default:
			return state
	}
}

export const addPostActionCreator = () => ({
	type: ADD_POST,
})

export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile: profile,
})

export default profileReducer
