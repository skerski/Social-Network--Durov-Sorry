import React from "react"
import Navbar from "./Navbar/Navbar"
import SidebarFriends from "./SidebarFriends/SidebarFriends"

const Sidebar = props => {

	return (
		<div className="main__sidebar">
			<Navbar />
			<SidebarFriends state={props.state} />
		</div>
	)
}

export default Sidebar
