webpackJsonp([18],{303:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,i,n=e(13),o=(e(18),e(21)),d=e.n(o),r=e(4),c=e.n(r),l=(e(12),e(7)),u=(e(15),e(14)),h=(e(10),e(9)),m=(e(11),e(8)),v=(e(23),e(22)),p=(e(86),e(87)),g=(e(5),e(6)),_=(e(1),e(0)),w=e(2),f=e(3),b=e(17),C=(s={Tabbar:b.a},c()(s,_.a.name,_.a),c()(s,g.a.name,g.a),c()(s,p.a.name,p.a),c()(s,v.a.name,v.a),c()(s,m.a.name,m.a),c()(s,h.a.name,h.a),c()(s,u.a.name,u.a),c()(s,l.a.name,l.a),{components:(i={Tabbar:b.a},c()(i,_.a.name,_.a),c()(i,g.a.name,g.a),c()(i,p.a.name,p.a),c()(i,v.a.name,v.a),c()(i,m.a.name,m.a),c()(i,h.a.name,h.a),c()(i,u.a.name,u.a),c()(i,l.a.name,l.a),i),data:function(){return{tabbarActive:2,searchResult:[],checked:!0,num:"1",show:!1,oid:"",jwt:"",isAddr:!0,goodsList:[],message:"",total_amount:0,address:{user_name:"",address:"",address_province:"",address_tel:""},aid:"",jypwd:"",zongjia:0,pay_img:"",showPay:!1}},beforeCreate:function(){w.a.init(750)},created:function(){this.QYC=new f.a(this),this.QYC.created()},mounted:function(){this.QYC.mounted()},methods:{on_vue_created:function(){this.jwt=this.QYC.getItem("jwt"),console.log()},on_vue_mounted:function(){var a=this;window.addEventListener("getDefaultAddr",function(t){a.jwt=a.QYC.getItem("jwt"),a.aid=t.detail.aid,console.log("aid=="+a.aid),a.getChooseAddr()}),a.plusReady()},onClickLeft:function(){this.QYC.closeCurrentWebview()},plusReady:function(){if(window.plus){var a=plus.webview.currentWebview();this.oid=a.oid}else{var t=this.QYC.getQueryString("oid");this.oid=t}this.getOrderInfo()},getChooseAddr:function(){this.QYC.get({name:"chooseAddr",url:"address_info",params:{jwt:this.jwt,aid:this.aid}})},on_http_chooseAddr:function(a){console.log("dizhi=="+d()(a.data.data)),1==a.data.code?this.address=a.data.data:3==a.data.code?(Object(_.a)(a.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(_.a)({message:a.data.message,duration:1e3})},getOrderInfo:function(){this.QYC.get({name:"orderInfo",url:"qr_order",params:{jwt:this.jwt,oid:this.oid}})},on_http_orderInfo:function(a){1==a.data.code?(this.goodsList=a.data.data.goods,this.address=a.data.data.address,this.zongjia=a.data.data.order.goods_money,this.total_amount=100*parseFloat(a.data.data.order.total_amount)):3==a.data.code?(Object(_.a)(a.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(_.a)({message:a.data.message,duration:1e3})},onSubmit:function(){this.isAddr?this.show=!0:Object(_.a)({message:"请选择地址",duration:1e3})},on_click_buyClick:function(){""!=this.jypwd?(console.log("dizhiid=="+this.address.id),this.QYC.get({name:"submitOrder",url:"order_pay",params:{jwt:this.jwt,oid:this.oid,user_note:this.message,address_id:this.address.id,jypwd:this.jypwd}}),this.show=!1):Object(_.a)({message:"请输入交易密码",duration:1e3})},on_http_submitOrder:function(a){1==a.data.code?(Object(_.a)({message:a.data.message,duration:1e3}),console.log("img==="+a.data.data.pay_img),this.showPay=!0,this.pay_img=a.data.data.pay_img):3==a.data.code?(Object(_.a)(a.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(_.a)({message:a.data.message,duration:1e3})},on_click_close:function(){this.show=!1},on_click_chooseAddr:function(a){this.QYC.openWebview({url:"./king.shop.addressList.html",id:"king.shop.addressList"},{titleNView:null})}}}),k={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("van-nav-bar",{attrs:{title:"","left-arrow":"",fixed:""},on:{"click-left":a.onClickLeft}}),a._v(" "),s("div",{staticStyle:{width:"100%",height:"46px"}}),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:a.isAddr,expression:"isAddr"}],staticClass:"goodsBox",on:{click:function(t){a.QYC.click("chooseAddr")}}},[s("span",[a._v(a._s(a.address.user_name)+"      "+a._s(a.address.address_tel))]),a._v(" "),s("span",[a._v(a._s(a.address.address_province+a.address.address))]),a._v(" "),s("span",{staticClass:"arrow"})]),a._v(" "),s("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:!a.isAddr,expression:"!isAddr"}],staticStyle:{"margin-top":"0.1rem"}},[s("van-cell",{attrs:{title:"选择地址","is-link":""},on:{click:function(t){a.QYC.click("chooseAddr")}}})],1),a._v(" "),s("div",{staticClass:"box"},[a._l(a.goodsList,function(t,e){return s("div",{key:e,staticClass:"goodsItem"},[s("img",{attrs:{src:t.cover}}),a._v(" "),s("div",{staticClass:"rightInfo"},[s("p",[a._v(a._s(t.goods_name))]),a._v(" "),s("span",[a._v("¥"+a._s(t.price))]),a._v(" "),s("span",[a._v("数量：×"+a._s(t.goods_num))])])])}),a._v(" "),s("van-cell",{attrs:{title:"支付方式",value:"积分+现金"}}),a._v(" "),s("van-cell",{attrs:{title:"现金总价",value:a.zongjia}}),a._v(" "),s("van-field",{attrs:{label:"买家留言",placeholder:"选填,建议填写与卖家达成一致的说明"},model:{value:a.message,callback:function(t){a.message=t},expression:"message"}})],2),a._v(" "),s("van-popup",{model:{value:a.show,callback:function(t){a.show=t},expression:"show"}},[s("div",{staticClass:"chooseBox"},[s("div",{staticClass:"closeChoose"},[s("img",{attrs:{src:e(151)},on:{click:function(t){a.QYC.click("close")}}})]),a._v(" "),s("span",{staticClass:"top"},[a._v("请输入支付密码")]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.jypwd,expression:"jypwd"}],staticClass:"content",attrs:{type:"password"},domProps:{value:a.jypwd},on:{input:function(t){t.target.composing||(a.jypwd=t.target.value)}}}),a._v(" "),s("van-button",{staticClass:"logBtn",attrs:{size:"large"},on:{click:function(t){a.QYC.click("buyClick")}}},[a._v("确定提交")])],1)]),a._v(" "),s("van-popup",{model:{value:a.showPay,callback:function(t){a.showPay=t},expression:"showPay"}},[s("div",{staticClass:"payBox"},[s("img",{attrs:{src:a.pay_img}})])]),a._v(" "),s("van-submit-bar",{attrs:{price:a.total_amount,"button-text":"提交订单"},on:{submit:a.onSubmit}}),a._v(" "),s("div",{staticClass:"clear"})],1)},staticRenderFns:[]};var j=e(16)(C,k,!1,function(a){e(304)},null,null).exports;new n.default({el:"#app",render:function(a){return a(j)}})},304:function(a,t){}},[303]);