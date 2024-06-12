const avarageGrade = 96;

switch (true) {
	case avarageGrade == null || avarageGrade == undefined || avarageGrade == '':
		console.log('Помилка в визначенні середньої оцінки - не є числом');
		break;
	case avarageGrade < 60:
		console.log('Незадовільно');
		break;
	case avarageGrade >= 60 && avarageGrade <= 70:
		console.log('Задовільно');
		break;
	case avarageGrade > 70 && avarageGrade <= 80:
		console.log('Добре');
		break;
	case avarageGrade > 80 && avarageGrade <= 90:
		console.log('Дуже добре');
		break;
	case avarageGrade > 90 && avarageGrade <= 100:
		console.log('Відмінно');
		break;
	default:
		console.log('Невірна оцінка');
}
