(function(t){function a(a){for(var s,i,o=a[0],c=a[1],l=a[2],b=0,u=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"359c":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[s("div",{staticClass:"d-flex align-center"},[t._v("COVID 19 Dashboard")]),s("v-spacer"),s("v-btn",{attrs:{text:""},on:{click:function(a){t.showAbout=!0}}},[t._v("About")]),s("v-menu",{attrs:{"open-on-hover":!0,"offset-y":!0},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[s("v-btn",t._g({attrs:{icon:"",dark:"",href:""}},n),[s("v-img",{attrs:{"max-width":"28",src:e("359c")}})],1)]}}])},[s("v-list",[s("v-list-item",{attrs:{target:"_blank",href:"https://github.com/bimalghartimagar/covid19-ui"}},[s("v-list-item-title",[t._v("COVID19 - UI")]),s("v-list-item-action",[s("v-btn",{attrs:{icon:""}},[s("v-icon",{attrs:{color:"blue"}},[t._v("mdi-open-in-new")])],1)],1)],1),s("v-list-item",{attrs:{target:"_blank",href:"https://github.com/bimalghartimagar/covid19-api"}},[s("v-list-item-title",[t._v("COVID19 - API")]),s("v-list-item-action",[s("v-btn",{attrs:{icon:""}},[s("v-icon",{attrs:{color:"blue"}},[t._v("mdi-open-in-new")])],1)],1)],1)],1)],1)],1),s("v-content",[s("Dashboard")],1),s("About",{attrs:{dialog:t.showAbout},on:{"close-about":t.closeDialog}})],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{staticClass:"d-flex",attrs:{cols:"4",md:"5",sm:"12",xs:"12"}},[e("v-select",{attrs:{items:t.locations,value:t.location,label:"Countries",outlined:""},on:{change:t.fetchLocationData}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-toolbar",{attrs:{color:"light-green",dark:""}},[e("v-toolbar-title",[t._v("COVID 19 Total Cumulative Cases - "+t._s(t.location))])],1),e("v-card-text",[e("line-chart",{attrs:{"chart-data":t.chartdata}})],1)],1)],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-toolbar",{attrs:{color:"light-green",dark:""}},[e("v-toolbar-title",[t._v("COVID 19 Daily New Cases - "+t._s(t.location))])],1),e("v-card-text",[e("bar-chart",{attrs:{"chart-data":t.newCaseData}})],1)],1)],1)],1)],1)},o=[],c=(e("d81d"),e("bc3a")),l=e.n(c),d=e("1fca"),b=d["c"].reactiveProp,u={extends:d["b"],mixins:[b],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{bounds:"ticks"}]}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},f=d["c"].reactiveProp,j={extends:d["a"],mixins:[f],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},v={components:{LineChart:u,BarChart:j},data:function(){return{chartdata:{labels:[],datasets:[]},newCaseData:{labels:[],datasets:[]},chartColors:{red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(54, 162, 235)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},locations:[],location:"Nepal"}},methods:{fetchLocationData:function(t){var a=this;l.a.get("/data/".concat(t)).then((function(e){a.location=t,a.chartdata=a.getUpdatedChartData(e,1,"blue"),a.newCaseData=a.getUpdatedChartData(e,2,"orange")}))},getUpdatedChartData:function(t,a,e){return{labels:t.data.map((function(t){return t[0]})),datasets:[{label:this.location,fill:!1,borderColor:this.chartColors[e],backgroundColor:this.chartColors[e],data:t.data.map((function(t){return t[a]}))}]}}},mounted:function(){var t=this;l.a.get("/locations").then((function(a){t.locations=a.data.map((function(t){return t[0]}))})).then(this.fetchLocationData(this.location))}},m=v,p=e("2877"),h=e("6544"),g=e.n(h),A=e("b0af"),k=e("99d9"),y=e("62ad"),w=e("a523"),D=e("0fd9"),I=e("b974"),V=e("71d9"),C=e("2a7f"),M=Object(p["a"])(m,i,o,!1,null,null,null),x=M.exports;g()(M,{VCard:A["a"],VCardText:k["b"],VCol:y["a"],VContainer:w["a"],VRow:D["a"],VSelect:I["a"],VToolbar:V["a"],VToolbarTitle:C["a"]});var T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center"},[e("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("About Dashboard")]),e("v-list",{attrs:{dense:"",flat:""}},[e("v-subheader",[t._v("Frontend")]),e("v-list-item-group",{attrs:{color:"primary"}},t._l(t.frontend,(function(a,s){return e("v-list-item",{key:s,attrs:{target:"_blank",href:a.link}},[e("v-list-item-content",[e("v-list-item-title",[e("v-btn",{attrs:{small:"",text:""}},[t._v(t._s(a.name))])],1)],1),e("v-list-item-action",[e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"blue"}},[t._v("mdi-open-in-new")])],1)],1)],1)})),1),e("v-divider"),e("v-subheader",[t._v("API")]),e("v-list-item-group",{attrs:{color:"primary"}},t._l(t.api,(function(a,s){return e("v-list-item",{key:s,attrs:{target:"_blank",href:a.link}},[e("v-list-item-content",[e("v-list-item-title",[e("v-btn",{attrs:{small:"",text:""}},[t._v(t._s(a.name))])],1)],1),e("v-list-item-action",[e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"blue"}},[t._v("mdi-open-in-new")])],1)],1)],1)})),1),e("v-divider"),e("v-subheader",[t._v("Data Source")]),e("v-list-item-group",{attrs:{color:"primary"}},t._l(t.data,(function(a,s){return e("v-list-item",{key:s,attrs:{target:"_blank",href:a.link}},[e("v-list-item-content",[e("v-list-item-title",[e("v-btn",{attrs:{small:"",text:""}},[t._v(t._s(a.name))])],1)],1),e("v-list-item-action",[e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"blue"}},[t._v("mdi-open-in-new")])],1)],1)],1)})),1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){return t.$emit("close-about")}}},[t._v("Okay")])],1)],1)],1)],1)},E=[],B={props:["dialog"],data:function(){return{frontend:[{name:"Vue",link:"https://vuejs.org/"},{name:"Vuetify",link:"https://vuetifyjs.com/"},{name:"Chart.js",link:"https://www.chartjs.org/"},{name:"vue-chartjs",link:"https://vue-chartjs.org/"}],api:[{name:"Flask",link:"https://flask.palletsprojects.com/"},{name:"pandas",link:"https://pandas.pydata.org/"}],data:[{name:"Data on COVID-19",link:"https://github.com/owid/covid-19-data"}]}}},R=B,O=e("8336"),S=e("169a"),Z=e("ce7e"),z=e("132d"),J=e("8860"),L=e("da13"),_=e("1800"),N=e("5d23"),U=e("1baa"),G=e("2fa4"),P=e("e0c7"),W=Object(p["a"])(R,T,E,!1,null,null,null),Y=W.exports;g()(W,{VBtn:O["a"],VCard:A["a"],VCardActions:k["a"],VCardTitle:k["c"],VDialog:S["a"],VDivider:Z["a"],VIcon:z["a"],VList:J["a"],VListItem:L["a"],VListItemAction:_["a"],VListItemContent:N["a"],VListItemGroup:U["a"],VListItemTitle:N["b"],VSpacer:G["a"],VSubheader:P["a"]});var Q={name:"App",components:{Dashboard:x,About:Y},data:function(){return{showAbout:!1}},methods:{closeDialog:function(){this.showAbout=!1}}},X=Q,F=e("7496"),H=e("40dc"),q=e("a75b"),K=e("adda"),$=e("e449"),tt=Object(p["a"])(X,n,r,!1,null,null,null),at=tt.exports;g()(tt,{VApp:F["a"],VAppBar:H["a"],VBtn:O["a"],VContent:q["a"],VIcon:z["a"],VImg:K["a"],VList:J["a"],VListItem:L["a"],VListItemAction:_["a"],VListItemTitle:N["b"],VMenu:$["a"],VSpacer:G["a"]});var et=e("f309");s["a"].use(et["a"]);var st=new et["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:st,render:function(t){return t(at)}}).$mount("#app")}});
//# sourceMappingURL=app.0450a6be.js.map