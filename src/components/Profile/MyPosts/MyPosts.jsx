import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = props => {
	let postsElements = props.posts.map(post => (
		<Post text={post.text} likes={post.likes} img={post.img} />
	))

	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost()
	}
	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}

	return (
		<div className={s.content__posts}>
			<div className={s.content__posts_head}>
				<div className={s.content__posts_title}>My posts</div>
				<textarea
					ref={newPostElement}
					onChange={onPostChange}
					value={props.newPostText}
					className={s.content__posts_input}
					placeholder="your news..."></textarea>
				<button onClick={onAddPost} className={s.content__posts_btn}>
					Send
				</button>
			</div>
			<div className={s.content__posts_body}>{postsElements}</div>
		</div>
	)
}
export default MyPosts
