/* =========================================================
   UNISTYLE — shared site behaviour
   ========================================================= */

function initNav(){
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if(toggle && links){
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const open = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", open);
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  // mark active link
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    if(a.dataset.page === path) a.classList.add("active");
  });
}

let toastTimer = null;
function showToast(message){
  let toast = document.querySelector(".toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function initFooterYear(){
  const el = document.querySelector("[data-year]");
  if(el) el.textContent = new Date().getFullYear();
}

function initNewsletter(){
  const form = document.querySelector("[data-newsletter]");
  if(!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    showToast("You're on the list — welcome to UniStyle.");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFooterYear();
  initNewsletter();
});
