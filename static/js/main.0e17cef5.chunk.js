(this["webpackJsonpworkshop-api-cores"]=this["webpackJsonpworkshop-api-cores"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo-paleta.93d0d6f2.png"},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),c=(a(13),a(1)),i=a(2),s=a(4),u=a(3),m=(a(14),a(7)),h=a.n(m),p=function(){return r.a.createElement("header",{className:"head"},r.a.createElement("img",{src:h.a,alt:"logo"}),r.a.createElement("h1",null," Paleta de Cores"),r.a.createElement("form",{className:"pesquisar"},r.a.createElement("input",{type:"text",placeholder:"Pesquise uma cor aqui...",id:"pesq"})))},d=function(){return r.a.createElement("footer",{className:"rodape"},r.a.createElement("h2",null,"Projeto Senai-API-React | Desenvolvedores"),r.a.createElement("ul",{className:"devs"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/LuanTavares13"},"Luan Tavares")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/RachMor"},"Raquel Moreira")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Juneor93"},"Artur Nishiuchi")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Mmotta18"},"Matheus Motta")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/leoorodr"},"Leonardo Rodrigues")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/rosana-araujo"},"Rosana Ara\xfajo"))))},f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={paleta:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.colr.org/json/colors/random/65").then((function(e){return e.json()})).then((function(t){var a=t.colors.map((function(e){return e.hex})).filter((function(e){return e}));e.setState({paleta:a})}))}},{key:"render",value:function(){var e="";return 0!==this.state.paleta.length&&(e=r.a.createElement("div",{className:"container"},this.state.paleta.map((function(e){return r.a.createElement("div",{style:{backgroundColor:"#"+e}},r.a.createElement("p",null,"#",e))})))),r.a.createElement("div",{className:"conteudo"},r.a.createElement("div",{className:"lateral"}),e)}}]),a}(r.a.Component),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(d,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0e17cef5.chunk.js.map