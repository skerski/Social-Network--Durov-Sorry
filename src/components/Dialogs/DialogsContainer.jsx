import React from "react"
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer"
import store from "../../redux/redux-store"
import Dialogs from "./Dialogs"

const DialogsContainer = props => {

	let state = props.store.getState().dialogsPage

	let onAddMessage = () => {
		props.store.dispatch(addMessageActionCreator())
	}

	let onMessageChange = (text) => {
		let action = updateNewMessageTextActionCreator(text)
		props.store.dispatch(action)
	}

	return (
		<Dialogs
			addMessage={onAddMessage}
			updateNewMessageText={onMessageChange}
			dialogsPage={state}
		/>
	)
}

export default DialogsContainer
