import{b as p}from"./chunk-2AIMIJSB.js";import{Ca as g,Pa as r,Sa as h,Z as o,ca as c,ha as u,k as l}from"./chunk-PT4IFWSI.js";var m=(()=>{let e=class e{constructor(t){this.translate=t,this.languageSubject=new l("geo"),this.language$=this.languageSubject.asObservable();let s=localStorage.getItem("lang")||"geo";this.languageSubject.next(s),this.translate.use(s)}switchLanguage(t){this.translate.use(t),this.languageSubject.next(t),localStorage.setItem("lang",t)}getCurrentLanguage(){return this.languageSubject.value}};e.\u0275fac=function(s){return new(s||e)(c(p))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var S=(()=>{let e=class e{constructor(t,s,n){this.el=t,this.renderer=s,this.languageService=n,this.previousClass=null}ngOnInit(){this.languageService.language$.subscribe(t=>{let[s,n,f]=this.langClasses.split(",").map(v=>v.trim()),a;t==="geo"?a=s:t==="en"?a=n:t==="ru"&&(a=f),this.previousClass&&this.renderer.removeClass(this.el.nativeElement,this.previousClass),a&&(this.renderer.addClass(this.el.nativeElement,a),this.previousClass=a)})}};e.\u0275fac=function(s){return new(s||e)(r(g),r(h),r(m))},e.\u0275dir=u({type:e,selectors:[["","appLangClass",""]],inputs:{langClasses:[0,"appLangClass","langClasses"]},standalone:!0});let i=e;return i})();export{m as a,S as b};
