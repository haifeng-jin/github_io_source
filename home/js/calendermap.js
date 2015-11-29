var width = 900,
    height = 120,
    cellSize = 15; // cell size
    month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    color = ["#eeeeee","#b5cdbc","#81ab8a","#508957","#1e6823"];
    range = [0,1,2,3,4];
	
var day = d3.time.format("%w"),
    week = d3.time.format("%U"),
    percent = d3.format(".1%"),
	format = d3.time.format("%Y%m%d");
	parseDate = d3.time.format("%Y%m%d").parse;
		
   
var svg = d3.select(".calender-map").selectAll("svg")
    .data(d3.range(2015, 2016))
  .enter().append("svg")
    .attr("width", '100%')
    .attr("data-height", '0.5678')
    .attr("viewBox",'0 0 ' + width + ' ' + height)
    .attr("class", "RdYlGn")
  .append("g")
    .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

svg.append("text")
    .attr("transform", "translate(-10," + cellSize * 3.5 + ")rotate(-90)")
    .style("text-anchor", "middle")
    .text(function(d) { return d; });
 

var rect = svg.selectAll(".day")
    .data(function(d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
  .enter()
	.append("rect")
    .attr("class", "day")
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("x", function(d) { return week(d) * cellSize; })
    .attr("y", function(d) { return day(d) * cellSize; })
    .attr("fill",'#fff')
    .datum(format);

var legend = svg.selectAll(".legend")
      .data(month)
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(" + (((i+1) * 50)+8) + ",0)"; });

   
svg.selectAll(".month")
    .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
  .enter().append("path")
    .attr("class", "month")
    .attr("d", monthPath);

d3.csv("/data.csv", function(error, csv) {

  csv.forEach(function(d) {
    d.Comparison_Type = parseInt(d.Comparison_Type);
  });

function getRange(d) {
  for (i = 0; i < range.length - 1; i++) {
    if (d > range[i] && d <= range[i + 1])
      return i;
  }
  return range.length - 1;
}
  var data = d3.nest()
    .key(function(d) { return d.Date; })
    .rollup(function(d) { return  d[0].Comparison_Type; })
    .map(csv);
	
  rect.filter(function(d) { return d in data; })
      .attr("fill", function(d) { return color[getRange(data[d])]; })
	  .attr("data-title", function(d) { return Math.round(data[d]) + " hours on " + month[parseDate(d).getMonth()] + ". " + parseDate(d).getDay()});   
	$("rect").tooltip({container: 'body', html: true, placement:'top'}); 
});

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function monthPath(t0) {
  var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = +day(t0), w0 = +week(t0),
      d1 = +day(t1), w1 = +week(t1);
  return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
      + "H" + w0 * cellSize + "V" + 7 * cellSize
      + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
      + "H" + (w1 + 1) * cellSize + "V" + 0
      + "H" + (w0 + 1) * cellSize + "Z";
}
