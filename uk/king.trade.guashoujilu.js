webpackJsonp([14],{269:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i,s=n(13),o=(n(18),n(26)),l=n.n(o),d=n(4),h=n.n(d),u=(n(27),n(28)),c=(n(24),n(25)),r=(n(12),n(7)),f=(n(15),n(14)),m=(n(5),n(6)),g=(n(10),n(9)),_=(n(11),n(8)),v=(n(1),n(0)),p=n(2),w=n(3),C=(a={},h()(a,v.a.name,v.a),h()(a,_.a.name,_.a),h()(a,g.a.name,g.a),h()(a,m.a.name,m.a),h()(a,f.a.name,f.a),h()(a,r.a.name,r.a),h()(a,c.a.name,c.a),h()(a,u.a.name,u.a),{components:(i={},h()(i,v.a.name,v.a),h()(i,_.a.name,_.a),h()(i,g.a.name,g.a),h()(i,m.a.name,m.a),h()(i,f.a.name,f.a),h()(i,r.a.name,r.a),h()(i,c.a.name,c.a),h()(i,u.a.name,u.a),i),data:function(){return{jwt:"",page:1,newsList:[],count:10,loading:!1,finished:!1}},beforeCreate:function(){p.a.init(750)},created:function(){this.QYC=new w.a(this),this.QYC.created()},mounted:function(){this.QYC.mounted()},methods:{on_vue_created:function(){this.jwt=this.QYC.getItem("jwt"),this.query()},on_vue_mounted:function(){},onClickLeft:function(){this.QYC.closeCurrentWebview()},on_click_gojilu:function(){this.QYC.openWebview({url:"./king.home.jilu.html",id:"king.home.jilu"},{titleNView:null})},onLoad:function(){this.loading=!0,this.page*this.count>this.newsList.length&&this.newsList.length>0?(Object(v.a)("已加载全部数据"),this.loading=!1,this.finished=!0):this.newsList.length>0&&(this.page=this.page+1,this.query(),this.finished=!0)},query:function(){console.log("self---"+this.page),this.QYC.get({name:"newsList",url:"trade_log",params:{page:this.page,jwt:this.jwt}})},on_http_newsList:function(t){if(console.log(t.data.data),1==t.data.code){var e;if(0==t.data.data.length)return this.finished=!0,this.loading=!1,void Object(v.a)({message:"暂无数据",duration:1e3});(e=this.newsList).push.apply(e,l()(t.data.data)),this.finished=!1,this.loading=!1}else 3==t.data.code?(Object(v.a)(t.data.message),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):(Object(v.a)(t.data.message),this.loading=!1,this.finished=!0)}}}),j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"挂售记录","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticClass:"topBox"},[t._m(0),t._v(" "),n("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"topBox_input"},[n("ul",t._l(t.newsList,function(e,a){return n("li",{key:a,on:{load:t.onLoad}},[n("span",[t._v(t._s(e.trade_num))]),t._v(" "),n("span",[t._v(t._s(e.status))]),t._v(" "),n("div",[t._v(t._s(e.createtime))])])}))])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topBox_top"},[e("ul",[e("li",[this._v("卖出数量")]),this._v(" "),e("li",[this._v("状态")]),this._v(" "),e("li",[this._v("卖出时间")])])])}]};var L=n(16)(C,j,!1,function(t){n(270)},null,null).exports;new s.default({el:"#app",render:function(t){return t(L)}})},270:function(t,e){}},[269]);