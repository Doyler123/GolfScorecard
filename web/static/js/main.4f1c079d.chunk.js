(this.webpackJsonpscorecard=this.webpackJsonpscorecard||[]).push([[0],[,,,,,function(e,a,n){e.exports=n(12)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),s=n.n(t),l=n(4),c=n.n(l),r=(n(10),n(1)),o=n(2),m=(n(11),function(e){var a=e.courseData,n=e.handicap,t=e.onChangeHandicap,l=e.playerName,c=e.setPlayerName,r=e.updateScore,o=e.calculateTotal,m=e.onFocus;return s.a.createElement("div",null,s.a.createElement("div",{className:"nine"},s.a.createElement("div",{className:"line"},s.a.createElement("span",{className:"name"},s.a.createElement("input",{onFocus:m,value:l,placeholder:"Player Name",className:"name-box",onChange:function(e){return c(e.target.value)}})),s.a.createElement("span",{className:"hcap"},"Hcap:"),s.a.createElement("span",{className:"hcap"},s.a.createElement("input",{onFocus:m,value:n,placeholder:"-",type:"number",className:"score-box",onChange:t}))),s.a.createElement("div",{className:"line"},s.a.createElement("span",{className:"hole"},"Hole"),s.a.createElement("span",{className:"par"},"Par"),s.a.createElement("span",{className:"index"},"Index"),s.a.createElement("span",{className:"score"},"Net"),s.a.createElement("span",{className:"points"},"S/F")),a.holes.slice(0,9).map((function(e,a){return s.a.createElement("div",{className:"line",key:e.hole},s.a.createElement("span",{className:"hole"},e.hole),s.a.createElement("span",{className:"par"},e.par),s.a.createElement("span",{className:"index"},e.index),s.a.createElement("span",{className:"score"},s.a.createElement("input",{onFocus:m,value:e.score?e.score:"",type:"number",className:"score-box",onChange:function(a){return r(e.hole-1,a.target.value)}})),s.a.createElement("span",{className:"points"},e.points?e.points:"-"))})),s.a.createElement("div",{className:"line"},s.a.createElement("span",{className:"hole"},"Out"),s.a.createElement("span",{className:"par"},"36"),s.a.createElement("span",{className:"index"},"\xa0"),s.a.createElement("span",{className:"score"},o(a.holes.slice(0,9),"score")),s.a.createElement("span",{className:"points"},o(a.holes.slice(0,9),"points")))),s.a.createElement("div",{className:"nine"},s.a.createElement("div",{className:"line"},s.a.createElement("span",{className:"hole"},"Hole"),s.a.createElement("span",{className:"par"},"Par"),s.a.createElement("span",{className:"index"},"Index"),s.a.createElement("span",{className:"score"},"Net"),s.a.createElement("span",{className:"points"},"S/F")),a.holes.slice(9,18).map((function(e,a){return s.a.createElement("div",{className:"line",key:e.hole},s.a.createElement("span",{className:"hole"},e.hole),s.a.createElement("span",{className:"par"},e.par),s.a.createElement("span",{className:"index"},e.index),s.a.createElement("span",{className:"score"},s.a.createElement("input",{onFocus:m,value:e.score?e.score:"",type:"number",className:"score-box",onChange:function(a){return r(e.hole-1,a.target.value)}})),s.a.createElement("span",{className:"points"},e.points?e.points:"-"))})),s.a.createElement("div",{className:"line"},s.a.createElement("span",{className:"hole"},"In"),s.a.createElement("span",{className:"par"},"36"),s.a.createElement("span",{className:"index"},"\xa0"),s.a.createElement("span",{className:"score"},o(a.holes.slice(0,9),"score")),s.a.createElement("span",{className:"points"},o(a.holes.slice(0,9),"points"))),s.a.createElement("div",{className:"line"},s.a.createElement("span",{className:"hole"},"Total"),s.a.createElement("span",{className:"par"},"72"),s.a.createElement("span",{className:"index"},"\xa0"),s.a.createElement("span",{className:"score"},o(a.holes,"score")),s.a.createElement("span",{className:"points"},o(a.holes,"points")))))}),i={name:"Test Golf Club",holes:[{hole:1,par:4,index:6},{hole:2,par:5,index:12},{hole:3,par:4,index:8},{hole:4,par:3,index:18},{hole:5,par:4,index:2},{hole:6,par:3,index:10},{hole:7,par:4,index:4},{hole:8,par:5,index:16},{hole:9,par:4,index:14},{hole:10,par:4,index:7},{hole:11,par:4,index:13},{hole:12,par:5,index:15},{hole:13,par:3,index:9},{hole:14,par:4,index:3},{hole:15,par:3,index:17},{hole:16,par:4,index:11},{hole:17,par:4,index:1},{hole:18,par:5,index:5}]},p=function(){var e=Object(t.useState)(i),a=Object(o.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)(),p=Object(o.a)(c,2),u=p[0],h=p[1],d=Object(t.useState)(),N=Object(o.a)(d,2),E=N[0],v=N[1];Object(t.useEffect)((function(){l(Object(r.a)({},l,{holes:n.holes.map((function(e,a){return Object(r.a)({},e,{score:e.score,points:x(e.score,e.par,e.index)})}))}))}),[E]);var x=function(e,a,n){if(e){for(var t=parseInt(E),s=0;t>-18;)t>=0?parseInt(n)<=t&&s++:0===s&&parseInt(n)>=19+t&&s--,t-=18;var l=parseInt(a)+2-(parseInt(e)-s);return l<0?0:l}return 0};return s.a.createElement(m,{courseData:n,handicap:E,onChangeHandicap:function(e){if(!isNaN(e.target.value)){var a=parseInt(e.target.value);a<-17?(a=-17,e.target.value=a):a>99&&(a=99,e.target.value=a),v(a)}v(e.target.value)},playerName:u,setPlayerName:h,updateScore:function(e,a){l(Object(r.a)({},n,{holes:n.holes.map((function(n,t){return e===t?Object(r.a)({},n,{score:a,points:x(a,n.par,n.index)}):n}))}))},calculateTotal:function(e,a){var n=e.reduce((function(e,n){return e+parseInt(n[a]?n[a]:0)}),0);return n<=0?"-":n},onFocus:function(e){return e.target.select()}})};var u=function(){return s.a.createElement("div",{style:{padding:"5px"},className:"App"},s.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.4f1c079d.chunk.js.map