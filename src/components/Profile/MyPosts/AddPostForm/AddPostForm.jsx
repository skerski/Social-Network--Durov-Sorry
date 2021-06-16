import React from "react"
import {
	maxLengthCreator,
	required,
} from "../../../../utils/validators/validators"
import { Field, reduxForm } from "redux-form"
import { Textarea } from "../../../Common/FormsControls/FormsControls"
import s from "../MyPosts.module.css"

const maxLength300 = maxLengthCreator(300)

const addPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				placeholder={"write something =)"}
				name={"newPostElement"}
				className={s.content__posts_input}
				validate={[required, maxLength300]}
			/>

			<button className={s.content__posts_btn}>Add post</button>
		</form>
	)
}

export default reduxForm({ form: "AddNewPostForm" })(addPostForm)
