/* =========================================================
   UNISTYLE — cart (localStorage only, no backend/payment)
   Cart shape: [{ id, size, qty }, ...]
   ========================================================= */
const CART_KEY = "unistyle_cart";
const ORDERS_KEY = "unistyle_orders";

function getCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch(e){ return []; }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, size, qty){
  const cart = getCart();
  const existing = cart.find(item => item.id === id && item.size === size);
  if(existing){
    existing.qty += qty;
  }else{
    cart.push({ id, size, qty });
  }
  saveCart(cart);
}

function removeFromCart(index){
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartQty(index, qty){
  const cart = getCart();
  if(!cart[index]) return;
  cart[index].qty = Math.max(1, qty);
  saveCart(cart);
}

function getCartCount(){
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartLines(){
  return getCart().map((item, index) => {
    const product = getProductById(item.id);
    return product ? { ...item, index, product } : null;
  }).filter(Boolean);
}

function getCartSubtotal(){
  return getCartLines().reduce((sum, line) => sum + line.product.price * line.qty, 0);
}

const SHIPPING_FLAT = 6;

function getCartTotals(){
  const subtotal = getCartSubtotal();
  const shipping = subtotal > 0 ? SHIPPING_FLAT : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}

function clearCart(){
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function updateCartBadge(){
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const count = getCartCount();
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function placeOrder(customer){
  const lines = getCartLines();
  const totals = getCartTotals();
  const order = {
    id: "UNI-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    date: new Date().toISOString(),
    customer,
    lines: lines.map(l => ({ name: l.product.name, size: l.size, qty: l.qty, price: l.product.price })),
    totals
  };
  const orders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  orders.push(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  clearCart();
  return order;
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
