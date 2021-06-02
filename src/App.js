import React from "react"
import { Route } from "react-router"
import "./App.css"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import Header from "./components/Header/Header"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import Profile from "./components/Profile/Profile"
import Settings from "./components/Settings/Settings"
import Sidebar from "./components/Sidebar/Sidebar"
import store from "./redux/redux-store"

const App = props => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Sidebar state={store.getState().sidebar} />
				<div className="main__content">
					<Route path="/profile" render={() => <Profile />} />
					<Route path="/dialogs" render={() => <DialogsContainer />} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
				</div>
			</main>
		</div>
	)
}

export default App
