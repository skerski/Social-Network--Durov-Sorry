import React from "react"
import { connect } from "react-redux"
import {
	follow,
	unfollow,
	toggleFollowingProgress,
	getUsers,
} from "../../redux/users-reducer"
import Users from "./Users"
import Preloader from "../Common/Preloader/Preloader"
import { usersAPI } from "../../api/api"

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	toggleFollowingProgress,
	getUsers,
})(UsersContainer)
