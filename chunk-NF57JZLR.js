import{a as U,b as q,c as W,d as L,m as G}from"./chunk-RFT7N3MN.js";import"./chunk-LSYD3J5U.js";import{a as J}from"./chunk-OKL6TN3N.js";import{i as H,t as $}from"./chunk-WH2QT74X.js";import{a as A,b as v}from"./chunk-4ULCVYXL.js";import{c as O,d as M}from"./chunk-CKQWD7NW.js";import{Ab as I,Cb as p,Db as V,Eb as c,Ja as R,Lb as x,Oa as o,Ob as d,Pa as f,Pb as m,Rb as N,V as z,Z as k,_a as D,ab as g,ca as E,fa as _,fb as B,gb as j,hb as Q,ib as a,jb as r,kb as h,lb as T,qa as y,ra as P,sb as w,tb as C,yb as b,zb as S}from"./chunk-MOSC54PF.js";var ee=["carousel"],te=["longContent"];function ne(i,t){if(i&1&&(a(0,"div",9),h(1,"img",10),r()),i&2){let s=C().$implicit;o(),g("src",s,R)}}function ie(i,t){i&1&&D(0,ne,2,1,"ng-template",8)}function oe(i,t){if(i&1){let s=T();a(0,"div",2)(1,"h5"),p(2),r(),a(3,"button",3),w("click",function(){let e=y(s).$implicit;return P(e.dismiss("Cross click"))}),r()(),a(4,"div",4)(5,"ngb-carousel",5,1),w("slide",function(e){y(s);let l=C();return P(l.onSlide(e))}),D(7,ie,1,0,null,6),r(),a(8,"p",7),p(9),r(),a(10,"ul",7)(11,"li"),p(12),d(13,"translate"),r(),a(14,"li"),p(15),d(16,"translate"),r(),a(17,"li"),p(18),d(19,"translate"),r(),a(20,"li"),p(21),d(22,"translate"),r(),a(23,"li"),p(24),d(25,"translate"),r(),a(26,"li"),p(27),d(28,"translate"),r(),a(29,"li"),p(30),d(31,"translate"),r()()()}if(i&2){let s=C();o(2),c(" ",s.name," "),o(3),g("interval",2e3)("pauseOnHover",s.pauseOnHover)("pauseOnFocus",s.pauseOnFocus),o(2),g("ngForOf",s.images),o(),g("appLangClass","geo-secondary, eng-secondary, ru-secondary"),o(),c(" ",s.description,""),o(),g("appLangClass","geo-secondary, eng-secondary, ru-secondary"),o(2),c(" ",m(13,15,"hotel-page.amenities.bathrobe")," "),o(3),c(" ",m(16,17,"hotel-page.amenities.slippers")," "),o(3),c(" ",m(19,19,"hotel-page.amenities.hairdryer")," "),o(3),c(" ",m(22,21,"hotel-page.amenities.toiletries")," "),o(3),c(" ",m(25,23,"hotel-page.amenities.safe")," "),o(3),c(" ",m(28,25,"hotel-page.amenities.kettle")," "),o(3),c(" ",m(31,27,"hotel-page.amenities.wifi")," ")}}var X=(()=>{let t=class t{constructor(n,e){this.modalService=n,this.images=[],this.description="",this.name="",this.paused=!1,this.unpauseOnArrow=!1,this.pauseOnIndicator=!1,this.pauseOnHover=!0,this.pauseOnFocus=!0,e.showNavigationIndicators=!1}openModal(){this.modalService.open(this.longContent,{scrollable:!0,centered:!0,size:"lg"})}togglePaused(){this.paused?this.carousel.cycle():this.carousel.pause(),this.paused=!this.paused}onSlide(n){this.unpauseOnArrow&&n.paused&&(n.source===L.ARROW_LEFT||n.source===L.ARROW_RIGHT)&&this.togglePaused(),this.pauseOnIndicator&&!n.paused&&n.source===L.INDICATOR&&this.togglePaused()}};t.\u0275fac=function(e){return new(e||t)(f(G),f(U))},t.\u0275cmp=_({type:t,selectors:[["app-room-details"]],viewQuery:function(e,l){if(e&1&&(b(ee,7),b(te,7)),e&2){let u;S(u=I())&&(l.carousel=u.first),S(u=I())&&(l.longContent=u.first)}},inputs:{images:"images",description:"description",name:"name"},standalone:!0,features:[x],decls:2,vars:0,consts:[["longContent",""],["carousel",""],[1,"modal-header","eng-primary"],["type","button","aria-label","Close",1,"btn-close","btn-close-black",3,"click"],[1,"modal-body"],[1,"carousel-container",3,"slide","interval","pauseOnHover","pauseOnFocus"],[4,"ngFor","ngForOf"],[3,"appLangClass"],["ngbSlide",""],[1,"picsum-img-wrapper"],["alt","Room Image",3,"src"]],template:function(e,l){e&1&&D(0,oe,32,29,"ng-template",null,0,N)},dependencies:[W,H,q,M,O,v],styles:[".modal-header[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{margin:0 auto;text-align:center;font-size:25px;color:#4c0027}.modal-header[_ngcontent-%COMP%] > .btn-close[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;outline:none;box-shadow:none}.modal-body[_ngcontent-%COMP%]{padding:0}.modal-body[_ngcontent-%COMP%] > .carousel-container[_ngcontent-%COMP%]{position:relative;width:100%;height:250px;overflow:hidden}.modal-body[_ngcontent-%COMP%] > .carousel-container[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.modal-body[_ngcontent-%COMP%] > .carousel-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.modal-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-bottom:0;padding:20px 20px 10px;font-size:14px}.modal-body[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{font-size:14px}@media screen and (min-width: 768px){.modal-body[_ngcontent-%COMP%] > .carousel-container[_ngcontent-%COMP%]{height:350px}}@media screen and (min-width: 1920px){.modal-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:25px}.modal-body[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{font-size:25px}.modal-header[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{font-size:30px}}"]});let i=t;return i})();var Y=(()=>{let t=class t{constructor(n,e){this.http=n,this.loadingService=e,this.apiUrl="https://sazanowine-api-dev.azurewebsites.net/api/rooms"}getRooms(){return this.loadingService.show(),this.http.get(`${this.apiUrl}`).pipe(z({next:()=>this.loadingService.hide(),error:()=>this.loadingService.hide()}))}};t.\u0275fac=function(e){return new(e||t)(E($),E(J))},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var re=["roomDetailsModal"];function pe(i,t){if(i&1){let s=T();a(0,"div",2),h(1,"img",3),a(2,"div",4)(3,"h5",5),p(4),r(),a(5,"a",6),w("click",function(){let e=y(s).$implicit,l=C();return P(l.openRoomDetails(e.description,e.modalImages,e.name))}),p(6),d(7,"translate"),r()()()}if(i&2){let s=t.$implicit;o(),g("src",s.cardImage,R),o(3),V(s.name),o(),g("appLangClass","geo-primary, eng-primary, ru-primary"),o(),c(" ",m(7,4,"hotel-page.room-description")," ")}}var Z=(()=>{let t=class t{constructor(n,e){this.roomService=n,this.languageService=e,this.rooms=[]}ngOnInit(){this.fetchRooms(),this.getCurrentLanguage()}ngOnDestroy(){this.languageSubscription.unsubscribe(),this.roomsSubscription.unsubscribe()}openRoomDetails(n,e,l){this.roomDetails.images=e,this.roomDetails.name=l;let u={geo:n.ka,en:n.en,ru:n.ru};this.roomDetails.description=u[this.currentLanguage],this.roomDetails.openModal()}fetchRooms(){this.roomsSubscription=this.roomService.getRooms().subscribe(n=>{this.rooms=n},n=>{console.error("Error fetching rooms:",n)})}getCurrentLanguage(){this.languageSubscription=this.languageService.language$.subscribe(n=>{this.currentLanguage=n})}};t.\u0275fac=function(e){return new(e||t)(f(Y),f(A))},t.\u0275cmp=_({type:t,selectors:[["app-rooms"]],viewQuery:function(e,l){if(e&1&&b(re,5),e&2){let u;S(u=I())&&(l.roomDetails=u.first)}},standalone:!0,features:[x],decls:5,vars:0,consts:[["roomDetailsModal",""],[1,"wrapper"],[1,"card"],["alt","Room Image",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","eng-primary"],[1,"btn",3,"click","appLangClass"]],template:function(e,l){e&1&&(a(0,"div",1),j(1,pe,8,6,"div",2,B),r(),h(3,"app-room-details",null,0)),e&2&&(o(),Q(l.rooms))},dependencies:[X,M,O,v],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 20px;gap:20px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{text-align:center;color:#4c0027}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;background-color:#4c0027;color:#f5e6ee}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{height:227px}@media screen and (min-width: 768px){.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:0 60px;gap:60px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(50% - 30px)}}@media screen and (min-width: 1024px){.wrapper[_ngcontent-%COMP%]{gap:50px;padding:0 80px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(33% - 30px)}}@media screen and (min-width: 1920px){.wrapper[_ngcontent-%COMP%]{gap:70px;padding:0 12%}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(33% - 42px)}}"]});let i=t;return i})();var we=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=_({type:t,selectors:[["app-hotel"]],standalone:!0,features:[x],decls:9,vars:8,consts:[[1,"wrapper"],["id","hotel-description",1,"hotel-description"],["id","hotel-complex",1,"hotel-complex",3,"appLangClass"],[3,"appLangClass"]],template:function(e,l){e&1&&(a(0,"div",0)(1,"section",1)(2,"h1",2),p(3),d(4,"translate"),r(),a(5,"p",3),p(6),d(7,"translate"),r()(),h(8,"app-rooms"),r()),e&2&&(o(2),g("appLangClass","geo-primary, eng-primary, ru-primary"),o(),c(" ",m(4,4,"hotel-page.title")," "),o(2),g("appLangClass","geo-secondary, eng-secondary, ru-secondary"),o(),c(" ",m(7,6,"hotel-page.description")," "))},dependencies:[v,M,O,Z],styles:[".wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px;padding-top:70px;width:100%;margin-bottom:30px}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;color:#4c0027;font-size:25px}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-indent:20px;font-size:14px}@media screen and (min-width: 768px){.wrapper[_ngcontent-%COMP%]{min-height:calc(100vh - 435px)}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%]{padding-left:60px;padding-right:60px;margin-bottom:30px}}@media screen and (min-width: 1024px){.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%]{padding-left:80px;padding-right:80px}}@media screen and (min-width: 1920px){.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%]{padding-left:12%;padding-right:12%;margin-bottom:50px}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:18px}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:30px}}"]});let i=t;return i})();export{we as HotelComponent};
