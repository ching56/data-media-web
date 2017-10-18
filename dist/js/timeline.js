"use strict";function createTimeline(t,e){var n,a={top:40,right:120,bottom:40,left:120};n=$(window).width()>1600?1600:$(window).width(),$(t).empty();var i=d3.select(t).append("svg").attr("width",n).attr("height",200),n=+i.attr("width")-a.left-a.right,r=+i.attr("height")-a.top-a.bottom,o=i.append("g").attr("transform","translate("+a.left+","+a.top+")"),s=d3.time.scale().range([0,n]),l=d3.scale.linear().range([r,0]),c=d3.svg.axis().scale(s).orient("bottom").ticks(7),u=d3.svg.axis().scale(l).orient("left").ticks(5),d=d3.time.format("%Y-%m-%d").parse,p=d3.time.format("%Y/%m/%d").parse;e.map(function(t){var e=t.time;return e instanceof Date||(e=d(t.time)),e instanceof Date||(console.log(t,e),e=p(t.time)),t.time=e,t}),console.log(e),e.sort(sortByDateAscending);var m=d3.svg.line().interpolate("monotone").x(function(t){return s(t.time)}).y(function(t){return l(t.count)});s.domain(d3.extent(e,function(t){return t.time})),l.domain([0,d3.max(e,function(t){return t.count})]),d3.nest().key(function(t){return t.website}).entries(e).forEach(function(t){var e,n=0;e=o.append("g").attr("class","lineGroup"),e.append("path").attr("class","line").attr("d",m(t.values)).attr("stroke",function(){return mediaColor[t.key]});for(var a in t.values)e.append("circle").attr("r",5).attr("cx",function(){return s(t.values[a].time)}).attr("cy",function(){return l(t.values[a].count)}).attr("fill",function(){return mediaColor[t.key]}).transition(1e3),console.log(t),t.values[a].time.getTime()==s.domain()[1].getTime()&&(n=+a);e.append("text").attr("x",s(t.values[n].time)+5).attr("y",l(t.values[n].count)+5).attr("fill",mediaColor[t.key]).style("font-size","12px").style("letter-spacing","2px").style("font-weight","300").text(t.key)}),o.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").style("opacity",.6).call(c);var f=o.append("g").attr("class","y axis").style("opacity",0).call(u),y=o.append("text").attr("x",-40).attr("y",-15).attr("fill","black").style("font-size","12px").style("letter-spacing","2px").style("font-weight","300").style("opacity",0).text("報導次數（次）");i.on("mouseover",function(){f.transition().duration(200).style("opacity",.6),y.transition().duration(200).style("opacity",.6)}).on("mouseout",function(){f.transition().duration(200).style("opacity",0),y.transition().duration(200).style("opacity",0)})}function sortByDateAscending(t,e){return t.time-e.time}