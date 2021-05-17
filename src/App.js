import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"

const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main className='main'>
				<NavBar />
				<Profile/>
			</main>
		</div>
	)
}

export default App
