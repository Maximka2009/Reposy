alert("Это - тест по языку HTML.")
let score = 0;
let q1 = prompt("Самый лёгкий вопрос: HTML это язык программирования?\na)Да\nb)Нет\nc)Тут нету правильного ответа");
if (q1 == "b") {
    score + 2;
    alert("Молодець! Так держать");
}
else {
    alert("Жаль, что ты ошибаешся:(");
    score - 2;
}
let q2 = prompt("Что может делать HTML?\na)Добавлять контент на вэб-страницу\nb)Добавлять стиль\nc)Добавлять динамику странице\nd)Всё выше сказаное");

if (q2 == "a") {
    score + 2;
    alert("Молодець! Так держать");
}
else {
    alert("Жаль, что ты ошибаешся:(");
    score - 2;
}
let q3 = prompt("В тег <boby> вписывается...\na)Meta данные, подключаемые стили и т.д.\nb)Весь контент\nc)Нету такого тега\nd)В названии тега ошибка");
if (q3 == "d") {
    score + 2;
    alert("Молодець! Так держать");
}
else {
    alert("Жаль, что ты ошибаешся:(");
    score - 2;
}
let q4 = prompt("Есть ли в HTML СТРУКТУРА кода\na)Есть\nb)Нету\nc)Что такое структура?\nd)Что такое HTML?");
if (q4 == "a") {
    score + 2;
    alert("Молодець! Так держать");
}
else {
    alert("Жаль, что ты ошибаешся:(");
     score - 2;
}
let q5 = prompt("Какой из этих тегов был добавлен в html5\na)<dialog></dialog>\nb)<meta>\nc)<link>\nd)Всё не правильно\ne)всё правильно");

if (q5 == "a") {
    score + 2;
    alert("Молодець! Так держать");
}
else {
    alert("Жаль, что ты ошибаешся:(");
    score - 2;
}
let q6 = prompt("Какой из тегов подключает CSS\na)<linc>\nb)<link></link>\nc)<linkk>d)\nCSS не существует\ne)<link>");

if (q6 == "e") {
    score + 2;
    alert("Молодець! Так держать");
}
else {
    alert("Жаль, что ты ошибаешся:(");
    score - 2;
}