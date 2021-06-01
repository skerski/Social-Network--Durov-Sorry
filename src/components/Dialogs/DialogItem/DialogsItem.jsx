import React from "react"
import { NavLink } from "react-router-dom"
import s from "../Dialogs.module.css"

const DialogItem = props => {
	let path = "/dialogs/" + props.id

	return (
		<div className={`${s.dialogs_left__item} ${s.dialogs__item}`}>
			<div className={s.dialogs__item_avatar}><img src={props.img} alt="" /></div>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}
export default DialogItem
