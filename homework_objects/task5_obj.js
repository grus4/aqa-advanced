const users = [
	{
		userName: "Mykola",
		age: 30,
		email: "ko30@gmail.com",
		address: {
			street: "Upa street",
			building: "8a",
		},
	},
	{
		userName: "Don",
		age: 38,
		email: "test38@gmail.com",
		address: {
			street: "Verhnia street",
			building: "10",
		},
	},
	{
		userName: "Kate",
		age: 18,
		email: "kate18@gmail.com",
		address: {
			street: "Zelena street",
			building: "20",
		},
	},
];

for (const {
	userName,
	age,
	email,
	address: { street, building },
} of users) {
	console.log(`${userName} is ${age} years old, who has email: ${email} and live on the ${street}, ${building}`);
}
