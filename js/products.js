/* =========================================================
   UNISTYLE — product catalog + garment icon generator
   No external image files: every product is rendered as a
   flat, stitch-outlined garment icon tinted to its swatch.
   Swap `icon`/`swatch` per product, or later replace the
   getGarmentSVG() call with a real <img> tag — see README.
   ========================================================= */

const INK = "#16151c";

function getGarmentSVG(type, fill){
  const stitch = `stroke-dasharray="4 3" stroke="${INK}" stroke-width="1.5" fill="none"`;
  const outline = `stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
  let inner = "";
  switch(type){
    case "hoodie":
      inner = `
        <path d="M50 5 C39 5 31 13 31 23 L31 29 L20 40 L27 47 L34 40 L34 92 L66 92 L66 40 L73 47 L80 40 L69 29 L69 23 C69 13 61 5 50 5 Z" fill="${fill}" ${outline}/>
        <path d="M40 26 C40 35 45 39 50 39 C55 39 60 35 60 26" fill="none" ${stitch}/>
        <rect x="39" y="66" width="22" height="15" rx="2" fill="none" ${stitch}/>`;
      break;
    case "jacket":
      inner = `
        <path d="M50 6 L38 14 L26 10 L14 26 L23 36 L30 30 L30 92 L70 92 L70 30 L77 36 L86 26 L74 10 L62 14 Z" fill="${fill}" ${outline}/>
        <line x1="50" y1="16" x2="50" y2="90" ${stitch}/>
        <path d="M38 14 L45 30 L38 40" fill="none" stroke="${INK}" stroke-width="2"/>
        <path d="M62 14 L55 30 L62 40" fill="none" stroke="${INK}" stroke-width="2"/>`;
      break;
    case "sweater":
      inner = `
        <path d="M36 8 L50 15 L64 8 L88 22 L76 38 L66 31 L66 92 L34 92 L34 31 L24 38 L12 22 Z" fill="${fill}" ${outline}/>
        <line x1="34" y1="82" x2="66" y2="82" ${stitch}/>
        <line x1="34" y1="40" x2="66" y2="40" ${stitch}/>`;
      break;
    case "tee":
      inner = `
        <path d="M35 8 L50 16 L65 8 L88 24 L74 40 L65 33 L65 92 L35 92 L35 33 L26 40 L12 24 Z" fill="${fill}" ${outline}/>
        <path d="M42 10 C44 16 56 16 58 10" fill="none" ${stitch}/>`;
      break;
    case "shirt":
      inner = `
        <path d="M35 8 L50 16 L65 8 L88 24 L74 40 L65 33 L65 92 L35 92 L35 33 L26 40 L12 24 Z" fill="${fill}" ${outline}/>
        <line x1="50" y1="18" x2="50" y2="90" ${stitch}/>
        <circle cx="50" cy="30" r="1.6" fill="${INK}"/>
        <circle cx="50" cy="46" r="1.6" fill="${INK}"/>
        <circle cx="50" cy="62" r="1.6" fill="${INK}"/>`;
      break;
    case "pants":
      inner = `
        <path d="M30 8 H70 L75 92 H58 L52 42 L48 92 H25 Z" fill="${fill}" ${outline}/>
        <line x1="30" y1="20" x2="70" y2="20" ${stitch}/>`;
      break;
    case "shorts":
      inner = `
        <path d="M28 10 H72 L75 55 H55 L52 48 L49 55 H25 Z" fill="${fill}" ${outline}/>
        <line x1="28" y1="22" x2="72" y2="22" ${stitch}/>`;
      break;
    case "skirt":
      inner = `
        <path d="M34 12 H66 L82 88 H18 Z" fill="${fill}" ${outline}/>
        <line x1="24" y1="50" x2="76" y2="50" ${stitch}/>`;
      break;
    case "dress":
      inner = `
        <path d="M38 6 L50 13 L62 6 L70 22 L62 30 L60 30 L72 90 H28 L40 30 L38 30 L30 22 Z" fill="${fill}" ${outline}/>
        <line x1="35" y1="55" x2="65" y2="55" ${stitch}/>`;
      break;
    case "cap":
      inner = `
        <path d="M18 58 C18 34 32 20 50 20 C68 20 82 34 82 58 Z" fill="${fill}" ${outline}/>
        <path d="M50 20 L50 58" fill="none" ${stitch}/>
        <path d="M50 58 H88 C88 58 84 68 68 68 L50 58Z" fill="${fill}" ${outline}/>`;
      break;
    case "tote":
      inner = `
        <rect x="20" y="32" width="60" height="54" rx="3" fill="${fill}" ${outline}/>
        <path d="M34 32 C34 18 44 12 50 12 C56 12 66 18 66 32" fill="none" stroke="${INK}" stroke-width="3"/>
        <line x1="20" y1="46" x2="80" y2="46" ${stitch}/>`;
      break;
    default:
      inner = `<rect x="25" y="15" width="50" height="70" fill="${fill}" ${outline}/>`;
  }
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${type}">${inner}</svg>`;
}

/* swatches kept inside the UniStyle palette family so the
   catalog always reads as one cohesive collection */
const SWATCHES = {
  cobalt:"#2b46ff", ink:"#16151c", paper:"#edeee7", clay:"#c8734f",
  olive:"#6b7455", stone:"#a9a49a", rust:"#a94726", cream:"#f1ead8",
  denim:"#3c5a78", sand:"#d9c6a0", moss:"#4c5c3f", plum:"#5b3a52"
};

const PRODUCTS = [
  {id:1,  name:"Seam Line Tee",          category:"Tops",       icon:"tee",     swatch:SWATCHES.cobalt, price:28, oldPrice:null, sizes:["XS","S","M","L","XL"], desc:"A boxy-fit tee in heavyweight cotton jersey with an exposed shoulder seam — the detail that gives the piece its name. Unisex block cut.", stock:true},
  {id:2,  name:"Everyday Oxford Shirt",  category:"Tops",       icon:"shirt",   swatch:SWATCHES.cream,  price:46, oldPrice:54,  sizes:["S","M","L","XL"], desc:"Brushed oxford cotton, mother-of-pearl buttons, and a relaxed collar built to be worn open over a tee or buttoned to the top.", stock:true},
  {id:3,  name:"Ridge Wool Sweater",     category:"Tops",       icon:"sweater", swatch:SWATCHES.olive,  price:64, oldPrice:null, sizes:["XS","S","M","L"], desc:"A midweight merino-blend crewneck knit on a rib stitch, finished with a dropped shoulder for a relaxed, unisex silhouette.", stock:true},
  {id:4,  name:"Trail Straight Jeans",   category:"Bottoms",    icon:"pants",   swatch:SWATCHES.denim,  price:58, oldPrice:null, sizes:["XS","S","M","L","XL"], desc:"Rigid selvedge denim cut straight through the leg with a mid-rise waist. Breaks in to fit exactly how you wear it.", stock:true},
  {id:5,  name:"Studio Wide-Leg Pant",   category:"Bottoms",    icon:"pants",   swatch:SWATCHES.stone,  price:52, oldPrice:null, sizes:["XS","S","M","L"], desc:"A fluid wide-leg trouser in brushed twill with a pressed center crease — dresses up or down without effort.", stock:true},
  {id:6,  name:"Dockside Short",         category:"Bottoms",    icon:"shorts",  swatch:SWATCHES.sand,   price:34, oldPrice:40,  sizes:["S","M","L","XL"], desc:"A five-inch inseam short in washed cotton canvas, built for warm days on either side of the counter.", stock:true},
  {id:7,  name:"Fieldwork Chore Jacket", category:"Outerwear",  icon:"jacket",  swatch:SWATCHES.rust,   price:88, oldPrice:null, sizes:["XS","S","M","L","XL"], desc:"A workwear staple in heavy cotton drill with triple-stitched seams and a boxy, unisex fit that layers over anything.", stock:true},
  {id:8,  name:"Harbor Hooded Pullover", category:"Outerwear",  icon:"hoodie",  swatch:SWATCHES.ink,    price:62, oldPrice:null, sizes:["XS","S","M","L","XL"], desc:"Heavyweight fleece with a lined hood and kangaroo pocket. The one you reach for on every low-key day.", stock:true},
  {id:9,  name:"Reversal Bomber",        category:"Outerwear",  icon:"jacket",  swatch:SWATCHES.plum,   price:96, oldPrice:112,  sizes:["S","M","L"], desc:"A reversible bomber — matte shell on one side, brushed melton on the other — with ribbed cuffs and hem.", stock:false},
  {id:10, name:"Wrap Midi Dress",        category:"Dresses",    icon:"dress",   swatch:SWATCHES.clay,   price:72, oldPrice:null, sizes:["XS","S","M","L"], desc:"A soft wrap dress in a drapey viscose blend with a self-tie waist and a hem that moves as you do.", stock:true},
  {id:11, name:"A-Line Denim Skirt", category:"Dresses", icon:"skirt", swatch:SWATCHES.denim,  price:48, oldPrice:null, sizes:["XS","S","M","L","XL"], desc:"Rigid denim cut into a clean A-line with a raw hem and a high rise — the anchor piece of a capsule wardrobe.", stock:true},
  {id:12, name:"Fieldnote Cap",          category:"Accessories",icon:"cap",     swatch:SWATCHES.moss,   price:22, oldPrice:null, sizes:["One Size"], desc:"A six-panel cap in washed twill with a low profile and an adjustable strap at the back.", stock:true},
  {id:13, name:"Canvas Market Tote",     category:"Accessories",icon:"tote",    swatch:SWATCHES.sand,   price:26, oldPrice:32,   sizes:["One Size"], desc:"Ten-ounce cotton canvas, reinforced base, and handles long enough to sling over one shoulder.", stock:true},
];

/* ---------- small helpers used across pages ---------- */
function formatPrice(n){ return "$" + n.toFixed(2); }
function getProductById(id){ return PRODUCTS.find(p => p.id === Number(id)); }
function getCategories(){ return [...new Set(PRODUCTS.map(p => p.category))]; }
