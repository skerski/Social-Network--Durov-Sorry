import { actionTypes } from "redux-form"
import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const REMOVE_POST = "REMOVE_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
	posts: [
		{
			likes: 0,
			img: "https://jooinn.com/images/woman-1.jpg",
			text:
				"Hi Max, are you awaited for strolling all the summers nights or you choose your Front-end again?",
			id: 0,
		},
		{
			likes: 15681,
			img: "https://jooinn.com/images/man-20.jpg",
			text:
				"New app is cool, Durov sorry but it just seems when you are getting older you cant handle everything as before. It's a new day, it's a new life  x)",
			id: 1,
		},
		{
			likes: 207222,
			img: "https://jooinn.com/images/man-9.jpg",
			text: "Bitcoin will hit 100k until 2022",
			id: 2,
		},
	],
	profile: null,
	status: "",
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let text = action.newPostElement
			let newPost = {
				id: state.posts.length,
				text,
				likes: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
			}
		case REMOVE_POST:
			return {
				...state,
				posts: [
					...state.posts,
					state.posts.filter(post => post != action.postId),
				],
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}

		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}

		default:
			return state
	}
}

export const addPostActionCreator = newPostElement => ({
	type: ADD_POST,
	newPostElement,
})

export const removePostActionCreator = postId => ({
	type: REMOVE_POST,
	postId,
})

export const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile: profile,
})

export const setStatus = status => ({
	type: SET_STATUS,
	status,
})

export const getUserProfile = userId => dispatch => {
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data))
	})
}

export const getStatus = userId => dispatch => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setStatus(response.data))
	})
}

export const updateStatus = status => dispatch => {
	profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}

export default profileReducer
