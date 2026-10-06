const $ = (s) => document.querySelector(s);
const page = document.body.dataset.page;
const params = new URLSearchParams(location.search);
const current = params.get("area");
$("header").innerHTML = `<div class="wrap"><a class="logo" href="index.html">${OWNER}<span class="red">.</span></a>
<nav class="label">${AREAS.map(a=>`<a href="work.html?area=${a.slug}" class="${page==="work"&&current===a.slug?"active":""}">${a.name}</a>`).join("")}
<a href="about.html" class="${page==="about"?"active":""}">About</a></nav></div>`;
$("footer").innerHTML = `<div class="wrap label muted"><span>© ${new Date().getFullYear()} ${OWNER}</span><a href="mailto:${EMAIL}">${EMAIL}</a></div>`;
document.querySelectorAll("[data-owner]").forEach(e=>e.textContent=OWNER);
document.querySelectorAll("[data-email]").forEach(e=>{e.href="mailto:"+EMAIL;e.textContent=EMAIL+" →"});
if (page==="home") {
  $("#area-names").textContent = AREAS.map(a=>a.name).join(" / ");
  $("#areas").innerHTML = AREAS.map((a,i)=>`<a class="area" href="work.html?area=${a.slug}">
    <span class="label muted num">0${i+1}</span><div><h2>${a.name}</h2><p>${a.intro}</p></div>
    <span class="label">${a.items.length} works →</span></a>`).join("");
  document.title = `${OWNER} — Portfolio`;
}
if (page==="work") {
  const a = AREAS.find(x=>x.slug===current) || AREAS[0];
  document.title = `${a.name} — ${OWNER}`;
  $("#work").innerHTML = `<section class="page-head reveal"><p class="label red">Work / ${a.name}</p>
    <h1>${a.name}<span class="red">.</span></h1><p class="intro muted">${a.intro}</p></section>
    <div class="grid">${a.items.map(it=>`<article class="item reveal">
      ${it.image?`<div class="thumb"><img src="${it.image}" alt="${it.title}" loading="lazy"></div>`:`<div class="thumb text">${it.title}</div>`}
      <div class="item-row"><h2>${it.title}</h2><span class="label muted">${it.year}</span></div>
      <p class="muted">${it.text}</p></article>`).join("")}</div>`;
}
if (page==="about") document.title = `About & Contact — ${OWNER}`;
