import dialogsReducer, { addMessageActionCreator, removeMessageActionCreator } from "./dialogs-reducer"

let state = {
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

it('length of messages gotta be incremented', () => {
	let action = addMessageActionCreator("polgorod")

	let newState = dialogsReducer(state, action)

	expect(newState.messages.length).toBe(5)
})

it('after message will be removed array length should be decremented', () => {
	let action = removeMessageActionCreator(2)

	let newState = dialogsReducer(state, action)

	expect(newState.messages.length).toBe(3)
})