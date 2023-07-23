var trace1 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
    type: 'bar',
    name: 'Quote value',
    marker: {
      color: 'rgb(0,0,255)',
      opacity: 0.7,
    }
  };
  
  var trace2 = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
    type: 'bar',
    name: 'Job Value',
    marker: {
      color: 'rgb(0,128,0)',
      opacity: 0.5,
    }
  };
  
  var data = [trace1, trace2];
  
  var layout = {
 
    xaxis: {tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }},
    yaxis: {
      
      titlefont: {
        size: 16,
        color: 'rgb(107, 107, 107)'
      },
      tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }
    },
   
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1
  };
  
  // Plotly.newPlot('myDiv', data, layout);
  
  // Calculate the width of the chart based on the parent div's width
// const parentDiv = document.querySelector('.bar-chart-div');
// const parentWidth = parseFloat(window.getComputedStyle(parentDiv).width);
// const chartWidth = parentWidth * 0.70;
 // You can adjust the scaling factor as needed (e.g., 0.9 means 90% of the parent width)

// Set the width of the chart container
// document.getElementById('myDiv').style.width = chartWidth + 'px';

// Plot the chart with the updated width
Plotly.newPlot('myDiv', data, layout);
