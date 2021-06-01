let initialState = {
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
}

const sidebarReducer = (state = initialState, action) => {
	return state
}

export default sidebarReducer
