(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93f47ea6"],{"324b":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-navigation-drawer",{attrs:{fixed:"",app:"","hide-overlay":!1},model:{value:t.$store.state.restrictedSideBar,callback:function(e){t.$set(t.$store.state,"restrictedSideBar",e)},expression:"$store.state.restrictedSideBar"}},[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"title"},[o("img",{staticClass:"logo",attrs:{src:i("fd16"),alt:t.$store.state.appName}})]),o("v-list-item-subtitle",[t._v("Administrador")])],1)],1),o("v-divider"),o("v-list",{attrs:{dense:"",nav:""}},[t._l(t.items,(function(e){return[e.divider?[o("v-divider",{key:e.title,staticClass:"divider"})]:[e.divider?t._e():[e.items?[o("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0)},t._l(e.items,(function(e){return o("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(i){return t.onClick(e)}}},[o("v-icon",{staticClass:"sub-item-icon",domProps:{textContent:t._s(e.icon)}}),o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)})),1)]:[o("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(i){return t.onClick(e)}}},[o("v-list-item-icon",[o("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)]]]]}))],2)],1)},s=[],n={name:"restricted-sidebar",methods:{onClick:function(t){this.$route.path!==t.to&&this.$router.push(t.to)}},data:function(){return{userRule:"Admin",items:[{title:"Dashboard",icon:"mdi-chart-line",to:"/restricted/dashboard"},{title:"Analytics",icon:"mdi-google-analytics",to:"/restricted/analytics"},{title:"Domínios",icon:"mdi-earth",to:"/restricted/domains"},{title:"Firewall",icon:"mdi-shield-check",to:"/restricted/firewall"},{title:"Scan",icon:"mdi-eye-outline",to:"/restricted/scan"},{title:"Game",icon:"mdi-cellphone",active:!1,items:[{title:"Usuários",to:"/restricted/game/users",icon:"mdi-account-multiple"},{title:"Loja",to:"/restricted/game/shop",icon:"mdi-cart"},{title:"Novidades",to:"/restricted/game/news",icon:"mdi-new-box"},{title:"Eventos",to:"/restricted/game/events",icon:"mdi-calendar"},{title:"Suporte",to:"/restricted/game/support",icon:"mdi-face-agent"}]},{divider:!0},{title:"Logs",icon:"mdi-format-list-bulleted",to:"/restricted/logs"},{title:"Contatos",icon:"mdi-email",to:"/restricted/contacts"},{title:"Administradores",icon:"mdi-shield-account",to:"/restricted/admin"}]}}},r=n,c=(i("a92b"),i("2877")),l=Object(c["a"])(r,o,s,!1,null,null,null);e["default"]=l.exports},a92b:function(t,e,i){"use strict";var o=i("e589"),s=i.n(o);s.a},e589:function(t,e,i){},fd16:function(t,e,i){t.exports=i.p+"img/imps-logo.248330f2.png"}}]);
//# sourceMappingURL=chunk-93f47ea6.2a5515c1.js.map