(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71b8fcaa"],{"0147":function(t,e,i){i("a29f"),i("0607"),i("949e"),i("7565"),i("dfda")},"045d":function(t,e,i){},"1dce":function(t,e,i){i("a29f"),i("fe35")},"20fb":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("d282"),o=i("a142"),r=i("ea8e"),c=i("a8fa"),u=i("1325"),l=Object(a["a"])("stepper"),h=l[0],d=l[1],f=600,p=200;function m(t,e){return String(t)===String(e)}function g(t,e){var i=Math.pow(10,10);return Math.round((t+e)*i)/i}e["a"]=h({props:{value:null,integer:Boolean,disabled:Boolean,inputWidth:[Number,String],buttonSize:[Number,String],asyncChange:Boolean,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,decimalLength:[Number,String],name:{type:[Number,String],default:""},min:{type:[Number,String],default:1},max:{type:[Number,String],default:1/0},step:{type:[Number,String],default:1},defaultValue:{type:[Number,String],default:1},showPlus:{type:Boolean,default:!0},showMinus:{type:Boolean,default:!0},longPress:{type:Boolean,default:!0}},data:function(){var t=Object(o["b"])(this.value)?this.value:this.defaultValue,e=this.format(t);return m(e,this.value)||this.$emit("input",e),{currentValue:e}},computed:{minusDisabled:function(){return this.disabled||this.disableMinus||this.currentValue<=this.min},plusDisabled:function(){return this.disabled||this.disablePlus||this.currentValue>=this.max},inputStyle:function(){var t={};return this.inputWidth&&(t.width=Object(r["a"])(this.inputWidth)),this.buttonSize&&(t.height=Object(r["a"])(this.buttonSize)),t},buttonStyle:function(){if(this.buttonSize){var t=Object(r["a"])(this.buttonSize);return{width:t,height:t}}}},watch:{max:"check",min:"check",integer:"check",decimalLength:"check",value:function(t){m(t,this.currentValue)||(this.currentValue=this.format(t))},currentValue:function(t){this.$emit("input",t),this.$emit("change",t,{name:this.name})}},methods:{check:function(){var t=this.format(this.currentValue);m(t,this.currentValue)||(this.currentValue=t)},filter:function(t){return t=String(t).replace(/[^0-9.-]/g,""),this.integer&&-1!==t.indexOf(".")&&(t=t.split(".")[0]),t},format:function(t){return t=this.filter(t),t=""===t?0:+t,t=Math.max(Math.min(this.max,t),this.min),Object(o["b"])(this.decimalLength)&&(t=t.toFixed(this.decimalLength)),t},onInput:function(t){var e=t.target.value;if(""!==e){var i=this.filter(e);if(Object(o["b"])(this.decimalLength)&&-1!==i.indexOf(".")){var n=i.split(".");i=n[0]+"."+n[1].slice(0,this.decimalLength)}m(e,i)||(t.target.value=i),this.emitChange(i)}},emitChange:function(t){this.asyncChange?(this.$emit("input",t),this.$emit("change",t,{name:this.name})):this.currentValue=t},onChange:function(){var t=this.type;if(this[t+"Disabled"])this.$emit("overlimit",t);else{var e="minus"===t?-this.step:+this.step,i=this.format(g(+this.currentValue,e));this.emitChange(i),this.$emit(t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var e=this.format(t.target.value);t.target.value=e,this.currentValue=e,this.$emit("blur",t),Object(c["a"])()},longPressStep:function(){var t=this;this.longPressTimer=setTimeout((function(){t.onChange(),t.longPressStep(t.type)}),p)},onTouchStart:function(){var t=this;this.longPress&&(clearTimeout(this.longPressTimer),this.isLongPress=!1,this.longPressTimer=setTimeout((function(){t.isLongPress=!0,t.onChange(),t.longPressStep()}),f))},onTouchEnd:function(t){this.longPress&&(clearTimeout(this.longPressTimer),this.isLongPress&&Object(u["c"])(t))}},render:function(){var t=this,e=arguments[0],i=function(e){return{on:{click:function(){t.type=e,t.onChange()},touchstart:function(){t.type=e,t.onTouchStart()},touchend:t.onTouchEnd,touchcancel:t.onTouchEnd}}};return e("div",{class:d()},[e("button",s()([{directives:[{name:"show",value:this.showMinus}],attrs:{type:"button"},style:this.buttonStyle,class:d("minus",{disabled:this.minusDisabled})},i("minus")])),e("input",{attrs:{type:"number",role:"spinbutton",disabled:this.disabled,readonly:this.disableInput,"aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.currentValue},class:d("input"),domProps:{value:this.currentValue},style:this.inputStyle,on:{input:this.onInput,focus:this.onFocus,blur:this.onBlur}}),e("button",s()([{directives:[{name:"show",value:this.showPlus}],attrs:{type:"button"},style:this.buttonStyle,class:d("plus",{disabled:this.plusDisabled})},i("plus")]))])}})},"2a1b":function(t,e,i){"use strict";var n=i("c396"),s=i.n(n);s.a},"32d7":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var n=i("a142");function s(){return!n["e"]&&/android/.test(navigator.userAgent.toLowerCase())}function a(){return!n["e"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"48f4":function(t,e,i){"use strict";function n(t,e){var i=e.to,n=e.url,s=e.replace;if(i&&t){var a=t[s?"replace":"push"](i);a&&a.catch&&a.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else n&&(s?location.replace(n):location.href=n)}function s(t){n(t.parent&&t.parent.$router,t.props)}i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return a}));var a={url:String,replace:Boolean,to:[String,Object]}},"74c2":function(t,e,i){"use strict";var n=i("a2c3"),s=i.n(n);s.a},"94a1":function(t,e,i){t.exports=i.p+"img/tick.5228ea23.svg"},"9d00":function(t,e,i){},a1f7:function(t,e,i){"use strict";var n=i("b449"),s=i.n(n);s.a},a2c3:function(t,e,i){},a8fa:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("32d7"),s=i("a8c1"),a=Object(n["b"])();function o(){a&&Object(s["g"])(Object(s["b"])())}},b1d2:function(t,e,i){"use strict";i.d(e,"i",(function(){return n})),i.d(e,"a",(function(){return s})),i.d(e,"j",(function(){return a})),i.d(e,"b",(function(){return o})),i.d(e,"f",(function(){return r})),i.d(e,"d",(function(){return c})),i.d(e,"c",(function(){return u})),i.d(e,"e",(function(){return l})),i.d(e,"g",(function(){return h})),i.d(e,"h",(function(){return d}));var n="#ee0a24",s="#1989fa",a="#fff",o="van-hairline",r=o+"--top",c=o+"--left",u=o+"--bottom",l=o+"--surround",h=o+"--top-bottom",d=o+"-unset--top-bottom"},b449:function(t,e,i){},b618:function(t,e,i){"use strict";var n=i("ec56"),s=i.n(n);s.a},b650:function(t,e,i){"use strict";var n=i("c31d"),s=i("2638"),a=i.n(s),o=i("d282"),r=i("ba31"),c=i("b1d2"),u=i("48f4"),l=i("ad06"),h=i("543e"),d=Object(o["a"])("button"),f=d[0],p=d[1];function m(t,e,i,n){var s,o=e.tag,d=e.icon,f=e.type,m=e.color,g=e.plain,b=e.disabled,v=e.loading,C=e.hairline,k=e.loadingText,y={};function S(t){v||b||(Object(r["a"])(n,"click",t),Object(u["a"])(n))}function O(t){Object(r["a"])(n,"touchstart",t)}m&&(y.color=g?m:c["j"],g||(y.background=m),-1!==m.indexOf("gradient")?y.border=0:y.borderColor=m);var L=[p([f,e.size,{plain:g,loading:v,disabled:b,hairline:C,block:e.block,round:e.round,square:e.square}]),(s={},s[c["e"]]=C,s)];function B(){var n,s=[];return v?s.push(t(h["a"],{class:p("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):d&&s.push(t(l["a"],{attrs:{name:d},class:p("icon")})),n=v?k:i.default?i.default():e.text,n&&s.push(t("span",{class:p("text")},[n])),s}return t(o,a()([{style:y,class:L,attrs:{type:e.nativeType,disabled:b},on:{click:S,touchstart:O}},Object(r["b"])(n)]),[B()])}m.props=Object(n["a"])({},u["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=f(m)},b931:function(t,e,i){i("a29f"),i("045d")},c2d8:function(t,e,i){i("a29f"),i("8a5a"),i("0607"),i("949e"),i("f251"),i("7565"),i("73b2")},c396:function(t,e,i){},c723:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shopcart"},[i("nav-bar",{staticClass:"nav-bar"},[i("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物车("+t._s(t.cartLength)+")")])]),i("shop-cart-list",{staticClass:"cart-list"}),i("shop-cart-bottom-bar",{staticClass:"bottom-bar"})],1)},s=[],a=i("a7ac"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart-list"},[i("scroll",{ref:"scroll",staticClass:"content"},t._l(t.cartList,(function(e,n){return i("shopCartListItem",{key:n,staticClass:"shopCart",attrs:{index:n,product:e},on:{remove:t.remove}})})),1)],1)},r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SwipeCell",[i("div",{attrs:{id:"shop-item"}},[i("div",{staticClass:"item-selector"},[i("check-button",{attrs:{isChecked:t.product.checked},nativeOn:{click:function(e){return t.checkClick(e)}}})],1),i("div",{staticClass:"item-img"},[i("img",{attrs:{src:t.product.image,alt:"商品图片"}})]),i("div",{staticClass:"item-info"},[i("div",{staticClass:"item-title"},[t._v(t._s(t.product.title))]),i("div",{staticClass:"item-desc"},[t._v("商品描述："+t._s(t.product.desc))]),i("div",{staticClass:"info-bottom"},[i("span",{staticClass:"item-price left"},[t._v("￥"+t._s(t.product.price))]),i("stepper",{staticClass:"right",on:{change:function(e){return t.onChange(t.product.iid,t.value)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])]),i("Button",{staticClass:"delete-button",attrs:{slot:"right",square:"",text:"删除",type:"danger"},on:{click:function(e){return t.close(t.product.iid,t.index)}},slot:"right"})],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"icon-selector",class:{"selector-active":t.isChecked}},[n("img",{attrs:{src:i("94a1"),alt:""}})])])},h=[],d={props:{isChecked:{type:Boolean,default(){return!1}}}},f=d,p=(i("a1f7"),i("2877")),m=Object(p["a"])(f,l,h,!1,null,"1e4adccc",null),g=m.exports,b=i("d282"),v=i("482d"),C=i("1325"),k=i("3875"),y=i("2b0e"),S=function(t){return y["a"].extend({props:{closeOnClickOutside:{type:Boolean,default:!0}},data:function(){var e=this,i=function(i){e.closeOnClickOutside&&!e.$el.contains(i.target)&&e[t.method]()};return{clickOutsideHandler:i}},mounted:function(){Object(C["b"])(document,t.event,this.clickOutsideHandler)},beforeDestroy:function(){Object(C["a"])(document,t.event,this.clickOutsideHandler)}})},O=Object(b["a"])("swipe-cell"),L=O[0],B=O[1],$=.15,j=L({mixins:[k["a"],S({event:"touchstart",method:"onClick"})],props:{onClose:Function,disabled:Boolean,leftWidth:[Number,String],rightWidth:[Number,String],beforeClose:Function,stopPropagation:Boolean,name:{type:[Number,String],default:""}},data:function(){return{offset:0,dragging:!1}},computed:{computedLeftWidth:function(){return+this.leftWidth||this.getWidthByRef("left")},computedRightWidth:function(){return+this.rightWidth||this.getWidthByRef("right")}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{getWidthByRef:function(t){if(this.$refs[t]){var e=this.$refs[t].getBoundingClientRect();return e.width}return 0},open:function(t){var e="left"===t?this.computedLeftWidth:-this.computedRightWidth;this.opened=!0,this.offset=e,this.$emit("open",{position:t,name:this.name,detail:this.name})},close:function(t){this.offset=0,this.opened&&(this.opened=!1,this.$emit("close",{position:t,name:this.name}))},onTouchStart:function(t){this.disabled||(this.startOffset=this.offset,this.touchStart(t))},onTouchMove:function(t){if(!this.disabled&&(this.touchMove(t),"horizontal"===this.direction)){this.dragging=!0,this.lockClick=!0;var e=!this.opened||this.deltaX*this.startOffset<0;e&&Object(C["c"])(t,this.stopPropagation),this.offset=Object(v["a"])(this.deltaX+this.startOffset,-this.computedRightWidth,this.computedLeftWidth)}},onTouchEnd:function(){var t=this;this.disabled||this.dragging&&(this.toggle(this.offset>0?"left":"right"),this.dragging=!1,setTimeout((function(){t.lockClick=!1}),0))},toggle:function(t){var e=Math.abs(this.offset),i=this.opened?1-$:$,n=this.computedLeftWidth,s=this.computedRightWidth;s&&"right"===t&&e>s*i?this.open("right"):n&&"left"===t&&e>n*i?this.open("left"):this.close()},onClick:function(t){void 0===t&&(t="outside"),this.$emit("click",t),this.opened&&!this.lockClick&&(this.beforeClose?this.beforeClose({position:t,name:this.name,instance:this}):this.onClose?this.onClose(t,this,{name:this.name}):this.close(t))},getClickHandler:function(t,e){var i=this;return function(n){e&&n.stopPropagation(),i.onClick(t)}},genLeftPart:function(){var t=this.$createElement,e=this.slots("left");if(e)return t("div",{ref:"left",class:B("left"),on:{click:this.getClickHandler("left",!0)}},[e])},genRightPart:function(){var t=this.$createElement,e=this.slots("right");if(e)return t("div",{ref:"right",class:B("right"),on:{click:this.getClickHandler("right",!0)}},[e])}},render:function(){var t=arguments[0],e={transform:"translate3d("+this.offset+"px, 0, 0)",transitionDuration:this.dragging?"0s":".6s"};return t("div",{class:B(),on:{click:this.getClickHandler("cell")}},[t("div",{class:B("wrapper"),style:e},[this.genLeftPart(),this.slots(),this.genRightPart()])])}}),x=i("b650"),P=i("20fb"),_=(i("1dce"),i("0147"),i("b931"),{name:"shopCartListItem",data(){return{value:1}},props:{product:{type:Object,dafault(){return{}}},index:{type:Number}},components:{CheckButton:g,SwipeCell:j,Button:x["a"],Stepper:P["a"]},created(){this.value=this.product.count},methods:{checkClick(){this.product.checked=!this.product.checked},close(t,e){this.$emit("remove",e),this.$store.commit("removeFormCar",t)},onChange(t,e){this.$store.commit("goodsCurrent",{iid:t,value:e})}}}),w=_,T=(i("74c2"),Object(p["a"])(w,c,u,!1,null,"7d9f302e",null)),W=T.exports,V=i("5d17"),E={name:"shopCartList",computed:{cartList(){return this.$store.state.cartList}},components:{shopCartListItem:W,scroll:V["a"]},activated(){this.$refs.scroll.refresh(),console.log("---")},methods:{remove(t){this.cartList.splice(t,1)}}},N=E,z=(i("da38"),Object(p["a"])(N,o,r,!1,null,"76876654",null)),M=z.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom-bar"},[i("div",{staticClass:"check-content"},[i("CheckButton",{staticClass:"check-button",attrs:{isChecked:t.isSelectAll},nativeOn:{click:function(e){return t.selectAllButton(e)}}}),i("span",[t._v("全选")])],1),i("div",{staticClass:"left"},[t._v(" 合计"+t._s(t.totalPrice)+" ")]),i("div",{staticClass:"right",on:{click:t.jiesuan}},[t._v(" 结算"),0!==t.checkLength?i("span",[t._v("("+t._s(t.checkLength)+")")]):t._e()])])},D=[],A=i("d399"),F=(i("c2d8"),{name:"shopCartBottomBar",components:{CheckButton:g},computed:{totalPrice(){return"￥"+this.$store.state.cartList.filter(t=>t.checked).reduce((t,e)=>t+e.price*e.count,0).toFixed(2)},checkLength(){return this.$store.state.cartList.filter(t=>t.checked).length},isSelectAll(){return 0!==this.checkLength&&!this.$store.state.cartList.find(t=>!t.checked)}},methods:{selectAllButton(){this.isSelectAll?this.$store.state.cartList.forEach(t=>t.checked=!1):this.$store.state.cartList.forEach(t=>t.checked=!0)},jiesuan(){if(0===this.checkLength)A["a"].fail("您没有选择宝贝哦");else{A["a"].loading({message:"加载中...",forbidClick:!0});let t=this.$store.state.cartList.filter(t=>t.checked);this.$router.push({name:"order",params:{goods:t}})}}}}),H=F,I=(i("2a1b"),Object(p["a"])(H,R,D,!1,null,"44cf31dc",null)),q=I.exports,J={name:"shopcart",components:{navBar:a["a"],shopCartList:M,shopCartBottomBar:q},computed:{cartLength(){return this.$store.state.cartList.length}}},X=J,G=(i("b618"),Object(p["a"])(X,n,s,!1,null,"7d3eb5ba",null));e["default"]=G.exports},da38:function(t,e,i){"use strict";var n=i("9d00"),s=i.n(n);s.a},dfda:function(t,e,i){},ec56:function(t,e,i){},fe35:function(t,e,i){}}]);
//# sourceMappingURL=chunk-71b8fcaa.057cb258.js.map