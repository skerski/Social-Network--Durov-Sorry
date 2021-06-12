import * as axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseUrl: "https://social-network.samuraijs.com/api/1.0/",
	headers: { "API-KEY": "88df3cb1-2802-4ecf-a1e7-badc4ac9784d" },
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
			)
			.then(response => {
				return response.data
			})
	},

	followUser(userId) {
		return instance.post(
			`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
		)
	},

	unfollowUser(userId) {
		return instance.delete(
			`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
		)
	},
	getProfile(userId) {
		return instance.get(
			`https://social-network.samuraijs.com/api/1.0/profile/${userId}`
		)
	},
}

export const authAPI = {
	me() {
		return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
	},
}
