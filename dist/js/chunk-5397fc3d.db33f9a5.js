(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5397fc3d"],{"3cc2":function(t,e,r){},"3d1e":function(t,e,r){"use strict";r("c3e7")},"5f5b":function(t,e,r){"use strict";r("99af");function s(t,e){var r;return function(){for(var s=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];r&&(clearTimeout(r),r=null),r=setTimeout((function(){t.call.apply(t,[s].concat(a))}),e)}}e["a"]=s},6681:function(t,e,r){"use strict";r("7f86")},"794b":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"wrapper",staticClass:"search-wrapper"},[r("base-search-bar",{staticClass:"search-bar",model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),r("scroll",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"scroll",staticClass:"scroll",attrs:{dataArr:t.shortCut}},[r("hot-search-list",{attrs:{"hot-search-list":t.hotSearch},on:{"hot-search-click":t.hotSearchHandle}}),r("search-histroy",{on:{"query-change":t.searchHistoryClick}})],1),r("search-result-list",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],attrs:{query:t.query}})],1)},n=[],a=(r("99af"),r("c668")),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-bar-wrapper",on:{click:function(e){return t.clickHandle(e)}}},[r("i",{staticClass:"icon-search"}),r("input",{ref:"input",staticClass:"search-content",attrs:{type:"text",placeholder:t.place_holder},domProps:{value:t.query},on:{input:function(e){return t.$emit("change",t.$refs.input.value)}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],staticClass:"icon-dismiss"})])},c=[],u={components:{},model:{prop:"query",event:"change"},props:{query:{type:String,default:""},place_holder:{type:String,default:"搜索歌曲、歌手"}},data:function(){return{}},watch:{},computed:{},methods:{clickHandle:function(t){var e=t.target.closest(".icon-dismiss");e&&this.$emit("change","")}},created:function(){},mounted:function(){}},o=u,l=(r("eb18"),r("2877")),h=Object(l["a"])(o,i,c,!1,null,"150e46ba",null),f=h.exports,p=r("5d17"),m=(r("d81d"),r("fb6a"),r("b0c0"),r("d3b7"),r("96cf"),r("1da1")),d=r("e47b"),v=r("fc1f"),y=r("a4e6");function b(){return g.apply(this,arguments)}function g(){return g=Object(m["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d["a"])({url:"/search/hot"});case 3:return e=t.sent,t.abrupt("return",e.result.hots.map((function(t){return t.first})));case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",Promise.reject(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),g.apply(this,arguments)}function w(t){return C.apply(this,arguments)}function C(){return C=Object(m["a"])(regeneratorRuntime.mark((function t(e){var r,s,n,a,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d["a"])({url:"/search",params:{keywords:e,type:1018}});case 3:return r=t.sent,s=r.result,n=s.song,a=s.playList,i=s.artist,c={},c.noResult=!0,n&&(c.songs=n.songs.slice(0,4).map((function(t){return new v["a"](Object(y["a"])(t))})),c.noResult=!1),a&&(c.playList=a.playLists.slice(0,4).map((function(t){return{id:t.id,name:t.name,imgSrc:t.coverImgUrl,creator:t.creator.nickname}})),c.noResult=!1),i&&(c.artists=i.artists.slice(0,4).map((function(t){return{id:t.id,name:t.name,icon:t.picUrl}})),c.noResult=!1),t.abrupt("return",c);case 13:return t.prev=13,t.t0=t["catch"](0),t.abrupt("return",Promise.reject(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),C.apply(this,arguments)}var _=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hot-search-wrapper"},[r("h2",{staticClass:"title"},[t._v("热门搜索")]),r("ul",{staticClass:"list",on:{click:function(e){return t.clickHandle(e)}}},t._l(t.hotSearchList,(function(e,s){return r("li",{key:s,staticClass:"item",attrs:{"data-index":s}},[t._v(" "+t._s(e)+" ")])})),0)])},x=[],k={components:{},props:{hotSearchList:{type:Array,default:function(){return[]}}},data:function(){return{}},watch:{},computed:{},methods:{clickHandle:function(t){var e=t.target.closest(".item");if(e){var r=e.dataset.index;this.$emit("hot-search-click",this.hotSearchList[r])}}},created:function(){},mounted:function(){},emits:["hot-search-click"]},j=k,H=(r("6681"),Object(l["a"])(j,_,x,!1,null,"22827841",null)),O=H.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-result-wrapper",on:{click:function(e){return t.clickHandle(e)}}},[r("h2",{staticClass:"title"},[t._v("按"),r("span",[t._v('"'+t._s(t.query)+'"')]),t._v("相关的结果")]),t.result.songs?r("div",{staticClass:"songs list"},[r("h2",{staticClass:"type-title"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-song"}})]),t._v(" 单曲 ")]),r("ul",{staticClass:"items"},t._l(t.result.songs,(function(e,s){return r("li",{key:s,staticClass:"item",attrs:{"data-index":s}},[t._v(" "+t._s(e.name)+"-"+t._s(t.getSingerName(e))+" ")])})),0)]):t._e(),t.result.artists?r("div",{staticClass:"artists list"},[r("h2",{staticClass:"type-title"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-yonghu"}})]),t._v(" 歌手 ")]),r("ul",{staticClass:"items"},t._l(t.result.artists,(function(e,s){return r("li",{key:s,staticClass:"item",attrs:{"data-index":s}},[t._v(" "+t._s(e.name)+" ")])})),0)]):t._e(),t.result.playList?r("div",{staticClass:"play-list list"},[r("h2",{staticClass:"type-title"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-gedan"}})]),t._v(" 歌单 ")]),r("ul",{staticClass:"items"},t._l(t.result.playList,(function(e,s){return r("li",{key:s,staticClass:"item",attrs:{"data-index":s}},[t._v(" "+t._s(e.name)+"-"+t._s(e.creator)+" ")])})),0)]):t._e(),t.result.noResult?r("div",{staticClass:"no-result"},[r("div",{staticClass:"back"}),r("p",[t._v("抱歉，暂无搜索结果")])]):t._e()])},q=[],$=(r("a15b"),r("5530")),L=r("5f5b"),R=r("2f62"),N=r("52f9"),I=Object(R["a"])("songModule"),T=I.mapActions,P={components:{},props:{query:{type:String,default:""}},data:function(){return{result:{songs:[],playList:[],artists:[]}}},computed:{},methods:Object($["a"])({getResult:function(){var t=this;this.query&&w(this.query).then((function(e){t.result=e})).catch((function(t){console.log("search result get fail: ",t)}))},getSingerName:function(t){return t.singerName.join("/")},clickHandle:function(t){var e=t.target.closest(".items"),r=t.target.closest(".type-title");if(e||!r){var s=e.closest(".list").classList[0],n=t.target.closest(".item").dataset.index;"songs"===s?this._songClickHandle(n):"artists"===s?this._artistClickHandle(n):this._playListClickHandle(n);var a=Object(N["g"])(this.query);this.$store.commit("setSearchHistory",a)}},_songClickHandle:function(t){this.changeCurrentSong({songList:[this.result.songs[t]]})},_artistClickHandle:function(t){var e=this.result.artists[t];this.$router.push({name:"singerDetail",params:{id:e.id},query:{src:e.icon,name:e.name}})},_playListClickHandle:function(t){var e=this.result.playList[t];this.$router.push({name:"songListDetail",params:{id:e.id},query:{name:e.name,imgSrc:e.imgSrc}})}},T(["changeCurrentSong"])),created:function(){this.queryWatcher=this.$watch("query",Object(L["a"])(this.getResult,500))},mounted:function(){}},E=P,A=(r("9e86"),Object(l["a"])(E,S,q,!1,null,"5c2a35e8",null)),B=A.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-result-wrapper",on:{click:function(e){t.confirm(e),t.clickHandle(e)}}},[t._m(0),r("div",{staticClass:"list"},t._l(t.searchHistory,(function(e,s){return r("div",{key:s,staticClass:"item",attrs:{"data-index":s}},[r("span",{staticClass:"text"},[t._v(t._s(e))]),r("span",{staticClass:"icon-delete"})])})),0),r("base-confirm",{directives:[{name:"show",rawName:"v-show",value:t.showConfirm,expression:"showConfirm"}],on:{confirm:t.deleteHistoryAll,cancel:function(e){t.showConfirm=!1}}})],1)},D=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"title"},[r("span",{staticClass:"text"},[t._v("搜索历史")]),r("span",{staticClass:"icon-clear"})])}],J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"confirm"}},[r("div",{staticClass:"confirm-wrapper"},[r("div",{staticClass:"confirm-content",on:{click:function(e){return t.clickHandle(e)}}},[r("p",{staticClass:"confirm-text"},[t._v(t._s(t.confirmText))]),r("div",{staticClass:"operators"},[r("div",{staticClass:"btn-left"},[t._v(t._s(t.btnLeftText))]),r("div",{staticClass:"btn-right"},[t._v(t._s(t.btnRightText))])])])])])},V=[],K={components:{},props:{confirmText:{type:String,default:"are you sure?"},btnLeftText:{type:String,default:"OK"},btnRightText:{type:String,default:"CANCEL"}},watch:{},computed:{},methods:{clickHandle:function(t){var e=t.target.closest(".btn-left"),r=t.target.closest(".btn-right");(e||r)&&(e?this.$emit("confirm"):this.$emit("cancel"))}},created:function(){},mounted:function(){},emits:["confirm","cancel"]},M=K,W=(r("c34d"),Object(l["a"])(M,J,V,!1,null,"1acaf001",null)),z=W.exports,F={components:{BaseConfirm:z},data:function(){return{showConfirm:!1}},props:{},watch:{},computed:{searchHistory:function(){return this.$store.state.searchHistory}},methods:{clickHandle:function(t){var e=t.target.closest(".text");if(e){var r=e.closest(".item").dataset.index;this.$emit("query-change",this.searchHistory[r])}},deleteHistoryV:function(t){var e=t.closest(".item").children[0].innerText,r=Object(N["a"])(e);this.$store.commit("setSearchHistory",r)},confirm:function(t){var e=t.target.closest(".icon-clear"),r=t.target.closest(".icon-delete");(e||r)&&(r?this.deleteHistoryV(r):this.showConfirm=!0)},deleteHistoryAll:function(){var t=Object(N["a"])(void 0,!0);this.$store.commit("setSearchHistory",t),this.showConfirm=!1}},mounted:function(){}},G=F,Q=(r("3d1e"),Object(l["a"])(G,U,D,!1,null,"b82cd028",null)),X=Q.exports,Y={mixins:[a["a"]],data:function(){return{query:"",hotSearch:[]}},computed:{shortCut:function(){return this.hotSearch.concat(this.searchHistory)},searchHistory:function(){return this.$store.state.searchHistory}},components:{BaseSearchBar:f,HotSearchList:O,SearchResultList:B,SearchHistroy:X,Scroll:p["a"]},methods:{handlePlayList:function(){0===this.playList.length?this.$refs.wrapper.style.bottom="0px":this.$refs.wrapper.style.bottom="".concat(this.miniPlayerHeight,"px"),this.$refs.scroll.refresh()},hotSearchHandle:function(t){this.query=t},searchHistoryClick:function(t){this.query=t}},created:function(){var t=this;b().then((function(e){t.hotSearch=e})).catch((function(t){console.log("hot search get fail:",t)}))},watch:{query:function(){this.$refs.scroll.refresh()}}},Z=Y,tt=(r("7e88"),Object(l["a"])(Z,s,n,!1,null,"3612026a",null));e["default"]=tt.exports},"7e88":function(t,e,r){"use strict";r("ef36")},"7f86":function(t,e,r){},"9e86":function(t,e,r){"use strict";r("b18d")},a4e6:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return o})),r.d(e,"d",(function(){return h})),r.d(e,"a",(function(){return i}));r("d81d"),r("b0c0"),r("d3b7"),r("96cf");var s=r("1da1"),n=r("e47b"),a=r("fc1f");function i(t){var e=0;return e=t.privilege?t.privilege.maxbr:t.h?t.h.br:t.m?t.m.br:t.l.br,{id:t.id,albumId:t.al.id,albumName:t.al.name,singerName:t.ar.map((function(t){return t.name})),name:t.name,maxBr:e}}function c(t){return u.apply(this,arguments)}function u(){return u=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(n["a"])({url:"/artist/songs",params:{order:"hot",offset:e.offset||0,limit:e.limit||30,id:e.id}});case 3:return r=t.sent,s=r.more,c=r.songs.map((function(t){return new a["a"](i(t))})),t.abrupt("return",{songList:c,more:s});case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),u.apply(this,arguments)}function o(t){return l.apply(this,arguments)}function l(){return l=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(n["a"])({url:"/playlist/detail",params:{id:e}});case 3:return r=t.sent,t.abrupt("return",{songList:r.playlist.tracks.map((function(t){return new a["a"](i(t))})),songIdList:r.playlist.trackIds.map((function(t){return t.id}))});case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",Promise.reject(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),l.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(n["a"])({url:"/song/detail/",params:{ids:e}});case 3:return r=t.sent,s=r.songs.map((function(t,e){var s=t;return s.privilege=r.privileges[e],i(s)})),t.abrupt("return",s);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),f.apply(this,arguments)}},b18d:function(t,e,r){},c34d:function(t,e,r){"use strict";r("fff7")},c3e7:function(t,e,r){},eb18:function(t,e,r){"use strict";r("3cc2")},ef36:function(t,e,r){},fc1f:function(t,e,r){"use strict";r("fb6a"),r("b0c0"),r("d3b7"),r("96cf");var s=r("1da1"),n=r("d4ec"),a=r("bee2"),i=r("e47b");function c(t,e,r){return u.apply(this,arguments)}function u(){return u=Object(s["a"])(regeneratorRuntime.mark((function t(e,r,s){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i["a"])({url:"/song/url",params:{id:e,br:r}});case 3:return n=t.sent.data[0].url,t.next=6,Object(i["a"])({url:"/lyric",params:{id:e}});case 6:return a=t.sent.lrc.lyric,t.next=9,Object(i["a"])({url:"/album",params:{id:s}});case 9:return c=t.sent.album.picUrl,t.abrupt("return",{url:n,lyric:a,picUrl:c});case 13:return t.prev=13,t.t0=t["catch"](0),t.abrupt("return",Promise.reject(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),u.apply(this,arguments)}var o=c,l=function(){function t(e){var r=e.id,s=e.albumId,a=e.albumName,i=e.singerName,c=e.name,u=e.maxBr;Object(n["a"])(this,t),this.id=r,this.albumId=s,this.albumName=a,this.singerName=i,this.name=c,this.enable=!1,this.url="",this.maxBr=u,this.lyric="",this.icon="",this.songTime=0,this.loved=!1}return Object(a["a"])(t,[{key:"getPlayInfo",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o(this.id,this.maxBr,this.albumId);case 3:return e=t.sent,this.url=e.url,this.lyric=e.lyric,this.icon=e.picUrl,this._getSongTime(),this.enable=!0,t.abrupt("return",Promise.resolve());case 12:return t.prev=12,t.t0=t["catch"](0),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"_getSongTime",value:function(){var t=this.lyric.lastIndexOf("]"),e=this.lyric.lastIndexOf("[")+1,r=this.lyric.slice(e,t),s=parseInt(r.substr(0,2),10),n=parseInt(r.substr(3,2),10),a=parseInt(r.substr(6,3),10),i=60*s*1e3+1e3*n+a;this.songTime=i,this.minutes=s,this.seconds=n,this.milliseconds=a}}]),t}();e["a"]=l},fff7:function(t,e,r){}}]);
//# sourceMappingURL=chunk-5397fc3d.db33f9a5.js.map