let avarageGrade = 101;

if (avarageGrade == null || avarageGrade == undefined || avarageGrade == '') {
    console.log("Помилка в визначенні середньої оцінки - не є числом");
} else if (avarageGrade < 60) {
    console.log("Незадовільно");
} else if (avarageGrade >= 60 && avarageGrade <= 70) {
    console.log("Задовільно");
} else if (avarageGrade > 70 && avarageGrade <= 80) {
    console.log("Добре");
} else if (avarageGrade > 80 && avarageGrade <= 90) {
    console.log("Дуже добре");
} else if (avarageGrade > 90 && avarageGrade <= 100) {
    console.log("Відмінно");
} else {
    console.log("Невірна оцінка");
}