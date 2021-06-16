import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/auth-reducer"
import { required } from "../../utils/validators/validators"
import { Input } from "../Common/FormsControls/FormsControls"
import s from "./Login.module.css"
import styleForm from "../Common/FormsControls/FormsControls.module.css"

const LoginForm = props => {
	return (
		<form className={s.form} onSubmit={props.handleSubmit}>
			<div>
				<Field
					className={s.input}
					placeholder={"Email"}
					name={"email"}
					component={Input}
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					className={s.input}
					placeholder={"Password"}
					name={"password"}
					type={"password"}
					component={Input}
					validate={[required]}
				/>
			</div>

			<div className={s.rememberMe}>
				<Field type={"checkbox"} name={"rememberMe"} component={Input} />
				<span>remember me</span>
			</div>
			{props.error && (
				<div className={styleForm.formSummaryError}>
					{props.error}
				</div>
			)}
			<div>
				<button className={s.button}>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
