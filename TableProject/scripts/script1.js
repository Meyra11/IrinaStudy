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

        for(let key in item)
        {
          (row.appendChild(document.createElement("TD"))).innerHTML = item[key];
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

const handleSort = (e, field) => {
    if(sort <= 0) {
      handleSortIncrease(e, field)
    }
    else handleSortDecrease(e, field);
}

const handleSortIncrease = (e, field) => {
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

const handleSortDecrease = (e, field) => {
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

const filterData = (searchStr) => {
    renderTable(mainData.filter(function filterInputData(item) {
        for(let key in item)
        {
            if(String(item[key]).toLowerCase().indexOf(document.getElementById(searchStr).value) >= 0) return true;
        }
        return item.name.toLowerCase().indexOf(document.getElementById(searchStr).value) >= 0;
    }))
}

function loadPage() {
    const btn = document.querySelector(".add-btn");
    btn.onclick = addRow;
    btn.style.backgroundColor = "#3333"

    fetch('https://gist.githubusercontent.com/Greyewi/c339c8b4f785a27471b42d46a5d076ab/raw/f236135f1d7cf57dd71aca6d5d92301ae46f2142/Irina_table.json')
      .then(response => response.json())
      .then(result => renderTable(mainData = result))

    //document.querySelector(".employees-th-item").addEventListener("click", handleSort(event, 'id'));

}
