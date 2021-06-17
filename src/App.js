import React from "react"
import { Route } from "react-router"
import "./App.css"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import Settings from "./components/Settings/Settings"
import Sidebar from "./components/Sidebar/Sidebar"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import store from "./redux/redux-store"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import { Component } from "react"
import { connect } from "react-redux"
import { getAuthUserData } from "./redux/auth-reducer"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { initializeApp } from "./redux/app-reducer"
import Preloader from "./components/Common/Preloader/Preloader"

class App extends Component {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className="wrapper">
				<HeaderContainer />
				<main className="main">
					<Sidebar state={store.getState().sidebar} />
					<div className="main__content">
						<Route
							path="/profile/:userId?"
							render={() => <ProfileContainer />}
						/>
						<Route path="/dialogs" render={() => <DialogsContainer />} />
						<Route path="/news" render={() => <News />} />
						<Route path="/music" render={() => <Music />} />
						<Route path="/settings" render={() => <Settings />} />
						<Route path="/users" render={() => <UsersContainer />} />
						<Route path="/login" render={() => <Login />} />
					</div>
				</main>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App)
