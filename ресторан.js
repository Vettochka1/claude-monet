function help() {
	var tg = "@helper1";
	var tel = "89162737251";
	alert('telegram:' + tg +'\nТелефон:' + tel)
}
function box() {
	prompt('Пожелания к блюду');
	alert('Ваш товар добавлен в корзину.')
}
function rezerv() {
	alert('Ваш стол забронирован.С Вами свяжется менеджер.')
}
function calc() {
	var a = parseFloat(prompt('Введите первое число'));
	var b = prompt('Введите второе число');
	var b = parseFloat(b);
	var sum = a + b;
	var razn = a - b;
	var del = a / b;
	var ymn = a * b;
	alert('Сумма '+ sum);
	alert('Разность '+ razn);
	alert('Деление '+ del);
	alert('Умножение '+ ymn);
}

