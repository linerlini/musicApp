(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-478eea06"],{2909:function(t,n,e){"use strict";function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function r(t){if(Array.isArray(t))return i(t)}e.d(n,"a",(function(){return c}));e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("fb6a"),e("b0c0"),e("25f0");function o(t,n){if(t){if("string"===typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,n):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||s(t)||o(t)||a()}},"2af7":function(t,n,e){},3133:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"wrapper",staticClass:"songlist-detail-wrapper"},[e("music-list",{ref:"musicList",attrs:{name:t.name,icon:t.imgSrc,songLists:t.songList},on:{pullingUp:t.pullingUpHandle}})],1)},r=[],s=(e("99af"),e("a15b"),e("a434"),e("b0c0"),e("2909")),o=e("c668"),a=e("a4e6"),c=e("e076"),u={mixins:[o["a"]],components:{MusicList:c["a"]},props:{},data:function(){return{songList:[],songIdList:[],name:"",imgSrc:"",id:"",offset:20}},methods:{handlePlayList:function(){0===this.playList.length?this.$refs.wrapper.style.bottom="0px":this.$refs.wrapper.style.bottom="".concat(this.miniPlayerHeight,"px")},pullingUpHandle:function(){var t=this;console.log("1");var n=this.songIdList.splice(0,20);0!==n.length&&Object(a["d"])(n.join(",")).then((function(n){t.songList=[].concat(Object(s["a"])(t.songList),Object(s["a"])(n)),t.$nextTick((function(){t.$refs.musicList.finishPullUp()}))})).catch((function(t){console.log("get song failed",t)}))}},created:function(){var t=this;this.name=this.$route.query.name,this.imgSrc=this.$route.query.imgSrc,this.id=this.$route.params.id,Object(a["b"])(this.id).then((function(n){t.songList=n.songList,t.songIdList=n.songIdList.splice(0,20)})).catch((function(t){console.log("song list get failed",t)}))}},l=u,f=(e("d80c"),e("2877")),d=Object(f["a"])(l,i,r,!1,null,"2d4473d0",null);n["default"]=d.exports},d80c:function(t,n,e){"use strict";e("2af7")}}]);
//# sourceMappingURL=chunk-478eea06.f84c75dd.js.map