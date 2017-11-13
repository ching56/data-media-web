"use strict";function initAbout(){$(".about-icon").on("click",function(){$("#modal-container").addClass("show"),$("#pop-content .card-container").addClass("show"),$("#pop-content .card-container .list").empty(),$("#pop-content .about-container").html('<h1>為什麼要做這個專案？</h1>\n<h3>我們相信用心去感動，用數據說故事，這個社會會變得更好。</h3>\n<p>那我們要說什麼故事呢？我們要說的是一個關於新聞媒體的故事。</p>\n<p>不知道大家有沒有曾經遇過這個問題，面對市面上百家爭鳴的媒體，像是蘋果日報、自由時報、東森新聞雲、中國時報、報導者、端傳媒、風傳媒.....，你不知道要看哪個媒體作為你的資訊來源，又或者是通通追蹤了，但是你的臉書卻永遠滑不到底。\n</p>\n<p>在這個社群媒體的時代，新舊媒體百家爭鳴，資訊爆炸，只要創立一個粉絲專頁，甚至就可以成為一個媒體，自己貼文、報導。\n新聞媒體為了生存，各自朝向了迥異的方向發展，有些開始朝向大量話題新聞，有些則專注於深入報導，有些則好腥羶色，那你又該如何選擇呢？\n</p>\n<p>在這個專案中，我們打算做一個媒體閱聽人的燈塔，打開媒體的黑盒子，\u2028視覺化媒體的品牌獨特性，將隨著時間加入更多媒體的資料，願大家能在這裡找到自己的媒礦。</p>\n<a class="fa fa-facebook-square" aria-hidden="true" href="//fb.me/minedia.info"></i>\n')})}
"use strict";function addVisWord(a,s){var n=mediaNameTranslate(a);"中央通訊社"===n&&(n="中央社");var i=".avgWords-container ."+a+"-container",r="<h3>"+n+"</h3><span>"+s+'</span><span class="avgWords-scale">字</span>',t='<div class="visbar"></div>'.repeat(s/10);$(i).html(r+t)}function clearVisWord(){$(".avgWords-container .visWords-container").each(function(a){var s=$(this).find("h3").text();$(this).html("<h3>"+s+"</h3>")})}
"use strict";function initBuzzword(a){a.forEach(function(a,i){var n='  <div class="buzzword-container active" data-index="'+i+'">\n      <div class="buzzword-title-container">\n        <h3 class="buzzword">'+(i+1)+"."+a.word+'</h3>\n        <h5>\n          成長<i class="fa fa-arrow-up" aria-hidden="true"></i>\n          <span class="buzzword-growth">'+(a.growth/a.news_num*100).toFixed(1)+'%</span>\n          </h3>\n      </div>\n      <div class="two-column-list">\n        <div>\n          <h5>情緒性報導</h5>\n          <ul class="provocative-list">\n          </ul>\n        </div>\n        <div>\n          <h5>報導數量</h5>\n          <ul class="outliner-list">\n          </ul>\n        </div>\n      </div>\n    </div>';$(".buzzwords .outer").append(n),appendBuzzwordProvocativeList(i,a.provocativeRate),appendBuzzwordOutlinerList(i,a.isOutline)}),$(".buzzwords .outer").append('<div class="buzzword-container"><h5>placeholder</h5></div>')}function appendBuzzwordProvocativeList(a,i){var n='.buzzword-container[data-index="'+a+'"] .provocative-list';$(n).empty();for(var s in media)if(i[media[s]]>10){var e='<li class="hightlight"><span class="media-name">'+media[s]+'</span><span class="provocative-num">'+(100*i[media[s]]).toFixed(1)+"%</span></li>";$(n).append(e)}for(var s in media)if(i[media[s]]<=10){var e='<li><span class="media-name">'+media[s]+'</span><span class="provocative-num">'+(100*i[media[s]]).toFixed(1)+"%</span></li>";$(n).append(e)}}function appendBuzzwordOutlinerList(a,i){var n='.buzzword-container[data-index="'+a+'"] .outliner-list';$(n).empty();for(var s in media)if(1===i[media[s]]){var e='<li class="hightlight"><span class="media-name">'+media[s]+'</span><span class="news-num">大量報導</span></li>';$(n).append(e)}for(var s in media)if(-1===i[media[s]]){var e='<li><span class="media-name">'+media[s]+'</span><span class="news-num">正常報導</span></li>';$(n).append(e)}for(var s in media)if(0===i[media[s]]){var e='<li><span class="media-name">'+media[s]+'</span><span class="news-num">正常報導</span></li>';$(n).append(e)}}
"use strict";function createCategory(t){function n(t){g.each(e(.9*t.alpha)).each(r(.5)).attr("cx",function(t){return t.x-20}).attr("cy",function(t){return t.y}),h.attr("x",function(t){return-1===media.indexOf(t.name)?t.x:t.x-40}).attr("y",function(t){return t.y}),O.attr("x",function(t){return-1===media.indexOf(t.name)?t.x:t.x-40}).attr("y",function(t){return t.y+20})}function e(t){return function(n){n.y+=(n.cy-n.y)*t,n.x+=(n.cx-n.x)*t}}function r(t){var n=d3.geom.quadtree(f);return function(e){var r=e.radius+c+a,o=e.x-r,i=e.x+r,u=e.y-r,f=e.y+r;n.visit(function(n,r,c,d,x){if(n.point&&n.point!==e){var y=e.x-n.point.x,s=e.y-n.point.y,l=Math.sqrt(y*y+s*s),m=e.radius+n.point.radius+(e.color!==n.point.color)*a;l<m&&(l=(l-m)/l*t,e.x-=y*=l,e.y-=s*=l,n.point.x+=y,n.point.y+=s)}return r>i||d<o||c>f||x<u})}}var i,a=6,c=12,u=function(t){return mediaColor[t]},f=[],d=(Object.keys(t).map(function(n){return Object.keys(t[n].category).length}),0);for(var x in t){var y=[],s=d3.scale.ordinal().domain(d3.range(14)).rangePoints([40,1e3],1);i=0,f.push({radius:Math.sqrt(t[x].news_count)*c/20,color:u(x),cx:180*d+90,x:180*d+90,cy:s(i),y:s(i),name:x,count:t[x].news_count}),i+=2;for(o in t[x].category){if(i>12)break;y.push({radius:Math.sqrt(t[x].category[o])*c/20,color:u(x),cx:180*d+90,x:180*d+90,name:o,count:t[x].category[o]}),i++}y.sort(function(t,n){return d3.descending(t.count,n.count)}),y.forEach(function(t,n){t.cy=s(n+2),t.y=s(n+2),t.order=n}),f=f.concat(y),d++}var l=d3.layout.force().nodes(f).size([880,1e3]).on("tick",n).start(),m=d3.select("#category").append("svg").attr("width",880).attr("height",1e3),p=m.selectAll("circle").data(f).enter(),g=p.append("circle").attr("r",function(t){return t.radius}).style("fill",function(t){return-1===media.indexOf(t.name)?"none":t.color}).style("stroke",function(t){return-1===media.indexOf(t.name)?t.color:"#D3D3D3"}).style("stroke-width",function(t){return media.indexOf(t.name),2}).call(l.drag);m.selectAll("circle").style("opacity",function(t){return.08*(9-(t.order?t.order:0))});var h=p.append("text").text(function(t){return t.name}).attr("x",function(t){return-1===media.indexOf(t.name)?t.x+5:t.x-40}).attr("y",function(t){return t.y}).style("font-weight",function(t){return-1===media.indexOf(t.name)?"":"600"}).style("font-size",function(t){return-1===media.indexOf(t.name)?"":"20px"}).style("fill","rgba(0,0,0,0.75)"),O=p.append("text").text(function(t){return t.count+"則"}).attr("x",function(t){return-1===media.indexOf(t.name)?t.x+5:t.x-40}).attr("y",function(t){return t.y+20}).style("fill","rgba(0,0,0,0.75)")}
"use strict";function getRootElementFontSize(){return parseFloat(getComputedStyle(document.documentElement).fontSize)}function convertRem(t){return t*getRootElementFontSize()}function wordCloud(t){function e(t){var e=n.selectAll("g text").data(t,function(t){return t.text}),o=function(t){var e=!1;for(var o in t)0!=t[o]&&(e=!0);return e},r=function(t){var e=o(report.words_count[t.index][4]),r=report.words_count[t.index][2],n=(r.length,{});for(var i in mediaEN)n[mediaEN[i]]={},n[mediaEN[i]].count=0,n[mediaEN[i]].provocativeNum=0;for(var a in r){var d=mediaNameTranslate(r[a].media);n[d].count++,1==r[a].isProvocative&&n[d].provocativeNum++}var u=!1;for(var d in n){n[d].provocativeNum/n[d].count>.1&&n[d].count>20&&(u=!0)}return u&&e?"purple":u?"red":e?"blue":"lightgrey"};e.enter().append("text").style("fill",function(t,e){return r(t)}).style("font-weight",function(t){return t.size>50?600:100}).attr("text-anchor","middle").attr("font-size",1).attr("cursor","pointer").text(function(t){return t.text}).on("click",function(t){clickCloud(t)}),e.transition().duration(600).style("font-size",function(t){return t.size+"px"}).attr("transform",function(t){return"translate("+[t.x,t.y]+")rotate("+t.rotate+")"}).style("fill-opacity",1),e.exit().transition().duration(200).style("fill-opacity",1e-6).attr("font-size",1).remove()}var o=(d3.scale.category20(),$(".cloud").width()),r=3*$(window).height()/5;o=o>1600?1600:o,r=r>700?700:r;var n=d3.select(t).append("svg").attr("width",o).attr("height",r).append("g").attr("transform","translate("+o/2+","+r/2+")");return{update:function(t){d3.layout.cloud().size([o,r]).words(t).padding(6).rotate(function(){return 45*Math.random()-22.5}).fontSize(function(t){return t.size}).on("end",e).start()}}}function showNewWords(t,e){var o=report.words_count[0][1],r=o/100;$(window).width()<980&&(r=o/50);var n=report.words_count.map(function(t,e){return{text:t[0],size:10+t[1]/r,index:e}});t.update(n)}function clickCloud(t){var e=[],o=$(window).width()<980;createTimeline("#timeline-inner",report.words_count[t.index][3]),window.wordCollectionClearCards();var r=report.words_count[t.index][2],n={};for(i in mediaEN)n[mediaEN[i]]={},n[mediaEN[i]].count=0,n[mediaEN[i]].provocativeNum=0,n[mediaEN[i]].IsMoreThanFive=!1;for(var i in r)a=mediaNameTranslate(r[i].media),!0===r[i].isProvocative&&n[a].provocativeNum++,n[a].count<2&&!0===r[i].isProvocative?(window.wordCollectionAddNewsCard(a,r[i].title,"",r[i].url,!0),n[a].count++):n[a].count<2&&!1===r[i].isProvocative?e.push(r[i]):n[a].count>=2&&(n[a].IsMoreThanFive=!0,n[a].count++);for(var i in e){var r=e[i],a=mediaNameTranslate(r.media);n[a].count<2?(window.wordCollectionAddNewsCard(mediaNameTranslate(r.media),r.title,"",r.url,!1),n[a].count++):n[a].count>=2&&(n[a].IsMoreThanFive=!0,n[a].count++)}for(i in mediaEN){var d=n[mediaEN[i]];d.IsMoreThanFive&&window.wordCollectionAddNewsNum(mediaEN[i],d.count-2+1),d.provocativeNum>=1?wordCollectionAddProvocativeNum(mediaEN[i],parseFloat(100*d.provocativeNum/d.count).toFixed(1)):wordCollectionAddProvocativeNum(mediaEN[i],0)}o&&0!==$(".qurey-word").text().length&&$("html, body").animate({scrollTop:qureyWordTop},600),$(".qurey-word").text(t.text),$(".qurey-word").prepend('<i class="fa fa-bullseye" aria- hidden="true" ></i>')}jQuery.fn.d3Click=function(){this.each(function(t,e){var o=new MouseEvent("click");e.dispatchEvent(o)})};
"use strict";function mediaNameTranslate(o){return{apple:"蘋果日報",udn:"聯合報",liberty:"自由時報",ettoday:"東森新聞雲",cna:"中央通訊社",china:"中國時報","蘋果日報":"apple","聯合報":"udn","自由時報":"liberty","東森新聞雲":"ettoday","中央通訊社":"cna","中國時報":"china"}[o]}function initWordCollection(){$("#modal-closer").on("click",function(){$("#modal-container").removeClass("show"),$("#pop-content .card-container").removeClass("show"),$("body,html").css("overflow","")})}function initTitleAnalysis(o){var n=["provocative","ptt_idiom"];for(m in media){var e=media[m];for(k in n){var t=0;for(i in o[e][n[k]]){var a=n[k],s=o[e][n[k]][i].title,l=o[e][n[k]][i].url,r=o[e][n[k]][i].word;if(a=a.replace("_","-"),t>=4)t++;else{var d=window.mediaNameTranslate(e);titleAnalysisAddNewsCard(d,a,s,r,l),t++}}}}for(m in media){var e=media[m];for(k in n){var a=n[k];if(a=a.replace("_","-"),count=o[e][n[k]].length-4,count>=1){var d=window.mediaNameTranslate(e);titleAnalysisAddNewsNum(d,a,count)}}}}function showAbout(){setTimeout(function(){$(".nav-about .fa-arrow-right").addClass("show-about");var o=$(window).scrollTop();$("#about").css("top",o+"px"),$("body,html").css("overflow","hidden")},750)}function hideAbout(){$(".nav-about .fa-arrow-right").removeClass("show-about"),$("body,html").css("overflow","")}function isPosBeyondIdTop(o,n){return o>=$(n).offset().top}function animateToId(o){$("body,html").animate({scrollTop:$(o).offset().top-50},"slow")}function initDate(o){var n=o.begin.replace(/-/g,"/").slice(5),e=o.end.replace(/-/g,"/").slice(5),t=n+" ~ "+e;$(".nav-time").html(t)}$.fn.extend({animateCss:function(o,n){return this.addClass("animated "+o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated "+o),n&&n()}),this}});var info="",qureyWordTop=void 0,media=["蘋果日報","聯合報","自由時報","東森新聞雲","中央通訊社","中國時報"],mediaEN=["apple","udn","liberty","ettoday","cna","china"],smallDesktopWidthSize=980,mediaColor={"中央通訊社":"#26A69A","蘋果日報":"#ef5350","東森新聞雲":"#5C6BC0","自由時報":"#FFCA28","聯合報":"#FF7043","中國時報":"#03A9F4"},report,provocative_list=[],IsReportGot=!1,now=moment.now(),tz=moment.tz(now,"Asia/Taipei").subtract(1,"days"),weekNum=tz.format("W"),s3Url="https://s3-ap-northeast-1.amazonaws.com/tw-media-data/report/",objectUrl=s3Url+"week_"+weekNum+".json",section=-1;$(".page-container").hide(),window.refreshCards(),$(".loader").append(info),$("#help").hide();var scrollTip='<div id="tip">\n  使用\n  <em>shift</em>+\n  <span class="mouse-icon">\n    <span class="scroll-btn"></span>\n  </span>水平捲動\n</div>';$(document).ready(function(){var o=navigator.platform.toUpperCase().indexOf("MAC")>=0;initWordCollection(),$("#logo").addClass("loading"),$("#logo").addClass("small"),o||$("#before-tip").after(scrollTip),$.getJSON(objectUrl,function(o){report=o,IsReportGot=!0;var n=0;$(".loader").fadeOut("slow"),$("#info").fadeOut("slow"),$(".page-container").show(),$("#logo").one("animationiteration webkitAnimationIteration",function(){console.log("report loaded"),$("#logo").removeClass("loading"),setTimeout(function(){$("#logo").removeClass("small")},10)}),$(".buzzwords .outer").on("scroll",function(){$(".buzzwords .outer").scrollLeft()>360&&($("#tip").hide(),$(".buzzwords .outer").off("scroll"))});for(var e in media)n+=report[media[e]].news_count;$("#num-news").text(n);var t=[];for(var i in media)t.push({title:media[i],newsCount:report[media[i]].news_count});setTimeout(function(){window.createNewsBarChart("#num-news-bar",t)},100);var a=wordCloud("div.cloud");window.showNewWords(a);for(var i in mediaEN)window.addVisWord(mediaEN[i],report[media[i]].words_median);$(".page-container").css("display",""),$(".page-container").addClass("show-page"),setTimeout(function(){$(".page-container").removeClass("show-page")},1e3),initBuzzword(o.buzzword),initWordAnalysis(o.word_analysis),initDate(o.time),initAbout();var s=d3.selectAll(".cloud text"),l=s[0].map(function(o){return o.innerHTML}),r=o.words_count.map(function(o){return o[0]});console.log(123,l),console.log(123,s);for(var d=-1,e=0;e<r.length&&-1==(d=l.findIndex(function(o){return o==r[e]}));e++);$(s[0][d]).d3Click(),$("#help").show("slow"),$("#help .fa-angle-up").hide(),$("#help .content").hide(),$("#help").on("click",function(){$("#help .content").toggle("slow"),$("#help .fa-angle-up").toggle("slow"),$("#help .fa-question").toggle("slow")}),qureyWordTop=$(".qurey-word-container-mob .qurey-word").offset().top}),$(window).width()>980&&($(".band.footer").before('<section class="band">\n        <div class="band-container polis-container">\n          <div class="band-inner">\n            <div>\n              <h1>分享與討論</h1>\n              <h2 class="sub-title">\n                有什麼想法嗎？在這裡為你的立場發聲\n              </h2>\n            </div>\n            <div class=\'polis\' data-page_id=\'page-1\' data-site_id=\'polis_site_id_QKXjXCd0z0A2hkx8l2\'>\n            </div>\n          </div>\n        </div>\n      </section>\n    '),$("body").append("<script async='true' src='https://pol.is/embed.js'><\/script>"))}),$(".nav-about").on("click",function(){$(".page-container").hasClass("show-about")?($(".page-container").addClass("hide-about").removeClass("show-about"),hideAbout()):$(".page-container").hasClass("hide-about")?($(".page-container").addClass("show-about").removeClass("hide-about"),showAbout()):($(".page-container").addClass("show-about"),showAbout())}),$(".menu").on("click",function(){$(".container").hasClass("is-open")?($(".menu").removeClass("is-active"),$(".container").removeClass("is-open")):($(".menu").addClass("is-active"),$(".container").addClass("is-open"))}),$.get("dist/provocative_words.txt",function(o){provocative_list=o.split("\n")});var SHOWDIST=.75*$(window).height(),pos=$(window).scrollTop()+SHOWDIST,updateAnimation="rotateIn";$("body").on("scroll",function(o){if(isPosBeyondIdTop(pos,".cloud")&&3!=section){var n="<h4>媒體用詞雲</h4>",e=n+"統計 6 家媒體本週新聞標題內的用詞，在標題內<em>出現次數越多者字體越大</em>。";e+="<h4>詞彙新聞集</h4>",e+="點擊用詞雲中的詞語，可以在詞彙新聞集中查看 6 家媒體報導此詞語的時間軸，與各自的新聞，其中<em>上色者為情緒性報導</em>。",section=3,$("#help .content").html(e),$("#help").animateCss(updateAnimation)}else if(isPosBeyondIdTop(pos,".horizontal-lists")&&!isPosBeyondIdTop(pos,".cloud")&&2!=section){var n="",e=n+"<h4>情緒性報導排行</h4>統計 6 家媒體本週情緒性報導比率的前五名，例如：「台灣  50%」，代表這家媒體所有標題含有「台灣」的報導，標題有 50% 含有情緒性用詞。</p>\n<h4>少量報導主題</h4>分析同一詞語在 6 家媒體中，如果這家媒體對於這個詞語的關注度較低，即為少量報導主題。</p>";section=2,$("#help .content").html(e),$("#help").animateCss(updateAnimation)}else if(isPosBeyondIdTop(pos,".buzzwords")&&!isPosBeyondIdTop(pos,".horizontal-lists")&&1!=section){var n="<h4>本週熱詞</h4>",t=provocative_list.map(function(o){return 0===o.trim().length?"":"<li>"+o+"</li>"}).join(" "),e=n+"統計本週搜集的所有新聞標題內的用詞，與上週資料做比較，<em>使用次數成長最多者</em>，即為本週的熱詞。\n<h4>情緒性報導</h4>\n透過分析新聞資料的內文與標題，並以詞語向量化 ( word2vec ) 、群聚 ( cluster ) 的技術，找出與「酸」相近的用詞集，並作為以下定義的「情緒性用詞」。\n而情緒性報導是為，新聞標題中含有情緒性用詞的報導，此處統計各家媒體報導本週熱詞時情緒性報導的比率。「情緒性用詞」包含<ol>"+t+"\n</ol><h4>報導數量</h4>統計 6 家媒體對本周熱詞的報導數量，分析其數量。";section=1,$("#help .content").html(e),$("#help").animateCss(updateAnimation)}else if(!isPosBeyondIdTop(pos,".buzzwords")&&0!=section){var n="",e=n+"統計6家媒體於官方網站上，一周內所發表之新聞量。\n    <h4>資料來源</h4>\n    <ol>\n    <li>蘋果日報</li>\n    <li>聯合報</li>\n    <li>自由時報</li>\n    <li>東森新聞雲</li>\n    <li>中央通訊社</li>\n    <li>中國時報</li>\n    </ol>\n    ";section=0,$("#help .content").html(e),$("#help").animateCss(updateAnimation)}}),$(".nav li").on("click",function(o){var n=o.target.id;if("button1"===n)$("html, body").animate({scrollTop:0},"slow");else if("button2"===n){$("#report").offset();animateToId("#report")}else"button3"===n&&animateToId("#discussion")});
"use strict";function createNewsBarChart(t,r){var a={top:20,right:20,bottom:80,left:20},n=$(".band").width()>768?768:$(".band-inner").width(),e=n-a.left-a.right,i=200-a.top-a.bottom,o=d3.select(t).append("svg").attr("width",e+a.left+a.right).attr("height",i+a.top+a.bottom);o=o.append("g").attr("transform","translate("+a.left+","+a.top+")");var s=(r.map(function(t){return t.title}),d3.scale.ordinal().rangeRoundBands([0,e],.05)),l=d3.scale.linear().range([i,0]);s.domain(r.map(function(t){return t.title})),l.domain([0,d3.max(r,function(t){return t.newsCount})]);var d=d3.svg.axis().scale(s).tickPadding(4).orient("bottom"),u=(d3.svg.axis().scale(l).orient("left"),o.selectAll(".bar").data(r).enter().append("g").attr("class","bar")),c=u.append("rect").attr("class","bar").attr("x",function(t){return s(t.title)+s.rangeBand()/2-7.5}).attr("y",l(0)).attr("width",15).attr("height",i-l(0)).attr("rx",5).attr("ry",5).attr("fill",function(t){return mediaColor[t.title]}),f="",p="",g="middle";e<600&&(f+="rotate(45)",p="0.7rem",g="start"),u.append("text").text(function(t){return t.newsCount+"篇"}).attr("x",function(t){return s(t.title)+10+s.rangeBand()/2-7.5}).attr("y",function(t){return l(t.newsCount)-8}).attr("text-anchor","middle").attr("class","bartip").attr("font-size",p),o.append("g").attr("class","x axis").attr("transform","translate(0,"+(i+4)+")").call(d).selectAll("text").style("text-anchor",g).attr("transform",f).attr("font-size",p),c.transition().delay(function(t,r){return 60*r+100}).duration(1200).ease("quad").attr("y",function(t){return l(t.newsCount)}).attr("height",function(t){return i-l(t.newsCount)})}
"use strict";function createTimeline(t,e){var a={top:40,right:40,bottom:80,left:80},n=$(".timeline-container").width(),r=$(window).height()/5;r=r<200?200:r,n<480&&(a.left=24,a.right=24,a.bottom=80,r=180),$(t).empty(),$(t).append("<h3>報導次數時間軸</h3>");var i=d3.select(t).append("svg").attr("width",n).attr("height",r);n=+i.attr("width")-a.left-a.right,r=+i.attr("height")-a.top-a.bottom;var o=i.append("g").attr("transform","translate("+a.left+","+a.top+")"),s=d3.time.scale().range([0,n]),l=d3.scale.linear().range([r,0]),c=d3.svg.axis().scale(s).orient("bottom").ticks(7).tickFormat(d3.time.format("%m/%d")),d=d3.svg.axis().scale(l).orient("left").ticks(3);n<980&&(c.ticks(2),d.ticks(2));var p=d3.time.format("%Y-%m-%d").parse,u=d3.time.format("%Y/%m/%d").parse;e.map(function(t){var e=t.time;return e instanceof Date||(e=p(t.time)),e instanceof Date||(e=u(t.time)),t.time=e,t}),e.sort(sortByDateAscending);var m=d3.svg.line().interpolate("monotone").x(function(t){return s(t.time)}).y(function(t){return l(t.count)});s.domain(d3.extent(e,function(t){return t.time})),l.domain([0,d3.max(e,function(t){return t.count})]),d3.nest().key(function(t){return t.website}).entries(e).forEach(function(t){var e;e=o.append("g").attr("class","lineGroup"),e.append("path").attr("class","line").attr("d",m(t.values)).attr("stroke",function(){return mediaColor[t.key]}).attr("class","timeline-line");for(var a in t.values)e.append("circle").attr("cx",function(){return s(t.values[a].time)}).attr("cy",function(){return l(t.values[a].count)}).attr("fill",function(){return mediaColor[t.key]}).attr("class","timeline-dot").transition(1e3)}),o.append("g").attr("class","x axis").attr("transform","translate(0,"+r+")").style("opacity",.6).call(c);var f=o.append("text").attr("x",-40).attr("y",-15).attr("fill","black").style("font-size","12px").style("letter-spacing","2px").style("font-weight","300").style("opacity",0).text("報導次數（次）"),y=o.append("g").attr("class","tips").attr("transform","translate(20,"+(r+a.top)+")").style("text-anchor","middle").selectAll("g.tip").data(media).enter().append("g").attr("class","tip").attr("transform",function(t,e){var a=n/media.length+8;a=a>120||a<80?120:a;var r=(n/media.length+8)*e,i=0;return n<480&&(r=e%4*(n/3+8),i=16*Math.floor(e/3)),"translate("+r+","+i+")"});if(y.append("circle").attr("r","6").attr("cx","-12").attr("cy","2").style("fill",function(t){return mediaColor[t]}),y.append("text").text(function(t){return t}).attr("font-size","12").attr("dx","24").attr("dy","6").style("font-weight","300").style("fill",function(t){return mediaColor[t]}),n>=480){var g=o.append("g").attr("class","y axis").style("opacity",0).call(d);i.on("mouseover",function(){g.transition().duration(200).style("opacity",.6),f.transition().duration(200).style("opacity",.6)}).on("mouseout",function(){g.transition().duration(200).style("opacity",0),f.transition().duration(200).style("opacity",0)})}}function sortByDateAscending(t,e){return t.time-e.time}
"use strict";function initWordAnalysis(n){for(var e in media){var i=$("<div>").addClass("card");i.append("<h3>"+media[e]+"</h3>"),i.append(getWordAnalysisProvocativeList(n.provocative[media[e]])),i.append(getWordAnalysisOutlinerList(n.outliner[media[e]])),$(".horizontal-lists .outer").append(i)}$(".horizontal-lists .outer").append('<div style="visibility: hidden"><h5>placeholder</h5><div>')}function getWordAnalysisProvocativeList(n){for(var e=$("<div>").addClass("provocative list").append("<h5>情緒報導排行</h5>"),i=!1,t=$("<ol>"),a=n.length>5?5:n.length,r=0;r<a;r++)0!==n[r].rate&&(i=!0,t.append("<li><span>"+n[r].word+"</span><span>"+(100*n[r].rate).toFixed(1)+"%</span></li>"));return i?e.append(t):e.append('<h5 class="not-found">沒有找到情緒報導</h5>'),e}function getWordAnalysisOutlinerList(n){return $.merge(getOverOutlinerList(n),getUnderOutlinerList(n))}function getOverOutlinerList(n){var e=$("<div>").addClass("outliner list").append("<h5>大量報導主題</h5>"),i=!1,t=$("<ol>"),a=0;n=Object.keys(n).filter(function(e){return 1==n[e].trend});for(var r in n)if(i=!0,t.append("<li><span>"+n[r]+"</span><span>大量報導</span></li>"),++a>=10)break;return i?e.append(t):e.append('<h5 class="not-found">沒有找到大量報導主題</h5>'),e}function getUnderOutlinerList(n){var e=$("<div>").addClass("outliner list").append("<h5>少量報導主題</h5>"),i=!1,t=$("<ol>"),a=0;n=Object.keys(n).filter(function(e){return-1==n[e].trend});for(var r in n)if(i=!0,t.append("<li><span>"+n[r]+"</span><span>少量報導</span></li>"),++a>=10)break;return i?e.append(t):e.append('<h5 class="not-found">沒有找到少量報導主題</h5>'),e}
"use strict";function ShowWordCollectionInModal(o){var r,a=mediaNameTranslate($(o.target).data("media")),e=$(".qurey-word")[0].innerText;""!==e&&($("#modal-container").addClass("show"),setTimeout(function(){$("#pop-content .card-container").addClass("show"),$("#pop-content .card-container .list").empty(),$("#pop-content .about-container").empty();for(var o=0;o<report.words_count.length;o++)if(report.words_count[o][0]===e){r=+o;break}for(var n=report.words_count[r][2],o=0;o<n.length;o++){if(n[o].media===a){var t=n[o].title,c=n[o].url,d=n[o].isProvocative?"background-color:#ffc7b3":"",i='<a target="_blank" class="card" style ="'+d+'" href="'+c+'"><h5>'+t+'</h5><div class="detail"></div></a>';$("#pop-content .card-container .list").append(i)}}refreshCards(),$("body,html").css("overflow","hidden")},500))}function refreshCards(){$(".card-container .list").each(function(){0==$(this).find(".card").length?$(this).addClass("no-card"):$(this).removeClass("no-card")})}function wordCollectionAddNewsCard(o,r,a,e,n){var t="#word-collection ."+o+"-container .cards",c=n?"background-color:#ffc7b3":"",d='<a target="_blank" class="card" style="'+c+'" href="'+e+'"><h5>'+r+'</h5><div class="detail">'+a+"</div></a>";$(t).append(d),refreshCards()}function wordCollectionAddNewsNum(o,r){var a="#word-collection ."+o+"-container .cards",e='<h5 class="remaining-news-num" data-media="'+o+'">與其他 '+r+" 則新聞...</h5>";$(a).append(e),$(a).find(".remaining-news-num").on("click",ShowWordCollectionInModal),refreshCards()}function wordCollectionAddProvocativeNum(o,r){$("#word-collection ."+o+"-container .provative-num").remove();var a=r>10?"color:coral":"opacity:0.6",e="#word-collection ."+o+"-container h3",n='<h5 class="provative-num" style='+a+"> "+r+" % 標題含情緒字眼</h5>";$(e).after(n),refreshCards()}function wordCollectionClearCards(o,r,a){$("#word-collection .list .cards").each(function(o){$(this).html("")}),refreshCards()}