let correspond = {
    "title": "Atom 230",
    "core": "BGA437",
    "yearFrom": 2000,
    "yearTo": 2001,
    "auto_overclocking": 1000,
}

let createTable = (data, idTable) => {
    let table = document.getElementById(idTable);
    table.innerHTML = ""

    // Создание заголовков столбцов
    let tr = document.createElement('tr');
    for (let key in data[0]) {
        let th = document.createElement('th');
        th.innerHTML = key;
        tr.appendChild(th);
    }
    table.appendChild(tr);

    data.map((item) => {
        let tr1 = document.createElement('tr');
        for (let key1 in item) {
            let td1 = document.createElement('td');
            td1.innerHTML = item[key1];
            tr1.appendChild(td1);
        }
        table.appendChild(tr1);
    });
}

// document.addEventListener("DOMContentLoaded", function () {
//     createTable(data, 'list');
// });


let dataFilter = (dataForm) => {
    let dictFilter = {};

    for (let j = 0; j < dataForm.elements.length; j++) {
        let item = dataForm.elements[j];
        let valInput = item.value;

        if (item.type == "text") {
            valInput = valInput.toLowerCase();
        }

        if (item.type == "number") {
            // Если значение числовое, преобразуем его в число
            valInput = parseFloat(valInput);
        } else if (valInput === "" && item.id.includes("From")) {
            // Если поле пустое и его id включает "From", заносим "-Infinity"
            valInput = "-Infinity";
        } else if (valInput === "" && item.id.includes("To")) {
            // Если поле пустое и его id включает "To", заносим "+Infinity"
            valInput = "+Infinity";
        }

        dictFilter[item.id] = valInput;
    }
    return dictFilter;
}

let filterTable = (data, idTable, dataForm) => {
    data = convertStringToNumbersInArray(data);
    let datafilter = dataFilter(dataForm);
    let tableFilter = data.filter(item => {
        let result = true;
        for (let key in item) {
            let val = item[key];
            if (typeof val === 'string') {
                val = item[key].toLowerCase();
                if ((datafilter[key]))
                    result = result && val.indexOf((datafilter[key]).toLowerCase()) !== -1;
            }
            else if (typeof val === "number") {
                if (key === "year") {
                    if ((!isNaN(datafilter.yearFrom) && val < datafilter.yearFrom) || (!isNaN(datafilter.yearTo) && val > datafilter.yearTo)) {
                        result = false;
                    }

                }
                else if (key !== "year" && key in datafilter && !isNaN(datafilter[key])) {
                    result &&= val === parseFloat(datafilter[key]);
                }
            }
        }
        return result;
    });
    TMP_TABLE = tableFilter;
    createTable(tableFilter, idTable);
}



function handleFilter() {
    let dataForm = document.getElementById("filterForm");
    filterTable(data, "list", dataForm);
}

// формирование полей элемента списка с заданным текстом и значением 
let createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str; item.value = val;
    return item;
}
// формирование полей со списком из заголовков таблицы 
// параметры – массив из заголовков таблицы и элемент select 7 8 
let setSortSelect = (head, sortSelect) => {

    // создаем OPTION Нет и добавляем ее в SELECT
    sortSelect.append(createOption('Нет', 0));
    // перебираем все ключи переданного элемента массива данных     
    for (let i in head) {
        // создаем OPTION из очередного ключа и добавляем в SELECT        
        // значение атрибута VAL увеличиваем на 1, так как значение 0 имеет опция Нет         
        sortSelect.append(createOption(head[i], Number(i) + 1));
    }
}
//  формируем поля со списком для многоуровневой сортировки 
let setSortSelects = (data, dataForm) => {
    let head = Object.keys(data[0]);
    let allSelect = dataForm.getElementsByTagName('select');
    for (let j = 0; j < allSelect.length; j++) {
        setSortSelect(head, allSelect[j]);
    }

}


// настраиваем поле для следующего уровня сортировки 
let changeNextSelect = (nextSelectId, curSelect) => {
    let nextSelect = document.getElementById(nextSelectId);
    nextSelect.disabled = false;
    // в следующем SELECT выводим те же option, что и в текущем
    nextSelect.innerHTML = curSelect.innerHTML;
    // удаляем в следующем SELECT уже выбранную в текущем опцию
    // если это не первая опция - отсутствие сортировки 
    if (curSelect.value != 0) {
        nextSelect.remove(curSelect.value);
    } else {
        nextSelect.disabled = true;
    }
}

let createSortArr = (data) => {
    let sortArr = [];
    let sortSelects = document.getElementsByTagName('select');
    for (let i = 0; i < sortSelects.length; i++) {
        let keySort = sortSelects[i].value;
        if (keySort == 0) {
            break;
        }
        let desc = document.getElementById(sortSelects[i].id + 'Desc').checked; // Получаем значение флажка "по убыванию"
        sortArr.push({ column: keySort - 1, order: desc }); // Добавляем значение флажка в массив
    }
    return sortArr;
};


let sortTable = (idTable, data) => {
    let sortArr = createSortArr(data);          // сортировать таблицу не нужно, во всех полях выбрана опция Нет 
    if (sortArr.length === 0) { return false; }
    //находим нужную таблицу
    let table = document.getElementById(idTable);
    // преобразуем строки таблицы в массив 
    let rowData = Array.from(table.rows);
    // удаляем элемент с заголовками таблицы
    rowData.shift();
    //сортируем данные по возрастанию по всем уровням сортировки
    rowData.sort((first, second) => {
        for (let i = 0; i < sortArr.length; i++) {
            console.log(sortArr[i].order)
            let key = sortArr[i].column;
            if (sortArr[i].order && key) {
                
                if (first.cells[key].innerHTML > second.cells[key].innerHTML) {
                    return -1;
                } else if (first.cells[key].innerHTML < second.cells[key].innerHTML) {
                    return 1;
                }
            } else {
                if (first.cells[key].innerHTML > second.cells[key].innerHTML) {
                    return 1;
                } else if (first.cells[key].innerHTML < second.cells[key].innerHTML) {
                    return -1;
                }
            }
        } return 0;
    });
    //выводим отсортированную таблицу на страницу 
    table.innerHTML = table.rows[0].innerHTML;
    rowData.forEach(item => {
        table.append(item);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Получаем форму с id "sort" и данные, которые вы хотите использовать для создания полей выбора
    let dataForm = document.getElementById('sort');

    // Вызываем функцию setSortSelects для создания полей выбора сортировки
    setSortSelects(data, dataForm);
});

document.addEventListener('DOMContentLoaded', function () {
    let dataForm = document.getElementById('sort');

    setSortSelects(data, dataForm);

    // Получаем первое поле сортировки
    let fieldsFirstSelect = document.getElementById('fieldsFirst');

    // Добавляем обработчик события изменения для первого поля сортировки
    fieldsFirstSelect.addEventListener('change', function () {
        // Получаем ID следующего поля сортировки
        let nextSelectId = 'fieldsSecond';

        // Вызываем функцию changeNextSelect, передавая ID следующего поля и текущий элемент SELECT
        changeNextSelect(nextSelectId, this);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let dataForm = document.getElementById('sort');
    setSortSelects(data, dataForm);

    // Получаем кнопку "Сортировать"
    let sortButton = document.querySelector('input[type="button"][value="Сортировать"]');

    // Добавляем обработчик события клика на кнопку "Сортировать"
    sortButton.addEventListener('click', function () {
        // Вызываем функцию sortTable(), передавая ID таблицы и данные из формы с настройками сортировки
        //createTable(data, 'list')
        sortTable("list", data);
    });
});


document.getElementById('restart').addEventListener('click', function () {
    // Вызываем функцию sortTable(), передавая ID таблицы и данные из формы с настройками сортировки
    createTable(data, 'list')
});