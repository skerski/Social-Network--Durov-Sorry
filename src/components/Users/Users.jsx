import React from "react"
import classes from "./Users.module.css"
import userPhoto from "../../assets/avatar.png"

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div>
			{pages.map(p => {
				if (p < 12) {
					return (
						<span
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
							<img
								src={user.photos.small !== null ? user.photos.small : userPhoto}
							/>
						</div>
						<div className={classes.user__btn}>
							{user.followed ? (
								<button
									onClick={() => {
										props.unfollow(user.id)
									}}>
									Unfollow
								</button>
							) : (
								<button
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
