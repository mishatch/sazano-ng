import{a as q}from"./chunk-PI5HNATW.js";import{a as $}from"./chunk-7LNVCTPK.js";import"./chunk-2DNIM7WO.js";import"./chunk-SY4Q7D4V.js";import"./chunk-3G3XRZH5.js";import"./chunk-ZTYZG2FQ.js";import{a as Z}from"./chunk-O3OG6XD3.js";import{e as Q}from"./chunk-XIY5KZ7M.js";import"./chunk-OWIOO5ZG.js";import{b as j,c as A,e as F}from"./chunk-QSWAGUUE.js";import{Ab as M,Bb as v,Cb as D,Hb as B,Ja as S,Jb as u,Kb as f,Oa as i,Pa as P,_a as b,ab as g,eb as V,fa as y,fb as k,gb as I,hb as H,ib as n,jb as r,kb as d,lb as w,qa as C,qb as _,ra as m,rb as l,sa as h,ta as O,vb as E,wb as T,xb as L,zb as a}from"./chunk-VVLVZ75C.js";var G=["authModal"];function R(c,s){if(c&1){let o=w();n(0,"div",5)(1,"div",10),d(2,"img",11),n(3,"div",8)(4,"h5"),a(5),r(),n(6,"p"),a(7),r()()(),n(8,"div",12)(9,"div")(10,"p",8),a(11),r(),n(12,"div")(13,"div",13)(14,"button",14),_("click",function(){let t=C(o).$implicit,p=l(2);return m(p.decreaseQuantity(t.wine))}),h(),n(15,"svg",15),d(16,"path",16),r()(),O(),n(17,"span",8),a(18),r(),n(19,"button",14),_("click",function(){let t=C(o).$implicit,p=l(2);return m(p.increaseQuantity(t.wine))}),h(),n(20,"svg",15),d(21,"path",17),r()()()()(),O(),n(22,"div"),h(),n(23,"svg",18),_("click",function(){let t=C(o).$implicit,p=l(2);return m(p.removeFromCart(t.wine))}),d(24,"path",19),r()()()()}if(c&2){let o=s.$implicit;i(2),g("src",o.wine.imageUrl,S),i(3),M(o.wine.name),i(2),M(o.wine.vintageYear),i(4),v("",o.wine.price*o.quantity," \u20BE"),i(7),M(o.quantity)}}function U(c,s){if(c&1){let o=w();n(0,"div",1)(1,"div")(2,"p",2),_("click",function(){C(o);let t=l();return m(t.clearCart())}),n(3,"span"),h(),n(4,"svg",3),d(5,"path",4),r()(),a(6),u(7,"translate"),r(),I(8,R,25,5,"div",5,k),r(),O(),n(10,"div",6)(11,"div")(12,"h5",7),a(13),u(14,"translate"),r(),n(15,"p",7),a(16),u(17,"translate"),r()(),d(18,"hr"),n(19,"div")(20,"h6",7),a(21),u(22,"translate"),r(),n(23,"p",8),a(24),r()(),n(25,"button",9),_("click",function(){C(o);let t=l();return m(t.handleCheckout())}),n(26,"span"),a(27),u(28,"translate"),r()()()()}if(c&2){let o=l();i(2),g("appLangClass","geo-secondary, eng-secondary, ru-secondary"),i(4),v(" ",f(7,12,"cart.clear-cart")," "),i(2),H(o.cartItems),i(4),g("appLangClass","geo-primary, eng-primary, ru-primary"),i(),M(f(14,14,"cart.title")),i(2),g("appLangClass","geo-secondary, eng-secondary, ru-secondary"),i(),D("",o.getTotalQuantity()," ",f(17,16,"cart.items"),""),i(4),g("appLangClass","geo-secondary, eng-secondary, ru-secondary"),i(),M(f(22,18,"cart.total")),i(3),v("",o.getTotalAmount()," \u20BE"),i(),g("appLangClass","geo-primary, eng-primary, ru-primary"),i(2),v(" ",f(28,20,"cart.checkout")," ")}}function z(c,s){c&1&&(n(0,"div",1)(1,"h5"),a(2,"\u10D9\u10D0\u10DA\u10D0\u10D7\u10D0 \u10EA\u10D0\u10E0\u10D8\u10D4\u10DA\u10D8\u10D0"),r()())}var nt=(()=>{let s=class s{constructor(e,t,p){this.cartService=e,this.authService=t,this.router=p,this.cartItems=[],this.isLoggedIn=!1}ngOnInit(){this.getCartItems(),this.checkLoginStatus()}ngOnDestroy(){this.cartSubscription&&this.cartSubscription.unsubscribe()}increaseQuantity(e){this.cartService.addToCart(e)}decreaseQuantity(e){this.cartService.decreaseQuantity(e)}removeFromCart(e){this.cartService.removeFromCart(e)}clearCart(){this.cartService.clearCart()}getTotalAmount(){return this.cartItems.reduce((e,t)=>e+t.wine.price*t.quantity,0)}getTotalQuantity(){return this.cartItems.reduce((e,t)=>e+t.quantity,0)}handleCheckout(){this.isLoggedIn?this.router.navigate(["/checkout"]):this.openAuthModal()}openAuthModal(){this.authModal&&this.authModal.openModal()}getCartItems(){this.cartSubscription=this.cartService.cartItems$.subscribe(e=>{this.cartItems=e})}checkLoginStatus(){this.authService.isLoggedIn().subscribe(e=>{this.isLoggedIn=e})}};s.\u0275fac=function(t){return new(t||s)(P(q),P(Z),P(Q))},s.\u0275cmp=y({type:s,selectors:[["app-shopping-cart"]],viewQuery:function(t,p){if(t&1&&E(G,5),t&2){let x;T(x=L())&&(p.authModal=x.first)}},standalone:!0,features:[B],decls:4,vars:1,consts:[["authModal",""],[1,"wrapper"],[3,"click","appLangClass"],["width","16","height","18","viewBox","0 0 16 18","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","icon","d","M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z","fill","#999999"],[1,"item-card"],[1,"receipt"],[3,"appLangClass"],[1,"eng-primary"],[1,"primary-btn",3,"click","appLangClass"],[1,"wine-name"],["alt","Wine",3,"src"],[1,"wine-options"],[1,"buttons"],[3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6 12L18 12","stroke","#4c0027","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M4 12H20M12 4V20","stroke","#4c0027","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["width","20","height","24","viewBox","0 0 22 26","fill","none","xmlns","http://www.w3.org/2000/svg",3,"click"],["id","icon","d","M4.125 25.5C3.36875 25.5 2.72135 25.228 2.18281 24.684C1.64427 24.14 1.375 23.4861 1.375 22.7222V4.66667H0V1.88889H6.875V0.5H15.125V1.88889H22V4.66667H20.625V22.7222C20.625 23.4861 20.3557 24.14 19.8172 24.684C19.2786 25.228 18.6313 25.5 17.875 25.5H4.125ZM17.875 4.66667H4.125V22.7222H17.875V4.66667Z","fill","#999999"]],template:function(t,p){t&1&&(b(0,U,29,22,"div",1)(1,z,3,0,"div",1),d(2,"app-auth",null,0)),t&2&&V(p.cartItems.length>0?0:1)},dependencies:[A,j,F,$],styles:[".wrapper[_ngcontent-%COMP%]{padding:80px 40px 20px;min-height:calc(100vh - 358px)}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type{min-height:40vh;display:flex;flex-direction:column;align-items:center;gap:20px;margin-bottom:20px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > p[_ngcontent-%COMP%]{text-align:right;width:100%;max-width:300px;margin:0 0 -10px;color:#999}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%]{padding:20px;width:100%;max-width:300px;aspect-ratio:1/1;border-radius:35px;box-shadow:0 7px 20px #00000040;display:flex;flex-direction:column;justify-content:center}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-name[_ngcontent-%COMP%]{display:flex;gap:20px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-name[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:80px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%]{padding-top:10px;display:flex;width:100%;justify-content:space-between;align-items:center}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > div[_ngcontent-%COMP%]{background-color:#d6c4cd;width:80px;height:30px;border-radius:35px;padding-left:3px;padding-right:3px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:100%}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:24px;height:24px;border:none;border-radius:50%;background-color:#fff}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-bottom:5px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]:last-of-type{width:20px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type{display:flex;align-items:end;height:100%}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type{padding:20px;width:100%;max-width:345px;aspect-ratio:1/1;border-radius:35px;border:2px solid #4c0027;margin:0 auto;display:flex;flex-direction:column;justify-content:space-around}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type > hr[_ngcontent-%COMP%]{border:2px solid #4c0027;border-radius:5px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type > div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type > div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type   button[_ngcontent-%COMP%]{width:100%;padding:10px 20px;background-color:#4c0027;border:none;border-radius:5px;color:#fff;font-weight:700;cursor:pointer;transition:.3s}@media screen and (min-width: 768px){.wrapper[_ngcontent-%COMP%]{display:flex;gap:4%;padding:40px 40px 20px;min-height:calc(100vh - 436px)}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type{width:68%}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > p[_ngcontent-%COMP%]{max-width:100%}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%]{max-width:100%;height:200px;flex-direction:row}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-name[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;flex-shrink:0}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type{display:flex;flex-direction:row-reverse;gap:20px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%]{margin:0}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type > .item-card[_ngcontent-%COMP%] > .wine-options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type{align-items:center}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type{width:28%;height:350px}}@media screen and (min-width: 1920px){.wrapper[_ngcontent-%COMP%]{min-height:calc(100vh - 474px)}}"]});let c=s;return c})();export{nt as ShoppingCartComponent};
