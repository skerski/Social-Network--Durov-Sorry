import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

const Header = props => {
	return (
		<header className={s.header}>
			<img src="http://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png" />
			<div className={s.header__login}>
				{props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header
