(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);var i=a(1),s=a(2),l=a(4),h=a(3),u=function(e){var t=e.name,a=e.email,n=e.id,o=e.click;return r.a.createElement("div",{onClick:o.bind(void 0,t),className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots,a=e.click;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,email:e.email,click:a})})))},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},b=(a(6),function(e){return r.a.createElement("div",{className:"scrollbar",style:{overflowY:"scroll",border:"5px solid black",height:"650px"}},e.children)}),f=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),a}(n.Component),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onRobotClick=function(t){e.setState({robotname:t})},e.randomImages=function(){var t=e.state.robots;t.forEach((function(e,t){return e.id=Math.floor(Math.random()*(30*(t+1)-30*t))+30*t})),e.setState({robots:t,searchfield:"",robotname:""})},e.state={robots:[],searchfield:"",robotname:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=e.robotname,o=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1 sega"},"robofriends"),r.a.createElement("h3",{className:"f4"},n),r.a.createElement("button",{className:"f4 link dim ph3 pv2 mb2 dib white bg-blue",style:{border:"5px",borderRadius:"25px"},onClick:this.randomImages},"random")," ",r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,{greedting:"hi"},r.a.createElement(f,null,r.a.createElement(m,{robots:o,click:this.onRobotClick})))):r.a.createElement("h1",{className:"sega f3"},"loading...")}}]),a}(n.Component);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9bfa8db1.chunk.js.map