(this.webpackJsonpcovidlive=this.webpackJsonpcovidlive||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(5),a=c.n(i),r=(c(11),c(12),c(4)),d=c.n(r),j=c(6),l=c(2),o=(c(14),c(15),c(0)),b=function(){var e=(new Date).toLocaleTimeString(),t=Object(n.useState)(e),c=Object(l.a)(t,2),s=c[0],i=c[1];return setInterval((function(){var e=(new Date).toLocaleTimeString();i(e),console.log("clicked")}),1e3),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h1",{className:"time",children:s})})},h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c.statewise[0]),s(c.statewise[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"COVID CASES IN INDIA"})}),Object(o.jsxs)("div",{className:"live",children:[Object(o.jsx)("div",{className:"dot"}),Object(o.jsx)("div",{className:"blink",children:Object(o.jsx)("p",{children:"LIVE"})})]}),Object(o.jsx)("div",{className:"update",children:Object(o.jsxs)("p",{children:["Data Updated at: ",c.lastupdatedtime]})}),Object(o.jsx)("div",{children:Object(o.jsx)(b,{})}),Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("div",{className:"div1",children:Object(o.jsxs)("p",{children:["Active cases: ",c.active]})}),Object(o.jsx)("div",{className:"div2",children:Object(o.jsxs)("p",{children:["Confirmed Cases: ",c.confirmed]})}),Object(o.jsx)("div",{className:"div3",children:Object(o.jsxs)("p",{children:["Death Cases: ",c.deaths]})}),Object(o.jsx)("div",{class:"div4",children:Object(o.jsxs)("p",{children:["Recovered Cases: ",c.recovered]})})]})]})};var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(h,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),u()}],[[17,1,2]]]);
//# sourceMappingURL=main.61b31bf2.chunk.js.map