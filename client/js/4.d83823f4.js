(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0565":function(t,s,a){"use strict";var e=a("16f0"),r=a.n(e);r.a},"16f0":function(t,s,a){},"8b24":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"text-h3"},[t._v("Smartphones")]),a("div",{staticClass:"q-pa-md row items-start full-width"},t._l(t.products,(function(s,e){return a("div",{key:"prod-"+e,staticClass:"col-xs-12 col-md-6 col-lg-4"},[a("q-card",{staticClass:"product-card q-pa-lg",attrs:{flat:""}},[a("img",{staticClass:"product-img",attrs:{src:s.image,alt:s.title}}),a("q-card-section",[a("div",{staticClass:"text-h4 text-center"},[t._v(t._s(s.title))]),a("div",{staticClass:"text-subtitle2 text-center"},[t._v(t._s(s.subtitle))])]),a("q-card-section",[a("div",{staticClass:"product-description"},[t._v(t._s(s.description))])]),a("q-card-section",{staticClass:"product-price-container"},[a("div",{staticClass:"text-h4 text-center product-price"},[a("span",{staticClass:"currency-symbol"},[t._v(t._s(t.currencySymbol))]),a("span",{staticClass:"price-value"},[t._v(t._s(s.price))])])]),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{staticClass:"q-mb-md",attrs:{size:"lg",color:"primary",padding:"4px 20px",to:"/buy/"+s.id}},[t._v("Comprar")]),a("q-btn",{staticClass:"q-mb-md",attrs:{size:"lg",color:"primary",outline:"",padding:"4px 20px",to:"/item/"+s.id}},[t._v("Más Info")])],1)],1)],1)})),0)])},r=[],c=a("2563"),i={name:"PageIndex",data:function(){return{currencySymbol:this.$store.getters[c["e"]]}},computed:{products:function(){return this.$store.getters[c["h"]]}},methods:{buyProduct:function(t){console.log(t)}}},n=i,o=(a("0565"),a("2877")),l=a("9989"),d=a("f09f"),p=a("a370"),u=a("eb85"),m=a("4b7e"),f=a("9c40"),v=a("eebe"),C=a.n(v),b=Object(o["a"])(n,e,r,!1,null,null,null);s["default"]=b.exports;C()(b,"components",{QPage:l["a"],QCard:d["a"],QCardSection:p["a"],QSeparator:u["a"],QCardActions:m["a"],QBtn:f["a"]})}}]);