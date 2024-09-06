import{l as j}from"./chunk-O7EHIOCX.js";import{a as I,c as W,e as L,k as F}from"./chunk-JXBROLTQ.js";import{a as N}from"./chunk-IKNZIXAA.js";import{a as $}from"./chunk-FHOVZXYB.js";import{e as V,f as B}from"./chunk-5SCO7L5Z.js";import"./chunk-C4JKQMRJ.js";import{Ab as g,Bb as y,Db as S,Eb as k,Fb as O,Hb as A,Lb as T,Na as c,Oa as p,Za as w,db as h,ea as f,eb as x,fb as b,gb as v,hb as t,ib as n,jb as M,kb as _,pa as d,pb as m,qa as s,qb as E,yb as P,zb as i}from"./chunk-NYC2XSAJ.js";function R(a,l){if(a&1){let o=_();t(0,"tr",8)(1,"td"),i(2),n(),t(3,"td"),i(4),n(),t(5,"td"),i(6),n(),t(7,"td"),i(8),n(),t(9,"td")(10,"button",9),m("click",function(){let e=d(o).$implicit,u=E();return s(u.editWine(e==null?null:e.id))}),i(11,"Edit"),n()(),t(12,"td")(13,"button",10),m("click",function(){let e=d(o).$implicit,u=E(),D=P(26);return s(u.openModal(D,e==null?null:e.id))}),i(14,"Delete"),n()()()}if(a&2){let o=l.$implicit;c(2),g(o.name),c(2),g(o.vintageYear),c(2),y("",o.price," \u20BE"),c(2),g(o.stockQuantity)}}function z(a,l){if(a&1){let o=_();t(0,"div",11)(1,"h4",12),i(2,"\u10D3\u10D0\u10E0\u10EC\u10DB\u10E3\u10DC\u10D4\u10D1\u10E3\u10DA\u10D8 \u10EE\u10D0\u10E0\u10D7 \u10E0\u10DD\u10DB \u10D2\u10E1\u10E3\u10E0\u10D7 \u10E6\u10D5\u10D8\u10DC\u10D8\u10E1 \u10EC\u10D0\u10E8\u10DA\u10D0?"),n(),t(3,"button",13),m("click",function(){let e=d(o).$implicit;return s(e.dismiss("Cross click"))}),n()(),t(4,"div",14)(5,"p"),i(6,"\u10E6\u10D5\u10D8\u10DC\u10D8\u10E1 \u10D8\u10DC\u10E4\u10DD\u10E0\u10DB\u10D0\u10EA\u10D8\u10D0 \u10EC\u10D0\u10D8\u10E8\u10DA\u10D4\u10D1\u10D0 \u10DB\u10DD\u10DC\u10D0\u10EA\u10D4\u10DB\u10D7\u10D0 \u10D1\u10D0\u10D6\u10D8\u10D3\u10D0\u10DC"),n()(),t(7,"div",15)(8,"button",16),m("click",function(){let e=d(o).$implicit;return E().deleteWine(),s(e.close())}),i(9,"\u10D3\u10D8\u10D0\u10EE"),n(),t(10,"button",17),m("click",function(){let e=d(o).$implicit;return s(e.close("Close click"))}),i(11,"\u10D0\u10E0\u10D0"),n()()}}function Q(a,l){a&1&&M(0,"app-loading")}var ee=(()=>{let l=class l{constructor(r,e,u){this.wineService=r,this.router=e,this.modalService=u,this.wines=[],this.isLoading=!0,this.searchTerm="",this.wineService.getWines().subscribe(D=>{this.isLoading=!1,this.wines=D})}editWine(r){this.router.navigate(["/admin/wine/edit",r])}deleteWine(){this.wineId&&(this.isLoading=!0,this.wineService.deleteWine(this.wineId).subscribe(()=>{this.wines=this.wines.filter(r=>r.id!==this.wineId),this.isLoading=!1}))}filteredWines(){if(!this.searchTerm)return this.wines;let r=this.searchTerm.toLowerCase();return this.wines.filter(e=>e.name.toLowerCase().includes(r))}openModal(r,e){this.modalService.open(r),this.wineId=e}};l.\u0275fac=function(e){return new(e||l)(p(N),p(V),p(j))},l.\u0275cmp=f({type:l,selectors:[["app-admin-products"]],standalone:!0,features:[A],decls:28,vars:2,consts:[["content",""],[1,"wrapper","geo-primary"],["routerLink","/admin/add-wine"],[1,"form-group"],["type","text","placeholder","\u10EB\u10D4\u10D1\u10DC\u10D0",1,"form-control",3,"ngModelChange","ngModel"],[1,"table-wrapper"],[1,"table","table-striped","table-bordered"],[1,"thead-dark"],[1,"eng-primary"],[1,"btn","btn-warning","btn-sm",3,"click"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(e,u){if(e&1){let D=_();t(0,"div",1)(1,"div")(2,"a",2),i(3,"\u10D0\u10EE\u10D0\u10DA\u10D8 \u10DE\u10E0\u10DD\u10D3\u10E3\u10E5\u10E2\u10D8\u10E1 \u10D3\u10D0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D0"),n(),t(4,"div",3)(5,"input",4),O("ngModelChange",function(C){return d(D),k(u.searchTerm,C)||(u.searchTerm=C),s(C)}),n()()(),t(6,"div",5)(7,"table",6)(8,"thead",7)(9,"tr")(10,"th"),i(11,"\u10DE\u10E0\u10DD\u10D3\u10E3\u10E5\u10E2\u10D8\u10E1 \u10E1\u10D0\u10EE\u10D4\u10DA\u10DD\u10D3\u10D4\u10D1\u10D0"),n(),t(12,"th"),i(13,"\u10EC\u10D0\u10E0\u10DB\u10DD\u10D4\u10D1\u10D8\u10E1 \u10EC\u10D4\u10DA\u10D8"),n(),t(14,"th"),i(15,"\u10E4\u10D0\u10E1\u10D8"),n(),t(16,"th"),i(17,"\u10E0\u10D0\u10DD\u10D3\u10D4\u10DC\u10DD\u10D1\u10D0 \u10DB\u10D0\u10E0\u10D0\u10D2\u10E8\u10D8"),n(),t(18,"th"),i(19,"\u10E9\u10D0\u10E1\u10EC\u10DD\u10E0\u10D4\u10D1\u10D0"),n(),t(20,"th"),i(21,"\u10EC\u10D0\u10E8\u10DA\u10D0"),n()()(),t(22,"tbody"),b(23,R,15,4,"tr",8,x),n()()()(),w(25,z,12,0,"ng-template",null,0,T)(27,Q,1,0,"app-loading")}e&2&&(c(5),S("ngModel",u.searchTerm),c(18),v(u.filteredWines()),c(4),h(u.isLoading?27:-1))},dependencies:[B,F,I,W,L,$],styles:[".wrapper[_ngcontent-%COMP%]{width:80%;margin:0 auto;padding:80px 20px;min-height:80vh;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;font-size:14px}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type{width:100%;display:flex;gap:20px;flex-direction:column;align-items:start}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%]{padding:10px;background-color:#4c0027;text-align:center;text-decoration:none;color:#f5e6ee;border-radius:8px;transition:.3s}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%]:hover{opacity:.8}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type   input[_ngcontent-%COMP%]{border:1px solid black}.wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type   input[_ngcontent-%COMP%]{width:300px}.wrapper[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{width:100%;overflow-x:auto}.wrapper[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] > table[_ngcontent-%COMP%]{width:100%}"]});let a=l;return a})();export{ee as AdminProductsComponent};
