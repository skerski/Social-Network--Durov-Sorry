import React from "react"
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div className={s.content__head}>
				<img src='https://cdn.turkishairlines.com/m/3f9a1548ee9de341/original/1400-660-jpg.jpg' />
			</div>
			<div className={s.content__profile}>
				<div className={s.content__profile_avatar}>
					<img src='https://i.ibb.co/jDWJ1L9/me.jpg'/>
				</div>
				<div className={s.content__profile_bio}>
					<div className={s.content__profile_name}>
						Max Skurski</div>
					<ul className={s.content__profile_details}>
						<li className={s.content__profile_detailsitem}>
							Date of Birth: <span>18.01.2003</span>
						</li>
						<li className={s.content__profile_detailsitem}>
							City: <span>Mikolayiv</span>
						</li>
						<li className={s.content__profile_detailsitem}>
							Lifestyle: <span>Self & Web Developer</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo
