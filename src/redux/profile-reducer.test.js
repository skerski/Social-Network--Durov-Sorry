import profileReducer, { addPostActionCreator, removePostActionCreator } from "./profile-reducer"

let state = {
	posts: [
		{
			likes: 0,
			img: "https://jooinn.com/images/woman-1.jpg",
			text:
				"Hi Max, are you awaited for strolling all the summers nights or you choose your Front-end again?",
			id: 0,
		},
		{
			likes: 15681,
			img: "https://jooinn.com/images/man-20.jpg",
			text:
				"New app is cool, Durov sorry but it just seems when you are getting older you cant handle everything as before. It's a new day, it's a new life  x)",
			id: 1,
		},
		{
			likes: 207222,
			img: "https://jooinn.com/images/man-9.jpg",
			text: "Bitcoin will hit 100k until 2022",
			id: 2,
		},
	],
}

it("length of posts should be incremented", () => {
	let action = addPostActionCreator("uzi van gog v dzhak")

	let newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(4)
})

it("after post removed posts length should be decremented", () => {
	let action = removePostActionCreator(1)

	let newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(4)
})
