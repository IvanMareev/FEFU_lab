let buildings = data
d3.select(document).on('DOMContentLoaded', function () {
    drawGraph(document.getElementById("graphic"))
});

d3.select("#showTable")
    .on('click', function () {
        let buttonValue = d3.select(this);

        if (buttonValue.property("value") === "Показать таблицу") {

            buttonValue.attr("value", "Скрыть таблицу");

            // Выбираем таблицу
            let table = d3.select("#list");

            // Создаем заголовок таблицы
            let thead = table.append("thead");

            // Выбираем строки данных
            let rows = table.selectAll("tr")
                .data(data)
                .enter()
                .append('tr');

            // Создаем заголовки столбцов на основе ключей данных
            let headers = thead.append("tr")
                .selectAll("th")
                .data(d => Object.keys(data[0]))
                .enter()
                .append("th")
                .text(d => d);

            // Создаем ячейки каждой строки на основе каждого элемента массива books
            let cells = rows.selectAll("td")
                .data(d => Object.values(d))
                .enter()
                .append("td")
                .text(d => d);



        } else {
            buttonValue.attr("value", "Показать таблицу");

            d3.select("#list").html('')

        }
        console.log()
    });

function createArrGraph(data, key) {
    let rollupObj = d3.rollup(data,
        group => {
            let extent = d3.extent(group, d => d['auto_overclocking']);
            let mean = d3.mean(group, d => d['auto_overclocking']);
            return [extent[0], extent[1], mean];
        },
        d => d[key]
    );

    let arrGraph = Array.from(rollupObj, ([labelX, values]) => ({ labelX, values }));

    return arrGraph;
}



const marginX = 50;
const marginY = 50;
const height = 400;
const width = 800;

let svg = d3.select("svg")
    .attr("height", height)
    .attr("width", width);

function drawGraph(data) {


    // значения по оси ОХ 
    const keyX = data.ox.value;
    // значения по оси ОУ  
    const isE = data.oy[2].checked;
    const isMin = data.oy[1].checked;
    const isMax = data.oy[0].checked;
    if (!isMin && !isMax && !isE) {
        alert("выберете одну котрегорию")
        return
    }
    // создаем массив для построения графика  
    const arrGraph = createArrGraph(buildings, keyX);
    svg.selectAll('*').remove();
    // создаем шкалы преобразования и выводим оси  
    const [scX, scY] = createAxis(arrGraph, isMin, isMax, isE);
    // рисуем графики  
    if (data.graphType[1].checked) {
        if (isMax) {
            createChartDot(arrGraph, scX, scY, 1, "blue")
        }
        if (isE) {
            createChartDot(arrGraph, scX, scY, 2, "green")
        }
        if (isMin) {
            createChartDot(arrGraph, scX, scY, 0, "red")
        }

    }
    if (data.graphType[0].checked) {
        if (isMax) {
            createChartColumn(arrGraph, scX, scY, 1, "blue")
        }
        if (isE) {
            createChartColumn(arrGraph, scX, scY, 2, "green")
        }
        if (isMin) {
            createChartColumn(arrGraph, scX, scY, 0, "red")
        }

    }
}

function createAxis(data, isFirst, isSecond) {
    // находим интервал значений по оси OY   
    let firstRange = d3.extent(data.map(d => d.values[0]));
    let secondRange = d3.extent(data.map(d => d.values[1]));
    let min = firstRange[0];
    let max = secondRange[1];

    // функция интерполяции значений на оси     
    let scaleX = d3.scaleBand()
        .domain(data.map(d => d.labelX))
        .range([0, width - 2 * marginX]);

    let scaleY = d3.scaleLinear()
        .domain([min * 0.85, max * 1.1])
        .range([height - 2 * marginY, 0]);

    // создание осей
    let axisX = d3.axisBottom(scaleX);
    // горизонтальная   
    let axisY = d3.axisLeft(scaleY);
    // вертикальная      
    // отрисовка осей в SVG-элементе
    svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY-40})`)
        .call(axisX)
        .selectAll("text") // подписи на оси - наклонные         
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", d => "rotate(-45)");
    svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .call(axisY)


    return [scaleX, scaleY];
}


function createChartDot(data, scaleX, scaleY, index, color) {
    const r = 4
    // чтобы точки не накладывались, сдвинем их по вертикали     
    let ident = (index == 0) ? -r / 2 : r / 2;
    svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("circle")

        .attr("r", r)

        .attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth())
        .attr("cy", d => scaleY(d.values[index]) + ident)


        .style("fill", color)
}

function createChartColumn(data, scaleX, scaleY, index, color) {
    const r = 40;

    svg.selectAll(".dot")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", r)
        .attr("height", d => height - scaleY(d.values[index]))
        .attr("x", d => scaleX(d.labelX) + scaleX.bandwidth() / 3.3)
        .attr("y", d => scaleY(d.values[index]) -20) // Поднимаем столбец
        .attr("transform", `translate(${marginX}, ${marginY - 120})`)
        .attr("fill", color);
}
