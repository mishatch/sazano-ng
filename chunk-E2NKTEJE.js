import{t as a}from"./chunk-DINTEC56.js";import{Z as e,ca as s}from"./chunk-EN55G2KO.js";var c=(()=>{let t=class t{constructor(r){this.http=r,this.apiUrl="https://sazanowine-api-dev.azurewebsites.net/api"}addOrder(r){return this.http.post(`${this.apiUrl}/orders`,r)}getUserOrders(){return this.http.get(`${this.apiUrl}/identity/userOrders`)}};t.\u0275fac=function(o){return new(o||t)(s(a))},t.\u0275prov=e({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{c as a};
