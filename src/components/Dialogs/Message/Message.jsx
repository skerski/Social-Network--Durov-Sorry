import React from "react"
import s from "../Dialogs.module.css"

const Message = props => {
	return (
		<div className={`${s.dialogs_right__item} ${s.dialogs__item}`}>
			<div className={s.dialogs_right__author}>:</div>
			<div className={s.dialogs_right__message}>{props.message}</div>
		</div>
	)
}

export default Message
