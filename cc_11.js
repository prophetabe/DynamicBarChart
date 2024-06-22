//U81623325
const data = [100, 420, 230, 850, 560, 925];


const width = 500;
const barHeight = 20;
const margin = 1;
const height = (barHeight + margin) * data.length;


const svg = d3.select("#chart")
  .attr("width", width)
  .attr("height", height);


const xScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([50, width - 50]);


const barGroups = svg.selectAll("g")
  .data(data)
  .enter().append("g")
  .attr("transform", (d, i) => `translate(0, ${i * (barHeight + margin)})`);


barGroups.append("rect")
  .attr("class", "bar")
  .attr("width", 0)
  .attr("height", barHeight)
  .transition()
  .duration(800)
  .attr("width", d => xScale(d));


barGroups.append("text")
  .attr("x", d => xScale(d) - 3)
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text(d => d);


barGroups.selectAll("rect")
  .on("mouseover", function() {
    d3.select(this).attr("fill", "orange");
  })
  .on("mouseout", function() {
    d3.select(this).attr("fill", "steelblue");
  });