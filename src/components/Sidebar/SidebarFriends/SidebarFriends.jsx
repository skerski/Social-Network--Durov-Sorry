import React from "react"
import s from "./SidebarFriends.module.css"

const SidebarFriends = props => {
	let state = props.state.friends
	
	let myFriends = state.map(friend => (
		<div className={s.sidebar_friends__item} key={friend.id}>
			<img src={friend.img} />
		</div>
	))

	return <div className={s.sidebar_friends}>{myFriends}</div>
}

export default SidebarFriends