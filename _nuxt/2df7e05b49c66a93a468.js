(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(t,e,n){var content=n(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("f97436ae",content,!0,{sourceMap:!1})},175:function(t,e,n){"use strict";var o=n(172);n.n(o).a},176:function(t,e,n){(t.exports=n(34)(!1)).push([t.i,".block-left[data-v-761243f8],.block-right[data-v-761243f8]{width:50%;float:left;padding:15px}",""])},178:function(t,e,n){"use strict";n.r(e);n(16);var o=n(66),l=n.n(o),c={data:function(){return{articles:[],headers:[{text:"Artist"},{text:"AlbumTitle"},{text:"SongTitle"}],timer:null}},mounted:function(){"Notification"in window&&Notification.requestPermission(function(t){console.log("Notification permission status:",t)});var t=this;if(localStorage.getItem("offlineRequest")){var e=JSON.parse(localStorage.getItem("offlineRequest"));l.a.post("https://4ro9u5dkc7.execute-api.us-east-2.amazonaws.com/demo-pwa/sync",{listData:e}).then(function(e){localStorage.removeItem("offlineRequest"),alert("Data was sync"),t.getAllData()}).catch(function(e){throw t.getAllData(),e})}else t.getAllData()},methods:{detectConnection:function(){this.timer=setInterval(function(){var t=new XMLHttpRequest,e=Math.round(1e4*Math.random());t.open("HEAD","/pwa?rand="+e,!0),t.send(),t.addEventListener("readystatechange",function(e){4==t.readyState&&(t.status>=200&&t.status<304?(alert("Page will reload to update data"),location.reload()):console.log("connection doesn't exist!"))},!1)},1e3)},displayNotification:function(t){"Notification"in window?"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then(function(e){e.showNotification(t),location.reload()}):(alert(t),location.reload())},saveDataLocal:function(data){var t=this;return new Promise(function(e,n){var o=t.db.transaction("data","readwrite").objectStore("data").add(data);o.onsuccess=function(t){console.log("add data success"),e(!0)},o.onerror=function(t){console.log("Unable to add data "),n(!1)}})},getAllData:function(){var t=this;l.a.get("https://4ro9u5dkc7.execute-api.us-east-2.amazonaws.com/demo-pwa/list").then(function(e){e.data.sort(function(a,b){return a.Time&&b.Time?b.Time.S-a.Time.S:-1}),localStorage.setItem("listData",JSON.stringify(e.data)),t.articles=e.data,t.timer&&clearInterval(t.myTimer)}).catch(function(e){t.articles=JSON.parse(localStorage.getItem("listData")),alert("You have lost internet access!"),t.detectConnection()})},saveData:function(){var t=this;l.a.post("https://4ro9u5dkc7.execute-api.us-east-2.amazonaws.com/demo-pwa/save",{artist:document.getElementsByName("artist")[0].value,album:document.getElementsByName("album")[0].value,song:document.getElementsByName("song")[0].value}).then(function(e){document.getElementsByName("artist")[0].value="",document.getElementsByName("album")[0].value="",document.getElementsByName("song")[0].value="",t.getAllData()}).catch(function(e){if("Network Error"!==e.message)throw e;var n={artist:document.getElementsByName("artist")[0].value,album:document.getElementsByName("album")[0].value,song:document.getElementsByName("song")[0].value},o=localStorage.getItem("offlineRequest");(o=o?JSON.parse(o):[]).push(n),localStorage.setItem("offlineRequest",JSON.stringify(o)),alert("You are offline! When your internet returns, we'll finish up your request."),document.getElementsByName("artist")[0].value="",document.getElementsByName("album")[0].value="",document.getElementsByName("song")[0].value="",t.detectConnection()})}}},r=(n(175),n(24)),component=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"block-left"},[n("table",{staticClass:"table is-bordered is-fullwidth"},[n("thead",[n("tr",[n("th",[t._v("No")]),t._v(" "),t._l(t.headers,function(e,o){return n("th",{key:o},[t._v(t._s(e.text))])})],2)]),t._v(" "),n("tbody",t._l(t.articles,function(e,o){return n("tr",{key:o},[n("td",[t._v(t._s(t.articles.length-o))]),t._v(" "),n("td",[t._v(t._s(e.Artist.S))]),t._v(" "),n("td",[t._v(t._s(e.AlbumTitle.S))]),t._v(" "),n("td",[t._v(t._s(e.SongTitle.S))])])}),0)])]),t._v(" "),n("div",{staticClass:"block-right"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-link",on:{click:t.saveData}},[t._v("Submit")])]),t._v(" "),t._m(3)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field "},[e("label",{staticClass:"label"},[this._v("Artist")]),this._v(" "),e("div",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{type:"text",name:"artist"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field "},[e("label",{staticClass:"label"},[this._v("Album Title")]),this._v(" "),e("div",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{type:"text",name:"album"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field "},[e("label",{staticClass:"label"},[this._v("Song Title")]),this._v(" "),e("div",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{type:"text",name:"song"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("button",{staticClass:"button is-text"},[this._v("Cancel")])])}],!1,null,"761243f8",null);e.default=component.exports}}]);