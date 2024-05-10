function checkPage(data) {
    let out = d3.select("#output");
    out.selectAll("a").remove();

    const menuItems = d3.selectAll(".menu a").data().map(d => d.textContent);

    out.selectAll("a")
        .data(data.filter(language => !menuItems.includes(language)))
        .enter()
        .append("a")
        .attr("href", "#")
        .text(d => d);
}
