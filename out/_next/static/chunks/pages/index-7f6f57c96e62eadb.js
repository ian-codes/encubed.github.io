(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{366:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Gn}});var r=n(29),o=n(7812),i=n(7794),a=n.n(i),s=n(4588),c=n.n(s),u=n(7294),l=n(5893);function f(t){var e=t.connectCube,n=t.continueWithout;return(0,l.jsxs)("div",{className:c().container,children:[(0,l.jsx)("button",{className:c().connectButton,onClick:function(t){t.currentTarget.blur(),e()},children:(0,l.jsx)("div",{})}),(0,l.jsx)("button",{className:c().continueButton,onClick:n,children:"Continue without smart cube"})]})}var h=n(6724),v=n.n(h),d=n(927),p=n.n(d),_="top",b="bottom",m="left",x="right",g="front",y="back",Z=[_,b,m,x,g,y],C="middle",k="equatorial",w="standing",j="X",S="Y",N="Z";function B(t){var e=t.cubie;return(0,l.jsx)("div",{className:p().cubie,children:Z.map((function(t){return(0,l.jsxs)("div",{className:"".concat(p()[t]," ").concat(p().face),children:[(0,l.jsx)("div",{className:p().wetTexture}),(0,l.jsx)("div",{className:p().color,style:{backgroundColor:e[t]}})]},t)}))})}var I=n(9499),O=n(6835),T=n(2777),M=n(2262),A=n(9739),R="#00aeff",E="#dfdfdf",X="#ff004c",W="#d0ff00",H="#ff9900",L="#00ff00",F="U",P="D",U="R",D="L",Y="F",V="B",z="M",G="S",K="E",q="U'",Q="D'",J="R'",$="L'",tt="F'",et="B'",nt="M'",rt="S'",ot="E'",it="u",at="d",st="r",ct="l",ut="f",lt="b",ft="u'",ht="d'",vt="r'",dt="l'",pt="f'",_t="b'",bt=[U,J],mt=[D,$],xt=[Y,tt],gt=[V,et],yt=[F,q],Zt=[P,Q],Ct=[K,ot],kt=[G,rt],wt=[z,nt],jt=[ut,pt],St=[lt,_t],Nt=[it,ft],Bt=[at,ht],It=[].concat(bt,mt,wt,[st,vt],[ct,dt]),Ot=[].concat(xt,gt,kt,jt,St),Tt=[].concat(yt,Zt,Ct,Nt,Bt),Mt="'",At="2",Rt=[it,at,st,ct,ut,lt,ft,ht,vt,dt,pt,_t],Et=[].concat([F,P,U,D,Y,V,z,G,K],[q,Q,J,$,tt,et,nt,rt,ot],Rt),Xt=[].concat(Ct,kt,wt),Wt="z",Ht="x'",Lt="y'",Ft="z'",Pt=["x","y",Wt,Ht,Lt,Ft];function Ut(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return Dt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dt(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Yt=[8,5,2,11,20,23,26,17],Vt=[0,3,6,15,24,21,18,9],zt=[0,1,2,5,8,7,6,3],Gt=[24,25,26,23,20,19,18,21],Kt=[6,7,8,17,26,25,24,15],qt=[2,1,0,9,18,19,20,11],Qt=[12,15,16,17,14,11,10,9],Jt=[1,4,7,16,25,22,19,10],$t=[3,4,5,14,23,22,21,12],te={available:!1,turn:""};function ee(t){for(var e,n,r={side:void 0,rotation:{direction:void 0,clockwise:!0},reversed:!1},o=(e={},(0,I.Z)(e,It,j),(0,I.Z)(e,Tt,S),(0,I.Z)(e,Ot,N),e),i=0,a=Object.entries(o);i<a.length;i++){var s=(0,O.Z)(a[i],2),c=s[0],u=s[1];c.includes(t)&&(r.rotation.direction=u)}for(var l=(n={},(0,I.Z)(n,bt,x),(0,I.Z)(n,mt,m),(0,I.Z)(n,wt,C),(0,I.Z)(n,xt,g),(0,I.Z)(n,gt,y),(0,I.Z)(n,kt,w),(0,I.Z)(n,yt,_),(0,I.Z)(n,Zt,b),(0,I.Z)(n,Ct,k),n),f=0,h=Object.entries(l);f<h.length;f++){var v=(0,O.Z)(h[f],2),d=v[0],p=v[1];d.includes(t)&&(r.side=p)}return t.includes(Mt)&&(r.reversed=!0),[D,V,P,z,K,J,tt,q,rt].includes(t)&&(r.rotation.clockwise=!1),r}function ne(t){var e;return(e={},(0,I.Z)(e,E,F),(0,I.Z)(e,W,P),(0,I.Z)(e,L,Y),(0,I.Z)(e,R,V),(0,I.Z)(e,X,U),(0,I.Z)(e,H,D),e)[t]}function re(t){var e,n=(e={},(0,I.Z)(e,it,[ot]),(0,I.Z)(e,ft,[K]),(0,I.Z)(e,at,[K]),(0,I.Z)(e,ht,[ot]),(0,I.Z)(e,ut,[G]),(0,I.Z)(e,pt,[rt]),(0,I.Z)(e,lt,[rt]),(0,I.Z)(e,_t,[G]),(0,I.Z)(e,st,[nt]),(0,I.Z)(e,vt,[z]),(0,I.Z)(e,ct,[z]),(0,I.Z)(e,dt,[nt]),e);for(var r in n)n[r].push(r.toUpperCase());return n[t]}function oe(t){var e;return(e={},(0,I.Z)(e,it,[P,Lt]),(0,I.Z)(e,ft,[Q,"y"]),(0,I.Z)(e,at,[F,"y"]),(0,I.Z)(e,ht,[q,Lt]),(0,I.Z)(e,ut,[V,Wt]),(0,I.Z)(e,pt,[et,Ft]),(0,I.Z)(e,lt,[Y,Ft]),(0,I.Z)(e,_t,[tt,Wt]),(0,I.Z)(e,st,[D,"x"]),(0,I.Z)(e,vt,[$,Ht]),(0,I.Z)(e,ct,[U,Ht]),(0,I.Z)(e,dt,[J,"x"]),e)[t]}function ie(t){for(var e,n=(e={},(0,I.Z)(e,z,[U,$,Ht]),(0,I.Z)(e,K,[F,Q,Lt]),(0,I.Z)(e,G,[V,tt,Wt]),e),r=0,o=Object.entries(n);r<o.length;r++){var i=(0,O.Z)(o[r],2),a=i[0],s=i[1].map(fe);n[fe(a)]=s}return n[t]}function ae(t){var e;return(e={},(0,I.Z)(e,"y",[F,ot,Q]),(0,I.Z)(e,"y'",[q,K,P]),(0,I.Z)(e,"z",[Y,et,G]),(0,I.Z)(e,"z'",[tt,V,rt]),(0,I.Z)(e,"x",[U,$,nt]),(0,I.Z)(e,"x'",[J,D,z]),e)[t]}function se(t){var e;return(e={},(0,I.Z)(e,E,W),(0,I.Z)(e,W,E),(0,I.Z)(e,L,R),(0,I.Z)(e,R,L),(0,I.Z)(e,X,H),(0,I.Z)(e,H,X),e)[t]}function ce(t){var e=[];Array.isArray(t)||(t=[t]);var n,r=Ut(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.length<2?e.push(o):o[1]!==Mt?(e.push(o[0]),e.push(o[0])):e.push(o)}}catch(p){r.e(p)}finally{r.f()}for(var i=[],a=0,s=e;a<s.length;a++){var c=s[a];if(c===c.toLowerCase()){if(Pt.includes(c)){var u,l=Ut(ae(c));try{for(l.s();!(u=l.n()).done;){var f=u.value;i.push(f)}}catch(p){l.e(p)}finally{l.f()}}if(Rt.includes(c)){var h,v=Ut(re(c));try{for(v.s();!(h=v.n()).done;){var d=h.value;i.push(d)}}catch(p){v.e(p)}finally{v.f()}}}else i.push(c)}return i}function ue(t){var e=[];Array.isArray(t)||(t=[t]);var n,r=Ut(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.length<2?e.push(o):o[1]!==Mt?(e.push(o[0]),e.push(o[0])):e.push(o)}}catch(p){r.e(p)}finally{r.f()}for(var i=[],a=0,s=e;a<s.length;a++){var c=s[a];if(c!==c.toLowerCase()&&!Xt.includes(c)||Pt.includes(c))i.push(c);else{if(Xt.includes(c)){var u,l=Ut(ie(c));try{for(l.s();!(u=l.n()).done;){var f=u.value;i.push(f)}}catch(p){l.e(p)}finally{l.f()}}if(Rt.includes(c)){var h,v=Ut(oe(c));try{for(v.s();!(h=v.n()).done;){var d=h.value;i.push(d)}}catch(p){v.e(p)}finally{v.f()}}}}return i}function le(t){var e,n=t.slice(-3,-1),r=!1,o=Ut(n);try{for(o.s();!(e=o.n()).done;){0!==e.value&&(r=!0)}}catch(a){o.e(a)}finally{o.f()}if(!r)return te;var i="";return(i+=[P,D,V,U,Y,F][n[0]])?{turn:i+=36===n[1]?"":Mt,available:r}:te}function fe(t){if(t.endsWith(At))return t;if(t.endsWith(Mt))return t.slice(0,1);if(1===t.length)return t+Mt;throw"UNREACHABLE"}function he(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function ve(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var de=new WeakSet,pe=new WeakSet,_e=new WeakSet,be=function(){function t(e){if((0,T.Z)(this,t),he(this,_e),he(this,pe),he(this,de),"number"===typeof e)return this.top=E,this.front=L,this.left=H,void(this.position=e);this.top=(" "+e.top).slice(1),this.front=(" "+e.front).slice(1),this.left=(" "+e.left).slice(1),this.position=e.position}return(0,M.Z)(t,[{key:"rotate",get:function(){var t,e=this;return t={},(0,I.Z)(t,j,(function(t){return ve(e,de,me).call(e,t)})),(0,I.Z)(t,S,(function(t){return ve(e,pe,xe).call(e,t)})),(0,I.Z)(t,N,(function(t){return ve(e,_e,ge).call(e,t)})),t}},{key:"bottom",get:function(){return se(this.top)}},{key:"back",get:function(){return se(this.front)}},{key:"right",get:function(){return se(this.left)}}]),t}();function me(t){if(!t){var e=[this.top,this.back];return this.front=e[0],void(this.top=e[1])}var n=[this.bottom,this.front];this.front=n[0],this.top=n[1]}function xe(t){if(!t){var e=[this.left,this.back];return this.front=e[0],void(this.left=e[1])}var n=[this.right,this.front];this.front=n[0],this.left=n[1]}function ge(t){if(!t){var e=[this.right,this.top];return this.top=e[0],void(this.left=e[1])}var n=[this.left,this.bottom];this.top=n[0],this.left=n[1]}var ye=n(936),Ze=n.n(ye),Ce=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ke="cfop",we="kociemba";function je(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Se(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?je(Object(n),!0).forEach((function(e){(0,I.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ne(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return Be(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Be(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function Be(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ie(t,e,n){Te(t,e),e.set(t,n)}function Oe(t,e){Te(t,e),e.add(t)}function Te(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Me(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var Ae=[_,x,g,b,m,y],Re=[g,x,_,b,m,y],Ee=new WeakSet,Xe=new WeakSet,We=new WeakSet,He=new WeakSet,Le=new WeakSet,Fe=new WeakSet,Pe=new WeakSet,Ue=new WeakSet,De=new WeakMap,Ye=new WeakMap,Ve=new WeakSet,ze=new WeakSet,Ge=new WeakMap,Ke=function(){function t(){var e=this;(0,T.Z)(this,t),Ie(this,Ge,{get:sn,set:void 0}),Oe(this,ze),Oe(this,Ve),Oe(this,Ue),Oe(this,Pe),Oe(this,Fe),Oe(this,Le),Oe(this,He),Oe(this,We),Oe(this,Xe),Oe(this,Ee),Ie(this,De,{writable:!0,value:function(t){return t.unshift(t.pop())}}),Ie(this,Ye,{writable:!0,value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.map((function(t){return e.cube[t]}))}}),this.resetCube()}return(0,M.Z)(t,[{key:"do",value:function(t){if(typeof t!==typeof{}){if("string"===typeof t)if(t.length>2)this.do(t.split(" "));else if(t){this.lastCube=this.cube.map((function(t){return new be(t)}));var e,n=Ne(ce(t));try{for(n.s();!(e=n.n()).done;){var r=e.value;Me(this,Le,tn).call(this,r)}}catch(s){n.e(s)}finally{n.f()}this.moves.push(t),this.isSolved&&(this.solution=null),this.solution?(this.nextMove===t?this.solution.index++:Me(this,He,$e).call(this,ue(fe(t))),this.newMove=!0):this.newMove=!0}}else{if(!Array.isArray(t)){if(!t.available)return;return this.do(t.turn),void this.do(t.rotation)}var o,i=Ne(t);try{for(i.s();!(o=i.n()).done;){var a=o.value;this.do(a)}}catch(s){i.e(s)}finally{i.f()}}}},{key:"kociembaSolveAlgorithm",value:function(){var t=(0,r.Z)(a().mark((function t(){var e,n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="",Me(this,Pe,nn).call(this,(function(t,n,r){e+=ne(r)})),t.next=4,fetch("/api/solve/"+e);case 4:if(200!==!(n=t.sent).status){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,n.json();case 9:return r=t.sent,o=r.solution.trim().split(" "),t.abrupt("return",{method:we,sol:ue(o),meta:[{begin:0,end:o.length,step:"kociemba solve step"}]});case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"cfopSolveAlgorithm",value:function(){var t=(0,r.Z)(a().mark((function t(){var e=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r,i="";Me(e,Ue,rn).call(e,(function(t,e,n){i+=ne(n)}));try{r=Ze()(i,{partitioned:!0})}catch(m){n(m)}var a=[],s=function(t){var n=t.replace(/prime/gi,Mt);if(!(t=n.trim().split(" "))[0])return[];var r=e.visTop,i=e.visFront,s=e.visLeft;e.visTop=E,e.visFront=L,e.visLeft=H;for(var c=0;c<t.length;c++){var u,l=ue(t[c]);(u=t).splice.apply(u,[c,1].concat((0,o.Z)(l))),c+=l.length-1}for(var f=0;f<t.length;f++){var h=t[f];if(Pt.includes(h)){var v=h[0].toUpperCase();e.visualRotate[v](h[1]===Mt),t.splice(f,1),f--}else t.splice(f,1,Me(e,ze,an).call(e,h))}return t.forEach((function(t){return a.push(t)})),e.visTop=r,e.visFront=i,e.visLeft=s,t};for(var c in r)if("string"!==typeof r[c])for(var u=0;u<r[c].length;u++)r[c][u]=s(r[c][u]);else r[c]=s(r[c]);var l=[],f=0,h=function(t,e){var n=f+t;l.push({begin:f,end:n,step:e}),f=n};for(var v in r){var d=r[v];if(d.length&&"string"!==typeof d[0])for(var p=0;p<d.length;p++){var _=["first","second","third","fourth"][p]+" ".concat(v)+" ".concat("cross"===v?"piece":"pair");h(d[p].length,_)}else{var b="".concat("o"===v[0]?"orientation":"permutation")+" of last layer";h(d.length,b)}}t({method:ke,sol:a,meta:l})})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"resetCube",value:function(){this.cube=Array.from({length:27},(function(t,e){return new be(e)})),this.moves=[],this.lastCube=this.cube,this.solution=null,this.visTop=E,this.visFront=L,this.visLeft=H}},{key:"usedNewMove",value:function(){this.newMove=!1}},{key:"stopSolving",value:function(){this.solution=null}},{key:"solve",value:function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e!==we||!this.isSolved){t.next=2;break}return t.abrupt("return");case 2:if(e!==we){t.next=8;break}return t.next=5,this.kociembaSolveAlgorithm();case 5:this.solution=t.sent,t.next=15;break;case 8:if(e!==ke){t.next=14;break}return t.next=11,this.cfopSolveAlgorithm();case 11:this.solution=t.sent,t.next=15;break;case 14:console.log("WE ARE NOT SUPPORTING THE SOLVING METHOD",e);case 15:this.solution.index=0;case 16:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getSolveAlgorithm",value:function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e!==we){t.next=6;break}return t.next=3,this.kociembaSolveAlgorithm();case 3:return t.abrupt("return",t.sent);case 6:if(e!==ke){t.next=8;break}return t.abrupt("return",this.cfopSolveAlgorithm());case 8:console.log("WE ARE NOT SUPPORTING THE SOLVING METHOD",e);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"iterateSides",value:function(t){var e=[_,b,m,x,g,y];Me(this,Fe,en).call(this,e,t)}},{key:"iterate",value:function(t,e){var n=this;(0,A.Z)(this,Ge)[t]((function(t,r){return e.apply(void 0,(0,o.Z)(function(t,e){return[n.cube[t],t,n.cube[t][e],e]}(t,r)))}))}},{key:"visualRotate",get:function(){var t,e=this;return t={},(0,I.Z)(t,j,(function(t){return Me(e,Ee,qe).call(e,t)})),(0,I.Z)(t,S,(function(t){return Me(e,Xe,Qe).call(e,t)})),(0,I.Z)(t,N,(function(t){return Me(e,We,Je).call(e,t)})),t}},{key:"currentMeta",get:function(){var t;return null===(t=this.solution)||void 0===t?void 0:t.meta[this.currentMetaIndex]}},{key:"currentMetaIndex",get:function(){var t,e=this.solution.index;return null===(t=this.solution)||void 0===t?void 0:t.meta.findIndex((function(t){return t.begin<=e&&t.end>e}))}},{key:"visualNextMove",get:function(){if(this.solution)return Me(this,ze,an).call(this,this.nextMove)}},{key:"visualSolution",get:function(){var t=this;if(this.solution)return Se(Se({},this.solution),{},{sol:this.solution.sol.map((function(e){return Me(t,ze,an).call(t,e)}))})}},{key:"nextMove",get:function(){if(this.solution)return this.solution.sol[this.solution.index]}},{key:"top",get:function(){return this.cube[4].top}},{key:"bottom",get:function(){return se(this.top)}},{key:"front",get:function(){return this.cube[16].front}},{key:"back",get:function(){return se(this.front)}},{key:"right",get:function(){return this.cube[14].right}},{key:"left",get:function(){return se(this.right)}},{key:"lastMove",get:function(){return this.moves[this.moves.length-1]}},{key:"visBottom",get:function(){return se(this.visTop)}},{key:"visBack",get:function(){return se(this.visFront)}},{key:"visRight",get:function(){return se(this.visLeft)}},{key:"isSolved",get:function(){var t=this,e=!0;return this.iterateSides((function(n,r,o,i){o!==t[i]&&(e=!1)})),e}}]),t}();function qe(t){if(!t){var e=[this.visTop,this.visBack];return this.visFront=e[0],void(this.visTop=e[1])}var n=[this.visBottom,this.visFront];this.visFront=n[0],this.visTop=n[1]}function Qe(t){if(t){var e=[this.visLeft,this.visBack];return this.visFront=e[0],void(this.visLeft=e[1])}var n=[this.visRight,this.visFront];this.visFront=n[0],this.visLeft=n[1]}function Je(t){if(!t){var e=[this.visRight,this.visTop];return this.visTop=e[0],void(this.visLeft=e[1])}var n=[this.visLeft,this.visBottom];this.visTop=n[0],this.visLeft=n[1]}function $e(t){var e;if(this.solution){var n=this.solution.index;(e=this.solution.sol).splice.apply(e,[n,0].concat((0,o.Z)(t)));for(var r=0;r<this.solution.meta.length;r++){var i=this.solution.meta[r];if(i.end>n&&(this.solution.meta[r].begin++,this.solution.meta[r].end++),i.begin>n+1)return;if(i.end<=n)return;this.solution.meta[r].begin--}}}function tn(t){var e=ee(t),n=e.side,r=e.rotation,o=e.reversed,i=r.direction,a=r.clockwise,s=function(t){var e;return(e={},(0,I.Z)(e,x,Yt),(0,I.Z)(e,m,Vt),(0,I.Z)(e,_,zt),(0,I.Z)(e,b,Gt),(0,I.Z)(e,g,Kt),(0,I.Z)(e,y,qt),(0,I.Z)(e,k,Qt),(0,I.Z)(e,w,$t),(0,I.Z)(e,C,Jt),e)[t]}(n),c=o?s.slice().reverse():s;this.iterate(n,(function(t){return t.rotate[i](a)})),Me(this,Ve,on).call(this,c)}function en(t,e){var n,r=Ne(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;this.iterate(o,e)}}catch(i){r.e(i)}finally{r.f()}}function nn(t){Me(this,Fe,en).call(this,Ae,t)}function rn(t){Me(this,Fe,en).call(this,Re,t)}function on(t){var e=(0,A.Z)(this,Ye).call(this,t[0],t[2],t[4],t[6]),n=(0,A.Z)(this,Ye).call(this,t[1],t[3],t[5],t[7]);(0,A.Z)(this,De).call(this,e),(0,A.Z)(this,De).call(this,n);var r=(0,O.Z)(e,4);this.cube[t[0]]=r[0],this.cube[t[2]]=r[1],this.cube[t[4]]=r[2],this.cube[t[6]]=r[3];var o=(0,O.Z)(n,4);this.cube[t[1]]=o[0],this.cube[t[3]]=o[1],this.cube[t[5]]=o[2],this.cube[t[7]]=o[3]}function an(t){var e,n=this,r={},o=Ne(Z);try{var i=function(){var t,o=e.value,i=n["vis"+(t=o,t.charAt(0).toUpperCase()+t.slice(1))],a=n[o],s=function(t){r[ne(i)+t]=ne(a)+t};s(""),s(Mt),s(At)};for(o.s();!(e=o.n()).done;)i()}catch(a){o.e(a)}finally{o.f()}return r[t]}function sn(){var t;return t={},(0,I.Z)(t,_,(function(t){for(var e=0;e<9;e++)t(e,_)})),(0,I.Z)(t,b,(function(t){for(var e=24;e>17;e-=3)for(var n=0;n<3;n++)t(e+n,b)})),(0,I.Z)(t,x,(function(t){for(var e=8;e<27;e+=9)for(var n=0;n<8;n+=3)t(e-n,x)})),(0,I.Z)(t,m,(function(t){for(var e=0;e<27;e+=3)t(e,m)})),(0,I.Z)(t,g,(function(t){for(var e=0;e<27;e+=9)for(var n=6;n<9;n++)t(e+n,g)})),(0,I.Z)(t,y,(function(t){for(var e=0;e<27;e+=9)for(var n=2;n>=0;n--)t(e+n,y)})),(0,I.Z)(t,C,(function(t){for(var e=1;e<27;e+=3)t(e,C)})),(0,I.Z)(t,k,(function(t){for(var e=9;e<18;e++)t(e,k)})),(0,I.Z)(t,w,(function(t){for(var e=3;e<27;e+=9)for(var n=0;n<3;n++)t(e+n,k)})),t}var cn="-0000-1000-8000-00805f9b34fb",un="00001000"+cn;var ln=n(1715),fn=n.n(ln);function hn(t){var e=t.visualRotate,n=t.update;function r(t){var r=t.target.className;t.currentTarget.blur();var o="",i=!0;r.includes("c1")?(o=j,i=!1):r.includes("c2")?o=S:r.includes("c3")?o=j:r.includes("c4")&&(o=S,i=!1),e[o](i),n(o,!i)}return(0,l.jsx)("div",{className:fn().container,children:(0,l.jsx)("div",{className:fn().controlsWrapper,children:function(){for(var t=[],e=0;e<4;e++)t.push((0,l.jsxs)("div",{className:fn().buttonContainer+" "+fn()["c".concat(e+1)],children:[(0,l.jsx)("button",{onClick:r,className:fn()["c".concat(e+1)]},e),(0,l.jsx)("div",{})]},"c".concat(e+1)));return t}()})})}var vn=n(7259),dn=n.n(vn);function pn(t){var e=t.onClick;return(0,l.jsx)("button",{className:dn().rotateButton,onClick:function(t){e(t)}})}var _n=n(1664),bn=n.n(_n),mn=n(1751),xn=n.n(mn);function gn(t){var e=t.connectCube,n=t.connected?"connected":"disconnected";return(0,l.jsxs)("header",{className:xn().header,children:[(0,l.jsx)(bn(),{href:"/",children:"encubed"}),(0,l.jsx)("div",{className:xn().connectWrapper,children:(0,l.jsxs)("button",{onClick:function(t){t.currentTarget.blur(),e()},children:[(0,l.jsx)("div",{className:xn().bluetoothButton}),(0,l.jsx)("p",{className:xn().status,children:n})]})})]})}var yn=n(6101),Zn=n.n(yn);function Cn(t){var e=t.resetCube;return(0,l.jsx)("button",{className:Zn().resetButton,onClick:e})}var kn,wn=n(3010),jn=n.n(wn);function Sn(){return(0,l.jsx)("div",{className:jn().container})}var Nn=(kn={},(0,I.Z)(kn,F,["rotateX(0) rotateZ(90deg) translateZ(105px)","rotateZ(-180deg)"]),(0,I.Z)(kn,P,["rotateX(0) rotateZ(270deg) translateZ(105px)","rotateZ(-180deg)"]),(0,I.Z)(kn,U,["rotateX(0) rotateZ(180deg) translateZ(105px)","rotateZ(-180deg)"]),(0,I.Z)(kn,D,["rotateX(0) rotateZ(0) translateZ(105px)","rotateZ(-180deg)"]),(0,I.Z)(kn,Y,["rotateX(90deg) rotateZ(0) translateZ(105px)","rotateZ(90deg) translateX(70px) translateY(-70px)"]),(0,I.Z)(kn,V,["rotateX(90deg) rotateZ(0) translateZ(105px)","rotateZ(-90deg) translateX(70px) translateY(70px)"]),(0,I.Z)(kn,q,["rotateX(0) rotateZ(90deg) translateZ(105px)","rotateZ(0)"]),(0,I.Z)(kn,et,["rotateX(0) rotateZ(90deg) translateZ(105px)","rotateZ(0)"]),(0,I.Z)(kn,Q,["rotateX(0) rotateZ(270deg) translateZ(105px)","rotateZ(0)"]),(0,I.Z)(kn,J,["rotateX(0) rotateZ(180deg) translateZ(105px)","rotateZ(0)"]),(0,I.Z)(kn,$,["rotateX(0) rotateZ(0) translateZ(105px)","rotateZ(0)"]),(0,I.Z)(kn,tt,["rotateX(90deg) rotateZ(0) translateZ(105px)","rotateZ(-90deg) translateX(-70px) translateY(70px)"]),(0,I.Z)(kn,et,["rotateX(90deg) rotateZ(0) translateZ(105px)","rotateZ(90deg) translateX(-70px) translateY(-70px)"]),kn),Bn=n(8667),In=n.n(Bn);function On(t){var e=t.isVisible,n=t.nextMove;return e&&n?(0,l.jsx)("div",{className:In().container,children:(0,l.jsx)("div",{className:In().arrowContainer,style:{transform:Nn[n][0]},children:(0,l.jsxs)("div",{className:In().arrow,style:{transform:Nn[n][1]},children:[(0,l.jsx)("div",{className:In().arrowHead}),(0,l.jsx)("div",{className:In().arrowBody,children:(0,l.jsx)("div",{})})]})})}):(0,l.jsx)(l.Fragment,{})}var Tn=n(5675),Mn=n.n(Tn),An=n(6589),Rn=n.n(An);function En(t){var e=t.areVisible,n=t.metaIndex,r=(0,u.useState)([]),o=r[0],i=r[1],a=(0,u.useRef)([]),s=(0,u.useRef)();return(0,u.useEffect)((function(){!function(){for(var t=function(t){t&&!a.current.includes(t)&&a.current.push(t)},e=[],r=0;r<12;r++)e.push((0,l.jsx)("li",{className:Rn().hint,ref:t,children:(0,l.jsx)(Mn(),{src:"/assets/cube-pattern/pattern-".concat(r,".png"),alt:"cube pattern number ".concat(r),layout:"fill",objectFit:"contain"})},r));var o=e.slice(n,n+3);i(o)}(),s.current.style.transform=e?"translateY(0)":"translateY(220px)"}),[e,n]),(0,l.jsxs)("div",{className:Rn().container,ref:s,children:[(0,l.jsx)("div",{className:Rn().bgImage}),(0,l.jsx)("div",{className:Rn().point,children:(0,l.jsx)("div",{children:"\u26ab"})}),(0,l.jsx)("ol",{className:Rn().list,children:o})]})}var Xn=n(3946),Wn=n.n(Xn),Hn={src:"/_next/static/media/eye-cross.ffa83b53.svg",height:24,width:24},Ln=n(92),Fn=n.n(Ln);Et.forEach((function(t){return Et.push(t+At)})),Et.push("");var Pn=[Mt,At],Un=Et.filter((function(t){return!t.includes(Mt)&&!t.includes(At)}));function Dn(t){var e=t.bc,n=(0,u.useState)(""),o=n[0],i=n[1],s=(0,u.useState)(Mt),c=s[0],f=s[1],h=(0,u.useRef)(),v=function(){var t=(0,r.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.cube.isSolved,o){t.next=4;break}return t.abrupt("return");case 4:e.do(o),e.update(),r&&e.cube.solve(we);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,l.jsx)("div",{className:Fn().container,children:(0,l.jsxs)("form",{className:Fn().form,onSubmit:v,children:[(0,l.jsx)("input",{list:"movesList",placeholder:"Select move",onInput:function(t){var e=t.target.value;Et.includes(e)&&(2===e.length&&f(e[1]),i(e))},maxLength:"2",value:o,ref:h,onFocus:function(t){t.currentTarget.value="",f(Pn[0])}}),(0,l.jsx)("datalist",{id:"movesList",children:Un.map((function(t){return(0,l.jsx)("option",{value:t},t)}))}),(0,l.jsx)("button",{onClick:function(t){if(t.preventDefault(),t.currentTarget.blur(),o){var e=Pn.indexOf(c);f(Pn[e+1]),Pn[e]?i(o[0]+Pn[e]):i(o[0])}},value:c,children:c}),(0,l.jsx)("button",{onClick:function(t){return t.currentTarget.blur()},type:"submit",children:"\u2714"})]})})}function Yn(t){var e=t.children,n=t.setPatternHints,o=t.setArrows,i=t.bc,s=(0,u.useState)(!1),c=s[0],f=s[1],h=(0,u.useState)(!1),v=h[0],d=h[1],p=(0,u.useState)(we),_=p[0],b=p[1],m=(0,u.useRef)(),x=(0,u.useRef)(),g=(0,u.useRef)(),y=(0,u.useRef)(),Z=(0,u.useRef)(),C=(0,u.useRef)(),k=(0,u.useRef)(),w=function(){var t=(0,r.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.currentTarget.blur(),!(r=!v)){t.next=11;break}return y.current.style.backgroundImage="url(".concat(Hn,")"),m.current.style.transform="translateY(-4em)",x.current.style.transform="translateX(0)",t.next=8,i.cube.solve(_);case 8:i.update(),t.next=19;break;case 11:i.cube.stopSolving(),o(!1),n(!1),Z.current.checked=!1,void 0!=C.current&&(C.current.checked=!1),x.current.style.transform="translateX(300px)",m.current.style.transform="translateY(0)",i.update();case 19:d(r);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){t.currentTarget.classList.contains(Wn().arrowCheckbox)?o(Z.current.checked):n(C.current.checked)},S=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.currentTarget.value){t.next=2;break}return t.abrupt("return");case 2:return k.current.value===we&&n(!1),t.next=5,i.cube.solve(e.currentTarget.value);case 5:b(k.current.value),i.update();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:Wn().mainContainer,ref:m,children:[(0,l.jsx)("button",{className:Wn().openButton,ref:g,onClick:function(t){t.currentTarget.blur();var e=!c;m.current.style.transform=e?v?"translateY(-4em) \n                translateX(0)":"translateX(0)":v?"translateY(-4em) \n                translateX(268px)":"translateX(268px)",f(e)},children:"\xab"}),(0,l.jsx)("button",{className:Wn().toggleButton}),(0,l.jsxs)("section",{className:Wn().controllerContainer,children:[(0,l.jsxs)("div",{className:Wn().horizontalContainer,children:[e[0],(0,l.jsxs)("div",{className:Wn().buttonsContainer,children:[e[1],e[2]]})]}),(0,l.jsx)(Dn,{bc:i}),(0,l.jsxs)("div",{className:Wn().solveButtonContainer,children:[(0,l.jsxs)("button",{className:Wn().solveModeButton,onClick:w,children:[v?"Disable":"Enable"," solve mode"]}),(0,l.jsx)("div",{className:v?"".concat(Wn().eye," ").concat(Wn().eyeOpen):"".concat(Wn().eye," ").concat(Wn().eyeCrossed),ref:y})]})]}),(0,l.jsxs)("section",{className:Wn().solveContainer,ref:x,children:[(0,l.jsxs)("div",{className:Wn().selectContainer,children:[(0,l.jsx)("div",{className:Wn().algoImage}),(0,l.jsx)("span",{children:"Choose algorithm:"}),(0,l.jsxs)("select",{name:"algo",onChange:S,ref:k,children:[(0,l.jsx)("option",{value:we,children:"Kociemba"}),(0,l.jsx)("option",{value:ke,children:"CFOP"})]})]}),(0,l.jsxs)("div",{className:Wn().labelContainer,children:[(0,l.jsx)("span",{children:"Guiding arrows"}),(0,l.jsxs)("label",{className:"".concat(Wn().toggleArrows," \n                ").concat(Wn().sliderContainer),children:[(0,l.jsx)("input",{type:"checkbox",onChange:j,className:"".concat(Wn().arrowCheckbox),ref:Z}),(0,l.jsx)("span",{className:Wn().slider})]})]}),_===ke&&(0,l.jsxs)("div",{className:Wn().labelContainer,children:[(0,l.jsx)("span",{children:"Pattern hints"}),(0,l.jsxs)("label",{className:"".concat(Wn().togglePatterns," \n                    ").concat(Wn().sliderContainer),children:[(0,l.jsx)("input",{type:"checkbox",onChange:j,className:"".concat(Wn().patternCheckbox),ref:C}),(0,l.jsx)("span",{className:Wn().slider})]})]})]})]})}function Vn(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return zn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zn(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function zn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Gn(){var t=function(){var t,e=(0,u.useState)()[1],n=(0,u.useRef)(new Ke).current,i=(0,u.useRef)({isConnected:!1,nextMove:(t={},(0,I.Z)(t,"R",!0),(0,I.Z)(t,"R'",!0),(0,I.Z)(t,"L",!0),(0,I.Z)(t,"L'",!0),(0,I.Z)(t,"F",!0),(0,I.Z)(t,"F'",!0),(0,I.Z)(t,"B",!0),(0,I.Z)(t,"B'",!0),(0,I.Z)(t,"U",!0),(0,I.Z)(t,"U'",!0),(0,I.Z)(t,"D",!0),(0,I.Z)(t,"D'",!0),t)}).current,s=(0,u.useCallback)((0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e({}));case 1:case"end":return t.stop()}}),t)}))),[]),c=(0,u.useCallback)((function(t){n.do(t),s()}),[n,s]),l=(0,u.useCallback)((0,r.Z)(a().mark((function t(){var e,r,c,u,l,f,h;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i.isConnected){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,window.navigator.bluetooth.requestDevice({filters:[{namePrefix:"MHC"}],optionalServices:[un]});case 5:return e=t.sent,console.log("Connected to device:",e.name),t.next=9,e.gatt.connect();case 9:return r=t.sent,console.log("Connected to service"),t.next=13,r.getPrimaryService(un);case 13:return c=t.sent,t.next=16,c.getCharacteristic("00001002-0000-1000-8000-00805f9b34fb");case 16:return u=t.sent,t.next=19,c.getCharacteristic("00001003-0000-1000-8000-00805f9b34fb");case 19:return l=t.sent,t.next=22,c.getCharacteristic("00001004-0000-1000-8000-00805f9b34fb");case 22:return f=t.sent,t.next=25,c.getCharacteristic("00001005-0000-1000-8000-00805f9b34fb");case 25:return h=t.sent,t.next=28,u.startNotifications();case 28:return t.next=30,l.startNotifications();case 30:return t.next=32,f.startNotifications();case 32:return t.next=34,h.startNotifications();case 34:i.isConnected=!0,s(),l.addEventListener("characteristicvaluechanged",(function(t){var e=t.target.value,r=le((0,o.Z)(new Uint8Array(e.buffer)));r.available&&(i.nextMove[r.turn]=!i.nextMove[r.turn],i.nextMove[r.turn]&&(n.do(r),s()))})),t.next=44;break;case 39:t.prev=39,t.t0=t.catch(2),console.log(t.t0),i.isConnected=!1,s();case 44:case"end":return t.stop()}}),t,null,[[2,39]])}))),[i,n,s]),f=(0,u.useCallback)((function(){n.resetCube(),s()}),[n,s]);return{cube:n,connected:i.isConnected,do:c,connect:l,resetCube:f,update:s}}(),e=(0,u.useRef)(),n=(0,u.useRef)(),i=(0,u.useRef)([]).current,s=(0,u.useState)([]),c=s[0],h=s[1],d=(0,u.useState)(t.cube.lastMove),p=d[0],_=d[1],b=(0,u.useState)(!1),m=b[0],x=b[1],g=(0,u.useState)(!1),y=g[0],Z=g[1],C=(0,u.useState)(!1),k=C[0],w=C[1];(0,u.useEffect)((function(){t.connected&&x(!0)}),[t.connected]),t.cube.newMove&&(t.cube.usedNewMove(),_(t.cube.lastMove));var O=(0,u.useCallback)((function(){for(var e=function(t){t&&!i.includes(t)&&(i.push(t),c.length>27||h((function(e){return[].concat((0,o.Z)(e),[window.getComputedStyle(t).transform])})))},n=[],r=0;r<27;r++)n.push((0,l.jsx)("div",{className:" ".concat(v()["c"+r])+" ".concat(v().cubie),ref:e,children:(0,l.jsx)(B,{cubie:p?t.cube.lastCube[r]:t.cube.cube[r]})},r));return p||i.forEach((function(t,e){t.style.transform=c[e]})),n}),[p,t.cube.cube,t.cube.lastCube,i,c]),T=function(){var t=(0,r.Z)(a().mark((function t(e,n,r){var o,i,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=n.toUpperCase(),o="rotate".concat(n),i="(".concat(r?"":"-","90deg)"),s=window.getComputedStyle(e).transform,s="".concat(s," ").concat(o).concat(i),e.style.transition="all ".concat(.1,"s"),e.style.transform=s,t.next=9,Ce(100);case 9:e.style.transition="all 0s";case 10:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),M=(0,u.useCallback)((function(e){var n=ee(e),r=n.side,o=n.rotation,a=o.direction,s=o.clockwise^a===S;t.cube.iterate(r,(function(t,e){return T(i[e],a,s)}))}),[t,i]),A=(0,u.useCallback)((function(){t.resetCube(),i.forEach((function(t,e){t.style.transform=c[e]}))}),[t,i,c]),F=(0,u.useCallback)((0,r.Z)(a().mark((function t(){var e,n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=ce(p),n=Vn(e);try{for(n.s();!(r=n.n()).done;)o=r.value,M(o)}catch(i){n.e(i)}finally{n.f()}return t.next=5,Ce(100);case 5:_(null);case 6:case"end":return t.stop()}}),t)}))),[p,M]);p&&F();var P=(0,u.useCallback)((function(n,r){var o=t.cube,i=function(t,e,n){var r,o=(r={},(0,I.Z)(r,X,"-X"),(0,I.Z)(r,H,j),(0,I.Z)(r,E,"-Y"),(0,I.Z)(r,W,S),(0,I.Z)(r,L,N),(0,I.Z)(r,R,"-Z"),r);return[o[n],o[t],o[e]]}(o.visTop,o.visFront,o.visLeft)[n===j?0:1];i.startsWith("-")&&(r=!r,i=i.slice(1)),e.current.style.transform+="rotate".concat(i,"(").concat(r?"":"-","90deg)"),t.update()}),[t]);return(0,l.jsx)("main",{className:v().main,children:m?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(gn,{connectCube:t.connect,connected:t.connected}),(0,l.jsx)(Sn,{}),(0,l.jsxs)("div",{className:v().centerContainer,children:[(0,l.jsxs)(Yn,{setPatternHints:function(t){Z(t)},setArrows:function(t){w(t)},bc:t,children:[(0,l.jsx)(hn,{visualRotate:t.cube.visualRotate,update:P}),(0,l.jsx)(pn,{onClick:function(t){var e=n.current.classList;return e.contains(v().rotatingCounter)?(e.remove(v().rotatingCounter),void t.currentTarget.blur()):e.contains(v().rotatingClock)?(e.remove(v().rotatingClock),void e.add(v().rotatingCounter)):void e.add(v().rotatingClock)}}),(0,l.jsx)(Cn,{resetCube:A})]}),(0,l.jsx)("div",{className:v().cubeContainer,children:(0,l.jsxs)("div",{className:v().cubeRotation,ref:n,children:[(0,l.jsx)("div",{className:v().cube,ref:e,children:O()}),t.cube.solution&&(0,l.jsx)(On,{isVisible:k,nextMove:t.cube.visualNextMove})]})})]}),t.cube.solution&&(0,l.jsx)(En,{areVisible:y,metaIndex:t.cube.currentMetaIndex})]}):(0,l.jsx)(f,{connectCube:t.connect,continueWithout:function(){return x(!0)}})})}},5728:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(366)}])},3010:function(t){t.exports={container:"BgImages_container__ZkBRp",bgImage:"BgImages_bgImage__UHpZc",vinesImage:"BgImages_vinesImage__2RmSh",groundImage:"BgImages_groundImage__NorAK",waterGif:"BgImages_waterGif__JNINs"}},4588:function(t){t.exports={container:"ConnectButton_container__3y5_1",connectButton:"ConnectButton_connectButton__f8McQ",continueButton:"ConnectButton_continueButton__TX1TM"}},1715:function(t){t.exports={container:"Controller_container__Vt1WS",controlsWrapper:"Controller_controlsWrapper__tWJVb",collapse:"Controller_collapse__9rOZ8",buttonContainer:"Controller_buttonContainer__MM_NM",c1:"Controller_c1__PikoM",c2:"Controller_c2__Nmlb1",c3:"Controller_c3__uycmi",c4:"Controller_c4__SqsIj"}},927:function(t){t.exports={cubie:"CubieComp_cubie__iWzmf",face:"CubieComp_face__WfbpJ",color:"CubieComp_color__EkU88",top:"CubieComp_top__CHcYc",white:"CubieComp_white__rXvQ5",texture:"CubieComp_texture__KywIx",bottom:"CubieComp_bottom___lUku",yellow:"CubieComp_yellow__t1QVY",right:"CubieComp_right__r6VUR",red:"CubieComp_red__ywXqV",left:"CubieComp_left__EoZpW",orange:"CubieComp_orange__vZq1_",front:"CubieComp_front__6iDl9",green:"CubieComp_green__fHoYX",back:"CubieComp_back__vQMaB",blue:"CubieComp_blue__Eufnt"}},1751:function(t){t.exports={header:"Header_header__l1qoc",connectWrapper:"Header_connectWrapper__uG0eC",bluetoothButton:"Header_bluetoothButton__hIVd0",status:"Header_status__nYGgK"}},8667:function(t){t.exports={container:"Hint_container__Nh2wG",arrowContainer:"Hint_arrowContainer__3fyfV",arrow:"Hint_arrow__XJwiG",glow:"Hint_glow__0yWA1",arrowHead:"Hint_arrowHead__cGBdd",arrowBody:"Hint_arrowBody__ipDmQ"}},6589:function(t){t.exports={container:"HintImages_container__Zv_ND",bgImage:"HintImages_bgImage__dOZXj",point:"HintImages_point__c8_oh",list:"HintImages_list__mXMOE"}},6101:function(t){t.exports={container:"ResetButton_container__6m_z5",resetButton:"ResetButton_resetButton__7_m86"}},7259:function(t){t.exports={container:"RotateButton_container__aNQQc",rotateButton:"RotateButton_rotateButton__Mhkdx"}},3946:function(t){t.exports={mainContainer:"SidebarController_mainContainer__bv2Kn",controllerContainer:"SidebarController_controllerContainer__xVc3q",openButton:"SidebarController_openButton__gOhEo",horizontalContainer:"SidebarController_horizontalContainer__wwh_D",buttonsContainer:"SidebarController_buttonsContainer__zebR7",solveButtonContainer:"SidebarController_solveButtonContainer__elduD",eye:"SidebarController_eye__x0oBO",eyeOpen:"SidebarController_eyeOpen__Yk406",eyeCrossed:"SidebarController_eyeCrossed__MZ1jh",solveModeButton:"SidebarController_solveModeButton__1RL8L",solveContainer:"SidebarController_solveContainer__cE_eg",selectContainer:"SidebarController_selectContainer__OOw89",algoImage:"SidebarController_algoImage__wBU5H",spin:"SidebarController_spin__YsoTe",labelContainer:"SidebarController_labelContainer__nHLSi",sliderContainer:"SidebarController_sliderContainer__tOLyw",arrowCheckbox:"SidebarController_arrowCheckbox__QdhJD",patternCheckbox:"SidebarController_patternCheckbox__PoEUJ"}},92:function(t){t.exports={container:"TurnInput_container__K48BT",form:"TurnInput_form__va6Zc"}},6724:function(t){t.exports={main:"index_main__3wZvj",centerContainer:"index_centerContainer__nAmnu",cubeContainer:"index_cubeContainer__txA1D",cubeRotation:"index_cubeRotation__IByvg",cube:"index_cube__gjX_0",homescreenFadeIn:"index_homescreenFadeIn__K5xEN",fadeIn:"index_fadeIn__MB0cb",rotatingClock:"index_rotatingClock__8gy9M",spin:"index_spin__g0eKH",rotatingCounter:"index_rotatingCounter__IU1aU",cubie:"index_cubie__cKoLj",c0:"index_c0__mdaAh",c1:"index_c1___yt9K",c2:"index_c2__p1_wv",c3:"index_c3__O1F_k",c4:"index_c4__nKVns",c5:"index_c5__aZ87p",c6:"index_c6__oNVUH",c7:"index_c7__kV36X",c8:"index_c8__2DD_o",c9:"index_c9__0c2_f",c10:"index_c10__s2S_I",c11:"index_c11__dutAX",c12:"index_c12___ig1Y",c13:"index_c13__WYCI3",c14:"index_c14__TOf1Y",c15:"index_c15__YuqRf",c16:"index_c16__Wz1jF",c17:"index_c17__V8k_3",c18:"index_c18__BqFiK",c19:"index_c19__XI0l7",c20:"index_c20__ulhT9",c21:"index_c21__WOFse",c22:"index_c22__Yol1j",c23:"index_c23__uankX",c24:"index_c24__g_6oJ",c25:"index_c25__vHA6o",c26:"index_c26__kZPLm"}}},function(t){t.O(0,[456,774,888,179],(function(){return e=5728,t(t.s=e);var e}));var e=t.O();_N_E=e}]);