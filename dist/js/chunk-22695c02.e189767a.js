(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22695c02"],{"0607":function(t,n,e){},1128:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("a142"),a=Object.prototype.hasOwnProperty;function i(t,n,e){var i=n[e];Object(r["b"])(i)&&(a.call(t,e)&&Object(r["d"])(i)?t[e]=o(Object(t[e]),n[e]):t[e]=i)}function o(t,n){return Object.keys(n).forEach((function(e){i(t,n,e)})),t}},1393:function(t,n,e){e("a29f"),e("d600")},1555:function(t,n,e){},"1c6a":function(t,n,e){},2638:function(t,n,e){"use strict";function r(){return r=Object.assign||function(t){for(var n,e=1;e<arguments.length;e++)for(var r in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},r.apply(this,arguments)}var a=["attrs","props","domProps"],i=["class","style","directives"],o=["on","nativeOn"],c=function(t){return t.reduce((function(t,n){for(var e in n)if(t[e])if(-1!==a.indexOf(e))t[e]=r({},t[e],n[e]);else if(-1!==i.indexOf(e)){var c=t[e]instanceof Array?t[e]:[t[e]],u=n[e]instanceof Array?n[e]:[n[e]];t[e]=c.concat(u)}else if(-1!==o.indexOf(e))for(var l in n[e])if(t[e][l]){var d=t[e][l]instanceof Array?t[e][l]:[t[e][l]],f=n[e][l]instanceof Array?n[e][l]:[n[e][l]];t[e][l]=d.concat(f)}else t[e][l]=n[e][l];else if("hook"==e)for(var p in n[e])t[e][p]=t[e][p]?s(t[e][p],n[e][p]):n[e][p];else t[e]=n[e];else t[e]=n[e];return t}),{})},s=function(t,n){return function(){t&&t.apply(this,arguments),n&&n.apply(this,arguments)}};t.exports=c},"3c69":function(t,n,e){"use strict";var r=e("2b0e"),a=e("1128"),i={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",nameInvalid:"请输入正确的姓名",confirmDelete:"确定要删除吗",telInvalid:"请输入正确的手机号",vanCalendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",weekdays:["日","一","二","三","四","五","六"],monthTitle:function(t,n){return t+"年"+n+"月"},rangePrompt:function(t){return"选择天数不能超过 "+t+" 天"}},vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"暂无可用",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠券",enable:"可用",disabled:"不可用",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}},o=r["a"].prototype,c=r["a"].util.defineReactive;c(o,"$vantLang","zh-CN"),c(o,"$vantMessages",{"zh-CN":i});n["a"]={messages:function(){return o.$vantMessages[o.$vantLang]},use:function(t,n){var e;o.$vantLang=t,this.add((e={},e[t]=n,e))},add:function(t){void 0===t&&(t={}),Object(a["a"])(o.$vantMessages,t)}}},"48f4":function(t,n,e){"use strict";function r(t,n){var e=n.to,r=n.url,a=n.replace;if(e&&t){var i=t[a?"replace":"push"](e);i&&i.catch&&i.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else r&&(a?location.replace(r):location.href=r)}function a(t){r(t.parent&&t.parent.$router,t.props)}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"c",(function(){return i}));var i={url:String,replace:Boolean,to:[String,Object]}},"536e":function(t,n,e){},"68ed":function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i}));var r=/-(\w)/g;function a(t){return t.replace(r,(function(t,n){return n.toUpperCase()}))}function i(t,n){void 0===n&&(n=2);var e=t+"";while(e.length<n)e="0"+e;return e}},"6f2f":function(t,n,e){"use strict";var r=e("2638"),a=e.n(r),i=e("d282"),o=e("a142"),c=e("ba31"),s=Object(i["a"])("info"),u=s[0],l=s[1];function d(t,n,e,r){var i=n.dot,s=n.info,u=Object(o["b"])(s)&&""!==s;if(i||u)return t("div",a()([{class:l({dot:i})},Object(c["b"])(r,!0)]),[i?"":n.info])}d.props={dot:Boolean,info:[Number,String]},n["a"]=u(d)},"90be":function(t,n,e){},"96cf":function(t,n,e){e("a29f"),e("0607"),e("d2dd")},9884:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));var r=e("2b0e");function a(t){var n=[];function e(t){t.forEach((function(t){n.push(t),t.children&&e(t.children)}))}return e(t),n}function i(t,n){var e,i;void 0===n&&(n={});var o=n.indexKey||"index";return r["a"].extend({inject:(e={},e[t]={default:null},e),computed:(i={parent:function(){return this.disableBindRelation?null:this[t]}},i[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},i),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(n){return n!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),n=a(this.parent.slots());t.sort((function(t,e){return n.indexOf(t.$vnode)-n.indexOf(e.$vnode)})),this.parent.children=t}}}})}function o(t){return{provide:function(){var n;return n={},n[t]=this,n},data:function(){return{children:[]}}}}},"9a1d":function(t,n,e){"use strict";var r=e("536e"),a=e.n(r);a.a},a142:function(t,n,e){"use strict";e.d(n,"e",(function(){return a})),e.d(n,"f",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return u}));var r=e("2b0e"),a=r["a"].prototype.$isServer;function i(){}function o(t){return void 0!==t&&null!==t}function c(t){return"function"===typeof t}function s(t){return null!==t&&"object"===typeof t}function u(t,n){var e=n.split("."),r=t;return e.forEach((function(t){r=o(r[t])?r[t]:""})),r}},a29f:function(t,n,e){},a7ac:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"nav-bar"}},[e("div",{staticClass:"nav-left"},[t._t("left")],2),e("div",{staticClass:"nav-center"},[t._t("center",[t._v("标题")])],2),e("div",{staticClass:"nav-right"},[t._t("right")],2)])},a=[],i={name:"NavBar"},o=i,c=(e("e638"),e("2877")),s=Object(c["a"])(o,r,a,!1,null,"0381da42",null);n["a"]=s.exports},b128:function(t,n,e){"use strict";var r=e("90be"),a=e.n(r);a.a},ba31:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return u}));var r=e("c31d"),a=e("2b0e"),i=["ref","style","class","attrs","nativeOn","directives","staticClass","staticStyle"],o={nativeOn:"on"};function c(t,n){var e=i.reduce((function(n,e){return t.data[e]&&(n[o[e]||e]=t.data[e]),n}),{});return n&&(e.on=e.on||{},Object(r["a"])(e.on,t.data.on)),e}function s(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),a=2;a<e;a++)r[a-2]=arguments[a];var i=t.listeners[n];i&&(Array.isArray(i)?i.forEach((function(t){t.apply(void 0,r)})):i.apply(void 0,r))}function u(t,n){var e=new a["a"]({el:document.createElement("div"),props:t.props,render:function(e){return e(t,Object(r["a"])({props:this.$props},n))}});return document.body.appendChild(e.$el),e}},c31d:function(t,n,e){"use strict";function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r.apply(this,arguments)}e.d(n,"a",(function(){return r}))},d282:function(t,n,e){"use strict";var r="__",a="--";function i(t,n,e){return n?t+e+n:t}function o(t,n){if("string"===typeof n)return i(t,n,a);if(Array.isArray(n))return n.map((function(n){return o(t,n)}));var e={};return n&&Object.keys(n).forEach((function(r){e[t+a+r]=n[r]})),e}function c(t){return function(n,e){return n&&"string"!==typeof n&&(e=n,n=""),n=i(t,n,r),e?[n,o(n,e)]:n}}var s=e("a142"),u=e("68ed"),l=e("2b0e"),d=l["a"].extend({methods:{slots:function(t,n){void 0===t&&(t="default");var e=this.$slots,r=this.$scopedSlots,a=r[t];return a?a(n):e[t]}}});function f(t){var n=this.name;t.component(n,this),t.component(Object(u["a"])("-"+n),this)}function p(t){var n=t.scopedSlots||t.data.scopedSlots||{},e=t.slots();return Object.keys(e).forEach((function(t){n[t]||(n[t]=function(){return e[t]})})),n}function v(t){return{functional:!0,props:t.props,model:t.model,render:function(n,e){return t(n,e.props,p(e),e)}}}function h(t){return function(n){return Object(s["c"])(n)&&(n=v(n)),n.functional||(n.mixins=n.mixins||[],n.mixins.push(d)),n.name=t,n.install=f,n}}var b=e("3c69");function y(t){var n=Object(u["a"])(t)+".";return function(t){for(var e=b["a"].messages(),r=Object(s["a"])(e,n+t)||Object(s["a"])(e,t),a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return Object(s["c"])(r)?r.apply(void 0,i):r}}function g(t){return t="van-"+t,[h(t),c(t),y(t)]}e.d(n,"a",(function(){return g}))},d2dd:function(t,n,e){},d600:function(t,n,e){},e638:function(t,n,e){"use strict";var r=e("1555"),a=e.n(r);a.a},f4ba:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"category"},[e("nav-bar",{staticClass:"nav-bar"},[e("div",{attrs:{slot:"center"},slot:"center"},[t._v("分类")])]),e("div",{staticClass:"sidebar"},[e("scroll",{staticClass:"sideContent"},[e("categorySidebar",{attrs:{CategoryTitle:t.CategoryTitle},on:{onChange:t.onChange}})],1),e("scroll",{ref:"scroll",staticClass:"content categoryDate",attrs:{"probe-type":3}},[e("categoryData",{attrs:{subCategory:t.subCategory},on:{imgload:t.loadEnd}})],1)],1)],1)},a=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("sidebar",{on:{change:t.onChange},model:{value:t.activeKey,callback:function(n){t.activeKey=n},expression:"activeKey"}},t._l(t.CategoryTitle,(function(n,r){return e("sidebar-item",{key:r,class:{"color-pink":t.activeKey===r},attrs:{title:n.title}})})),1)},o=[],c=e("1bab");function s(){return Object(c["b"])({url:"/category"})}function u(t){return Object(c["b"])({url:"/subcategory",params:{maitKey:t}})}var l=e("d282"),d=e("9884"),f=Object(l["a"])("sidebar"),p=f[0],v=f[1],h=p({mixins:[Object(d["b"])("vanSidebar")],model:{prop:"activeKey"},props:{activeKey:{type:[Number,String],default:0}},render:function(){var t=arguments[0];return t("div",{class:v()},[this.slots()])}}),b=e("c31d"),y=e("48f4"),g=e("6f2f"),m=Object(l["a"])("sidebar-item"),C=m[0],O=m[1],j=C({mixins:[Object(d["a"])("vanSidebar")],props:Object(b["a"])({},y["c"],{dot:Boolean,info:[Number,String],title:String,disabled:Boolean}),computed:{select:function(){return this.index===+this.parent.activeKey}},methods:{onClick:function(){this.disabled||(this.$emit("click",this.index),this.parent.$emit("input",this.index),this.parent.$emit("change",this.index),Object(y["b"])(this.$router,this))}},render:function(){var t=arguments[0];return t("a",{class:O({select:this.select,disabled:this.disabled}),on:{click:this.onClick}},[t("div",{class:O("text")},[this.title,t(g["a"],{attrs:{dot:this.dot,info:this.info},class:O("info")})])])}}),x=(e("1393"),e("96cf"),{name:"categorySidebar",data(){return{activeKey:0,isActive:!1}},props:{CategoryTitle:{type:Array}},components:{Sidebar:h,SidebarItem:j},methods:{onChange(t){this.$emit("onChange",t)}}}),$=x,_=(e("9a1d"),e("2877")),S=Object(_["a"])($,i,o,!1,null,"146fc982",null),E=S.exports,k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.subCategory?e("div",{staticClass:"categorydata"},t._l(t.subCategory,(function(n,r){return e("div",{key:r,staticClass:"category-item"},[e("a",{staticClass:"category-item-link",attrs:{href:n.link}},[e("img",{attrs:{src:n.image,alt:n.title},on:{load:t.imgLoad}})]),e("span",{staticClass:"category-item-title"},[t._v(t._s(n.title))])])})),0):t._e()},A=[],w={name:"",data(){return{}},props:{subCategory:{type:Array}},components:{scroll:scroll},methods:{imgLoad(){this.$emit("imgload")}}},K=w,T=(e("b128"),Object(_["a"])(K,k,A,!1,null,"ca9dd826",null)),P=T.exports,B=e("a7ac"),L=e("5d17"),N={name:"category",data(){return{CategoryTitle:[],subCategory:[]}},components:{categorySidebar:E,categoryData:P,NavBar:B["a"],scroll:L["a"]},created(){this._getCategory()},methods:{_getCategory(){return s().then(t=>{this.CategoryTitle=t.data.category.list,this._getSubcategory(0)})},_getSubcategory(t){this.currentIndex=t;const n=this.CategoryTitle[t].maitKey;console.log(this.CategoryTitle[t]),u(n).then(t=>{this.subCategory=t.data.list})},onChange(t){if(this.currentIndex===t)return null;this._getSubcategory(t)},loadEnd(){this.$refs.scroll.refresh()}}},D=N,R=(e("f855"),Object(_["a"])(D,r,a,!1,null,"4fb768ce",null));n["default"]=R.exports},f855:function(t,n,e){"use strict";var r=e("1c6a"),a=e.n(r);a.a}}]);
//# sourceMappingURL=chunk-22695c02.e189767a.js.map