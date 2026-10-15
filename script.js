const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const opened=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?'Cerrar menú':'Abrir menú');toggle.textContent=opened?'✕':'☰';});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.1});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));}else{document.querySelectorAll('.reveal').forEach(element=>element.classList.add('visible'));}
