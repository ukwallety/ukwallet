webpackJsonp([20],{290:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,i,d=t(13),s=(t(18),t(4)),c=t.n(s),o=(t(40),t(36)),l=(t(79),t(80)),r=(t(81),t(68)),u=(t(23),t(22)),h=(t(12),t(7)),p=(t(15),t(14)),m=(t(5),t(6)),f=(t(10),t(9)),v=(t(11),t(8)),b=(t(1),t(0)),_=t(2),g=t(3),k=t(29),w=t(17),C=t(45),j=(n={Tabbar:w.a},c()(n,b.a.name,b.a),c()(n,v.a.name,v.a),c()(n,f.a.name,f.a),c()(n,m.a.name,m.a),c()(n,p.a.name,p.a),c()(n,h.a.name,h.a),c()(n,u.a.name,u.a),c()(n,r.a.name,r.a),c()(n,l.a.name,l.a),c()(n,o.a.name,o.a),{components:(i={Tabbar:w.a},c()(i,b.a.name,b.a),c()(i,v.a.name,v.a),c()(i,f.a.name,f.a),c()(i,m.a.name,m.a),c()(i,p.a.name,p.a),c()(i,h.a.name,h.a),c()(i,u.a.name,u.a),c()(i,r.a.name,r.a),c()(i,l.a.name,l.a),c()(i,o.a.name,o.a),i),data:function(){return{jwt:"",name:"",phone:"",addr:"",xaddr:"",zip:"",checked:!1,count:!1,city:"选择省/市/区",areaList:C.a,is_default:"",tid:""}},beforeCreate:function(){_.a.init(750)},created:function(){this.QYC=new g.a(this),this.QYC.created()},mounted:function(){this.QYC.mounted()},methods:{on_vue_created:function(){this.jwt=this.QYC.getItem("jwt"),window.plus?this.plusReady():document.addEventListener("plusready",this.plusReady,!1)},on_vue_mounted:function(){},plusReady:function(){var e=plus.webview.currentWebview();this.tid=e.editId,this.edit()},onClickLeft:function(){this.QYC.closeCurrentWebview()},on_click_chooseCountry:function(){this.count=!0},onConfirm:function(e){this.count=!1,this.addr=e[0].name+" , "+e[1].name+" , "+e[2].name},onCancel:function(){this.count=!1},edit:function(){this.QYC.get({name:"getedit",url:"addr_info",params:{jwt:this.jwt,id:this.tid}})},on_http_getedit:function(e){1==e.data.code?(this.name=e.data.data.address.user_name,this.phone=e.data.data.address.address_tel,this.addr=e.data.data.address.address_province,this.xaddr=e.data.data.address.address,this.zip=e.data.data.address.ems_code,"1"==e.data.data.address.address_default?this.checked=!0:this.checked=!1):3==e.data.code?(Object(b.a)(e.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(b.a)(e.data.message)},on_click_finish:function(){1==this.checked?this.is_default=1:this.is_default=0,this.QYC.get({name:"getaddr",url:"addr_edit",params:{jwt:this.jwt,edit_id:this.tid,user_name:this.name,address_province:this.addr,address:this.xaddr,address_tel:this.phone,ems_code:this.zip,address_default:this.is_default}})},on_http_getaddr:function(e){var a=this;if(1==e.data.code){Object(b.a)("修改成功");var t=plus.webview.getWebviewById("king.shop.addressList");Object(k.a)(t,"getZfbData",{type:"refresh"}),setTimeout(function(){a.QYC.closeCurrentWebview()},1e3)}else 3==e.data.code?(Object(b.a)(e.data.message),a.QYC.clear(),a.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(b.a)(e.data.message)},on_click_delete:function(){this.QYC.get({name:"getaddrdel",url:"addr_del",params:{jwt:this.jwt,id:this.tid}})},on_http_getaddrdel:function(e){var a=this;if(1==e.data.code){Object(b.a)("删除成功");var t=plus.webview.getWebviewById("king.shop.addressList");Object(k.a)(t,"getZfbData",{type:"refresh"}),setTimeout(function(){a.QYC.closeCurrentWebview()},1e3)}else 3==e.data.code?(Object(b.a)(e.data.message),a.QYC.clear(),a.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(b.a)(e.data.message)}}}),x={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("van-nav-bar",{attrs:{title:"地址列表","left-arrow":"",fixed:""},on:{"click-left":e.onClickLeft}}),e._v(" "),t("div",{staticStyle:{width:"100%",height:"46px"}}),e._v(" "),t("van-field",{attrs:{label:"姓名",placeholder:"收货人姓名"},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),e._v(" "),t("van-field",{attrs:{label:"电话",placeholder:"收货人电话"},model:{value:e.phone,callback:function(a){e.phone=a},expression:"phone"}}),e._v(" "),t("van-field",{attrs:{label:"地区",placeholder:e.city},on:{click:function(a){e.QYC.click("chooseCountry")}},model:{value:e.addr,callback:function(a){e.addr=a},expression:"addr"}}),e._v(" "),t("van-field",{attrs:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},model:{value:e.xaddr,callback:function(a){e.xaddr=a},expression:"xaddr"}}),e._v(" "),t("van-field",{attrs:{label:"邮政编码",placeholder:"邮政编码"},model:{value:e.zip,callback:function(a){e.zip=a},expression:"zip"}}),e._v(" "),t("van-field",{attrs:{label:"设为默认收货地址"}}),e._v(" "),t("van-switch",{staticStyle:{position:"absolute",top:"5.6rem",left:"5.8rem"},attrs:{size:"27px"},model:{value:e.checked,callback:function(a){e.checked=a},expression:"checked"}}),e._v(" "),t("van-button",{staticClass:"bigBtn",attrs:{size:"large"},on:{click:function(a){e.QYC.click("finish")}}},[e._v("保存")]),e._v(" "),t("van-button",{staticClass:"biginBtn",attrs:{size:"large"},on:{click:function(a){e.QYC.click("delete")}}},[e._v("删除")]),e._v(" "),t("van-popup",{attrs:{position:"bottom"},model:{value:e.count,callback:function(a){e.count=a},expression:"count"}},[t("div",{staticStyle:{width:"100%",height:"4.8rem","background-color":"#fff"}},[t("van-area",{attrs:{"area-list":e.areaList},on:{confirm:e.onConfirm,cancel:e.onCancel}})],1)])],1)},staticRenderFns:[]};var Q=t(16)(j,x,!1,function(e){t(291)},null,null).exports;new d.default({el:"#app",render:function(e){return e(Q)}})},291:function(e,a){}},[290]);