webpackJsonp([15],{277:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,i,n=s(13),_=(s(18),s(21)),l=s.n(_),d=s(4),r=s.n(d),v=(s(78),s(67)),u=(s(12),s(7)),o=(s(15),s(14)),c=(s(5),s(6)),h=(s(10),s(9)),m=(s(11),s(8)),b=(s(1),s(0)),p=s(2),w=s(3),g=(s(34),e={},r()(e,b.a.name,b.a),r()(e,m.a.name,m.a),r()(e,h.a.name,h.a),r()(e,c.a.name,c.a),r()(e,o.a.name,o.a),r()(e,u.a.name,u.a),r()(e,v.a.name,v.a),{components:(i={},r()(i,b.a.name,b.a),r()(i,m.a.name,m.a),r()(i,h.a.name,h.a),r()(i,c.a.name,c.a),r()(i,o.a.name,o.a),r()(i,u.a.name,u.a),r()(i,v.a.name,v.a),i),data:function(){return{jwt:"",tid:"",selltel:"",sellzfb:"",selltrue_name:"",sellwx:"",sellcard:"",sellbank:"",sellwd:"",buytel:"",buyzfb:"",buytrue_name:"",buywx:"",buycard:"",buybank:"",buywd:"",tradenum:"",tradesn:"",imgg:"",bg1:!0,bg2:!0,aaa:"",disabled:!1,status:"",imga:"",showImg:!1,maxSize:718900}},beforeCreate:function(){p.a.init(750)},created:function(){this.QYC=new w.a(this),this.QYC.created()},mounted:function(){this.QYC.mounted()},methods:{on_vue_created:function(){this.jwt=this.QYC.getItem("jwt"),window.plus?this.plusReady():document.addEventListener("plusready",this.plusReady,!1)},plusReady:function(){var a=plus.webview.currentWebview();this.tid=a.tid,this.disabled=a.disabled,this.query()},on_vue_mounted:function(){},onClickLeft:function(){this.QYC.closeCurrentWebview()},oversize:function(){Object(b.a)({message:"图片大小超出限制，请上传小于700kb的图片！",duration:1e3})},onRead:function(a){this.bg1=!1,this.bg2=!1;var t=a.content.split(",");this.imga=t[1],console.log("tid==="+this.tid),this.QYC.post({name:"upload",url:"upload_pic",params:"jwt="+this.jwt+"&tid="+this.tid+"&info="+a.content})},on_http_upload:function(a){console.log("图片=="+l()(a.data)),1==a.data.code?(Object(b.a)("上传成功"),this.imgg=a.data.data.pic,this.showImg=!0):(this.bg1=!0,this.bg2=!0,this.showImg=!1,Object(b.a)(a.data.message))},query:function(){this.QYC.get({name:"getquery",url:"trade_detail",params:{jwt:this.jwt,tid:this.tid}})},on_http_getquery:function(a){1==a.data.code?(console.log("ssss=="+l()(a.data)),this.status=a.data.data.status,"已完成"==this.status&&(this.disabled=!0),""!=a.data.data.pic&&(this.imgg=a.data.data.pic,this.bg1=!1,this.bg2=!1,this.showImg=!0),this.selltel=a.data.data.sell_user.member_tel,this.sellzfb=a.data.data.sell_user.member_zfb,this.selltrue_name=a.data.data.sell_user.true_name,this.sellwx=a.data.data.sell_user.member_wechat,this.sellcard=a.data.data.sell_user.bank_card_number,this.sellbank=a.data.data.sell_user.bank_name,this.sellwd=a.data.data.sell_user.bank_address,this.buytel=a.data.data.buy_user.member_tel,this.buyzfb=a.data.data.buy_user.member_zfb,this.buytrue_name=a.data.data.buy_user.true_name,this.buywx=a.data.data.buy_user.member_wechat,this.buycard=a.data.data.buy_user.bank_card_number,this.buybank=a.data.data.buy_user.bank_name,this.buywd=a.data.data.buy_user.bank_address,this.tradenum=a.data.data.trade_num,this.tradesn=a.data.data.trade_sn):3==a.data.code?(Object(b.a)(a.data.message),this.QYC.clear(),this.QYC.openWebview({url:"./king.login.html",id:"king.login"},{titleNView:null})):Object(b.a)(a.data.message)}}}),f={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("van-nav-bar",{attrs:{title:"查看","left-arrow":"",fixed:""},on:{"click-left":a.onClickLeft}}),a._v(" "),s("div",{staticStyle:{width:"100%",height:"46px"}}),a._v(" "),s("div",{staticClass:"topBox"},[s("div",{staticClass:"topBox_top"},[s("span",[a._v("流水号："+a._s(a.tradesn))]),a._v(" "),s("span",[a._v(a._s(a.status))])]),a._v(" "),s("div",{staticClass:"topBox_bottom"},[a._v("\n\t\t\t交易额："),s("span",[a._v(a._s(a.tradenum))])])]),a._v(" "),s("div",{staticClass:"intro"},[a._m(0),a._v(" "),s("div",{staticClass:"intro_content"},[s("ul",[s("li",[s("span",[a._v("手机号：")]),a._v(" "),s("span",[a._v(a._s(a.buytel))])]),a._v(" "),s("li",[s("span",[a._v("支付宝账号：")]),a._v(" "),s("span",[a._v(a._s(a.buyzfb))])]),a._v(" "),s("li",[s("span",[a._v("支付宝姓名：")]),a._v(" "),s("span",[a._v(a._s(a.buytrue_name))])]),a._v(" "),s("li",[s("span",[a._v("微信号：")]),a._v(" "),s("span",[a._v(a._s(a.buywx))])]),a._v(" "),s("li",[s("span",[a._v("银行卡号：")]),a._v(" "),s("span",[a._v(a._s(a.buycard))])]),a._v(" "),s("li",[s("span",[a._v("开户行：")]),a._v(" "),s("span",[a._v(a._s(a.buybank))])]),a._v(" "),s("li",[s("span",[a._v("开户网点：")]),a._v(" "),s("span",[a._v(a._s(a.buywd))])])])])]),a._v(" "),s("div",{staticClass:"intro"},[a._m(1),a._v(" "),s("div",{staticClass:"intro_content"},[s("ul",[s("li",[s("span",[a._v("手机号：")]),a._v(" "),s("span",[a._v(a._s(a.selltel))])]),a._v(" "),s("li",[s("span",[a._v("支付宝账号：")]),a._v(" "),s("span",[a._v(a._s(a.sellzfb))])]),a._v(" "),s("li",[s("span",[a._v("支付宝姓名：")]),a._v(" "),s("span",[a._v(a._s(a.selltrue_name))])]),a._v(" "),s("li",[s("span",[a._v("微信号：")]),a._v(" "),s("span",[a._v(a._s(a.sellwx))])]),a._v(" "),s("li",[s("span",[a._v("银行卡号：")]),a._v(" "),s("span",[a._v(a._s(a.sellcard))])]),a._v(" "),s("li",[s("span",[a._v("开户行：")]),a._v(" "),s("span",[a._v(a._s(a.sellbank))])]),a._v(" "),s("li",[s("span",[a._v("开户网点：")]),a._v(" "),s("span",[a._v(a._s(a.sellwd))])])])])]),a._v(" "),s("div",{staticClass:"intro"},[a._m(2),a._v(" "),s("div",{staticClass:"intro_content"},[s("van-uploader",{directives:[{name:"show",rawName:"v-show",value:!a.showImg,expression:"!showImg"}],attrs:{"after-read":a.onRead,disabled:a.disabled,"max-size":a.maxSize},on:{oversize:a.oversize}},[s("div",{staticClass:"uppic",on:{click:function(t){a.QYC.click("goPic")}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:a.bg1,expression:"bg1"}]}),a._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:a.bg2,expression:"bg2"}]}),a._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!a.bg1,expression:"!bg1"}],staticStyle:{border:"1px solid #red"},attrs:{src:a.imgg}})])]),a._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:a.showImg,expression:"showImg"}],staticClass:"showImgs",attrs:{src:a.imgg}})],1)])],1)},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"intro_top"},[t("span"),this._v(" "),t("span",[this._v("买方信息")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"intro_top"},[t("span"),this._v(" "),t("span",[this._v("卖方信息")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"intro_top"},[t("span"),this._v(" "),t("span",[this._v("打款凭证")])])}]};var y=s(16)(g,f,!1,function(a){s(278)},null,null).exports;new n.default({el:"#app",render:function(a){return a(y)}})},278:function(a,t){}},[277]);