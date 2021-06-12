import React from "react"
import Profile from "./Profile"
import * as axios from "axios"
import { connect } from "react-redux"
import { getUserProfile } from "../../redux/profile-reducer"
import { withRouter } from "react-router"
import { usersAPI } from "../../api/api"

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 2
		this.props.getUserProfile(userId)
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
})

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(
	WithRouterProfileContainer
)
