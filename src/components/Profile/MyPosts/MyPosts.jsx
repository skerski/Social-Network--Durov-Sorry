import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import { reduxForm, Field } from "redux-form"
import { useRef } from "react"

const MyPosts = props => {
	let postsElements = props.posts.map(post => (
		<Post text={post.text} likes={post.likes} img={post.img} />
	))

	let addPost = values => {
		props.addPost(values.newPostElement)
	}

	return (
		<div className={s.content__posts}>
			<div className={s.content__posts_head}>
				<div className={s.content__posts_title}>My posts</div>
				<MyPostsReduxForm onSubmit={addPost} />
			</div>
			<div className={s.content__posts_body}>{postsElements}</div>
		</div>
	)
}

const addNewPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={"textarea"}
				placeholder={"write something =)"}
				name={"newPostElement"}
				className={s.content__posts_input}
			/>
			<button className={s.content__posts_btn}>Add post</button>
		</form>
	)
}

const MyPostsReduxForm = reduxForm({ form: "AddNewPostForm" })(addNewPostForm)

export default MyPosts
