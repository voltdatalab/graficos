var svg = d3.select("svg"),
    margin = {top: 0, right: 40, bottom: 40, left: 10},
    width = 500,
    height = 250 - margin.top;

var formatValue = d3.format(",d");

var x = d3.scaleLinear()
    .rangeRound([0, width]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("https://raw.githubusercontent.com/voltdatalab/graficos/gh-pages/dados/dividapibmundial.csv", type, function(error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.value; }));

  var simulation = d3.forceSimulation(data)
      .force("x", d3.forceX(function(d) { return x(d.value); }).strength(1))
      .force("y", d3.forceY(height / 2))
      .force("collide", d3.forceCollide(5))
      .stop();

  for (var i = 0; i < 120; ++i) simulation.tick();

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(5, ".0f"));
  
  //svg.append("text")
    //.attr("class", "x label")
    //.attr("text-anchor", "end")
    //.attr("x", 135)
    //.attr("y", 205)
    //.style("font-size", "9px")
    //.text("Furos de reportagem por ano")
  
  //svg.append("text")
    //.attr("class", "x label")
    //.attr("text-anchor", "end")
    //.attr("x", 462)
    //.attr("y", 108)
    //.style("font-size", "10px")
    //.text("OLT DATA LAB");
  
  //var imgs = svg.selectAll("image").data([0]);
    //imgs.enter()
      //  .append("svg:image")
        //.attr("xlink:href", "http://static1.squarespace.com/static/551da417e4b05f67005d6abe/t/552dc57ee4b0c02076dba9a7/1455067817903/icone_volt_alta_transparente_crop_square.png?format=1000w")
        //.attr("x", "380")
        //.attr("y", "195")
        //.attr("width", "20")
        //.attr("height", "20");
  
  //svg.append("text")
    //.attr("class", "x label")
    //.attr("text-anchor", "end")
    //.attr("x", 145)
    //.attr("y", 40)
    //.style("font-size", "10px")
    //.text(" 'Data what?'");
 
  svg.append("circle")
      .attr("r", 8)
      .attr("cx", 350)
      .attr("cy", 125)
      .attr("fill", "#f0027f");


  var cell = g.append("g")
      .attr("class", "cells")
    .selectAll("g").data(d3.voronoi()
        .extent([[-margin.left, -margin.top], [width + margin.right, height + margin.top]])
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
      .polygons(data)).enter().append("g");

  cell.append("circle")
      .attr("r", 4)
      .attr("cx", function(d) { return d.data.x; })
      .attr("cy", function(d) { return d.data.y; })
  .attr("fill",function(d) { if(d.data.id === "Grécia")return "#f4f4f4"; if(d.data.id === "Letônia")return ""; })
  ;

  cell.append("path")
      .attr("d", function(d) { return "M" + d.join("L") + "Z"; });

  cell.append("title")
      .text(function(d) { return "Volt Data Lab"; });
});

function type(d) {
  if (!d.value) return;
  d.value = +d.value;
  return d;
}