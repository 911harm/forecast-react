(this.webpackJsonpforecast=this.webpackJsonpforecast||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),r=a(4),i=a.n(r);function j(e){var t=e.children;return Object(c.jsx)("div",{className:"wrapper",children:t})}var d=a(2),o="https://api.openweathermap.org/data/2.5/",h="65ddec2df57701a814f3e6aa34ee8edc";function l(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.responseText);n(e)}},e.open("GET","".concat(o,"weather?q=Bogota&appid=").concat(h,"&units=metric"),!0),e.send()}),[]),Object(c.jsx)("div",{className:"Hero",children:Object(c.jsx)("div",{className:"image-forecast ",children:a&&Object(c.jsxs)("div",{className:"data-forecast data-forecast-before",children:[Object(c.jsxs)("div",{className:"weather",children:[Object(c.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),alt:"forecast"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:a.weather[0].main})]}),Object(c.jsx)("div",{className:"temp",children:Object(c.jsxs)("span",{children:[a.main.temp,"\xb0C"]})})]})})})}var b=function(e){switch(e>6&&(e-=7),e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return"NewDAy"}};function p(e){var t=e.Day,a=e.DayWeek;return Object(c.jsx)("div",{className:"day",children:Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:""}),Object(c.jsxs)("div",{className:"day-data",children:[Object(c.jsx)("b",{children:a}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:t.weather[0].main})]}),Object(c.jsx)("div",{className:"temp",children:Object(c.jsxs)("span",{children:[Math.round(t.temp.min),"\xb0/",Math.round(t.temp.max),"\xb0"]})})]})})}function x(){var e=new Date,t=Object(s.useState)(!1),a=Object(d.a)(t,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.responseText);i(e)}},e.open("GET","".concat(o,"onecall?lat=4.61&lon=-74.08&appid=").concat(h,"&units=metric"),!0),e.send()}),[]),Object(c.jsxs)("div",{className:"days",children:[Object(c.jsxs)("h3",{children:["3 Days ",Object(c.jsx)("span",{style:{fontWeight:"400"},children:"Forecast"})]}),r&&Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)(p,{Day:r.daily[0],DayWeek:b(e.getDay())}),Object(c.jsx)(p,{Day:r.daily[1],DayWeek:b(e.getDay()+1)}),Object(c.jsx)(p,{Day:r.daily[2],DayWeek:b(e.getDay()+2)})]})]})}var u={width:"400px",textAlign:"center"},O={display:"block",margin:"auto",height:"180px",borderRadius:"20px",objectFit:"cover",width:"260px",boxShadow:"-2px 2px 5px 1px black"};function m(){return Object(c.jsxs)("section",{style:u,className:"section-dummy",children:[Object(c.jsxs)("h2",{children:["Place to ",Object(c.jsx)("span",{style:{fontWeight:"400"},children:"Visit"})]}),Object(c.jsx)("img",{style:O,src:"https://picsum.photos/200/300?grayscale",alt:"places-dommy"})]})}function y(){var e,t=Object(s.useState)(!1),a=Object(d.a)(t,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.responseText);i(e)}},e.open("GET","".concat(o,"weather?q=Francia&appid=").concat(h,"&units=metric"),!0),e.send()}),[]),Object(c.jsx)("div",{className:"location",children:r&&Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"weather",children:Object(c.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(r.weather[0].icon,"@2x.png"),alt:"forecast"})}),Object(c.jsxs)("div",{className:"location-temp",children:[r.main.temp,"\xb0C"]}),Object(c.jsxs)("div",{className:"location-city",children:[Object(c.jsx)("b",{children:"Paris"}),Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:r.name})]})]}),Object(c.jsxs)("div",{className:"container more-info",children:[Object(c.jsxs)("p",{children:["Humidity ",r.main.humidity,"%"]}),Object(c.jsx)("p",{children:(e=r.wind.deg,e>=0&&e<45?"North":e>45&&e<90?"East":e>90&&e<135?"Southeast":e>135&&e<180?"South":e>180&&e<225?"SouthWestern":e>225&&e<270?"West":e>270&&e<360?"Northwest":void 0)}),Object(c.jsxs)("p",{children:[(3.6*r.wind.speed).toFixed(2)," km/h"]})]})]})})}a(10);var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(j,{children:[Object(c.jsx)(l,{}),Object(c.jsxs)("div",{className:"conatiner-bot",children:[Object(c.jsx)(x,{}),Object(c.jsx)(m,{}),Object(c.jsx)(y,{})]})]})})};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.6d454c9c.chunk.js.map