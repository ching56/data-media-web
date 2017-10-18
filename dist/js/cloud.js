"use strict";function getRootElementFontSize(){return parseFloat(getComputedStyle(document.documentElement).fontSize)}function convertRem(t){return t*getRootElementFontSize()}function wordCloud(t){function e(t){var e=n.selectAll("g text").data(t,function(t){return t.text}),o=function(t){var e=!1;for(var i in t)0!=t[i]&&(e=!0);return e},r=function(t){var e=o(report.words_count[t.index][4]),n=report.words_count[t.index][2];n.length;dict={};for(i in mediaEN)dict[mediaEN[i]]={},dict[mediaEN[i]].count=0,dict[mediaEN[i]].provocativeNum=0;for(var r in n){var d=mediaNameTranslate(n[r].media);dict[d].count++,1==n[r].isProvocative&&dict[d].provocativeNum++}var a=!1;for(var d in dict){dict[d].provocativeNum/dict[d].count>.1&&dict[d].count>20&&(a=!0)}return a&&e?"purple":a?"red":e?"blue":"lightgrey"};e.enter().append("text").style("font-family","Impact").style("fill",function(t,e){return r(t)}).style("font-weight",function(t){return t.size>21?600:100}).attr("text-anchor","middle").attr("font-size",1).attr("cursor","pointer").text(function(t){return t.text}).on("click",function(t){clickCloud(t)}),e.transition().duration(600).style("font-size",function(t){return t.size+"px"}).attr("transform",function(t){return"translate("+[t.x,t.y]+")rotate("+t.rotate+")"}).style("fill-opacity",1),e.exit().transition().duration(200).style("fill-opacity",1e-6).attr("font-size",1).remove()}var o;d3.scale.category20();o=$(window).width()>smallDesktopWidthSize?$(window).width()-400:$(window).width()-160,o=o>1600?1600:o;var n=d3.select(t).append("svg").attr("width",o).attr("height",500).append("g").attr("transform","translate("+o/2+",250)");return{update:function(t){d3.layout.cloud().size([o,500]).words(t).padding(2).rotate(function(){return 90*Math.random()-45}).font("Impact").fontSize(function(t){return t.size}).on("end",e).start()}}}function showNewWords(t,e){max=report.words_count[0][1],scale=max/100,cloudConfig=report.words_count.map(function(t,e){return{text:t[0],size:10+t[1]/scale,index:e}}),t.update(cloudConfig)}function clickCloud(t){var e=[];createTimeline("#timeline-inner",report.words_count[t.index][3]),window.wordCollectionClearCards(),o=report.words_count[t.index][2],dict={};for(i in mediaEN)dict[mediaEN[i]]={},dict[mediaEN[i]].count=0,dict[mediaEN[i]].provocativeNum=0,dict[mediaEN[i]].IsMoreThanFive=!1;for(var i in o)n=mediaNameTranslate(o[i].media),!0===o[i].isProvocative&&dict[n].provocativeNum++,dict[n].count<6&&!0===o[i].isProvocative?(window.wordCollectionAddNewsCard(n,o[i].title,"",o[i].url,!0),dict[n].count++):dict[n].count<6&&!1===o[i].isProvocative?e.push(o[i]):dict[n].count>=6&&(dict[n].IsMoreThanFive=!0,dict[n].count++);for(var i in e){var o=e[i],n=mediaNameTranslate(o.media);dict[n].count<6?(window.wordCollectionAddNewsCard(mediaNameTranslate(o.media),o.title,"",o.url,!1),dict[n].count++):dict[n].count>=6&&(dict[n].IsMoreThanFive=!0,dict[n].count++)}for(i in mediaEN){var r=dict[mediaEN[i]];r.IsMoreThanFive&&window.wordCollectionAddNewsNum(mediaEN[i],r.count-6+1),r.provocativeNum>=1?wordCollectionAddProvocativeNum(mediaEN[i],parseFloat(100*r.provocativeNum/r.count).toFixed(1)):wordCollectionAddProvocativeNum(mediaEN[i],0)}$("#qurey-word").text(t.text)}jQuery.fn.d3Click=function(){this.each(function(t,e){var i=new MouseEvent("click");e.dispatchEvent(i)})};