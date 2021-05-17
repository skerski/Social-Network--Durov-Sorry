import React from "react"

const Profile = () => {
	return (
		<div className='content'>
			<div className='content__head'>
				<img src='https://cdn.turkishairlines.com/m/3f9a1548ee9de341/original/1400-660-jpg.jpg' />
			</div>
			<div className='content__profile'>
				<div className='content__profile-avatar'>
					<img src='https://i.ibb.co/jDWJ1L9/me.jpg' />
				</div>
				<div className='content__profile-bio'>
					<div className='content__profile-name'>Max Skurski</div>
					<ul className='content__profile-details'>
						<li className='content__profile-detailsitem'>
							Date of Birth: <span>18.01.2003</span>
						</li>
						<li className='content__profile-detailsitem'>
							City: <span>Mikolayiv</span>
						</li>
						<li className='content__profile-detailsitem'>
							Lifestyle: <span>Self & Web Developer</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='content__posts'>
				<div className='content__posts-head'>
					<div className='content__posts-title'>My posts</div>
					<input
						className='content__posts-input'
						placeholder='your news...'></input>
					<button className='content__posts-btn'>Send</button>
				</div>
				<div className='content__posts-body'>
					<div className='content__posts-post'>
						Hi Max, do you wait for strolling all the summer's night?
					</div>
					<div className='content__posts-post'>
						It's my new app, trying to forget about semicolons.... xD
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
