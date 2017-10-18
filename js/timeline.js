function createTimeline(selector, data) {

  var margin = {
    top: 40,
    right: 120,
    bottom: 40,
    left: 120
  };

  var nav_width = 240;
  var width;
  var marginTimeline = 80;

  width = $(window).width() > 1600 ? 1600: $(window).width()


  $(selector).empty();
  var svg = d3.select(selector).append('svg')
    .attr('width', width)
    .attr('height', 200);

  var width = +svg.attr('width') - margin.left - margin.right,
    height = +svg.attr('height') - margin.top - margin.bottom;

  var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  /* multiline */

  // Set the ranges
  var x = d3.time.scale().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);

  // Define the axes
  var xAxis = d3.svg.axis().scale(x)
    .orient('bottom').ticks(7);

  var yAxis = d3.svg.axis().scale(y)
    .orient('left').ticks(5);

  var parseTime = d3.time.format("%Y-%m-%d").parse;
  var parseTime_slash = d3.time.format("%Y/%m/%d").parse;

  data.map(function(i) {
    var formated_date = i.time;
    if (!(formated_date instanceof Date))
      formated_date = parseTime(i.time);
    if (!(formated_date instanceof Date)){
      console.log(i,formated_date)
      formated_date = parseTime_slash(i.time);
    }
      
    i.time = formated_date
    return i;
  })

  console.log(data)
  data.sort(sortByDateAscending);
  // Define the line
  var line = d3.svg.line()
    .interpolate('monotone')
    .x(function(d) {
      return x(d.time);
    })
    .y(function(d) {
      return y(d.count);
    });


  x.domain(d3.extent(data, function(d) {
    return d.time;
  }));
  y.domain([0, d3.max(data, function(d) {
    return d.count;
  })]);

  var dataNest = d3.nest()
    .key(function(d) {
      return d.website;
    })
    .entries(data);
  // Loop through each symbol / key
  dataNest.forEach(function(d) {
    var group;
    var lastIndex = 0;
    group = g.append('g').attr('class', 'lineGroup');
    group.append('path')
      .attr('class', 'line')
      .attr('d', line(d.values))
      .attr('stroke', function() {
        return mediaColor[d.key];
      });
    for (var i in d.values) {
      group.append('circle')
        .attr('r', 5)
        .attr('cx', function() {
          return x(d.values[i].time);
        })
        .attr('cy', function() {
          return y(d.values[i].count);
        })
        .attr('fill', function() {
          return mediaColor[d.key];
        })
        .transition(1000);
      console.log(d)
      if(d.values[i].time.getTime() == x.domain()[1].getTime()){
        lastIndex =+ i;
      }
      
    }
    group.append('text')
      .attr('x', x(d.values[lastIndex].time) + 5)
      .attr('y', y(d.values[lastIndex].count) + 5)
      .attr('fill', mediaColor[d.key])
      .style('font-size', '12px')
      .style('letter-spacing', '2px')
      .style('font-weight', '300')
      .text(d.key);
  });

  g.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .style('opacity', .6)
    .call(xAxis);

  // Add the Y Axis
  var yAxisSvg = g.append('g')
    .attr('class', 'y axis')
    .style('opacity', 0)
    .call(yAxis);


  var yLabel = g.append('text')
    .attr('x', -40)
    .attr('y', -15)
    .attr('fill', 'black')
    .style('font-size', '12px')
    .style('letter-spacing', '2px')
    .style('font-weight', '300')
    .style('opacity', 0)
    .text('報導次數（次）');
  
  svg.on('mouseover', function(){
    yAxisSvg.transition().duration(200).style('opacity', 0.6)
    yLabel.transition().duration(200).style('opacity', 0.6)
  }).on('mouseout', function(){
    yAxisSvg.transition().duration(200).style('opacity', 0)
    yLabel.transition().duration(200).style('opacity', 0)
  })

  // Because of the design purpose, temporily hide this
  // g.append('text')
  //   .attr('text-anchor', 'end')
  //   .attr('x', width + 12)
  //   .attr('y', height - 8)
  //   .attr('fill', 'black')
  //   .style('font-size', '12px')
  //   .style('letter-spacing', '2px')
  //   .style('font-weight', '300')
  //   .style('opacity', .6)
  //   .text('報導時間（日期）')


  /*TODO:
   * dot animation
   */

}

function sortByDateAscending(a, b) {
    // Dates will be cast to numbers automagically:
    return a.time - b.time;
}
