import React, { useEffect, useState } from "react"
import Preloader from "../../Common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"

const ProfileStatus = props => {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)
	
	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onInputChange = e => {
		setStatus(e.target.value)
	}

	if (!props.status) {
		return <Preloader	 />
	}

	return (
		<div className={s.content__profile_status}>
			{!editMode && (
				<div className={s.status__span}>
					<span onClick={activateEditMode}>{props.status || "-----"}</span>
					<hr />
				</div>
			)}
			{editMode && (
				<div className={s.status__input}>
					<input
						onChange={onInputChange}
						onBlur={deactivateEditMode}
						autoFocus={true}
						value={status}
					/>
				</div>
			)}
		</div>
	)
}

export default ProfileStatus
