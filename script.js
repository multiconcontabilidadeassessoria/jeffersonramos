(function(){
var b=document.querySelector('.burger'),m=document.getElementById('menu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
var a=document.getElementById('ano');if(a)a.textContent=new Date().getFullYear();
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('in')})}
var f=document.getElementById('form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=document.getElementById('status');
if(!f.nome.value.trim()||!/^\S+@\S+\.\S+$/.test(f.email.value)||!f.msg.value.trim()||!document.getElementById('ok').checked){s.textContent='Preencha todos os campos e aceite a Política de Privacidade.';return}
location.href='mailto:contato@jrradv.com.br?subject='+encodeURIComponent('Contato pelo site - '+f.nome.value)+'&body='+encodeURIComponent(f.msg.value+'\n\n'+f.nome.value+' - '+f.email.value);
s.textContent='Abrindo seu programa de e-mail...'})}
try{if(!localStorage.getItem('ck')){var c=document.createElement('div');c.className='cookie';c.setAttribute('role','dialog');c.setAttribute('aria-label','Aviso de cookies');
c.innerHTML='<span>Usamos cookies para melhorar sua experiência e medir o desempenho do site. Veja a <a href="politica-de-privacidade.html">Política de Privacidade</a>.</span><button class="btn btn-sm" type="button">Entendi</button>';
c.querySelector('button').onclick=function(){localStorage.setItem('ck','1');c.remove()};document.body.appendChild(c)}}catch(e){}
})();
