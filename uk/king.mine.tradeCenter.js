webpackJsonp([27],{359:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a,s=n(13),o=(n(18),n(26)),l=n.n(o),d=n(4),c=n.n(d),u=(n(24),n(25)),h=(n(27),n(28)),r=(n(12),n(7)),g=(n(15),n(14)),_=(n(5),n(6)),m=(n(10),n(9)),v=(n(11),n(8)),p=(n(1),n(0)),f=n(2),w=n(3),k=(i={},c()(i,p.a.name,p.a),c()(i,v.a.name,v.a),c()(i,m.a.name,m.a),c()(i,_.a.name,_.a),c()(i,g.a.name,g.a),c()(i,r.a.name,r.a),c()(i,h.a.name,h.a),c()(i,u.a.name,u.a),{components:(a={},c()(a,p.a.name,p.a),c()(a,v.a.name,v.a),c()(a,m.a.name,m.a),c()(a,_.a.name,_.a),c()(a,g.a.name,g.a),c()(a,r.a.name,r.a),c()(a,h.a.name,h.a),c()(a,u.a.name,u.a),a),data:function(){return{jwt:"",page:1,newsList:[],count:10,loading:!1,finished:!1,tid:""}},beforeCreate:function(){f.a.init(750)},created:function(){this.QYC=new w.a(this),this.QYC.created()},mounted:function(){this.QYC.mounted()},methods:{on_vue_created:function(){this.jwt=this.QYC.getItem("jwt"),this.query()},on_vue_mounted:function(){},onClickLeft:function(){this.QYC.closeCurrentWebview()},on_click_gojilu:function(){this.QYC.openWebview({url:"./king.home.jilu.html",id:"king.home.jilu"},{titleNView:null})},on_click_goChakan:function(){this.QYC.openWebview({url:"./king.trade.chakan.html",id:"king.trade.chakan"},{titleNView:null})},onLoad:function(){this.loading=!0,this.page*this.count>this.newsList.length&&this.newsList.length>0?(Object(p.a)("已加载全部数据"),this.loading=!1,this.finished=!0):this.newsList.length>0&&(this.page=this.page+1,this.query(),this.finished=!0)},query:function(){console.log("self---"+this.page),this.QYC.get({name:"newsList",url:"uk_list",params:{page:this.page,jwt:this.jwt}})},on_http_newsList:function(t){if(console.log(t.data.data),1==t.data.code){var e;if(0==t.data.data.length)return this.finished=!0,this.loading=!1,void Object(p.a)({message:"暂无数据",duration:1e3});(e=this.newsList).push.apply(e,l()(t.data.data)),this.finished=!1,this.loading=!1}else 3==t.data.code?(Object(p.a)(t.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):(Object(p.a)(t.data.message),this.loading=!1,this.finished=!0)},on_click_buy:function(t){console.log(this.jwt),this.QYC.get({name:"dhMill",url:"uk_buy",params:{jwt:this.jwt,tid:t}})},on_http_dhMill:function(t){var e=this;console.log(t.data.data),1==t.data.code?(Object(p.a)({message:"购买成功",duration:1e3}),setTimeout(function(){e.QYC.openWebview({url:"./king.trade.buy.html",id:"king.trade.buy"},{titleNView:null})},500)):3==t.data.code?(Object(p.a)(t.data.message),e.QYC.clear(),e.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(p.a)({message:t.data.message,duration:1e3})}}}),b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"交易中心","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticClass:"topBox"},[t._m(0),t._v(" "),n("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"topBox_input"},[n("ul",t._l(t.newsList,function(e,i){return n("li",{key:i,on:{load:t.onLoad}},[n("div",[t._v(t._s(e.createtime))]),t._v(" "),n("span",[t._v("积分")]),t._v(" "),n("span",[t._v(t._s(e.status))]),t._v(" "),n("span",[t._v(t._s(e.trade_num))]),t._v(" "),n("span",{on:{click:function(n){t.QYC.click("buy",e.id)}}},[n("p",[t._v("购买")])])])}))])])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topBox_top"},[n("ul",[n("li",[t._v("时间")]),t._v(" "),n("li",[t._v("类型")]),t._v(" "),n("li",[t._v("状态")]),t._v(" "),n("li",[t._v("数量")]),t._v(" "),n("li",[t._v("操作")])])])}]};var C=n(16)(k,b,!1,function(t){n(360)},null,null).exports;new s.default({el:"#app",render:function(t){return t(C)}})},360:function(t,e){}},[359]);