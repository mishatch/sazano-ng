import{$ as D,Ba as x,E as $,G as w,Lb as z,Oa as L,Q as P,Ra as X,S as R,Y as f,Z as H,a as I,ba as o,fa as q,ga as M,ha as J,k as B,n as h,p as g,r as A,ta as j,u as V,v as F,w as G,ya as p}from"./chunk-2BVFNTRB.js";var v=class{},W=(()=>{class n extends v{getTranslation(e){return h({})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=j(n)))(s||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),y=class{},Z=(()=>{class n{handle(e){return e.key}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})();function S(n,a){if(n===a)return!0;if(n===null||a===null)return!1;if(n!==n&&a!==a)return!0;let e=typeof n,t=typeof a,s,i,r;if(e==t&&e=="object")if(Array.isArray(n)){if(!Array.isArray(a))return!1;if((s=n.length)==a.length){for(i=0;i<s;i++)if(!S(n[i],a[i]))return!1;return!0}}else{if(Array.isArray(a))return!1;r=Object.create(null);for(i in n){if(!S(n[i],a[i]))return!1;r[i]=!0}for(i in a)if(!(i in r)&&typeof a[i]<"u")return!1;return!0}return!1}function c(n){return typeof n<"u"&&n!==null}function _(n){return n&&typeof n=="object"&&!Array.isArray(n)}function ee(n,a){let e=Object.assign({},n);return _(n)&&_(a)&&Object.keys(a).forEach(t=>{_(a[t])?t in n?e[t]=ee(n[t],a[t]):Object.assign(e,{[t]:a[t]}):Object.assign(e,{[t]:a[t]})}),e}var C=class{},Q=(()=>{class n extends C{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){let s;return typeof e=="string"?s=this.interpolateString(e,t):typeof e=="function"?s=this.interpolateFunction(e,t):s=e,s}getValue(e,t){let s=typeof t=="string"?t.split("."):[t];t="";do t+=s.shift(),c(e)&&c(e[t])&&(typeof e[t]=="object"||!s.length)?(e=e[t],t=""):s.length?t+=".":e=void 0;while(s.length);return e}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(s,i)=>{let r=this.getValue(t,i);return c(r)?r:s}):e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=j(n)))(s||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),b=class{},Y=(()=>{class n extends b{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=j(n)))(s||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),E=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new p;onLangChange=new p;onDefaultLangChange=new p},O=new D("USE_STORE"),N=new D("USE_DEFAULT_LANG"),K=new D("DEFAULT_LANGUAGE"),U=new D("USE_EXTEND"),T=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new p;_onLangChange=new p;_onDefaultLangChange=new p;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,t,s,i,r,l=!0,u=!1,d=!1,m){this.store=e,this.currentLoader=t,this.compiler=s,this.parser=i,this.missingTranslationHandler=r,this.useDefaultLang=l,this.isolate=u,this.extend=d,m&&this.setDefaultLang(m)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(this.defaultLang==null&&(this.defaultLang=e),t.pipe(w(1)).subscribe(s=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return h(this.translations[e]);let t=this.retrieveTranslations(e);return typeof t<"u"?(this.currentLang||(this.currentLang=e),t.pipe(w(1)).subscribe(s=>{this.changeLang(e)}),t):(this.changeLang(e),h(this.translations[e]))}retrieveTranslations(e){let t;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),t=this._translationRequests[e]),t}getTranslation(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(P(1),w(1));return this.loadingTranslations=t.pipe(A(s=>this.compiler.compileTranslations(s,e)),P(1),w(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[e]=this.extend&&this.translations[e]?I(I({},s),this.translations[e]):s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),t}setTranslation(e,t,s=!1){t=this.compiler.compileTranslations(t,e),(s||this.extend)&&this.translations[e]?this.translations[e]=ee(this.translations[e],t):this.translations[e]=t,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(t=>{this.langs.indexOf(t)===-1&&this.langs.push(t)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,t,s){let i;if(t instanceof Array){let r={},l=!1;for(let u of t)r[u]=this.getParsedResult(e,u,s),g(r[u])&&(l=!0);if(l){let u=t.map(d=>g(r[d])?r[d]:h(r[d]));return G(u).pipe(A(d=>{let m={};return d.forEach((ne,se)=>{m[t[se]]=ne}),m}))}return r}if(e&&(i=this.parser.interpolate(this.parser.getValue(e,t),s)),typeof i>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(i=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],t),s)),typeof i>"u"){let r={key:t,translateService:this};typeof s<"u"&&(r.interpolateParams=s),i=this.missingTranslationHandler.handle(r)}return typeof i<"u"?i:t}get(e,t){if(!c(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe($(s=>(s=this.getParsedResult(s,e,t),g(s)?s:h(s))));{let s=this.getParsedResult(this.translations[this.currentLang],e,t);return g(s)?s:h(s)}}getStreamOnTranslationChange(e,t){if(!c(e)||!e.length)throw new Error('Parameter "key" required');return V(F(()=>this.get(e,t)),this.onTranslationChange.pipe(R(s=>{let i=this.getParsedResult(s.translations,e,t);return typeof i.subscribe=="function"?i:h(i)})))}stream(e,t){if(!c(e)||!e.length)throw new Error('Parameter "key" required');return V(F(()=>this.get(e,t)),this.onLangChange.pipe(R(s=>{let i=this.getParsedResult(s.translations,e,t);return g(i)?i:h(i)})))}instant(e,t){if(!c(e)||!e.length)throw new Error('Parameter "key" required');let s=this.getParsedResult(this.translations[this.currentLang],e,t);if(g(s)){if(e instanceof Array){let i={};return e.forEach((r,l)=>{i[e[l]]=e[l]}),i}return e}else return s}set(e,t,s=this.currentLang){this.translations[s][e]=this.compiler.compile(t,s),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;if(e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof e>"u"))return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e.indexOf("_")!==-1&&(e=e.split("_")[0]),e}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}static \u0275fac=function(t){return new(t||n)(o(E),o(v),o(b),o(C),o(y),o(N),o(O),o(U),o(K))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})();var pe=(()=>{class n{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,t){this.translate=e,this._ref=t}updateValue(e,t,s){let i=r=>{this.value=r!==void 0?r:e,this.lastKey=e,this._ref.markForCheck()};if(s){let r=this.translate.getParsedResult(s,e,t);g(r.subscribe)?r.subscribe(i):i(r)}this.translate.get(e,t).subscribe(i)}transform(e,...t){if(!e||!e.length)return e;if(S(e,this.lastKey)&&S(t,this.lastParams))return this.value;let s;if(c(t[0])&&t.length)if(typeof t[0]=="string"&&t[0].length){let i=t[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{s=JSON.parse(i)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else typeof t[0]=="object"&&!Array.isArray(t[0])&&(s=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,s),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(i=>{this.lastKey&&i.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,s,i.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(i=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,s,i.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,s))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||n)(L(T,16),L(z,16))};static \u0275pipe=J({name:"translate",type:n,pure:!1});static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Le=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[e.loader||{provide:v,useClass:W},e.compiler||{provide:b,useClass:Y},e.parser||{provide:C,useClass:Q},e.missingTranslationHandler||{provide:y,useClass:Z},E,{provide:O,useValue:e.isolate},{provide:N,useValue:e.useDefaultLang},{provide:U,useValue:e.extend},{provide:K,useValue:e.defaultLanguage},T]}}static forChild(e={}){return{ngModule:n,providers:[e.loader||{provide:v,useClass:W},e.compiler||{provide:b,useClass:Y},e.parser||{provide:C,useClass:Q},e.missingTranslationHandler||{provide:y,useClass:Z},{provide:O,useValue:e.isolate},{provide:N,useValue:e.useDefaultLang},{provide:U,useValue:e.extend},{provide:K,useValue:e.defaultLanguage},T]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=q({type:n});static \u0275inj=H({})}return n})();var te=(()=>{let a=class a{constructor(t){this.translate=t,this.languageSubject=new B("geo"),this.language$=this.languageSubject.asObservable();let s=localStorage.getItem("lang")||"geo";this.languageSubject.next(s),this.translate.use(s)}switchLanguage(t){this.translate.use(t),this.languageSubject.next(t),localStorage.setItem("lang",t)}getCurrentLanguage(){return this.languageSubject.value}};a.\u0275fac=function(s){return new(s||a)(o(T))},a.\u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"});let n=a;return n})();var be=(()=>{let a=class a{constructor(t,s,i){this.el=t,this.renderer=s,this.languageService=i,this.previousClass=null}ngOnInit(){this.languageService.language$.subscribe(t=>{let[s,i,r]=this.langClasses.split(",").map(u=>u.trim()),l;t==="geo"?l=s:t==="en"?l=i:t==="ru"&&(l=r),this.previousClass&&this.renderer.removeClass(this.el.nativeElement,this.previousClass),l&&(this.renderer.addClass(this.el.nativeElement,l),this.previousClass=l)})}};a.\u0275fac=function(s){return new(s||a)(L(x),L(X),L(te))},a.\u0275dir=M({type:a,selectors:[["","appLangClass",""]],inputs:{langClasses:[0,"appLangClass","langClasses"]},standalone:!0});let n=a;return n})();export{v as a,pe as b,Le as c,te as d,be as e};
