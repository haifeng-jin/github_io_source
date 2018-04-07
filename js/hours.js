
// An SVG element with a bottom-right origin.

d3.csv("/js/data.csv", function(error, data) {
  var histo = new Histo(data);
  histo.show()
});

function date_format(date) {
  var month_string = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  date = date + 0;
  var month = Math.floor(date / 100) % 100 - 1;
  var day = date % 100;
  return month_string[month] + ". " + day;
}

var Histo = function(data) {
  this.data = data
this.margin = {top: 20, right: 120, bottom: 30, left: 0},
    this.width = 880 - this.margin.left - this.margin.right,
    this.height = 300 - this.margin.top - this.margin.bottom,
    this.barWidth = Math.floor(this.width / 15) - 1;
    var margin = this.margin;
    var width = this.width;
    var height = this.height;
    var barWidth = this.barWidth;
this.svg = d3.select(".histo").selectAll("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// A sliding container to hold the bars by hours.
this.hours = this.svg.append("g")
    .attr("class", "hours");
  this.x = d3.scale.linear()
  .range([barWidth / 2, width - barWidth / 2]);

  this.y = d3.scale.linear()
  .range([height, 0]);

  this.yAxis = d3.svg.axis()
  .scale(this.y)
  .orient("right")
  .tickSize(-width)
  .ticks(4)
  .tickFormat(function(d) { return d; });

  // Convert strings to numbers.
  data.forEach(function(d) {
    d.date = +d.Date;
    d.hour = +d.Comparison_Type;
  });

  data = data.sort(function (a, b) {
    return b.date - a.date;
  }).slice(0, 14);
  data.reverse();

  // Update the scale domains.
  this.x.domain([0, 14]);
  this.y.domain([0, 10]);

  // Add an axis to show the population values.
  this.svg.append("g")
  .attr("class", "y axis")
  .attr("transform", "translate(" + width + ",0)")
  .call(this.yAxis);

  var x = this.x;
  var rects = this.hours.selectAll("rect")
  .data(data)
  .enter().append("rect")
  .attr("width", barWidth)
  .attr("height", 0)
  .attr("transform", function(d, i) { return "translate(" + x(i) + ", " + height + ")"; })
  .attr("data-title", function(d) { return d.hour + " hours"; });

  // Add labels to show hours.
  this.hours.selectAll("text")
  .data(data)
  .enter().append("text")
  .attr("class", "date")
  .text(function(hours) { return date_format(hours.date); })
  .attr("transform", function(d, i) { return "translate(" + (x(i) + 10) + "," + (height + 20) + ")"; });

  $("rect").tooltip({container: 'body', html: true, placement:'top'});

  var sum = 0;
  for (var i = 7; i < 14; i++) {
    sum += data[i].hour;
  }

  function week_count(d) {
    var parseDate = d3.time.format("%Y%m%d").parse;
    return d3.time.weekOfYear(parseDate(d.date.toString()));
  }
  var this_week = week_count(data[13]);
  var last_week = this_week - 1;

  var sum_last = 0;
  var sum_this = 0;
  for (var i = 0; i < 14; i++) {
    var current_week = week_count(data[i]);
    if (current_week == this_week)
    sum_this += data[i].hour;
    if (current_week == last_week)
    sum_last += data[i].hour;
  }

  this.svg.append("text")
  .attr("transform", "translate(0,20)")
  .text("Last 7 days: " + sum + " hours.");

  this.svg.append("text")
  .attr("transform", "translate(0,40)")
  .text("Last week: " + sum_last + " hours.");

  this.svg.append("text")
  .attr("transform", "translate(0,60)")
  .text("This week: " + sum_this + " hours.");

}

Histo.prototype.show = function() {
  var x = this.x;
  var y = this.y;
  var height = this.height;
  d3.selectAll("rect").transition()
  .duration(500)
  .delay(function(d, i) {return (14 - i) * 50 + 1000; })
  .attr("transform", function(d, i) { return "translate(" + x(i) + "," + y(d.hour) + ")"; })
  .attr("height", function(d) { return height - y(d.hour); })
}
