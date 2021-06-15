import React, { useEffect, useState } from "react"
import Preloader from "../../Common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"

const ProfileStatus = props => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState("")

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

	const onStatusChange = e => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div className={s.content__profile_status}>
			{editMode ? (
				<div className={s.status__input}>
					<input
						onChange={onStatusChange}
						autoFocus={true}
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>
			) : (
				<div className={s.status__span}>
					<span onDoubleClick={activateEditMode}>
						{props.status || "-----"}
					</span>
					<hr />
				</div>
			)}
		</div>
	)
}

// const ProfileStatus = props => {
// 	let state = {
// 		editMode: false,
// 		status: props.status,
// 	}

// 	let activateEditMode = () => {
// 		state.editMode = true
// 	}

// 	let deactivateEditMode = () => {
// 		state.editMode = false
// 		props.updateStatus(state.status)
// 	}

// 	let onStatusChange = e => {
// 		state.status = e.currentTarget.value
// 	}

// 	return (
// 		<div className={s.content__profile_status}>
// 			{!state.editMode && (
// 				<div className={s.status__span}>
// 					<span onDoubleClick={activateEditMode}>
// 						{props.status || "-----"}
// 					</span>
// 					<hr />
// 				</div>
// 			)}
// 			{state.editMode && (
// 				<div className={s.status__input}>
// 					<input
// 						onChange={onStatusChange}
// 						autoFocus={true}
// 						onBlur={deactivateEditMode}
// 						value={state.status}
// 					/>
// 				</div>
// 			)}
// 		</div>
// 	)
// }

// class ProfileStatus extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			editMode: false,
// 			status: props.status,
// 		}
// 		// this.activateEditMode = this.activateEditMode.bind(this)
// 		// this.deactivateEditMode = this.deactivateEditMode.bind(this)
// 		// this.onStatusChange = this.onStatusChange.bind(this)
// 	}

// 	activateEditMode = () => {
// 		debugger
// 		this.setState({
// 			editMode: true,
// 		})
// 	}

// 	deactivateEditMode = () => {
// 		console.log(this)
// 		this.setState({
// 			editMode: false,
// 		})
// 		this.props.updateStatus(this.state.status)
// 	}

// 	// if (!props.profile) {
// 	// 	return <Preloader />
// 	// }
// 	onStatusChange = e => {
// 		this.setState = {
// 			status: e.currentTarget.value,
// 		}
// 	}

// 	render() {
// 		console.log("this raven", this)
// 		return (
// 			<div className={s.content__profile_status}>
// 				{!this.state.editMode && (
// 					<div className={s.status__span}>
// 						<span onDoubleClick={this.activateEditMode}>
// 							{this.props.status || "-----"}
// 						</span>
// 						<hr />
// 					</div>
// 				)}
// 				{this.state.editMode && (
// 					<div className={s.status__input}>
// 						<input
// 							onChange={this.onStatusChange}
// 							autoFocus={true}
// 							onBlur={this.deactivateEditMode}
// 							value={this.state.status}
// 						/>
// 					</div>
// 				)}
// 			</div>
// 		)
// 	}
// }

export default ProfileStatus
