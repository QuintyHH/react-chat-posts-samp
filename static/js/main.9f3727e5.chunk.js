(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(60)},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),s=n(6),u=n(3),i=n(29),o=n(8),l=n(9),p=n(11),d=n(10),f=n(12),m=n(5),h=n.n(m),v=n(13),b=n(18),O=n.n(b),j=n(30),y=n.n(j).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),E=function(){return function(){var e=Object(v.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS_ACTION",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(v.a)(h.a.mark(function t(n){var r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER_ACTION",payload:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},N=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.user;return e?a.a.createElement("div",{className:"header"},e.name):a.a.createElement("div",null,"Wait..Who wrote this?!")}}]),t}(a.a.Component),k=Object(s.b)(function(e,t){return{user:e.users.find(function(e){return e.id===t.userId})}})(N),C=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map(function(e){return a.a.createElement("div",{className:"item",key:e.id},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement(k,{userId:e.userId})))})}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(a.a.Component),T=Object(s.b)(function(e){return{posts:e.posts}},{fetchPostsAndUsers:function(){return function(){var e=Object(v.a)(h.a.mark(function e(t,n){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(E());case 2:O.a.uniq(O.a.map(n().posts,"userId")).forEach(function(e){return t(w(e))});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}})(C),g=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(T,null))},x=n(31),I=Object(u.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS_ACTION":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_ACTION":return[].concat(Object(x.a)(e),[t.payload]);default:return e}}}),_=Object(u.d)(I,Object(u.a)(i.a));Object(c.render)(a.a.createElement(s.a,{store:_},a.a.createElement(g,null)),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9f3727e5.chunk.js.map