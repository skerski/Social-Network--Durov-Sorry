import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import AddPostForm from "./AddPostForm/AddPostForm"

const MyPosts = props => {
	let postsElements = props.posts.map(post => (
		<Post text={post.text} likes={post.likes} img={post.img} key={post.id} />
	))

	let addPost = values => {
		props.addPost(values.newPostElement)
	}

	return (
		<div className={s.content__posts}>
			<div className={s.content__posts_head}>
				<div className={s.content__posts_title}>My posts</div>
				<AddPostForm onSubmit={addPost} />
			</div>
			<div className={s.content__posts_body}>{postsElements}</div>
		</div>
	)
}

export default MyPosts
