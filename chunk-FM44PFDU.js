import{X as c,k as o}from"./chunk-GJXFDQ6V.js";var I=(()=>{let a=class a{constructor(){this.cartItems=new o(this.loadCartFromLocalStorage()),this.cartItems$=this.cartItems.asObservable(),this.cartItems$.subscribe(t=>{this.saveCartToLocalStorage(t)})}addToCart(t){let e=this.cartItems.getValue(),r=e.findIndex(s=>s.wine.id===t.id);r>-1?e[r].quantity++:e.push({wine:t,quantity:1}),this.cartItems.next(e)}decreaseQuantity(t){let e=this.cartItems.getValue(),r=e.findIndex(s=>s.wine.id===t.id);r>-1&&(e[r].quantity>1?(e[r].quantity--,this.cartItems.next(e)):this.removeFromCart(t))}removeFromCart(t){let r=this.cartItems.getValue().filter(s=>s.wine.id!==t.id);this.cartItems.next(r)}clearCart(){this.cartItems.next([])}getItem(t){return this.cartItems.getValue().find(e=>e.wine.id===t.id)}saveCartToLocalStorage(t){localStorage.setItem("cartItems",JSON.stringify(t))}loadCartFromLocalStorage(){let t=localStorage.getItem("cartItems");return t?JSON.parse(t):[]}};a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=c({token:a,factory:a.\u0275fac,providedIn:"root"});let i=a;return i})();export{I as a};
