import React from "react"
import { Route } from "react-router"
import "./App.css"
import Header from "./components/Header/Header"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import Sidebar from "./components/Sidebar/Sidebar"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import store from "./redux/redux-store"

const App = props => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Sidebar state={store.getState().sidebar} />
				<div className="main__content">
					<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
					<Route path="/dialogs" render={() => <DialogsContainer />} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
					<Route path="/users" render={() => <UsersContainer/>} />
				</div>
			</main>
		</div>
	)
}

export default App
