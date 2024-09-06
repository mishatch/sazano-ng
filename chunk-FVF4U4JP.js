import{a as F}from"./chunk-IKNZIXAA.js";import{a as I}from"./chunk-FHOVZXYB.js";import{f as W}from"./chunk-5SCO7L5Z.js";import"./chunk-C4JKQMRJ.js";import{a as V}from"./chunk-3MFHGZGK.js";import{b as k,c as L,e as B}from"./chunk-QCZZJ36Z.js";import{$a as g,Ab as x,Bb as w,Hb as E,Ia as O,Jb as f,Kb as M,Na as r,Oa as u,Za as v,db as h,ea as P,eb as b,fb as S,gb as T,hb as c,ib as i,jb as _,kb as y,pa as s,pb as C,qa as m,qb as d,zb as l}from"./chunk-NYC2XSAJ.js";function j(n,o){if(n&1){let a=y();c(0,"button",11),C("click",function(){s(a);let t=d().$implicit,p=d();return m(p.addToCart(t))}),l(1),f(2,"translate"),i()}n&2&&(g("appLangClass","geo-secondary, eng-secondary, ru-secondary"),r(),w(" ",M(2,2,"cart.add-to-cart")," "))}function $(n,o){if(n&1){let a=y();c(0,"div",10)(1,"button",12),C("click",function(){s(a);let t=d().$implicit,p=d();return m(p.removeFromCart(t))}),l(2,"-"),i(),c(3,"span"),l(4),i(),c(5,"button",12),C("click",function(){s(a);let t=d().$implicit,p=d();return m(p.addToCart(t))}),l(6,"+"),i()()}if(n&2){let a=d().$implicit,e=d();r(4),x(e.getWineQuantity(a))}}function q(n,o){if(n&1&&(c(0,"div",2)(1,"div",3),_(2,"img",4),i(),c(3,"div",5)(4,"h5",6),l(5),i(),_(6,"span"),c(7,"p",7),l(8),i(),c(9,"p",8),l(10),f(11,"translate"),i(),c(12,"p",6),l(13),i(),v(14,j,3,4,"button",9)(15,$,7,1,"div",10),i()()),n&2){let a=o.$implicit,e=d();r(2),g("src",a.imageUrl,O),r(3),x(a.name),r(3),x(a.vintageYear),r(),g("appLangClass","geo-primary, eng-secondary, eng-secondary"),r(),w(" ",M(11,7,"sazano-wine")," "),r(3),w("",a.price," \u20BE"),r(),h(e.getWineQuantity(a)===0?14:15)}}function Q(n,o){n&1&&_(0,"app-loading")}var J=(()=>{let o=class o{constructor(e,t){this.wineService=e,this.cartService=t,this.wines=[],this.isLoading=!0,this.wineService.getWines().subscribe(p=>{this.isLoading=!1,this.wines=p})}addToCart(e){this.cartService.addToCart(e)}removeFromCart(e){this.cartService.decreaseQuantity(e)}getWineQuantity(e){let t=this.cartService.getItem(e);return t?t.quantity:0}};o.\u0275fac=function(t){return new(t||o)(u(F),u(V))},o.\u0275cmp=P({type:o,selectors:[["app-buy-wine"]],standalone:!0,features:[E],decls:6,vars:1,consts:[[1,"wrapper"],["routerLink","/shopping-cart",1,"shopping-cart"],[1,"wine-card"],[1,"bottle-image"],["alt","Wine",3,"src"],[1,"wine-details"],[1,"eng-primary"],[1,"eng-primary","year"],[1,"geo-primary",3,"appLangClass"],[1,"primary-btn",3,"appLangClass"],[1,"adjust-quantity","eng-secondary"],[1,"primary-btn",3,"click","appLangClass"],[1,"primary-btn",3,"click"]],template:function(t,p){t&1&&(c(0,"div",0)(1,"a",1),l(2,"cart"),i(),S(3,q,16,9,"div",2,b),i(),v(5,Q,1,0,"app-loading")),t&2&&(r(3),T(p.wines),r(2),h(p.isLoading?5:-1))},dependencies:[W,L,k,B,I],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:70px 20px 0;gap:20px;min-height:80vh;position:relative}.wrapper[_ngcontent-%COMP%] > .shopping-cart[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%]{width:100%;height:300px;display:flex;gap:4%}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100%}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){width:28%;display:flex;align-items:center}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1) > img[_ngcontent-%COMP%]{max-width:100%}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){width:68%;display:flex;flex-direction:column;justify-content:center}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2) > p.year[_ngcontent-%COMP%]{background-color:#4c0027;padding-top:5px;width:60px;text-align:center;color:#fff;border-radius:8px}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2) > .adjust-quantity[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2) > .adjust-quantity[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:40%}@media screen and (min-width: 768px){.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;gap:60px}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%]{width:calc(50% - 30px)}}@media screen and (min-width: 1024px){.wrapper[_ngcontent-%COMP%]{gap:50px;padding:20px 80px}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%]{width:calc(33% - 31px)}}@media screen and (min-width: 1920px){.wrapper[_ngcontent-%COMP%]{gap:70px;padding:40px 12%}.wrapper[_ngcontent-%COMP%] > div.wine-card[_ngcontent-%COMP%]{width:calc(25% - 53px)}}"]});let n=o;return n})();export{J as BuyWineComponent};
