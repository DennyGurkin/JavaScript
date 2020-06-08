/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

let min_number = prompt("Введите нижнюю границу диапазона (целое число от 0 до 999): ")
let max_number = prompt("Введите верхнюю границу диапазона (целое число от 0 до 999): ")

function randomnumber(min_number, max_number) {
    return Math.floor(Math.random() * (max_number - min_number) + min_number)
}

function random_obj(units, tens, hundereds) {
    this.units = units;
    this.tens = tens;
    this.hundereds = hundereds;
}

function printmyobject(){
    let random_array = String(randomnumber(min_number, max_number)).split("")
    const random1 = new random_obj(random_array[0], random_array[1], random_array[2])
    return console.log(random1)
}

if (max_number < min_number){
    alert("Вы перепутали границы диапазона, попробуйте еще раз")
    throw new Error("Некорректный диапазон")
}
else if (!Number.isInteger(min_number)&&Number.isInteger(max_number))
{
    alert("Введите целочисленное значение")
    throw new Error("Введено не число")
}
alert(`Выполнено!${printmyobject()}`)