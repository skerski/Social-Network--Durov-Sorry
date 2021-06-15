import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import { Redirect } from "react-router-dom"
import { reduxForm, Field } from "redux-form"

const Dialogs = props => {
	console.log("dialogs", props)

	let state = props.dialogsPage

	let dialogsElements = state.dialogs.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
	))

	let messagesElements = state.messages.map(message => (
		<Message message={message.message} />
	))

	let onAddMessage = () => {
		props.addMessage()
	}

	let addMessage = (values) => {
		props.addMessage(values.newMessageText)
	}


	if (!props.isAuth) return <Redirect to={"/Login"} />

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_left}>{dialogsElements}</div>
			<div className={s.dialogs_right}>
				{messagesElements}
				<DialogsReduxForm onSubmit={addMessage}/>
			</div>
		</div>
	)
}

const dialogsForm = props => {
	return (
		<form onSubmit={props.handleSubmit} className={s.dialogs_form}>
			<Field
				className={s.dialogs_input}
				placeholder={"write something =)"}
				name={"newMessageText"}
				component={"textarea"}
			/>
			<button className={s.dialogs_btn}>Send message</button>
		</form>
	)
}
const DialogsReduxForm = reduxForm({ form: "dialogs" })(dialogsForm)

export default Dialogs
