import React from "react"
import userPhoto from "../../../assets/avatar.png"
import Preloader from "../../Common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<>
			<div className={s.content__head}>
				<img alt={"background"} src="https://cdn.turkishairlines.com/m/3f9a1548ee9de341/original/1400-660-jpg.jpg" />
			</div>
			<div className={s.content__profile}>
				<div className={s.content__profile_avatar}>
					<img alt={"avatar"} src={props.profile.photos.large || userPhoto} />
				</div>
				<div className={s.content__profile_bio}>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
					<div className={s.content__profile_name}>{props.profile.fullName}</div>
					<ul className={s.content__profile_details}>
						<li className={s.content__profile_detailsitem}>
							About me: <span>{props.profile.aboutMe}</span>
						</li>
						<li className={s.content__profile_detailsitem}>
							Looking for a job: <span>{props.profile.lookingForAJob? 'yes' : 'no'}</span>
						</li>
						<li className={s.content__profile_detailsitem}>
							What I expect from job: <span>{props.profile.lookingForAJobDescription}</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default ProfileInfo
