"use strict"

function addRow()
{
    // Считываем значения с формы
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const age = document.getElementById("age").value;

    // Находим таблицу
    const tbody = document.getElementById("employees-table").getElementsByTagName('TBODY')[0];

    // Создаем строку таблицы и добавляем ее
    let row = document.createElement("TR");
    tbody.appendChild(row);

    // Создаем ячейки в вышесозданной строке
    // и добавляем тх
    const td1 = document.createElement("TD");
    const td2 = document.createElement("TD");
    const td3 = document.createElement("TD");
    const td4 = document.createElement("TD");
    const td5 = document.createElement("TD");


    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    // Наполняем ячейки
    td2.innerHTML = name;
    td3.innerHTML = position;
    td5.innerHTML = age;
}

function loadPage() {
  const btn = document.querySelector(".add-btn");
  btn.onclick = addRow;
  btn.style.backgroundColor = "#3333"

}
