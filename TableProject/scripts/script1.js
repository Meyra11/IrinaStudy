"use strict"

let mainData = [];
let sort = 0;

const renderTable = (tableData) => {
    const tbody = document.getElementById("employees-table").getElementsByTagName('TBODY')[0];
    tbody.innerHTML = ""

    tableData.map((item) => {

        let row = document.createElement("TR");
        row.classList.add("employees-row");
        tbody.appendChild(row);

        for(let key in item) {
            if(key === "isChecked"){
                const checkbox = document.createElement('input')
                checkbox.setAttribute("type", "checkbox")
                row.appendChild(document.createElement("TD")).appendChild(checkbox);
            } else if(key === "id"){
                row.appendChild(document.createElement("TD")).innerHTML = item[key];
            } else {
                const input = document.createElement('input')
                input.setAttribute("type", "text")
                input.setAttribute("disabled", "true")
                input.setAttribute("class", "disabled")
                input.setAttribute("value", item[key])

                row.appendChild(document.createElement("TD")).appendChild(input);
            }
        }

        document.querySelector(".img-up").hidden = sort <= 0;
        document.querySelector(".img-down").hidden = sort >= 0;

        /*
        // TODO сделать цикл DRY
        const td1 = document.createElement("TD");
        const td2 = document.createElement("TD");
        const td3 = document.createElement("TD");
        const td4 = document.createElement("TD");
        const td5 = document.createElement("TD");

        // TODO сделать цикл DRY
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);

        // Наполняем ячейки
        // TODO сделать цикл DRY
        td1.innerHTML = item.id;
        td2.innerHTML = item.name;
        td3.innerHTML = item.position;
        td4.innerHTML = item.gender;
        td5.innerHTML = item.age;
        */
    })
}


function addRow()
{
    // Считываем значения с формы
    const name = document.getElementById("name");
    const position = document.getElementById("position");
    const gender = document.getElementById("gender");
    const age = document.getElementById("age");

    const newObj = [{"id": mainData.length + 1, "name": name.value, "position": position.value, "gender": gender.value, "age": age.value}]
    mainData = mainData.concat(newObj)

    name.value = "";
    position.value = "";
    gender.value = "m";
    age.value = "";

    renderTable(mainData)

    // TODO добавить очистку полей ввода

}

const handleSort = (field) => {
    if(sort <= 0) {
      handleSortIncrease(field)
    }
    else handleSortDecrease(field);
}

const handleSortIncrease = (field) => {
    sort = 1;
    renderTable(mainData.sort((a, b) => {
        if(a[field] < b[field]) {
           return -1
        } else if(a[field] > b[field]){
            return 1
        } else {
            return 0
        }
    }))
    //e.stopPropagation();
    // TODO изменить изображения
}

const handleSortDecrease = (field) => {
    sort = -1;
    renderTable(mainData.sort((a, b) => {
        if(a[field] < b[field]) {
           return 1
        } else if(a[field] > b[field]){
            return -1
        } else {
            return 0
        }
    }))
    //e.stopPropagation();
    // TODO изменить изображения
}

const filterData = () => {
    renderTable(mainData.filter(function filterInputData(item) {
        for(let key in item) {
            if(item[key].toLowerCase().indexOf(document.getElementById("search").value) >= 0) return true;
        }
        return item.name.toLowerCase().indexOf(document.getElementById("search").value) >= 0;
    }))
}

function loadPage() {
    const btn = document.querySelector(".add-btn");
    btn.onclick = addRow;
    btn.style.backgroundColor = "#3333"

    fetch('https://gist.githubusercontent.com/Greyewi/c339c8b4f785a27471b42d46a5d076ab/raw/2e984b50e5e0065d70d1656abc7b69173570f063/Irina_table.json')
      .then(response => response.json())
      .then(result => renderTable(mainData = result))

    const rowTitles = document.querySelectorAll(".employees-th-item")

    for(let i = 0; i < rowTitles.length; i++){
        rowTitles[i].addEventListener("click", event => handleSort(event.target.getAttribute('name')));
    }
}
