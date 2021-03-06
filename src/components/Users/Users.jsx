import React from "react"
import classes from "./Users.module.css"
import userPhoto from "../../assets/avatar.png"
import { NavLink } from "react-router-dom"

let Users = props => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}
	console.log(props)
	return (
		<div>
			{pages.map(p => {
				if (p < 100) {
					return (
						<span
							key={p.id}
							className={
								props.currentPage === p ? classes.selectedPage : undefined
							}
							onClick={() => props.onPageChanged(p)}>
							{p}-
						</span>
					)
				}
			})}
			{props.users.map(user => (
				<div key={user.id} className={classes.user}>
					<div className={classes.user_left}>
						<div className={classes.user__photo}>
							<NavLink to={"/profile/" + user.id}>
								<img
									src={
										user.photos.small !== null ? user.photos.small : userPhoto
									}
								/>
							</NavLink>
						</div>
						<div className={classes.user__btn}>
							{user.followed ? (
								<button
									disabled={props.followingInProgress.some(
										id => id === user.id
									)}
									onClick={() => {
										props.unfollow(user.id)
									}}>
									Unfollow
								</button>
							) : (
								<button
									disabled={props.followingInProgress.some(
										id => id === user.id
									)}
									onClick={() => {
										props.follow(user.id)
									}}>
									Follow
								</button>
							)}
						</div>
					</div>
					<div className={classes.user_right}>
						<div className={classes.user__about}>
							<div className={classes.user__name}>{user.name}</div>
							<div className={classes.user__bio}>{user.status}</div>
						</div>
						<div className={classes.user__location}>
							<div className={classes.user__country}>
								{"user.location.country"},
							</div>
							<div className={classes.user__city}>{"user.location.city"}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Users
