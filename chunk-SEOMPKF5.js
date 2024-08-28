import{b as H,c as U,d as $,e as z,m as A}from"./chunk-4W7W7BJC.js";import{h as S,i as V,p as j}from"./chunk-IP2WOURM.js";import{Ab as P,Bb as b,Cb as Q,Ga as R,La as o,Ma as x,Pb as F,Qb as T,Sb as L,Wa as f,X as E,Ya as c,aa as N,da as d,eb as a,fb as s,gb as l,hb as I,mb as v,na as _,nb as h,oa as C,rb as O,sb as w,tb as y,vb as m,wb as D,xb as M,zb as g}from"./chunk-TGYSX47V.js";var J=["carousel"],K=["longContent"];function X(n,e){if(n&1&&(a(0,"div",7),l(1,"img",8),s()),n&2){let r=h().$implicit;o(),c("src",r,R)}}function Y(n,e){n&1&&f(0,X,2,1,"ng-template",6)}function Z(n,e){if(n&1){let r=I();a(0,"div",2)(1,"button",3),v("click",function(){let t=_(r).$implicit;return C(t.dismiss("Cross click"))}),s(),a(2,"ngb-carousel",4,1),v("slide",function(t){_(r);let p=h();return C(p.onSlide(t))}),f(4,Y,1,0,null,5),s(),a(5,"p"),m(6),s()()}if(n&2){let r=h();o(2),c("interval",2e3)("pauseOnHover",r.pauseOnHover)("pauseOnFocus",r.pauseOnFocus),o(2),c("ngForOf",r.images),o(2),D(r.description)}}var q=(()=>{let e=class e{constructor(i,t){this.modalService=i,this.images=[],this.description="",this.paused=!1,this.unpauseOnArrow=!1,this.pauseOnIndicator=!1,this.pauseOnHover=!0,this.pauseOnFocus=!0,t.showNavigationIndicators=!1}openModal(){this.modalService.open(this.longContent,{scrollable:!0,centered:!0,size:"lg"})}togglePaused(){this.paused?this.carousel.cycle():this.carousel.pause(),this.paused=!this.paused}onSlide(i){this.unpauseOnArrow&&i.paused&&(i.source===z.ARROW_LEFT||i.source===z.ARROW_RIGHT)&&this.togglePaused(),this.pauseOnIndicator&&!i.paused&&i.source===z.INDICATOR&&this.togglePaused()}};e.\u0275fac=function(t){return new(t||e)(x(A),x(H))},e.\u0275cmp=d({type:e,selectors:[["app-room-details"]],viewQuery:function(t,p){if(t&1&&(O(J,7),O(K,7)),t&2){let u;w(u=y())&&(p.carousel=u.first),w(u=y())&&(p.longContent=u.first)}},inputs:{images:"images",description:"description"},standalone:!0,features:[g],decls:2,vars:0,consts:[["longContent",""],["carousel",""],[1,"modal-body"],["type","button","aria-label","Close",1,"btn-close","btn-close-white",3,"click"],[1,"carousel-container",3,"slide","interval","pauseOnHover","pauseOnFocus"],[4,"ngFor","ngForOf"],["ngbSlide",""],[1,"picsum-img-wrapper"],["alt","Room Image",3,"src"]],template:function(t,p){t&1&&f(0,Z,7,5,"ng-template",null,0,Q)},dependencies:[$,S,U],styles:[".modal-body[_ngcontent-%COMP%]{padding:0}.btn-close[_ngcontent-%COMP%]{position:absolute;z-index:1;right:10px;top:10px}.carousel-container[_ngcontent-%COMP%]{width:100%;height:400px;overflow:hidden;position:relative}.carousel-container[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.carousel-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}p[_ngcontent-%COMP%]{padding:20px;font-size:14px}@media screen and (min-width: 1920px){p[_ngcontent-%COMP%]{font-size:21px}}"]});let n=e;return n})();var B=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-loading"]],standalone:!0,features:[g],decls:2,vars:0,consts:[[1,"loading-spinner"],[1,"spinner"]],template:function(t,p){t&1&&(a(0,"div",0),l(1,"div",1),s())},styles:[".loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%;position:absolute;top:0;left:0;background:#fffc;z-index:1000}.spinner[_ngcontent-%COMP%]{border:4px solid rgba(0,0,0,.1);border-top:4px solid #4c0027;border-radius:50%;width:60px;height:60px;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"]});let n=e;return n})();var W=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://sazanowine-api-dev.azurewebsites.net/api/rooms"}getRooms(){return this.http.get(this.apiUrl)}addRoom(i){return this.http.post(this.apiUrl,i)}deleteRoom(i){return this.http.delete(`${this.apiUrl}/${i}`)}};e.\u0275fac=function(t){return new(t||e)(N(j))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ne=["roomDetailsModal"];function ie(n,e){n&1&&(a(0,"div"),l(1,"app-loading"),s())}function oe(n,e){if(n&1){let r=I();a(0,"div",5),l(1,"img",6),a(2,"div",7)(3,"h5",8),m(4),s(),a(5,"a",9),v("click",function(){let t=_(r).$implicit,p=h(2);return C(p.openRoomDetails(t.description,t.modalImages))}),m(6),P(7,"translate"),s()()()}if(n&2){let r=e.$implicit;o(),c("src",r.cardImage,R),o(3),D(r.name),o(),c("appLangClass","geo-primary, eng-primary, ru-primary"),o(),M(" ",b(7,4,"hotel-page.room-description")," ")}}function re(n,e){if(n&1&&(a(0,"div",3),f(1,oe,8,6,"div",4),s()),n&2){let r=h();o(),c("ngForOf",r.rooms)}}var G=(()=>{let e=class e{constructor(i){this.roomService=i,this.rooms=[],this.isLoading=!0,this.fetchRooms()}fetchRooms(){this.isLoading=!0,this.roomService.getRooms().subscribe(i=>{this.rooms=i,this.isLoading=!1,console.log(this.rooms)},i=>{this.isLoading=!1,console.error("Error fetching rooms:",i)})}openRoomDetails(i,t){this.roomDetails.images=t,this.roomDetails.description=i,this.roomDetails.openModal()}};e.\u0275fac=function(t){return new(t||e)(x(W))},e.\u0275cmp=d({type:e,selectors:[["app-rooms"]],viewQuery:function(t,p){if(t&1&&O(ne,5),t&2){let u;w(u=y())&&(p.roomDetails=u.first)}},standalone:!0,features:[g],decls:4,vars:2,consts:[["roomDetailsModal",""],[4,"ngIf"],["class","wrapper",4,"ngIf"],[1,"wrapper"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["alt","Room Image",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","eng-primary"],[1,"btn",3,"click","appLangClass"]],template:function(t,p){t&1&&(f(0,ie,2,0,"div",1)(1,re,2,1,"div",2),l(2,"app-room-details",null,0)),t&2&&(c("ngIf",p.isLoading),o(),c("ngIf",!p.isLoading))},dependencies:[q,S,T,F,L,B,V],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;padding:0 20px;flex-direction:column;gap:20px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{text-align:center;color:#4c0027}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;background-color:#4c0027;color:#f5e6ee}@media screen and (min-width: 768px){.wrapper[_ngcontent-%COMP%]{flex-direction:row;gap:60px;flex-wrap:wrap;padding:0 60px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(50% - 30px)}}@media screen and (min-width: 1024px){.wrapper[_ngcontent-%COMP%]{gap:25px;padding:0 80px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(33% - 15px)}}@media screen and (min-width: 1920px){.wrapper[_ngcontent-%COMP%]{gap:40px;padding:0 12%}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(33% - 25px)}}"]});let n=e;return n})();var Oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-hotel"]],standalone:!0,features:[g],decls:8,vars:8,consts:[["id","hotel-description",1,"hotel-description"],["id","hotel-complex",1,"hotel-complex",3,"appLangClass"],[3,"appLangClass"]],template:function(t,p){t&1&&(a(0,"section",0)(1,"h1",1),m(2),P(3,"translate"),s(),a(4,"p",2),m(5),P(6,"translate"),s()(),l(7,"app-rooms")),t&2&&(o(),c("appLangClass","geo-primary, eng-primary, ru-primary"),o(),M(" ",b(3,4,"hotel-page.title")," "),o(2),c("appLangClass","geo-secondary, eng-secondary, ru-secondary"),o(),M(" ",b(6,6,"hotel-page.description")," "))},dependencies:[L,T,F,G],styles:[".hotel-description[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px;padding-top:70px;width:100%;margin-bottom:30px}.hotel-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;color:#4c0027;font-size:21px}.hotel-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-indent:20px;font-size:14px}@media screen and (min-width: 768px){.hotel-description[_ngcontent-%COMP%]{padding-left:60px;padding-right:60px;margin-bottom:30px}}@media screen and (min-width: 1024px){.hotel-description[_ngcontent-%COMP%]{padding-left:80px;padding-right:80px}}@media screen and (min-width: 1920px){.hotel-description[_ngcontent-%COMP%]{padding-left:12%;padding-right:12%;margin-bottom:50px}.hotel-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:21px}.hotel-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:32px}}"]});let n=e;return n})();export{Oe as HotelComponent};
