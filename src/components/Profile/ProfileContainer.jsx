import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import {
	getUserProfile,
	getStatus,
	updateStatus,
} from "../../redux/profile-reducer"
import { withRouter } from "react-router"
import { Redirect } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 17533
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		if (!this.props.isAuth) return <Redirect to={"/Login"} />
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
			</div>
		)
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
})

export default compose(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let WithRouterProfileContainer = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, { getUserProfile })(
// 	WithRouterProfileContainer
// )
