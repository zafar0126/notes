(function(){"use strict";var e={6017:function(e,t,l){var a=l(9242),n=(l(6699),l(3396)),o=l(4870),s=l.p+"img/add-note.10842793.svg",r=l(7139),c=l.p+"img/search.7bf44ec5.svg",i=l.p+"img/back.a1821e6b.svg",u=l.p+"img/close.e9281049.svg";const d=(0,o.iH)({showModal:!1,notes:localStorage.notes?JSON.parse(localStorage.notes):[],search:"",modalTitle:"",modalDescr:"",curID:null,langs:["RU","EN"],curLang:localStorage.lang?localStorage.lang:"RU"}),v=(0,o.qj)({RU:{add:"Добавить",edit:"Изменить",cancel:"Отмена",title:"Заметки",allNotes:"Все заметки",noNotes:"Нет заметок",list:"Список",grid:"Сетка",delete:"Удалить",change:"Редактировать",note:"заметку",placeholder:"Поиск..."},EN:{add:"Add",edit:"Edit",cancel:"Cancel",title:"Notes",allNotes:"All notes",noNotes:"No notes",list:"List",grid:"Grid",delete:"Delete",change:"Redact",note:"Note",placeholder:"Search..."}}),_=()=>localStorage.notes=JSON.stringify(d.value.notes),g=e=>{d.value.notes.push(e),_()},p=(e,t)=>{let l=d.value.notes.findIndex((t=>t.id==e));d.value.notes[l]=t,_()},f=e=>{let t=d.value.notes.findIndex((t=>t.id==e));d.value.notes.splice(t,1),_()},m={class:"header"},h={key:0,class:"header__notes"},S=["selected"],w={class:"header__title"},U=(0,n._)("img",{src:c,alt:""},null,-1),k=[U],b={key:1,class:"header__form"},y=(0,n._)("img",{src:i,alt:""},null,-1),D=[y],C=["placeholder"],M=(0,n._)("img",{src:u,alt:""},null,-1),N=[M];var O={__name:"Header",setup(e){const t=(0,o.iH)(!0),l=(0,n.Fl)({get:()=>d.value.search,set:e=>d.value.search=e}),s=(0,n.Fl)((()=>d.value.curLang));function c(e){d.value.curLang=e,localStorage.lang=e}return(e,i)=>((0,n.wg)(),(0,n.iD)("header",m,[(0,n.Wm)(a.uT,{name:"header__notes",mode:"out-in"},{default:(0,n.w5)((()=>[t.value?((0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("select",{class:"header__select",onChange:i[0]||(i[0]=e=>c(e.target.value))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(d).langs,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e,selected:e===(0,o.SU)(d).curLang},(0,r.zw)(e),9,S)))),128))],32),(0,n._)("h2",w,(0,r.zw)((0,o.SU)(v)[(0,o.SU)(s)].title),1),(0,n._)("button",{class:"header__search",onClick:i[1]||(i[1]=e=>t.value=!1)},k)])):((0,n.wg)(),(0,n.iD)("form",b,[(0,n._)("a",{href:"#",class:"back",onClick:i[2]||(i[2]=(0,a.iM)((e=>{t.value=!0,l.value=""}),["prevent"]))},D),(0,n.wy)((0,n._)("input",{type:"text",placeholder:(0,o.SU)(v)[(0,o.SU)(s)].placeholder,name:"search",class:"header__input",required:"","onUpdate:modelValue":i[3]||(i[3]=e=>(0,o.dq)(l)?l.value=e:null)},null,8,C),[[a.nr,(0,o.SU)(l)]]),(0,n._)("a",{href:"#",class:"close",onClick:i[4]||(i[4]=(0,a.iM)((e=>{t.value=!0,l.value=""}),["prevent"]))},N)]))])),_:1})]))}};const z=O;var x=z,F=l.p+"img/list.4bf38f66.svg",L=l.p+"img/grid.e2c63407.svg",j=l.p+"img/edit.10842793.svg",T=l.p+"img/delete.f2533121.svg";const q={class:"notes__item"},H={class:"notes__name"},I={class:"notes__date"},W={class:"notes__descr"},A={class:"notes__control"},E=(0,n._)("img",{src:j,alt:""},null,-1),R=(0,n._)("img",{src:T,alt:""},null,-1);var V={__name:"OneNote",props:{note:{type:Object,default:{}}},setup(e){const t=(0,n.Fl)((()=>d.value.curLang));function l(e){d.value.modalTitle=e.title,d.value.modalDescr=e.text,d.value.curID=e.id,d.value.showModal=!0}return(s,c)=>((0,n.wg)(),(0,n.iD)("div",q,[(0,n._)("h3",H,(0,r.zw)(e.note.title),1),(0,n._)("span",I,(0,r.zw)(e.note.date),1),(0,n._)("p",W,(0,r.zw)(e.note.text),1),(0,n._)("div",A,[(0,n._)("a",{href:"#",class:"notes__edit",onClick:c[0]||(c[0]=(0,a.iM)((t=>l(e.note)),["prevent"]))},[E,(0,n.Uk)(" "+(0,r.zw)((0,o.SU)(v)[(0,o.SU)(t)].change),1)]),(0,n._)("a",{href:"#",class:"notes__delete",onClick:c[1]||(c[1]=(0,a.iM)((t=>(0,o.SU)(f)(e.note.id)),["prevent"]))},[R,(0,n.Uk)(" "+(0,r.zw)((0,o.SU)(v)[(0,o.SU)(t)].delete),1)])])]))}};const Y=V;var J=Y;const K={class:"notes"},P={class:"container"},G={class:"notes__nav"},Z={class:"notes__title"},B={key:0,src:F,alt:""},Q={key:1,src:L,alt:""};var X={__name:"Notes",props:{notes:{type:Array,default:[]}},setup(e){const t=(0,o.iH)(!0),l=(0,n.Fl)((()=>d.value.curLang));return(s,c)=>((0,n.wg)(),(0,n.iD)("div",K,[(0,n._)("div",P,[(0,n._)("div",G,[(0,n._)("h3",Z,(0,r.zw)(e.notes.length?(0,o.SU)(v)[(0,o.SU)(l)].allNotes:(0,o.SU)(v)[(0,o.SU)(l)].noNotes),1),(0,n._)("button",{class:"notes__checker",onClick:c[0]||(c[0]=e=>t.value=!t.value)},[t.value?((0,n.wg)(),(0,n.iD)("img",B)):((0,n.wg)(),(0,n.iD)("img",Q)),(0,n._)("span",null,(0,r.zw)(t.value?(0,o.SU)(v)[(0,o.SU)(l)].list:(0,o.SU)(v)[(0,o.SU)(l)].grid),1)])]),(0,n.Wm)(a.W3,{tag:"div",class:(0,r.C_)(["notes__grid",{column:!t.value}]),name:"notes",appear:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.notes,(e=>((0,n.wg)(),(0,n.j4)(J,{key:e.id,note:e},null,8,["note"])))),128))])),_:1},8,["class"])])]))}};const $=X;var ee=$,te=l(536);const le={class:"modal__title"},ae=["onSubmit"],ne={class:"modal__btns"},oe=["onClick"],se={class:"modal__btn"};var re={__name:"Modal",setup(e){const t=(0,n.Fl)({get:()=>d.value.modalTitle,set:e=>d.value.modalTitle=e}),l=(0,n.Fl)({get:()=>d.value.modalDescr,set:e=>d.value.modalDescr=e}),s=(0,n.Fl)({get:()=>d.value.curID,set:e=>d.value.curID=e}),c=(0,n.Fl)((()=>d.value.curLang));function i(){const e={title:t.value,text:l.value,date:(new Date).toLocaleDateString(),id:s.value||(0,te.Z)()};s.value?p(s.value,e):g(e),u()}function u(){t.value="",l.value="",s.value=null,d.value.showModal=!1}return(e,d)=>((0,n.wg)(),(0,n.j4)(a.uT,{name:"modal"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"modal",onClick:u},[(0,n._)("div",{class:"modal__content",onClick:d[2]||(d[2]=(0,a.iM)((()=>{}),["stop"]))},[(0,n._)("h3",le,(0,r.zw)((0,o.SU)(s)?(0,o.SU)(v)[(0,o.SU)(c)].edit:(0,o.SU)(v)[(0,o.SU)(c)].add)+" "+(0,r.zw)((0,o.SU)(v)[(0,o.SU)(c)].note),1),(0,n._)("form",{action:"",class:"modal__form",onSubmit:(0,a.iM)(i,["prevent"])},[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Title",required:"",class:"modal__input","onUpdate:modelValue":d[0]||(d[0]=e=>(0,o.dq)(t)?t.value=e:null)},null,512),[[a.nr,(0,o.SU)(t)]]),(0,n.wy)((0,n._)("textarea",{class:"modal__input modal__area",placeholder:"Content",required:"","onUpdate:modelValue":d[1]||(d[1]=e=>(0,o.dq)(l)?l.value=e:null)},null,512),[[a.nr,(0,o.SU)(l)]]),(0,n._)("div",ne,[(0,n._)("a",{href:"#",class:"modal__cancel",onClick:(0,a.iM)(u,["prevent"])},(0,r.zw)((0,o.SU)(v)[(0,o.SU)(c)].cancel),9,oe),(0,n._)("button",se,(0,r.zw)((0,o.SU)(s)?(0,o.SU)(v)[(0,o.SU)(c)].edit:(0,o.SU)(v)[(0,o.SU)(c)].add),1)])],40,ae)])])])),_:1}))}};const ce=re;var ie=ce;const ue=(0,n._)("img",{src:s,alt:""},null,-1),de=[ue];var ve={__name:"App",setup(e){const t=(0,n.Fl)((()=>d.value.search?d.value.notes.filter((e=>e.title.toLowerCase().includes(d.value.search.toLowerCase()))):d.value.notes));return(e,l)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(x),(0,n.Wm)(ee,{notes:(0,o.SU)(t)},null,8,["notes"]),(0,n.wy)((0,n.Wm)(ie,null,null,512),[[a.F8,(0,o.SU)(d).showModal]]),(0,n._)("a",{href:"#",class:"add__note",onClick:l[0]||(l[0]=(0,a.iM)((e=>(0,o.SU)(d).showModal=!0),["prevent"]))},de)],64))}};const _e=ve;var ge=_e;(0,a.ri)(ge).mount("#app")}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(t,a,n,o){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],o=e[u][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||s>=o)&&Object.keys(l.O).every((function(e){return l.O[e](a[c])}))?a.splice(c--,1):(r=!1,o<s&&(s=o));if(r){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.p="/notes/"}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,s=a[0],r=a[1],c=a[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)l.o(r,n)&&(l.m[n]=r[n]);if(c)var u=c(l)}for(t&&t(a);i<s.length;i++)o=s[i],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},a=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(6017)}));a=l.O(a)})();
//# sourceMappingURL=app.cbdcc56e.js.map