import React from "react"
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer"
import store from "../../redux/redux-store"
import Dialogs from "./Dialogs"
import { connect } from "react-redux"

let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let mapDispatchToProps = dispatch => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator())
		},
		updateNewMessageText: text => {
			let action = updateNewMessageTextActionCreator(text)
			dispatch(action)
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
