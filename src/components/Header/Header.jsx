import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

const Header = props => {
	return (
		<header className={s.header}>
			<img src="http://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png" />
			<div className={s.header__login}>
				{props.isAuth ? <button className={s.auth__button} onClick={props.logout}>Log out</button> : <NavLink className={s.auth__button} to={"/login"}>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header
