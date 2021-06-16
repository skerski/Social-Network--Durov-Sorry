import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"
import { Redirect } from "react-router-dom"
import { reduxForm, Field } from "redux-form"
import { Textarea } from "../Common/FormsControls/FormsControls"
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators"
import AddMessageForm from "./AddMessageForm/AddMessageForm"

const Dialogs = props => {
	console.log("dialogs", props)

	let state = props.dialogsPage

	let dialogsElements = state.dialogs.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} img={dialog.img} />
	))

	let messagesElements = state.messages.map(message => (
		<Message message={message.message} key={message.id}/>
	))

	let onAddMessage = () => {
		props.addMessage()
	}

	let addMessage = values => {
		props.addMessage(values.newMessageText)
	}

	if (!props.isAuth) return <Redirect to={"/Login"} />

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_left}>{dialogsElements}</div>
			<div className={s.dialogs_right}>
				{messagesElements}
				<AddMessageForm onSubmit={addMessage} />
			</div>
		</div>
	)
}

export default Dialogs
