webpackJsonp([10],{"4nI4":function(t,e){},"8MDr":function(t,e,n){"use strict";var i=n("Dd8w"),s=n.n(i),o=n("NYxO"),a=n("GQaK"),r={name:"scroll",computed:s()({},Object(o.c)(["showLast"])),watch:{$route:function(t,e){this.scroll&&this.scroll.refresh()}},props:{data:{type:Array,default:null},probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},listenBeforeScroll:{type:Boolean,default:!1},direction:{type:String,default:"horizontal"},scrollbar:{type:null,default:!1},pullDownRefresh:{type:null,default:!1},pullUpLoad:{type:null,default:!1},startY:{type:Number,default:0},refreshDelay:{type:Number,default:20},freeScroll:{type:Boolean,default:!1},mouseWheel:{type:Boolean,default:!1},bounce:{default:!0}},methods:{initScroll:function(){this.$refs.wrapper&&(this.scroll=new a.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}))}},mounted:function(){var t=this;setTimeout(function(){t.initScroll()},100)}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",class:{show_last:this.showLast}},[this._t("default")],2)},staticRenderFns:[]};var l=n("VU/8")(r,c,!1,function(t){n("CODC")},"data-v-a699d914",null);e.a=l.exports},CODC:function(t,e){},Gak4:function(t,e,n){"use strict";e.a=function(t,e,n){return t+=t.indexOf("?")>0?"":"?"+function(t,e){var n="";for(var i in e){var s=e[i]=e[i];n+="&"+i+"="+a()(s)}return t.indexOf("mobile3")>0||t.indexOf("fcg_v8_toplist")>0?n.substring(1).replace(/['|"]/g,""):n.substring(1)}(t,e),new s.a(function(e,i){c()(t,n,function(t,n){t?i(t):e(n)})})};var i=n("//Fk"),s=n.n(i),o=n("mvHQ"),a=n.n(o),r=n("hU7x"),c=n.n(r)},HqIm:function(t,e){},Iaio:function(t,e){},K0Ih:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"listen_num",function(){return O});var s=n("fZjL"),o=n.n(s),a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav"},[e("router-link",{attrs:{to:"/recommend"}},[this._v("推荐")]),this._v(" "),e("router-link",{attrs:{to:"/Hotmusic"}},[this._v("热门")]),this._v(" "),e("router-link",{attrs:{to:"/rankings"}},[this._v("排行榜")]),this._v(" "),e("router-link",{attrs:{to:"/search"}},[this._v("搜索")])],1)},staticRenderFns:[]};var c=n("VU/8")(null,r,!1,function(t){n("ZN47")},"data-v-8c982fa6",null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{staticClass:"music_icon",attrs:{src:n("OAJ+"),alt:"音乐logo"}}),this._v(" "),e("span",[this._v("Mars")])])}]};var u=n("VU/8")(null,l,!1,function(t){n("Iaio")},"data-v-6914a046",null).exports,d=n("Dd8w"),h=n.n(d),p=n("Pf8O"),f=n("NYxO"),g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"twinkle"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"popwindow_content"},[e("div",{staticClass:"text_top"},[this._v("不好意思，亲，此歌曲需要付费，去其他平台付费吧。")]),this._v(" "),e("div",{staticClass:"select_bottom"},[e("a",{staticClass:"close",on:{click:this.win_close}},[this._v("关闭")]),this._v(" "),e("a",{attrs:{href:"https://m.y.qq.com/"}},[this._v("去QQ音乐")])])])])])},staticRenderFns:[]};var m=n("VU/8")({data:function(){return{}},methods:{win_close:function(){this.$emit("win_close",!1)}}},g,!1,function(t){n("mXCp")},"data-v-69e9bdcd",null).exports,v={props:["SongListMenu","currentIndex"],components:{newScroll:n("8MDr").a},methods:h()({list_close:function(){this.$emit("list_close",!1)},setPlay:function(t,e){this.set_Play({list:this.SongListMenu,index:e})}},Object(f.b)(["set_Play"]))},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"twinkle"}},[n("div",{staticClass:"playLisywrapper",on:{click:t.list_close}},[n("div",{staticClass:"songlist_content"},[n("div",{staticClass:"listtitle"},[n("span",{staticClass:"title"},[t._v("当前播放")]),t._v(" "),n("span",{staticClass:"total"},[t._v("共"+t._s(t.SongListMenu.length)+"首歌")]),t._v(" "),n("span",{staticClass:"close_Btn",on:{click:function(e){return e.stopPropagation(),t.list_close(e)}}},[t._v("关闭")])]),t._v(" "),n("div",{staticClass:"scroll_content"},[n("newScroll",{staticClass:"scroll_wrapper"},[n("div",[n("ul",{staticClass:"scroll_wrapper_ul"},t._l(t.SongListMenu,function(e,i){return n("li",{key:e.id,class:[t.currentIndex==i?"songli active":"songli"],on:{click:function(n){return n.stopPropagation(),t.setPlay(e,i)}}},[n("div",{staticClass:"left_box"},[n("div",{staticClass:"songinfo"},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"author"},[t._v(t._s(e.singer))])])]),t._v(" "),n("div",{staticClass:"right_box"},[n("span",{staticClass:"iconfont icon-bofang"})])])}),0)])])],1)])])])},staticRenderFns:[]};var C=n("VU/8")(v,A,!1,function(t){n("4nI4")},"data-v-34d95f9c",null).exports,_=1,y=2;var w={data:function(){return{purl:null,mode:0,precent:0,onDrage:!1,audio:{playing:!1,currentTime:"00:00",durationTime:"00:00",step:.1},touchStartPointX:0,distanceX:0,touchLeft:10,BarW:320,isSongList:!1}},computed:h()({},Object(f.c)(["currentSong","selectPlay","playList","bigPlayer","currentIndex","songErrPop","sequenceList"]),{playControl:function(){return this.selectPlay?"icon-zanting":"icon-bofang"},playControlBig:function(){return this.selectPlay?"icon-zanting-big":"icon-bofang-big"},disableCls:function(){return this.audio.playding?"":"disable"},playMode:function(){return this.mode==y?"icon-suiji":this.mode==_?"icon-danquxunhuan":"icon-xunhuan"}}),watch:{currentSong:function(t,e){var n=this;t.id&&t!=e&&Object(p.e)(t.mid,t.filename).then(function(e){0==e.code&&(n.purl=e.req_0.data.midurlinfo[0].purl,n.purl?(t.url="http://ws.stream.qqmusic.qq.com/"+n.purl,n.$nextTick(function(){n.set_songErrPop(!1),n.set_selectPlay(!0),n.$refs.audio.play()})):(n.set_songErrPop(!0),n.set_selectPlay(!1)))})},selectPlay:function(t){if(this.currentSong.url){var e=this.$refs.audio;t?e.play():e.pause()}}},methods:h()({},Object(f.d)(["set_selectPlay","set_bigPlayer","set_currentIndex","set_songErrPop","set_playlist"]),{win_close:function(t){this.set_songErrPop(t)},list_close:function(){this.isSongList=!1},show_bigPlayer:function(){this.set_bigPlayer(!this.bigPlayer)},togglePlay:function(){this.purl&&this.audio.playing&&this.set_selectPlay(!this.selectPlay)},next:function(){this.audio.playing&&(this.currentIndex>=this.playList.length-1&&this.set_currentIndex(0),this.set_currentIndex(this.currentIndex+1),this.audio.playing=!1,this.audio.currentTime="00:00")},prev:function(){this.audio.playing&&(0==this.currentIndex&&this.set_currentIndex(this.playList.length-1),this.set_currentIndex(this.currentIndex-1),this.audio.playing=!1,this.audio.currentTime="00:00")},error:function(){var t=this;this.timer=setTimeout(function(){t.audio.playing=!0},1300)},play:function(){var t=this;this.timer=setTimeout(function(){t.audio.playing=!0,t.audio.currentTime=t.formatTime(t.$refs.audio.currentTime),t.audio.durationTime=t.formatTime(t.$refs.audio.duration)},1300)},updateProbar:function(){var t,e;t=(100*this.$refs.audio.currentTime).toFixed(1),e=(100*this.$refs.audio.duration).toFixed(1),this.precent=(t/e*100).toFixed(2)},changeMode:function(){this.mode=(this.mode+1)%3;var t=null;t=this.mode==y?function(t){var e,n,i=t.slice(0);for(var s in i){var o=(e=0,n=s,Math.floor((n-e+1)*Math.random()+e)),a=i[o];i[o]=i[s],i[s]=a}return i}(this.sequenceList):this.sequenceList,this.currentSongNomalPlay(t),this.set_playlist(t)},ended:function(){this.mode==_?this.loop():this.next()},timeUp:function(t){this.audio.currentTime=this.formatTime(t.target.currentTime),this.onDrage||this.updateProbar()},loop:function(){var t=this.$refs.audio;t.currentTime=0,t.play()},currentSongNomalPlay:function(t){var e=this,n=t.findIndex(function(t){return t.id==e.currentSong.id});this.set_currentIndex(n)},formatTime:function(t){if(0!==t){var e=Math.floor(t/60)<10?"0"+Math.floor(t/60):Math.floor(t/60),n=Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60);return(e=e||"00")+":"+(n=n||"00")}this.curTime="00:00"},dotStart:function(t){this.onDrage=!0,this.touchStartPointX=t.targetTouches[0].pageX,this.distanceX=0},dotMove:function(t){this.onDrage=!0;var e=(t||window.Event).targetTouches[0].pageX;e<=this.touchLeft&&(e=this.touchLeft),e>=this.BarW+this.touchLeft&&(e=this.BarW+this.touchLeft),this.distanceX=e-this.touchStartPointX,this.precent=(this.distanceX+this.touchStartPointX-this.touchLeft)/this.BarW*100},dotEnd:function(){this.onDrage=!1;var t=this.precent/100*this.$refs.audio.duration;this.$refs.audio.currentTime=t},showList:function(){this.isSongList=!0}}),components:{popUpWindow:m,SonglistWindow:C},mounted:function(){}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playList.length>0,expression:"playList.length>0"}],staticClass:"player"},[n("transition",{attrs:{name:"slip"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.bigPlayer,expression:"bigPlayer"}],staticClass:"biggerplay"},[n("div",{staticClass:"bg_div"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentSong.image,expression:"currentSong.image"}],attrs:{alt:"",width:"100%",height:"100%"}})]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"back"},[n("span",{staticClass:"iconfont icon-guanbi",on:{click:t.show_bigPlayer}})]),t._v(" "),n("div",{staticClass:"songTitle"},[n("p",{staticClass:"name"},[t._v(t._s(t.currentSong.name))]),t._v(" "),n("p",{staticClass:"singer"},[t._v(t._s(t.currentSong.singer))])]),t._v(" "),n("div",{staticClass:"song_cd"},[n("div",{staticClass:"player_content"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentSong.image,expression:"currentSong.image"}],class:t.playControl,attrs:{alt:""}})])]),t._v(" "),n("div",{ref:"progressbar",staticClass:"progress_bar",on:{touchmove:t.dotMove,touchend:t.dotEnd}},[n("span",{staticClass:"current_time"},[t._v(t._s(t.audio.currentTime))]),t._v(" "),n("span",{staticClass:"total_time"},[t._v(t._s(t.audio.durationTime))]),t._v(" "),n("div",{staticClass:"progress_btn",style:{left:t.precent+"%"},on:{touchstart:t.dotStart}})]),t._v(" "),n("div",{staticClass:"song_control"},[n("div",{staticClass:"playMode"},[n("span",{staticClass:"iconfont",class:t.playMode,on:{click:t.changeMode}})]),t._v(" "),n("div",{staticClass:"playControl"},[n("span",{staticClass:"iconfont icon-shangyishou",class:t.disableCls,on:{click:t.prev}}),t._v(" "),n("span",{staticClass:"iconfont",class:[t.playControlBig,t.disableCls],on:{click:t.togglePlay}}),t._v(" "),n("span",{staticClass:"iconfont icon-xiayishou",class:t.disableCls,on:{click:t.next}})]),t._v(" "),n("div",{staticClass:"musicLike"},[n("span",{staticClass:"iconfont icon-chazhaobiaodanliebiao",on:{click:t.showList}})])])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.bigPlayer,expression:"!bigPlayer"}],staticClass:"miniPlay",on:{click:t.show_bigPlayer}},[n("div",{ref:"mini_progressbar",staticClass:"mini_progress_bar"},[n("div",{staticClass:"mini_progress",style:{width:t.precent+"%"}})]),t._v(" "),n("div",{staticClass:"left_box"},[n("div",{staticClass:"img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentSong.image,expression:"currentSong.image"}],class:t.playControl,attrs:{alt:""}})]),t._v(" "),n("div",{staticClass:"songinfo_mini"},[n("p",{staticClass:"name"},[t._v(t._s(t.currentSong.name))]),t._v(" "),n("p",{staticClass:"singer"},[t._v(t._s(t.currentSong.singer))])])]),t._v(" "),n("div",{staticClass:"right_box"},[n("p",{staticClass:"icon_wrapper"},[n("span",{staticClass:"iconfont",class:t.playControl,on:{click:function(e){return e.stopPropagation(),t.togglePlay(e)}}})])])]),t._v(" "),n("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{error:t.error,play:t.play,ended:t.ended,timeupdate:t.timeUp}},[t._v("你的浏览器不支持 audio 标签\n\t")]),t._v(" "),n("popUpWindow",{directives:[{name:"show",rawName:"v-show",value:t.songErrPop,expression:"songErrPop"}],on:{win_close:t.win_close}}),t._v(" "),t.isSongList?n("SonglistWindow",{attrs:{SongListMenu:t.playList,currentIndex:t.currentIndex},on:{list_close:t.list_close}}):t._e()],1)},staticRenderFns:[]};var b=n("VU/8")(w,I,!1,function(t){n("HqIm")},"data-v-5d0c9943",null).exports,B=n("Zrlr"),L=n.n(B),x=n("wxAW"),E=n.n(x);new(function(){function t(){L()(this,t),this.render()}return E()(t,[{key:"render",value:function(){var t="orientationchange"in window?"orientationchange":"resize",e=10;window.addEventListener(t,function t(){var n=document.documentElement,i=n.clientWidth;return n.clientWidth>720?i=720:n.clientWidth<320&&(i=320),n.style.fontSize=i/e+"px",t}()),document.addEventListener("touchstart",function(t){t.touches.length>1&&t.preventDefault()});var n=0;document.addEventListener("touchend",function(t){var e=(new Date).getTime();e-n<=300&&t.preventDefault(),n=e},!1)}}]),t}());var P={name:"App",data:function(){return{NavHea_show:!1}},watch:{$route:function(t,e){this.conRoute(t.path)}},components:{Header:u,Nav:c,Play:b},methods:{showNav:function(t){console.log(t),this.NavHea_show=t},conRoute:function(t){t.indexOf("Welcome")<0&&(this.NavHea_show=!0)},forbiddenBack:function(){history.pushState(null,null,document.URL),window.addEventListener("popstate",function(){history.pushState(null,null,document.URL)})}},mounted:function(){this.conRoute(this.$route.path),this.forbiddenBack()}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.NavHea_show,expression:"NavHea_show"}]},[e("Header"),this._v(" "),e("Nav")],1),this._v(" "),e("transition",{attrs:{name:"bounceLeft"}},[e("keep-alive",[e("router-view",{on:{show_nav:this.showNav}})],1)],1),this._v(" "),e("Play")],1)},staticRenderFns:[]};var S=n("VU/8")(P,q,!1,function(t){n("K0Ih")},"data-v-32d2e072",null).exports,F=n("/ocq");a.a.use(F.a);var Q=[{path:"/recommend",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"egFk"))},children:[{path:"/recommend/:id",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"cFs9"))}}]},{path:"/Hotmusic",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"rx6W"))},children:[{path:"/Hotmusic/:id",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"V/UC"))}}]},{path:"/Welcome",component:function(){return n.e(5).then(n.bind(null,"L/27"))}},{path:"/rankings",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"FKKE"))},children:[{path:"/rankings/:id",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"g6sM"))}}]},{path:"/search",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"N2Ln"))}},{path:"/",redirect:"/Welcome"}],H=new F.a({mode:"hash",routes:Q}),M=(n("tb/R"),n("7QTg")),N=n.n(M);a.a.use(f.a);var U=new f.a.Store({actions:{set_getRecomHeadInfo:function(t,e){(0,t.commit)("set_getRecomHeadInfo",e)},set_Play:function(t,e){var n=t.commit;n("set_selectPlay",!0),n("set_showLast",!0),n("set_sequenceList",e.list),n("set_playlist",e.list),n("set_currentIndex",e.index),n("set_bigPlayer",!0)}},mutations:{set_getRecomHeadInfo:function(t,e){t.getRecomHeadInfo=e},set_selectPlay:function(t,e){t.play=e},set_bigPlayer:function(t,e){t.bigPlayer=e},set_sequenceList:function(t,e){t.sequenceList=e},set_playlist:function(t,e){t.playList=e},set_currentIndex:function(t,e){t.currentIndex=e},set_showLast:function(t,e){t.showLast=e},set_songErrPop:function(t,e){t.songErrPop=e}},state:{getRecomHeadInfo:0,play:!1,bigPlayer:!1,playList:[],sequenceList:[],currentIndex:{},showLast:!1,songErrPop:!1},getters:{getRecomHeadInfo:function(t){return t.getRecomHeadInfo},selectPlay:function(t){return t.play},bigPlayer:function(t){return t.bigPlayer},playList:function(t){return t.playList},sequenceList:function(t){return t.sequenceList},currentIndex:function(t){return t.currentIndex},currentSong:function(t){return t.playList[t.currentIndex]||{}},showLast:function(t){return t.showLast},songErrPop:function(t){return t.songErrPop}}}),k=(n("v2ns"),n("heNW"),n("AXdl")),O=function(t){return t>Math.pow(10,4)?(t/Math.pow(10,4)).toFixed(1)+"万":t};a.a.use(N.a),a.a.config.productionTip=!1,o()(i).forEach(function(t){a.a.filter(t,i[t])}),a.a.use(k.a,{loading:n("wne9")});new a.a({el:"#app",router:H,store:U,components:{App:S},template:"<App/>"})},"OAJ+":function(t,e,n){t.exports=n.p+"static/img/music.8942c68.jpg"},Pf8O:function(t,e,n){"use strict";e.a=function(){var t=a()({},u.a,{platform:"h5",uin:0,needNewCode:1,_:1524035576554});return Object(r.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,u.b)},e.c=function(){var t=a()({},u.a,{data:{comm:{ct:24},recomPlaylist:{method:"get_hot_recommend",param:{async:1,cmd:2},module:"playlist.HotRecommendServer"}},loginUin:0,hostUin:0,format:"jsonp",platform:"yqq",needNewCode:0});return Object(r.a)("https://u.y.qq.com/cgi-bin/musicu.fcg",t)},e.b=function(){var t=a()({},u.a,{data:{comm:{ct:24},playlist:{method:"get_playlist_by_category",param:{id:3056,curPage:1,size:40,order:5,titleid:3056},module:"playlist.PlayListPlazaServer"}},loginUin:0,hostUin:0,format:"jsonp",platform:"yqq",needNewCode:0});return Object(r.a)("https://u.y.qq.com/cgi-bin/musicu.fcg",t)},e.d=function(t){var e={type:1,json:1,utf8:1,onlysong:0,disstid:t,g_tk:5381,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0};return l.a.get("/api/getRecomDetailSongs",{params:e}).then(function(t){return s.a.resolve(t.data)})},e.e=function(t,e){var n={format:"json",data:{req_0:{module:"vkey.GetVkeyServer",method:"CgiGetVkey",param:{guid:"358840384",songmid:[t],songtype:[0],uin:"1443481947",loginflag:1,platform:"20"}},comm:{uin:"18585073516",format:"json",ct:24,cv:0}}};return Object(r.a)("https://u.y.qq.com/cgi-bin/musicu.fcg",n)},e.f=function(t){var e={p:1,n:20,w:t,format:"json"};return Object(r.a)("https://c.y.qq.com/soso/fcgi-bin/client_search_cp",e,u.b)};var i=n("//Fk"),s=n.n(i),o=n("woOf"),a=n.n(o),r=n("Gak4"),c=n("mtWM"),l=n.n(c),u=n("T452")},T452:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s});var i={param:"jsonpCallback",prefix:"tan"},s={g_tk:5381,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0}},ZN47:function(t,e){},heNW:function(t,e){},mXCp:function(t,e){},"tb/R":function(t,e){},v2ns:function(t,e){},wne9:function(t,e){t.exports="data:image/gif;base64,R0lGODlhlgCWAMMAAPT09OXl5dzc3M3NzcXFxb29vbW1ta2trZ6enuzs7NTU1KampgAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAMACwAAAAAlgCWAAAEwBDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uOWEQAh+QQFCgAMACwRABEAPQAzAAAE+ZDJSau9ONcgBiGFIRaCZp5nMBQH4r7IMQRobTOJUizvYhQDRYB2K2oSA0OvoEgYnydB4WWYQa8aRSs2cGK/Fi1iQSCCzxIx2Ys+B5TrNjpB4BXY8q+AdzDnvwRjA39nCS19hGB7CAWJYAoLCwqOXwNjfpRGgQd4mUVTnJ5QUwadojWBBqdPlqGrNwoxpq8aAZGYtEcHCyW5NVODviiWqsIpkbPGFS29yhmxjc4ZCcjSGVOT1hcBMdoYSrje3NHeFVPh2uPlFlPN6zgLB+8UlsHzDAYLydbcxfeB2e7tuidBHUFLAedN2WctHkEGBu/FsjcvELpyDKVFAAAh+QQFCgAMACwQAEMAOwBHAAAE/5AZxKq9OOvNez2HJ46khhhlqm4BUqwwLCBEbJfzcO+egii8oGaAEAiPFqIReSQUmc0nNKicUqXWGxGYvfl0XVsubGvVyLCECx1bhNgrwwK+KiAC9NQ2j6PxSwsofyMHc4MiTkuHHDNnixxujx12eJIajZYbC4aZGImdGC0voBeFCaQWPo6opqgVqq4fC6euRKukhZWoLYKudlyoCZu0qD69qHZgwYWKpAHDsUTHpHajrhO3nQkHfq7bCMqkwt3La97c1qgTBsTUCAvNoAoL5M7cBrruC9mZAtwH8ToRoIfPVYAJJwJaEoDQgEJJDBEgODCgXaYABeidUGBRUgIFCCknEhDQcVGCAXIkniAwQEC+RwIIhFR5wICBAvz4BFAwoEBKlbEYJAgQAQAh+QQFCgAMACxLAFMAPgA3AAAE/5DJSau9OGs6kNhgKGYFEoxouhmI6r7TcsA0miBGrYMCQuxATEcRLFJKCaNSpjQGEIVmcSgNGhbJqu6W0+qo3to1G349o2UYwZN+JRaL9qszkLvgdhU9n4KT+SB7gCFvM4MhJUSHGz1dixkJB1iPGiV1lBgKOJgYAX6cFwdsoBUlP6QUa46oDB0Hf6Sar6wSCp+0HQsntGu6tAwls6wJLAawnAILm7hwl6jECAe7qAPKBceUAqILiqQBJT7Yi98I0dOc5NHdmAkDojgfnAkKLAgLBfHZA/U4CuJtCQQoIHClHI4B58oQWLjQgEODBg8QEPDPC0SIBgoMUJAQUICPAQQqLooAACH5BAUKAAwALGUAFgAkAD0AAATIMCVGq704Y7XG1GBocUgnnmAyLMgRoPCVEGzxxXFglArukzZfLHFovYQwAg8JE7AGTBQRQYiepgWrKLEz3LSZAsIADomzZc2umsZMoW1ZURC/BBaLb10xrl/EbH4MU3SCDHcHhhRKgYIHeYp8ZIpiPYaIigxihYIBfZQInH6ek4Y7R4ICVJl4mUqidZ5oho+uoYqqjX4LiYoGkIavuAhwnQizgryZtaB6ccKGAwiWgnzFfqrXsauX3Ma6cbKKnuBt5MPacdmR0xEAIfkEBQoADAAsSwAIAAIAbQAABEUwMRlYFQzrzA6vEiOOU3lxCpMKiRC8ASvHsWDHbb5hVV+SI4mwROFsUkiVchNIJJqY5OrzA1qv2Ox1eGIpAgqbmMYCTSIAIfkEBQoADAAsQgAIABQAbgAABP8QyEkrCDbbkrQHh/BlAqGM1qAMaMUNXXsZwIDJBWvLwtIpootgQCAUDMiCILEgSIAAhHSKOOwSh8NEcDLkFIGbBHuIAbgfsvl80jBpFXTmTWpXmAWNvHLI6+0TBX5/FQFlH1AUOSMDQWNwHwRiNU4jBGsFk3ODEpx6lWOgHgMsEwGiGpkUAaUeCZBjrRpEd6gWB5oAthQDnhKXegu5NY4UCgi7ACurBgsIsoWiAwgcI9VP0BoEjqwtCqAJyXecwCjXxC0qW+IUJRMJvpuKwxaSEybedt8tp6bxGecMrPGwLVAxD0MmkGoRbsu/ejFeyWgUiF6hVvhagFLwsIK9GTLeFNgRyA+UEhmgFqa7IaBjuzYSGZq0WAHGL0CuKCpjd+aAlFIBOhag9m3QOReHNgwjkDQFzgvCENoykI0CvEJarGGq6nESSUaOWrZI+Oughn6dBrqphFajBLIaO+jUiMEmyhNcZ9nIm4HIHm8FEoWkavaDAKo0LRz+yMNAucaPvTlWi6hAZBRELlsiktjFis7z5qK4KlLGmTx/GTlJwNezhNYUvu5AEQCS4Eig2n4IoQjFYY+FFUFz58GQWlUaqGbgqEFB1gwHngZYEBxqMQHPRmAPzDE7bZ9Vqs+hPCECACH5BAUKAAwALDIACAA0AG4AAAT/EMhJq734qsy7x8FSfGR5GcZCmCypIIKABG2NJYshFbrtS4nDggaQCX62IGJAOayQLMUC8ZwUFtBSoICgWgaIhC0gGBAIPFThSBFwEQd2xagdFA7dfPcwIAIHeAgLTCAIGxwJCld5OQUDCgF+EwoGXSJyN0s3A5WWBQpiGW5TlyQJmnNvCAZ9HQEEU6ugJqdVAAqBfKEZCZx7A7u0XgBKKpIYo3CtPqeEUgTBFwmwggTHSaizHVKrmFABhqZccVkVL9cXAXgF0eVXHwILC4flFDgjrvLe9QBg+xZC/tVbcMADGFv8JBCA4SFFu3oyenQQkdCevIcWVFQEEpDEAXwJ/5XQ8wCropR5JujU4zKkxYGC36gZwLiNYYsEARQA6mJAoMcFNCf0ShNLECt0LMCBFJXnIwFICbmMxIAHabkgLTnImFoxBEwOV4JmOdjh3sYKXHxKAMM15MUOQqyWiyex0Nez/VBl4EIIL4AUcnEA9UuMYAcwS8/KSAwwHOGFbSeAu4vXIdhhfnHUtSBY7ly9F8BsPgtLLZ7ICQ0coAluMGGzexEw3riV1xTP5WBZBUMZ70sOpwlLCIGwjSCx5V745FKctGvO8nCXOzB6gmjhwwdlCI5dClIZvbvSuBO7b7kAdlLoWXfjLZJEi3KcUUDfzJ3IC2eXSMZHOtWsLAiAh/8xULxQHSIsQVMPHmrNMQU7CYFz4BeCoIYEF7gtdIB/NcCWwUIzPTZDBqIh941syBBkYhZCtIPVimM5RsEVHGahVAXgNEeYEBWohp0FC/lR248UvFAFeURSICEQKCVJgTwSSAFjRVUBUIB+P0oFQJNOTrAQMCN2aR0V8YhJwUG4mOnlEoCouYMhnLgJAINxujlFIuERCV4RCLjJHDFhinmbBNqJed0OE2Y2hRwy1FgObxVolCQONln3HHaVMIaDjhtpiMEAAPoFRqg9XrrRqGppJqogDRZBUaeskkDXlB6oA0eN8WyY3BSccqCOpD7gAkerHMBygIU3CHusjQkKIBYdfHsgexOoe8xHH31o5LLMWegtoke1UHUZCa0cRAAAIfkEBQoADAAsAAAAAAEAAQAABAKQRQAh+QQFCgAMACwAAAAAAQABAAAEApBFADsvKiAgfHhHdjAwfGIyMDNjMjdlNjdkOGExZDQzYTcyOGVjOWE1MWZkNjdjICov"}},["NHnr"]);