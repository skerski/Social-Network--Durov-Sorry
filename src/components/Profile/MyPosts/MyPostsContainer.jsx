import React from "react"
import { connect } from "react-redux"
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer"
import store from "../../../redux/redux-store"
import MyPosts from "./MyPosts"

// const MyPostsContainer = props => {
// 	return (
// 		<StoreContext.Consumer>
// 			{store => {
// 				let state = store.getState().profilePage
// 				let addPost = () => {
// 					store.dispatch(addPostActionCreator())
// 				}

// 				let onPostChange = text => {
// 					let action = updateNewPostTextActionCreator(text)
// 					store.dispatch(action)
// 				}

// 				return (
// 					<MyPosts
// 						updateNewPostText={onPostChange}
// 						addPost={addPost}
// 						posts={state.posts}
// 						newPostText={state.newPostText}
// 					/>
// 				)
// 			}}
// 		</StoreContext.Consumer>
// 	)
// }

let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		addPost: (newPostElement) => {
			dispatch(addPostActionCreator(newPostElement))
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
