(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(63)},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(31),r=n.n(i),s=(n(46),n(9)),c=n(10),l=n(12),u=n(11),p=n(13),m=(n(47),n(48),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"Nav"},o.a.createElement("div",{className:"Nav-menus"},o.a.createElement("div",{className:"Nav-brand"},o.a.createElement("a",{className:"Nav-brand-logo",href:"/"},"Instagram"))))}}]),t}(o.a.Component)),f=n(32),h=(n(49),n(19)),d=n.n(h),v=(n(50),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.nickname,t=this.props.avatar,n=this.props.image,a=this.props.caption;return o.a.createElement("article",{className:"Post",ref:"Post"},o.a.createElement("header",null,o.a.createElement("div",{className:"Post-user"},o.a.createElement("div",{className:"Post-user-avatar"},o.a.createElement("img",{src:t,alt:e})),o.a.createElement("div",{className:"Post-user-nickname"},o.a.createElement("span",null,e)))),o.a.createElement("div",{className:"Post-image"},o.a.createElement("div",{className:"Post-image-bg"},o.a.createElement("img",{alt:a,src:n}))),o.a.createElement("div",{className:"Post-caption"},o.a.createElement("strong",null,e,">"),a))}}]),t}(a.Component)),g=(n(51),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"notify"},o.a.createElement("p",null,o.a.createElement("em",null,this.props.data)))}}]),t}(a.Component));function b(){var e=Object(f.a)(['{\n              posts(user_id: "a") {\n                id\n                user {\n                  nickname\n                  avatar\n                }\n                image\n                caption\n              }\n            }']);return b=function(){return e},e}var E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={posts:[]},e.offline=!navigator.onLine,e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Notification.requestPermission(),this.offline?this.setState({posts:JSON.parse(localStorage.getItem("posts"))}):this.props.apollo_client.query({query:d()(b())}).then(function(t){e.setState({posts:t.data.posts}),localStorage.setItem("posts",JSON.stringify(t.data.posts))}),this.posts_channel=this.props.pusher.subscribe("posts-channel"),this.posts_channel.bind("new-post",function(t){if(e.setState({posts:e.state.posts.concat(t.post)}),"granted"===Notification.permission)try{new Notification("Pusher Instagram Clone",{body:"New post from ".concat(t.post.user.nickname),icon:"https://img.stackshare.io/service/115/Pusher_logo.png",image:"".concat(t.post.image)}).onclick=function(e){window.open("http://localhost:3000","_blank")}}catch(n){console.log("Error displaying notification")}},this)}},{key:"render",value:function(){var e=this.offline?o.a.createElement(g,{data:"Instagram Clone: Offline Mode"}):o.a.createElement("span",null);return o.a.createElement("div",null,e,o.a.createElement("div",{className:"Posts"},this.state.posts.slice(0).reverse().map(function(e){return o.a.createElement(v,{nickname:e.user.nickname,avatar:e.user.avatar,image:e.image,caption:e.caption,key:e.id})})))}}]),t}(a.Component),w=n(39),N=n(38),O=n(33),j=n.n(O),k=new w.a({uri:"http://localhost:4000/graphql"}),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).pusher=new j.a("PUSHER_APP_KEY",{cluster:"eu",encrypted:!0}),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){"actions"in Notification.prototype?console.log("Notification"):console.log("No Nofications")}},{key:"render",value:function(){return o.a.createElement(N.a,{client:k},o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement("section",{className:"App-main"},o.a.createElement(E,{pusher:this.pusher,apollo_client:k}))))}}]),t}(a.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");P?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.56a9fa59.chunk.js.map