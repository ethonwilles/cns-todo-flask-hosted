(this["webpackJsonpcns-todo-app"]=this["webpackJsonpcns-todo-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),r=a.n(o),l=(a(23),a(2)),u=function(e){var t=c.a.useState("red"),a=Object(l.a)(t,2),n=a[0],o=a[1],r=c.a.useState(e.check),u=Object(l.a)(r,2),m=u[0],s=u[1],i=c.a.useState(!1),d=Object(l.a)(i,2),p=d[0],f=d[1];c.a.useEffect((function(){m&&o("green")}),[]);return c.a.createElement("div",{className:"todo"},c.a.createElement("form",{action:"https://cjw-todo-site.herokuapp.com/upload",method:"POST",enctype:"multipart/form-data"},c.a.createElement("div",{className:"todo-content"},c.a.createElement("p",null,e.content),c.a.createElement("i",{onClick:function(){fetch("https://cns-automate-backend.herokuapp.com/todo-check",{method:"DELETE",cors:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({task:e.content,completed:e.check,date:e.date})}),o("yellow"),f(!0)},class:"far fa-trash-alt"})),c.a.createElement("input",{type:"file",name:"file"}),c.a.createElement("div",{className:"check",style:{backgroundColor:n}},c.a.createElement("button",{style:{backgroundColor:n},onClick:function(){m?(o("red"),s(!1)):(o("green"),s(!0))},type:"submit"},m?c.a.createElement("p",null,"Done"):p?c.a.createElement("p",null,"Marked For Deletion"):c.a.createElement("p",null,"Not Done")))))},m=a(1),s=a.n(m),i=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),a=t[0],n=t[1],o=c.a.useState([]),r=Object(l.a)(o,2),m=r[0],i=(r[1],c.a.useState("".concat(s()().month()+1,"/").concat(s()().date()))),d=Object(l.a)(i,2),p=d[0],f=d[1];c.a.useEffect((function(){fetch("https://cns-automate-backend.herokuapp.com/todo-check").then((function(e){return e.json()})).then((function(e){return n(e.items)}));for(var e=s()().date();e<=s()().date()+7;e++)m.push(e)}),[]);return c.a.createElement("div",{className:"content"},c.a.createElement("select",{onChange:function(e){f(e.target.value),console.log(e.target.value),console.log(p)}},m.map((function(e){return c.a.createElement("option",{value:"".concat(s()().month()+1,"/").concat(e)},s()().month()+1,"/",e)}))),(console.log(a),a.map((function(e){if(!1===e.completed&&e.date===p)return c.a.createElement(u,{content:e.task,check:e.completed,date:e.date})}))))},d=function(){var e=c.a.useState(""),t=Object(l.a)(e,2),a=t[0],n=t[1],o=c.a.useState([]),r=Object(l.a)(o,2),u=r[0],m=(r[1],c.a.useState("".concat(s()().month()+1,"/").concat(s()().date()))),i=Object(l.a)(m,2),d=i[0],p=i[1];c.a.useEffect((function(){document.getElementById("admin-link").click(),console.log("ran?");for(var e=s()().date();e<=s()().date()+7;e++)u.push(e)}),[]);return c.a.createElement("div",{className:"create"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https://cns-automate-backend.herokuapp.com/todo-check",{method:"POST",cors:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({task:a,completed:!1,date:d})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),n("")}},c.a.createElement("textarea",{placeholder:"Enter task here..",onChange:function(e){return n(e.target.value)},value:a}),c.a.createElement("select",{onChange:function(e){p(e.target.value),console.log(e.target.value),console.log(d)}},u.map((function(e){return c.a.createElement("option",{value:"".concat(s()().month()+1,"/").concat(e)},s()().month()+1,"/",e)}))),c.a.createElement("button",{type:"submit"},"Submit")))},p=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),a=t[0],n=t[1],o=c.a.useState([]),r=Object(l.a)(o,2),m=r[0],i=(r[1],c.a.useState("".concat(s()().month()+1,"/").concat(s()().date()))),d=Object(l.a)(i,2),p=d[0],f=d[1];c.a.useEffect((function(){fetch("https://cns-automate-backend.herokuapp.com/todo-check").then((function(e){return e.json()})).then((function(e){return n(e.items)}));for(var e=s()().date();e>=s()().date()-14;e--)e>=1&&m.push(e)}),[]);return c.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},c.a.createElement("select",{onChange:function(e){f(e.target.value),console.log(e.target.value),console.log(p)}},m.map((function(e){return c.a.createElement("option",{value:"".concat(s()().month()+1,"/").concat(e)},s()().month()+1,"/",e)}))),c.a.createElement("input",{placeholder:"Enter Date to Search ex. '6/14'",onChange:function(e){return f(e.target.value)},style:{width:"180px"}}),a.map((function(e){if(e.completed&&e.date==p)return c.a.createElement(u,{content:e.task,check:e.completed,date:e.date})})))},f=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),a=t[0],n=t[1],o=c.a.useState([]),r=Object(l.a)(o,2),m=r[0],i=(r[1],c.a.useState("".concat(s()().month()+1,"/").concat(s()().date()))),d=Object(l.a)(i,2),p=d[0],f=d[1];c.a.useEffect((function(){fetch("https://cns-automate-backend.herokuapp.com/todo-check").then((function(e){return e.json()})).then((function(e){return n(e.items)}));for(var e=s()().date();e<=s()().date()+7;e++)m.push(e)}),[]);return c.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},c.a.createElement("select",{onChange:function(e){f(e.target.value),console.log(e.target.value),console.log(p)}},m.map((function(e){return c.a.createElement("option",{value:"".concat(s()().month()+1,"/").concat(e)},s()().month()+1,"/",e)}))),a.map((function(e){if(!1===e.completed&&e.date==p)return c.a.createElement(u,{content:e.task,check:e.completed,date:e.date})})))},h=function(){var e=c.a.useState(0),t=Object(l.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",{className:"admin"},c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{id:"create-link",onClick:function(){return n(0)}},"Create"),c.a.createElement("button",{onClick:function(){return n(1)}},"Completed"),c.a.createElement("button",{onClick:function(){return n(2)}},"In Progress")),0===a?c.a.createElement(d,null):1===a?c.a.createElement(p,null):c.a.createElement(f,null))},E=function(){return c.a.createElement("div",null)},k=a(10),v=a(3);var b=function(){var e=c.a.useState(!0),t=Object(l.a)(e,2);return t[0],t[1],c.a.createElement("div",{className:"App"},c.a.createElement(k.a,null,c.a.createElement("div",{className:"navbar"},c.a.createElement(k.b,{to:"/admin",id:"admin-link"},"Admin"),c.a.createElement(k.b,{to:"/content"},"Jordon ToDo")),c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:"/",component:E}),c.a.createElement(v.a,{path:"/admin",component:h}),c.a.createElement(v.a,{path:"/content",component:i}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.eb190eb9.chunk.js.map