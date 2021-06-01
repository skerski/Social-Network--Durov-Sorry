import React from "react"
import s from "./Post.module.css"

const Post = props => {
	return (
		<div className={s.post}>
			<div className={s.post__letter}>
				<div className={s.post__img}>
					<img src={props.img} />
				</div>
				<div className={s.post__text}>{props.text}</div>
			</div>
			<div className={s.post__likes}>{props.likes} likes</div>
		</div>
	)
}
export default Post
