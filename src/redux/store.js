import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
	_state: {
		profilePage: {
			posts: [
				{
					likes: 15,
					img:
						"https://i.dailymail.co.uk/i/pix/2014/04/09/article-2599775-6OgQfEryD-HSK1-700_634x796.jpg",
					text:
						"Hi Max, are you awaited for strolling all the summers night or you choose your Front-end again?",
				},
				{
					likes: 200,
					img: "https://jooinn.com/images/man-20.jpg",
					text: "Its my new app, trying to forget about the semicolons.... x)",
				},
			],
			newPostText: "it-kamasurta.comn",
		},
		dialogsPage: {
			dialogs: [
				{
					id: 1,
					name: "Satoshi",
					img: "https://i.ytimg.com/vi/BoboO6QPGow/maxresdefault.jpg",
				},
				{
					id: 2,
					name: "Max",
					img:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU77dTys0GIjRKC4qna-1cFvvl1zP_dPW_eLteJM4HZaPHnwTsNzlcCpZNGZPx_SVfYEM&usqp=CAU",
				},
				{
					id: 3,
					name: "Antonio",
					img:
						"https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg",
				},
				{
					id: 4,
					name: "John",
					img:
						"https://www.pngkey.com/png/detail/55-556528_pic-avatars-for-jira-star-wars.png",
				},
			],
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "Hi" },
				{ id: 3, message: "Why the fuck you did that?" },
				{
					id: 4,
					message: "it was a random missile, dude",
				},
			],
			newMessageText: "",
		},
		sidebar: {
			friends: [
				{
					id: 1,
					img:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU77dTys0GIjRKC4qna-1cFvvl1zP_dPW_eLteJM4HZaPHnwTsNzlcCpZNGZPx_SVfYEM&usqp=CAU",
				},
				{
					id: 2,
					img:
						"https://www.pngkey.com/png/detail/55-556528_pic-avatars-for-jira-star-wars.png",
				},
				{
					id: 3,
					img:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXekXqlRLcY7qxe99QZ-hBoSXg7QaelC1Egg&usqp=CAU",
				},
			],
		},
	},

	_callSubscriber() {
		console.log("Store was changed")
	},

	getState() {
		return this._state
	},

	subscribe(observer) {
		this._callSubscriber = observer // observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	},
}

export default store
window.state = store
