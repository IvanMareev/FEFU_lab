let width = 500;
let height = 500;
let centerX = width / 2;
let centerY = height / 2;
let numSpiralTurns = 6;
let duration = 10000;
let imageSize = 100;
let svg = d3.select("span")
    .append("svg")
    .attr("height", height)
    .attr("width", width)


function startAnimation() {
    numSpiralTurns = parseFloat(document.getElementById("num_spiral").value);
    duration = parseFloat(document.getElementById("speed").value);
    imageSize = parseFloat(document.getElementById("size_picture").value);

    function sineCoordinate(y) {
        let x = centerX + 100 * Math.sin(y / 50); // Масштабируем x на 100 для лучшей визуализации, y/50 для увеличения частоты
        let yTransformed = centerY + y; // Просто смещаем по y
        return { x: x, y: yTransformed };
    }

    let numPoints = numSpiralTurns * 40;
    let yValues = d3.range(-height / 2, height / 2, height / numPoints); // Генерируем значения y с равным интервалом
    let sinePath = d3.path();
    console.log(yValues)
    yValues.forEach(function (y, i) {
        let { x, y: yTransformed } = sineCoordinate(y);
        if (i === 0) {
            sinePath.moveTo(x, yTransformed);
        } else {
            sinePath.lineTo(x, yTransformed);
        }
    });
    

    svg.append("path")
        .attr("d", sinePath.toString())
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 2);

    svg.select("image").remove(); // Удаляем предыдущее изображение, если оно уже было добавлено

    svg.append("image")
        .attr("xlink:href", "./inspiration-svgrepo-com (1).svg")
        .attr("width", imageSize)
        .attr("height", imageSize)
        .attr("transform", "translate(" + (centerX - imageSize / 2) + "," + (centerY - imageSize / 2) + ")");

    svg.select("image").transition()
        .duration(duration)
        .attrTween("transform", function () {
            return function (t) {
                let y = t * height - height / 2; // Переводим t в значение y в интервале от -250 до 250
                let { x, y: yTransformed } = sineCoordinate(y);
                return "translate(" + (x - imageSize / 2) + "," + (yTransformed - imageSize / 2) + ")";
            };
        });
}



function clear() {
    d3.select("svg").html(null)
}

document.getElementById("startButton").addEventListener("click", startAnimation);
document.getElementById("clear").addEventListener("click", clear);
