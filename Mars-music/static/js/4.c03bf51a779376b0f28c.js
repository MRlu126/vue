webpackJsonp([4],{FKKE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),s=n("vpKB"),c=n("NYxO"),o=n("PvFA"),r=n("8MDr"),p=n("odKQ"),l={data:function(){return{topList:[],rankIcon:["icon-diming","icon-dierming","icon-disanming"]}},components:{Scroll:r.a,Loading:p.a},computed:a()({},Object(c.c)(["showLast"])),methods:a()({},Object(c.d)(["set_getRecomHeadInfo"]),{jump:function(t,e){this.$router.push({path:"/rankings/"+t}),this.set_getRecomHeadInfo(Object(o.c)(e))}}),created:function(){var t=this;Object(s.b)().then(function(e){0==e.code&&(t.topList=e.data.topList)})}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rank"},[n("Scroll",{ref:"rank",staticClass:"rank_wrapper"},[n("div",{staticClass:"topList_wrapper"},t._l(t.topList,function(e){return n("div",{key:e.id,on:{click:function(n){return t.jump(e.id,e)}}},[n("div",{staticClass:"img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"items.picUrl"}],attrs:{alt:"图片",width:"100%",height:"100%"}})]),t._v(" "),n("ul",{staticClass:"top_three"},t._l(e.songList,function(e,i){return n("li",{key:e.key,staticClass:"song"},[n("span",{staticClass:"index iconfont",class:t.rankIcon[i]}),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(e.songname+" — "+e.singername))])])}),0)])}),0),t._v(" "),n("Loading",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}]})],1),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(t){n("R6rR"),n("WrCb")},"data-v-6f2b3b80",null);e.default=d.exports},R6rR:function(t,e){},WrCb:function(t,e){},vpKB:function(t,e,n){"use strict";e.b=function(){var t=a()({},o.a,{uin:0,platform:"h5",needNewCode:1,_:1529054340584});return Object(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,o.b)},e.a=function(t){var e=a()({},o.a,{topid:t,uin:0,platform:"h5",needNewCode:1,page:"detail",type:"top",tpl:3});return Object(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,o.b)};var i=n("woOf"),a=n.n(i),s=n("Gak4"),c=n("mtWM"),o=(n.n(c),n("T452"))}});