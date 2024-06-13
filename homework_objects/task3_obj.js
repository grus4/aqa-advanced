const car1 = {
	brand: 'Ford',
	model: 'Fiesta',
	year: '2017',
};

const car2 = {
	brand: 'Honda',
	model: 'Civic',
	year: '2022',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
