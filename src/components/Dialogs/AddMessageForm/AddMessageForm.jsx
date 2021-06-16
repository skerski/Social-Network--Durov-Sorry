import React from "react"
import { Field, reduxForm } from "redux-form"
import {
	maxLengthCreator,
	required,
} from "../../../utils/validators/validators"
import { Textarea } from "../../Common/FormsControls/FormsControls"
import s from '../Dialogs.module.css'

const maxLength300 = maxLengthCreator(300)

const AddMessageForm = props => {
	return (
		<form onSubmit={props.handleSubmit} className={s.dialogs_form}>
			<Field
				className={s.dialogs_input}
				placeholder={"write something =)"}
				name={"newMessageText"}
				component={Textarea}
				validate={[required, maxLength300]}
			/>
			<button className={s.dialogs_btn}>Send message</button>
		</form>
	)
}

export default reduxForm({ form: "AddNewMessageForm" })(AddMessageForm)
