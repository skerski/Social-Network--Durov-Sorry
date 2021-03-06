const ADD_MESSAGE = "ADD_MESSAGE"
const REMOVE_MESSAGE = "REMOVE_MESSAGE"

let initialState = {
	dialogs: [
		{
			id: 0,
			name: "Satoshi",
			img: "https://i.ytimg.com/vi/BoboO6QPGow/maxresdefault.jpg",
		},
		{
			id: 1,
			name: "Max",
			img:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU77dTys0GIjRKC4qna-1cFvvl1zP_dPW_eLteJM4HZaPHnwTsNzlcCpZNGZPx_SVfYEM&usqp=CAU",
		},
		{
			id: 2,
			name: "Antonio",
			img:
				"https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg",
		},
		{
			id: 3,
			name: "John",
			img:
				"https://www.pngkey.com/png/detail/55-556528_pic-avatars-for-jira-star-wars.png",
		},
	],
	messages: [
		{ id: 0, message: "Hi" },
		{ id: 1, message: "Hi" },
		{ id: 2, message: "Why the fuck you did that?" },
		{
			id: 3,
			message: "it was a random missile, dude",
		},
	],
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let text = action.newMessageText
			let newMessage = {
				id: state.messages.length,
				message: text,
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
			}
		case REMOVE_MESSAGE:
			return {
				...state,
				messages: state.messages.filter(mes => mes.id != action.messageId),
			}
		default:
			return state
	}
}

export const addMessageActionCreator = (newMessageText) => ({
	type: ADD_MESSAGE,
	newMessageText
})

export const removeMessageActionCreator = (messageId) => ({
	type: REMOVE_MESSAGE,
	messageId
})

export default dialogsReducer
