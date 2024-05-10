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


    function spiralCoordinate(theta) {
        let radius = theta * 5;
        let x = centerX + radius * Math.cos(theta);
        let y = centerY + radius * Math.sin(theta);
        return { x: x, y: y };
    }

    let numPoints = numSpiralTurns * 40;
    let angleStep = Math.PI / 20;
    let spiralPath = d3.path();
    for (let i = 0; i <= numPoints; i++) {
        let theta = i * angleStep;
        let { x, y } = spiralCoordinate(theta);
        if (i === 0) {
            spiralPath.moveTo(x, y);
        } else {
            spiralPath.lineTo(x, y);
        }
    }

    svg.append("path")
        .attr("d", spiralPath.toString())
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("stroke-width", 2);


    svg.append("image")
        .attr("xlink:href", "./inspiration-svgrepo-com (1).svg")
        .attr("width", imageSize)
        .attr("height", imageSize)
        .attr("transform", "translate(" + (centerX - imageSize / 2) + "," + (centerY - imageSize / 2) + ")");

    svg.select("image").transition()
        .duration(duration)
        .attrTween("transform", function () {
            return function (t) {
                let theta = t * 2 * Math.PI * numSpiralTurns;
                let { x, y } = spiralCoordinate(theta);
                return "translate(" + (x - imageSize / 2) + "," + (y - imageSize / 2) + ")";
            };
        });
}
function clear(){
    d3.select("svg").html(null)
}

document.getElementById("startButton").addEventListener("click", startAnimation);
document.getElementById("clear").addEventListener("click", clear);
