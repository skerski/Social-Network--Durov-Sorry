import React from "react"
import store from "../../redux/store"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = props => {
	console.log('profile store', props);
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer store={props.store} />
		</div>
	)
}

export default Profile
