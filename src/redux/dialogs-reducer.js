const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const ADD_MESSAGE = "ADD_MESSAGE"

let initialState = {
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
	newMessageText: "ziplk",
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: state.messages.length,
				message: state.newMessageText,
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
				newMessageText: '',
			}

		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newText
			}

		default:
			return state
	}
}

export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE,
})

export const updateNewMessageTextActionCreator = text => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text,
})

export default dialogsReducer
