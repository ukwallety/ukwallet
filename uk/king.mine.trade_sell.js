webpackJsonp([24],{361:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i,s=a(13),o=(a(18),a(26)),l=a.n(o),d=a(4),c=a.n(d),u=(a(27),a(28)),r=(a(24),a(25)),h=(a(12),a(7)),g=(a(15),a(14)),_=(a(5),a(6)),m=(a(10),a(9)),p=(a(11),a(8)),v=(a(1),a(0)),f=a(2),k=a(3),w=(n={},c()(n,v.a.name,v.a),c()(n,p.a.name,p.a),c()(n,m.a.name,m.a),c()(n,_.a.name,_.a),c()(n,g.a.name,g.a),c()(n,h.a.name,h.a),c()(n,r.a.name,r.a),c()(n,u.a.name,u.a),{components:(i={},c()(i,v.a.name,v.a),c()(i,p.a.name,p.a),c()(i,m.a.name,m.a),c()(i,_.a.name,_.a),c()(i,g.a.name,g.a),c()(i,h.a.name,h.a),c()(i,r.a.name,r.a),c()(i,u.a.name,u.a),i),data:function(){return{jwt:"",page:1,newsList:[],count:10,loading:!1,finished:!1}},beforeCreate:function(){f.a.init(750)},created:function(){this.QYC=new k.a(this),this.QYC.created()},mounted:function(){this.QYC.mounted()},methods:{on_vue_created:function(){this.jwt=this.QYC.getItem("jwt"),this.query()},on_vue_mounted:function(){},onClickLeft:function(){this.QYC.closeCurrentWebview()},on_click_gojilu:function(){this.QYC.openWebview({url:"./king.home.jilu.html",id:"king.home.jilu"},{titleNView:null})},onLoad:function(){this.loading=!0,this.page*this.count>this.newsList.length&&this.newsList.length>0?(Object(v.a)("已加载全部数据"),this.loading=!1,this.finished=!0):this.newsList.length>0&&(this.page=this.page+1,this.query(),this.finished=!0)},query:function(){console.log("self---"+this.page),this.QYC.get({name:"newsList",url:"uk_sell_log",params:{page:this.page,jwt:this.jwt}})},on_http_newsList:function(t){if(console.log(t.data.data),1==t.data.code){var e;if(0==t.data.data.length)return this.finished=!0,this.loading=!1,void Object(v.a)({message:"暂无数据",duration:1e3});(e=this.newsList).push.apply(e,l()(t.data.data)),this.finished=!1,this.loading=!1}else 3==t.data.code?(Object(v.a)(t.data.message),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):(Object(v.a)(t.data.message),this.loading=!1,this.finished=!0)},on_click_chakan:function(t){console.log("tid==="+t.trade_sn),this.QYC.openWebview({url:"./king.mine.trade_detail.html",id:"king.mine.trade_detail"},{titleNView:null},{tid:t.trade_sn,disabled:!0})},on_click_remove:function(t){console.log(t),this.QYC.get({name:"removeOrder",url:"uk_del",params:{jwt:this.jwt,tid:t}})},on_http_removeOrder:function(t){console.log(t.data.data),1==t.data.code?Object(v.a)({message:t.data.message,duration:1e3}):3==t.data.code?(Object(v.a)(t.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(v.a)({message:t.data.message,duration:1e3})},on_click_shoukuan:function(t){console.log(t),this.QYC.get({name:"shouOrder",url:"uk_finish",params:{jwt:this.jwt,tid:t}})},on_http_shouOrder:function(t){console.log(t.data.data),1==t.data.code?Object(v.a)({message:t.data.message,duration:1e3}):3==t.data.code?(Object(v.a)(t.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(v.a)({message:t.data.message,duration:1e3})}}}),b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"卖出记录","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),a("div",{staticClass:"topBox"},[t._m(0),t._v(" "),a("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("div",{staticClass:"topBox_input"},[a("ul",t._l(t.newsList,function(e,n){return a("li",{key:n,on:{load:t.onLoad}},[a("span",[t._v(t._s(e.trade_sn))]),t._v(" "),1==e.type?a("span",[t._v("卖出")]):a("span",[t._v("买入")]),t._v(" "),a("span",[t._v(t._s(e.money))]),t._v(" "),a("span",[t._v(t._s(e.status))]),t._v(" "),"挂售中"==e.status?a("span",[a("p",{staticStyle:{"background-color":"gray"}},[t._v("查看")])]):a("span",{on:{click:function(a){t.QYC.click("chakan",e)}}},[a("p",[t._v("查看")])])])}))])])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topBox_top"},[a("ul",[a("li",[t._v("流水号")]),t._v(" "),a("li",[t._v("类型")]),t._v(" "),a("li",[t._v("交易额")]),t._v(" "),a("li",[t._v("状态")]),t._v(" "),a("li",[t._v("查看")])])])}]};var j=a(16)(w,b,!1,function(t){a(362)},null,null).exports;new s.default({el:"#app",render:function(t){return t(j)}})},362:function(t,e){}},[361]);