var data_array={
"20160229":7,
"20160228":7,
"20160227":3,
"20160226":2,
"20160225":2.5,
"20160224":5.5,
"20160223":5,
"20160222":7,
"20160221":3.5,
"20160220":3,
"20160219":7,
"20160218":7,
"20160217":6,
"20160216":5.5,
"20160215":6,
"20160214":3.5,
"20160213":0,
"20160212":4,
"20160211":5,
"20160210":7,
"20160209":6,
"20160208":5,
"20160207":0,
"20160206":0,
"20160205":3,
"20160204":5,
"20160203":5,
"20160202":4,
"20160201":6,
"20160131":3,
"20160130":0,
"20160129":7,
"20160128":7,
"20160127":6.5,
"20160126":5,
"20160125":7,
"20160124":3,
"20160123":0,
"20160122":7,
"20160121":7,
"20160120":7,
"20160119":6,
"20160118":5,
"20160117":0,
"20160116":1,
"20160115":4,
"20160114":5,
"20160113":5,
"20160112":5,
"20160111":5,
"20160110":3,
"20160109":0,
"20160108":5.5,
"20160107":5,
"20160106":5,
"20160105":5,
"20160104":4.5,
"20160103":0,
"20160102":2,
"20160101":0,
"20151231":0,
"20151230":1.5,
"20151229":2,
"20151228":2,
"20151227":3.5,
"20151226":1.5,
"20151225":0,
"20151224":0,
"20151223":2.5,
"20151222":3,
"20151221":2,
"20151220":4,
"20151219":2,
"20151218":4,
"20151217":4.5,
"20151216":4,
"20151215":4,
"20151214":5,
"20151213":4,
"20151212":4,
"20151211":4.5,
"20151210":7,
"20151209":6,
"20151208":5,
"20151207":7,
"20151206":4,
"20151205":7,
"20151204":4,
"20151203":5.5,
"20151202":6,
"20151201":4.5,
"20151130":5,
"20151129":4,
"20151128":4
};

var width = 900,
    height = 120,
    cellSize = 15; // cell size
    month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    color = ["#eee","#d6e685","#8cc665","#44a340","#1e6823"];
    range = [0,4,5,7];
	
var day = d3.time.format("%w"),
    week = d3.time.format("%U"),
    percent = d3.format(".1%"),
	format = d3.time.format("%Y%m%d");
	parseDate = d3.time.format("%Y%m%d").parse;
		
   
var svg = d3.select(".calender-map").selectAll("svg")
    .data(d3.range(2015, 2017))
  .enter().append("svg")
    .attr("width", '100%')
    .attr("data-height", '0.5678')
    .attr("viewBox",'0 0 ' + width + ' ' + height)
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

function getRange(d) {
  for (i = 1; i < range.length; i++) {
    if (d < range[i])
      return i;
  }
  return -1;
}

function getColor(d) {
  if (d == 0)
    return color[0];
  if (d >= range[range.length - 1])
    return color[range.length];
  index = getRange(d);
  change = d3.scale.linear().range([color[index - 1], color[index]])
    .domain([range[index - 1], range[index]])
  return change(d)
}
	
  rect
      .attr("fill", function(d) {if (isNaN(data_array[d])) return color[0];  return getColor(data_array[d]); })
	  .attr("data-title", function(d) { if (isNaN(data_array[d])) ret = "No record on "; else ret = data_array[d] + " hours on "; return ret + month[parseDate(d).getMonth()] + ". " + parseDate(d).getDate()});   

d3.csv("",function() {
	$("rect").tooltip({container: 'body'}); 

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

