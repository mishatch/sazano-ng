import{b as A,c as U,d as q,e as T,m as G}from"./chunk-4W7W7BJC.js";import{h as L,i as Q,p as H}from"./chunk-IP2WOURM.js";import{Ab as m,Bb as g,Cb as N,Ga as D,La as o,Ma as v,Pb as M,Qb as O,Rb as $,Sb as w,Wa as x,X as E,Ya as l,aa as k,da as f,eb as a,fb as r,gb as u,hb as z,mb as b,na as y,nb as C,oa as P,pa as B,qa as V,rb as S,sb as I,tb as R,vb as c,wb as j,xb as d,zb as _}from"./chunk-TGYSX47V.js";var Z=["carousel"],ee=["longContent"];function te(i,e){if(i&1&&(a(0,"div",9),u(1,"img",10),r()),i&2){let p=C().$implicit;o(),l("src",p,D)}}function ne(i,e){i&1&&x(0,te,2,1,"ng-template",8)}function ie(i,e){if(i&1){let p=z();a(0,"div",2)(1,"h5"),c(2),r(),a(3,"button",3),b("click",function(){let t=y(p).$implicit;return P(t.dismiss("Cross click"))}),r()(),a(4,"div",4)(5,"ngb-carousel",5,1),b("slide",function(t){y(p);let s=C();return P(s.onSlide(t))}),x(7,ne,1,0,null,6),r(),a(8,"p",7),c(9),r(),a(10,"ul",7)(11,"li"),c(12),m(13,"translate"),r(),a(14,"li"),c(15),m(16,"translate"),r(),a(17,"li"),c(18),m(19,"translate"),r(),a(20,"li"),c(21),m(22,"translate"),r(),a(23,"li"),c(24),m(25,"translate"),r(),a(26,"li"),c(27),m(28,"translate"),r(),a(29,"li"),c(30),m(31,"translate"),r()()()}if(i&2){let p=C();o(2),d(" ",p.name," "),o(3),l("interval",2e3)("pauseOnHover",p.pauseOnHover)("pauseOnFocus",p.pauseOnFocus),o(2),l("ngForOf",p.images),o(),l("appLangClass","geo-secondary, eng-secondary, ru-secondary"),o(),d(" ",p.description,""),o(),l("appLangClass","geo-secondary, eng-secondary, ru-secondary"),o(2),d(" ",g(13,15,"hotel-page.amenities.bathrobe")," "),o(3),d(" ",g(16,17,"hotel-page.amenities.slippers")," "),o(3),d(" ",g(19,19,"hotel-page.amenities.hairdryer")," "),o(3),d(" ",g(22,21,"hotel-page.amenities.toiletries")," "),o(3),d(" ",g(25,23,"hotel-page.amenities.safe")," "),o(3),d(" ",g(28,25,"hotel-page.amenities.kettle")," "),o(3),d(" ",g(31,27,"hotel-page.amenities.wifi")," ")}}var Y=(()=>{let e=class e{constructor(n,t){this.modalService=n,this.images=[],this.description="",this.name="",this.paused=!1,this.unpauseOnArrow=!1,this.pauseOnIndicator=!1,this.pauseOnHover=!0,this.pauseOnFocus=!0,t.showNavigationIndicators=!1}openModal(){this.modalService.open(this.longContent,{scrollable:!0,centered:!0,size:"lg"})}togglePaused(){this.paused?this.carousel.cycle():this.carousel.pause(),this.paused=!this.paused}onSlide(n){this.unpauseOnArrow&&n.paused&&(n.source===T.ARROW_LEFT||n.source===T.ARROW_RIGHT)&&this.togglePaused(),this.pauseOnIndicator&&!n.paused&&n.source===T.INDICATOR&&this.togglePaused()}};e.\u0275fac=function(t){return new(t||e)(v(G),v(A))},e.\u0275cmp=f({type:e,selectors:[["app-room-details"]],viewQuery:function(t,s){if(t&1&&(S(Z,7),S(ee,7)),t&2){let h;I(h=R())&&(s.carousel=h.first),I(h=R())&&(s.longContent=h.first)}},inputs:{images:"images",description:"description",name:"name"},standalone:!0,features:[_],decls:2,vars:0,consts:[["longContent",""],["carousel",""],[1,"modal-header","eng-primary"],["type","button","aria-label","Close",1,"btn-close","btn-close-black",3,"click"],[1,"modal-body"],[1,"carousel-container",3,"slide","interval","pauseOnHover","pauseOnFocus"],[4,"ngFor","ngForOf"],[3,"appLangClass"],["ngbSlide",""],[1,"picsum-img-wrapper"],["alt","Room Image",3,"src"]],template:function(t,s){t&1&&x(0,ie,32,29,"ng-template",null,0,N)},dependencies:[q,L,U,O,M,w],styles:[".modal-header[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{text-align:center;color:#4c0027;margin:0 auto;font-size:21px}.modal-body[_ngcontent-%COMP%]{padding:0}.btn-close[_ngcontent-%COMP%]{position:absolute;z-index:1;right:20px;top:20px;outline:none;box-shadow:none}.carousel-container[_ngcontent-%COMP%]{width:100%;height:250px;overflow:hidden;position:relative}.carousel-container[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.carousel-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}p[_ngcontent-%COMP%]{padding:20px 20px 10px;font-size:14px;margin-bottom:0}ul[_ngcontent-%COMP%]{font-size:14px}@media screen and (min-width: 768px){.carousel-container[_ngcontent-%COMP%]{height:350px}}@media screen and (min-width: 1920px){p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{font-size:21px}.modal-header[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{font-size:32px}}"]});let i=e;return i})();var J=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-loading"]],standalone:!0,features:[_],decls:11,vars:0,consts:[[1,"loading-spinner"],["xmlns","http://www.w3.org/2000/svg","width","70","height","70","viewBox","0 0 1024 1024","preserveAspectRatio","xMidYMid meet",1,"logo"],["transform","translate(0,1024) scale(0.1,-0.1)","fill","#4c0027","stroke","none"],["d","M5675 8029 c-98 -72 -259 -239 -348 -361 -220 -304 -331 -612 -352 -974 l-7 -122 -52 39 c-194 147 -512 249 -778 249 l-109 0 33 -46 c249 -350 729 -566 1165 -525 326 31 589 151 821 375 64 61 162 177 162 191 0 4 -69 5 -152 2 -261 -9 -469 -76 -696 -223 -45 -30 -85 -54 -87 -54 -8 0 -5 120 5 220 27 252 119 485 274 691 71 94 210 234 303 306 49 37 70 60 65 68 -22 40 -159 215 -167 215 -5 0 -41 -23 -80 -51z"],["d","M3985 6410 c-243 -39 -446 -170 -578 -376 -87 -135 -127 -277 -127 -448 0 -315 170 -587 455 -727 55 -27 106 -49 114 -49 8 0 60 22 115 49 108 53 194 78 301 88 l67 6 34 52 34 51 -31 69 c-71 158 -90 349 -49 511 26 103 96 242 163 324 45 56 155 151 206 180 14 7 13 12 -9 35 -82 88 -243 181 -374 214 -94 25 -237 34 -321 21z m-56 -334 c-2 -2 -28 -22 -58 -45 -70 -52 -134 -129 -176 -212 -53 -104 -69 -171 -68 -284 1 -132 33 -234 108 -345 30 -44 51 -80 47 -80 -18 0 -112 62 -159 104 -89 80 -143 184 -163 314 -37 234 121 474 351 536 50 14 128 21 118 12z"],["d","M6033 6411 c-154 -25 -316 -100 -417 -193 -37 -33 -66 -63 -66 -67 0 -4 32 -32 72 -62 129 -98 227 -233 281 -386 27 -78 31 -104 35 -223 5 -157 -9 -229 -63 -347 l-35 -75 34 -53 34 -52 69 -7 c131 -13 253 -56 355 -123 l38 -26 59 23 c253 94 447 315 511 582 27 112 27 286 1 390 -62 240 -235 449 -458 550 -132 59 -323 89 -450 69z m740 -838 c26 -252 -128 -467 -378 -527 -81 -20 -190 -30 -155 -15 193 83 296 166 395 314 43 65 102 201 111 257 9 52 20 40 27 -29z"],["d","M5025 6139 c-184 -28 -332 -114 -448 -259 -106 -132 -157 -272 -157 -431 0 -261 156 -507 395 -620 109 -52 181 -69 295 -69 167 0 272 30 401 116 285 189 390 565 242 871 -129 266 -443 435 -728 392z m-124 -341 c-84 -111 -117 -220 -108 -358 11 -192 129 -371 301 -456 l71 -35 -54 7 c-294 36 -496 317 -426 589 24 91 54 145 115 206 44 44 115 95 138 99 1 0 -15 -24 -37 -52z"],["d","M4250 4819 c-271 -31 -500 -220 -587 -484 -23 -69 -27 -97 -27 -210 -1 -111 2 -140 22 -200 88 -263 299 -451 556 -496 38 -6 111 -9 165 -7 285 14 527 205 628 493 25 72 28 93 28 215 0 122 -3 143 -28 215 -113 322 -417 512 -757 474z m-235 -378 c-14 -26 -30 -83 -36 -125 -28 -188 51 -383 204 -504 99 -79 195 -118 322 -132 l60 -6 -40 -13 c-60 -19 -209 -26 -274 -11 -173 38 -324 183 -372 358 -23 80 -24 136 -4 220 20 83 57 154 112 213 25 27 47 49 49 49 2 0 -8 -22 -21 -49z"],["d","M5788 4820 c-31 -5 -92 -23 -136 -40 -195 -75 -345 -224 -412 -410 -118 -321 15 -682 315 -857 189 -111 441 -124 635 -32 187 88 319 236 386 434 24 69 28 96 28 200 0 138 -15 209 -71 322 -86 172 -269 318 -459 367 -77 20 -213 27 -286 16z m651 -720 c2 -147 -45 -271 -139 -369 -124 -129 -296 -180 -463 -136 -60 16 -138 52 -172 80 l-20 17 20 -7 c50 -17 174 -17 256 0 258 52 449 264 485 540 l8 60 12 -50 c7 -27 13 -88 13 -135z"],["d","M4997 3626 c-85 -118 -221 -223 -359 -276 -42 -16 -82 -30 -87 -30 -18 0 -111 -203 -126 -275 -91 -435 246 -856 685 -855 119 0 207 19 304 64 391 180 533 659 303 1023 -18 29 -37 45 -64 53 -145 47 -308 163 -398 282 l-50 67 -85 0 -85 1 -38 -54z m-207 -452 c-53 -139 -17 -352 83 -485 133 -178 347 -260 557 -214 14 3 -1 -8 -32 -25 -107 -56 -263 -76 -374 -46 -167 44 -307 185 -355 357 -38 136 2 308 95 407 36 39 38 39 26 6z"],[1,"spinner"]],template:function(t,s){t&1&&(a(0,"div",0),B(),a(1,"svg",1)(2,"g",2),u(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9),r()(),V(),u(10,"div",10),r())},styles:[".loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;width:100vw;position:absolute;top:0;left:0;background:#fffc;z-index:1000}.spinner[_ngcontent-%COMP%]{border-top:4px solid #4c0027;border-radius:50%;width:60px;height:60px;animation:_ngcontent-%COMP%_spin 1s linear infinite}.logo[_ngcontent-%COMP%]{position:absolute}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"]});let i=e;return i})();var K=(()=>{let e=class e{constructor(n){this.http=n,this.apiUrl="https://sazanowine-api-dev.azurewebsites.net/api/rooms"}getRooms(){return this.http.get(this.apiUrl)}addRoom(n){return this.http.post(this.apiUrl,n)}deleteRoom(n){return this.http.delete(`${this.apiUrl}/${n}`)}};e.\u0275fac=function(t){return new(t||e)(k(H))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ae=["roomDetailsModal"];function re(i,e){i&1&&(a(0,"div"),u(1,"app-loading"),r())}function pe(i,e){if(i&1){let p=z();a(0,"div",5),u(1,"img",6),a(2,"div",7)(3,"h5",8),c(4),r(),a(5,"a",9),b("click",function(){let t=y(p).$implicit,s=C(2);return P(s.openRoomDetails(t.description,t.modalImages,t.name))}),c(6),m(7,"translate"),r()()()}if(i&2){let p=e.$implicit;o(),l("src",p.cardImage,D),o(3),j(p.name),o(),l("appLangClass","geo-primary, eng-primary, ru-primary"),o(),d(" ",g(7,4,"hotel-page.room-description")," ")}}function se(i,e){if(i&1&&(a(0,"div",3),x(1,pe,8,6,"div",4),r()),i&2){let p=C();o(),l("ngForOf",p.rooms)}}var X=(()=>{let e=class e{constructor(n,t){this.roomService=n,this.languageService=t,this.rooms=[],this.isLoading=!0,this.currentLanguage=this.languageService.getCurrentLanguage(),this.fetchRooms()}fetchRooms(){this.isLoading=!0,this.roomService.getRooms().subscribe(n=>{this.rooms=n,this.isLoading=!1,console.log(this.rooms)},n=>{this.isLoading=!1,console.error("Error fetching rooms:",n)})}openRoomDetails(n,t,s){this.roomDetails.images=t,this.roomDetails.name=s,this.languageService.language$.subscribe(h=>{this.currentLanguage=h,this.currentLanguage==="geo"?this.roomDetails.description=n.ka:this.currentLanguage==="en"?this.roomDetails.description=n.en:this.roomDetails.description=n.ru}),this.roomDetails.openModal()}};e.\u0275fac=function(t){return new(t||e)(v(K),v($))},e.\u0275cmp=f({type:e,selectors:[["app-rooms"]],viewQuery:function(t,s){if(t&1&&S(ae,5),t&2){let h;I(h=R())&&(s.roomDetails=h.first)}},standalone:!0,features:[_],decls:4,vars:2,consts:[["roomDetailsModal",""],[4,"ngIf"],["class","wrapper",4,"ngIf"],[1,"wrapper"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["alt","Room Image",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","eng-primary"],[1,"btn",3,"click","appLangClass"]],template:function(t,s){t&1&&(x(0,re,2,0,"div",1)(1,se,2,1,"div",2),u(2,"app-room-details",null,0)),t&2&&(l("ngIf",s.isLoading),o(),l("ngIf",!s.isLoading))},dependencies:[Y,L,O,M,w,J,Q],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;padding:0 20px;flex-direction:column;gap:20px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{text-align:center;color:#4c0027}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;background-color:#4c0027;color:#f5e6ee}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{height:227px}@media screen and (min-width: 768px){.wrapper[_ngcontent-%COMP%]{flex-direction:row;gap:60px;flex-wrap:wrap;padding:0 60px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(50% - 30px)}}@media screen and (min-width: 1024px){.wrapper[_ngcontent-%COMP%]{gap:25px;padding:0 80px}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(33% - 15px)}}@media screen and (min-width: 1920px){.wrapper[_ngcontent-%COMP%]{gap:40px;padding:0 12%}.wrapper[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]{width:calc(33% - 25px)}}"]});let i=e;return i})();var Se=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-hotel"]],standalone:!0,features:[_],decls:9,vars:8,consts:[[1,"wrapper"],["id","hotel-description",1,"hotel-description"],["id","hotel-complex",1,"hotel-complex",3,"appLangClass"],[3,"appLangClass"]],template:function(t,s){t&1&&(a(0,"div",0)(1,"section",1)(2,"h1",2),c(3),m(4,"translate"),r(),a(5,"p",3),c(6),m(7,"translate"),r()(),u(8,"app-rooms"),r()),t&2&&(o(2),l("appLangClass","geo-primary, eng-primary, ru-primary"),o(),d(" ",g(4,4,"hotel-page.title")," "),o(2),l("appLangClass","geo-secondary, eng-secondary, ru-secondary"),o(),d(" ",g(7,6,"hotel-page.description")," "))},dependencies:[w,O,M,X],styles:[".wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px;padding-top:70px;width:100%;margin-bottom:30px}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;color:#4c0027;font-size:21px}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{text-indent:20px;font-size:14px}@media screen and (min-width: 768px){.wrapper[_ngcontent-%COMP%]{min-height:calc(100vh - 435px)}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%]{padding-left:60px;padding-right:60px;margin-bottom:30px}}@media screen and (min-width: 1024px){.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%]{padding-left:80px;padding-right:80px}}@media screen and (min-width: 1920px){.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%]{padding-left:12%;padding-right:12%;margin-bottom:50px}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:21px}.wrapper[_ngcontent-%COMP%]   .hotel-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:32px}}"]});let i=e;return i})();export{Se as HotelComponent};
