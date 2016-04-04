var lineChartData = {
    labels: [
"17/3/14", 
"20/3/14", 
"11/4/14", 
"11/6/14", 
"1/7/14", 
"22/8/14", 
"14/11/14", 
"14/1/15", 
"5/2/15", 
"16/3/15", 
"14/4/15", 
"15/4/15", 
"21/5/15", 
"19/6/15", 
"2/7/15", 
"28/7/15", 
"3/8/15", 
"13/8/15", 
"21/9/15", 
"16/11/15", 
"24/11/15", 
"27/1/16", 
"22/2/16", 
"4/3/16",  ],
    datasets: [
        {
            label: "Variacao",
            fillColor: "rgba(250, 166, 26, 0)",
            strokeColor: "rgba(250, 166, 26, 0)",
            pointColor: "#faa61a",
            pointStrokeColor: "#000",
            pointHighlightFill: "",
            pointHighlightStroke: "",
            data: [-0.50,
0.35,
0.32,
0.05,
0.13,
0.87,
1.59,
-0.99,
0.88,
-0.02,
-0.42,
-0.64,
-0.17,
1.04,
-0.06,
0.77,
1.43,
0.71,
2.05,
0.83,
-0.40,
-1.27,
-2.16,
-3.42,
]
        }   
    ],
};

var linha = new Chart(document.getElementById("grafico").getContext("2d")).Line(lineChartData, {
  responsive:true,
  maintainAspectRatio: true,
  animationSteps: 50,
  animationEasing: "easeInExpo",
  animateScale: true,
  scaleShowGridLines : true,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  segmentStrokeWidth : 5,
  pointDotRadius : 4,
  animationEasing : "southOutBounce",
  showScale: true,
  bezierCurveTension : 0,
  scaleLineWidth: 1,
  scaleBeginAtZero: false,
   tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
  scaleFontColor: "#000",
  scaleLabel: " <%= value%> ",
  showTooltips: true,
  scaleFontFamily: "'Oswald', sans-serif",
  scaleFontSize: 14,
  tooltipFontFamily: "'Oswald', sans-serif",
      tooltipTitleFontFamily: "'Oswald', sans-serif",
  
  tooltipFillColor: "rgba(0,0,0,0.8)"
				});