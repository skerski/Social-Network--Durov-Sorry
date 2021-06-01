import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem"
import Message from "./Message/Message"

const Dialogs = props => {
	console.log('dialogs', props)

	let state = props.dialogsPage
	
	let dialogsElements = state.dialogs.map(dialog => (
		<DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
	))

	let messagesElements = state.messages.map(message => (
		<Message message={message.message} />
	))

	// let newMessageElement = React.createRef()

	let onAddMessage = () => {
		props.addMessage()
	}

	let onMessageChange = (e) => {
		let text = e.target.value
		props.updateNewMessageText(text)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_left}>{dialogsElements}</div>
			<div className={s.dialogs_right}>
				{messagesElements}
				<textarea
					// ref={newMessageElement}
					onChange={onMessageChange}
					value={state.newMessageText}
					className={s.dialogs_input}
					placeholder="your message..."></textarea>
				<button onClick={onAddMessage} className={s.dialogs_btn}>
					Send message
				</button>
			</div>
		</div>
	)
}

export default Dialogs
