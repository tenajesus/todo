(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1),n("div",{staticClass:"q-px-lg q-mb-lg"},[n("div",{staticClass:"text-h4"},[t._v("Agenda de Trabajo")]),n("div",{staticClass:"text-subtitle2"},[t._v(" "+t._s(t.hoy))]),n("q-img",{staticClass:"cabecera absolute-top",attrs:{src:a("d049")}})],1)],1),n("q-footer",{attrs:{elevated:""}},[n("q-toolbar",[n("q-toolbar-title",{staticClass:"footer"},[t._v("Un desarrollo de BackgroundLab")])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Ayudanos a crecer\n      ")]),t._l(t.essentialLinks,(function(e){return n("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/",clickable:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"list"}})],1),n("q-item-section",{staticClass:"text-orange"},[t._v("\n          Mis Tareas Pendientes\n        ")])],1)],2),n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/ayuda",clickable:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"help"}})],1),n("q-item-section",{staticClass:"text-green"},[t._v("\n          Ayuda\n        ")])],1),n("q-img",{staticClass:"absolute-top",staticStyle:{height:"192px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[n("div",{staticClass:"absolute-bottom bg-transparent"},[n("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[n("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),n("div",{staticClass:"text-weight-bold"},[t._v("Nombre de Usuario: ")]),n("div",[t._v("Correo:")])],1)])],1),n("q-page-container",[n("keep-alive",[n("router-view")],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},l=o,c=a("2877"),d=a("66e5"),p=a("4074"),u=a("0016"),m=a("0170"),b=a("eebe"),v=a.n(b),f=Object(c["a"])(l,s,r,!1,null,null,null),g=f.exports;v()(f,"components",{QItem:d["a"],QItemSection:p["a"],QIcon:u["a"],QItemLabel:m["a"]});var q=a("bd4c");const k=[{title:"a",caption:"",icon:"",link:""},{title:"b",caption:"",icon:"",link:""},{title:"c",caption:"",icon:"",link:""},{title:"Haz una donación",caption:"Invitale un café al dev ",icon:"local_atm",link:"https://www.patreon.com/gsusrodriguezc",class:"text-teal"},{title:"Feedback",caption:"Que podemos mejorar",icon:"bug_report",link:"mailto:jrodriguez@utzac.edu.mx?cc=tenajesus@hotmail.com&subject=Mejoras Agenda",class:"text-red"}];var w={name:"MainLayout",components:{EssentialLink:g},data(){return{leftDrawerOpen:!1,essentialLinks:k}},computed:{hoy(){const t=Date.now();return q["a"].formatDate(t,"dddd D MMMM YYYY")}}},_=w,Q=(a("89d3"),a("4d5a")),h=a("e359"),y=a("65c6"),x=a("9c40"),C=a("6ac5"),L=a("068f"),D=a("7ff0"),I=a("9404"),j=a("1c1c"),M=a("cb32"),O=a("09e3"),S=a("714f"),E=Object(c["a"])(_,n,i,!1,null,null,null);e["default"]=E.exports;v()(E,"components",{QLayout:Q["a"],QHeader:h["a"],QToolbar:y["a"],QBtn:x["a"],QToolbarTitle:C["a"],QImg:L["a"],QFooter:D["a"],QDrawer:I["a"],QList:j["a"],QItemLabel:m["a"],QItem:d["a"],QItemSection:p["a"],QIcon:u["a"],QAvatar:M["a"],QPageContainer:O["a"]}),v()(E,"directives",{Ripple:S["a"]})},"89d3":function(t,e,a){"use strict";var n=a("e87e"),i=a.n(n);i.a},d049:function(t,e,a){t.exports=a.p+"img/coffe.8dc28a4c.jpg"},e87e:function(t,e,a){}}]);