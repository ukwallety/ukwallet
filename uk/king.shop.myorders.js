webpackJsonp([9],{305:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,a,n=e(13),o=(e(18),e(4)),c=e.n(o),r=(e(57),e(58)),d=(e(59),e(60)),l=(e(5),e(6)),u=(e(1),e(0)),_=e(2),h=e(3),v=e(17),p=(s={Tabbar:v.a},c()(s,u.a.name,u.a),c()(s,l.a.name,l.a),c()(s,d.a.name,d.a),c()(s,r.a.name,r.a),{components:(a={Tabbar:v.a},c()(a,u.a.name,u.a),c()(a,l.a.name,l.a),c()(a,d.a.name,d.a),c()(a,r.a.name,r.a),a),data:function(){return{tabbarActive:2,searchResult:[],tabMuenList:[{nid:0,ntitle:"全部订单"},{nid:1,ntitle:"待付款"},{nid:2,ntitle:"待发货"},{nid:3,ntitle:"待收货"},{nid:4,ntitle:"已完成"}],orderList:[],jwt:"",status:0}},beforeCreate:function(){_.a.init(750)},created:function(){this.QYC=new h.a(this),this.QYC.created()},mounted:function(){this.QYC.mounted()},methods:{on_vue_created:function(){this.jwt=this.QYC.getItem("jwt")},on_vue_mounted:function(){this.query()},tabMuenClick:function(t){this.status=t,this.orderList=[],this.query()},query:function(){console.log("mask==="+this.status),this.QYC.get({name:"orderList",url:"my_order",params:{jwt:this.jwt,mask:this.status}})},on_http_orderList:function(t){console.log(t.data.data),1==t.data.code?this.orderList=t.data.data.order_list:3==t.data.code?(Object(u.a)(t.data.msg),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(u.a)(t.data.msg)},on_click_confirm:function(t){console.log(t),this.QYC.get({name:"confirmGoods",url:"queren_order",params:{jwt:this.jwt,oid:t}})},on_http_confirmGoods:function(t){1==t.data.code?(Object(u.a)({message:"确认收货成功",duration:1e3}),this.orderList=[],this.query()):3==t.data.code?(Object(u.a)(t.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(u.a)({message:t.data.message,duration:1e3})},on_click_delOrder:function(t){console.log(t),this.QYC.get({name:"delGoods",url:"del_order",params:{jwt:this.jwt,oid:t}})},on_http_delGoods:function(t){1==t.data.code?(Object(u.a)({message:"取消成功",duration:1e3}),this.orderList=[],this.query()):3==t.data.code?(Object(u.a)(t.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(u.a)({message:t.data.message,duration:1e3})},on_click_toPay:function(t){this.QYC.openWebview({url:"./king.shop.shoppingCartijiao.html",id:"king.shop.shoppingCartijiao"},{titleNView:null},{oid:t.order_id})}}}),m={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t._m(0),t._v(" "),s("van-tabs",{staticStyle:{width:"100%",position:"fixed",top:"44px"},on:{click:t.tabMuenClick}},t._l(t.tabMuenList,function(t,i){return s("van-tab",{key:i,attrs:{title:t.ntitle}})})),t._v(" "),s("div",{staticStyle:{width:"100%",height:"90px"}}),t._v(" "),s("div",{staticClass:"box"},[s("ul",t._l(t.orderList,function(i,a){return s("li",{key:a},[s("div",{staticClass:"box_top"},[s("span",[t._v("订单编号："+t._s(i.order_sn))]),t._v(" "),"6"==i.status?s("span",[t._v("退货退款")]):"5"==i.status?s("span",[t._v("已评价")]):"4"==i.status?s("span",[t._v("交易完成")]):"3"==i.status?s("span",[t._v("待收货")]):"2"==i.status?s("span",[t._v("待发货")]):"1"==i.status?s("span",[t._v("待付款")]):t._e()]),t._v(" "),t._l(i.order_goods,function(i,a){return s("div",{key:a,staticClass:"box_content"},[s("img",{attrs:{src:e(307),alt:""}}),t._v(" "),s("div",{staticClass:"box_content_intro"},[s("span",[t._v(t._s(i.goods_name))]),t._v(" "),s("span",{staticClass:"box_content_intro_right"},[s("span",[t._v("¥"+t._s(i.price))]),t._v(" "),s("span",[t._v("x"+t._s(i.goods_num))])])])])}),t._v(" "),s("div",{staticClass:"money"},[t._v("\n\t\t\t\t\t共"+t._s(i.goods_count)+"件商品(包含运费)¥"+t._s(i.goods_price)+"\n\t\t\t\t")]),t._v(" "),"1"==i.status?s("div",{staticClass:"choose"},[s("div",{staticClass:"zhifu",on:{click:function(e){t.QYC.click("toPay",i)}}},[t._v("去支付")]),t._v(" "),s("div",{on:{click:function(e){t.QYC.click("delOrder",i.order_id)}}},[t._v("取消订单")])]):"2"==i.status?s("div",{staticClass:"choose"},[s("div",[t._v("申请退货")])]):"3"==i.status?s("div",{staticClass:"choose"},[s("div",{staticClass:"zhifu",on:{click:function(e){t.QYC.click("confirm",i.order_id)}}},[t._v("确认收货")])]):t._e()],2)}))]),t._v(" "),s("div",{staticClass:"clear"})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("header",{staticClass:"mui-bar mui-bar-nav"},[i("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left"}),this._v(" "),i("h1",{staticClass:"mui-title"},[this._v("我的订单")])])}]};var g=e(16)(p,m,!1,function(t){e(306)},null,null).exports;new n.default({el:"#app",render:function(t){return t(g)}})},306:function(t,i){},307:function(t,i,e){t.exports=e.p+"assets/img/goods.png"}},[305]);