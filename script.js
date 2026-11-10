function enterSite(){
  var splash = document.getElementById('splash');
  if(splash){
    splash.classList.add('hide');
    splash.style.opacity = '0';
    splash.style.visibility = 'hidden';
    splash.style.display = 'none';
  }
  document.body.style.overflow = 'auto';
  document.body.style.overflowY = 'auto';
  window.scrollTo(0,0);
}

if(document.getElementById('splash')){
  document.body.style.overflow = 'hidden';
}

// === SUN / MOON THEME ===
function toggleTheme(){
  document.body.classList.toggle('light-mode');
  var b = document.getElementById('themeBtn');
  if(b) b.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
}

function sendPrayer(){
  var nEl = document.getElementById('pname');
  var pEl = document.getElementById('pphone');
  var rEl = document.getElementById('prequest');
  var n = nEl ? nEl.value : '';
  var p = pEl ? pEl.value : '';
  var r = rEl ? rEl.value : '';
  var msg = "Hello FLAME Prayer Mantle, I need prayer.%0AName: " + encodeURIComponent(n) + "%0AMy Number: " + encodeURIComponent(p) + "%0ARequest: " + encodeURIComponent(r);
  window.open("https://wa.me/254795155158?text=" + msg, "_blank");
}

function sendSaved(){
  var nEl = document.getElementById('sname');
  var pEl = document.getElementById('sphone');
  var n = nEl ? nEl.value : '';
  var p = pEl ? pEl.value : '';
  var msg = "Hello FLAME Prayer Mantle, I JUST GAVE MY LIFE TO JESUS! 🔥%0AName: " + encodeURIComponent(n) + "%0AMy Number: " + encodeURIComponent(p) + "%0APlease pray for me and help me grow.";
  window.open("https://wa.me/254795155158?text=" + msg, "_blank");
}

// === COUNTDOWN - TOP + NAIROBI - DAYS TO SECS ===
function updateCountdown(){
  var target = new Date("2027-02-06T10:00:00+03:00").getTime();
  var now = new Date().getTime();
  var diff = target - now;
  if(diff < 0){ diff = 0; }
  var d = Math.floor(diff / (1000*60*60*24));
  var h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  var m = Math.floor((diff % (1000*60*60)) / (1000*60));
  var s = Math.floor((diff % (1000*60)) / 1000);
  var elD = document.getElementById('cd-days');
  if(elD){
    elD.textContent = d;
    var hEl = document.getElementById('cd-hours'); if(hEl) hEl.textContent = h;
    var mEl = document.getElementById('cd-mins'); if(mEl) mEl.textContent = m;
    var sEl = document.getElementById('cd-secs'); if(sEl) sEl.textContent = s;
  }
  var td = document.getElementById('cd-top-days'); if(td) td.textContent = d;
  var th = document.getElementById('cd-top-hours'); if(th) th.textContent = h;
  var tm = document.getElementById('cd-top-mins'); if(tm) tm.textContent = m;
  var ts = document.getElementById('cd-top-secs'); if(ts) ts.textContent = s;
  var old = document.getElementById('cd-days-top'); if(old) old.textContent = d;
}
setInterval(updateCountdown, 1000);
updateCountdown();

function toggleMenu(){
  var nav = document.getElementById('navLinks');
  if(nav){ nav.classList.toggle('open'); }
  var btn = document.getElementById('menuBtn');
  if(btn){ btn.classList.toggle('open'); }
}
function closeMenu(){
  var nav = document.getElementById('navLinks');
  if(nav){ nav.classList.remove('open'); }
  var btn = document.getElementById('menuBtn');
  if(btn){ btn.classList.remove('open'); }
}
function goHome(e){
  if(e){ e.preventDefault(); }
  var splash = document.getElementById('splash');
  if(splash){ splash.classList.add('hide'); splash.style.display = 'none'; }
  document.body.style.overflow = 'auto';
  window.scrollTo({top:0, behavior:'smooth'});
}

/* === 3. FIXED - MAIN MENU -> NEXT STEPS - FORCES DISPLAY === */
function showPage(id){
  var home = document.getElementById('home-sections');
  var hero = document.querySelector('.hero');
  var poster = document.querySelector('.koinonia-poster');
  var countdown = document.querySelector('.koinonia-countdown');
  if(home) home.style.display = 'none';
  if(hero) hero.style.display = 'none';
  if(poster) poster.style.display = 'none';
  if(countdown) countdown.style.display = 'none';
  document.querySelectorAll('.page-section').forEach(function(s){
    s.classList.remove('active');
    s.style.display = 'none';
  });
  var el = document.getElementById(id);
  if(el){
    el.classList.add('active');
    el.style.display = 'block';
    // Force cards visible - kills the empty bug
    el.querySelectorAll('.reveal, .card, .vision-box').forEach(function(c){
      c.classList.add('visible');
      c.style.opacity = '1';
      c.style.transform = 'none';
    });
  }
  window.scrollTo({top:0, behavior:'smooth'});
  try{ history.pushState({page:id}, '', '#'+id); }catch(e){}
}
function showHome(e){
  if(e) e.preventDefault();
  var home = document.getElementById('home-sections');
  var hero = document.querySelector('.hero');
  var poster = document.querySelector('.koinonia-poster');
  var countdown = document.querySelector('.koinonia-countdown');
  if(home) home.style.display = 'block';
  if(hero) hero.style.display = 'block';
  if(poster) poster.style.display = 'flex';
  if(countdown) countdown.style.display = 'flex';
  document.querySelectorAll('.page-section').forEach(function(s){
    s.classList.remove('active'); s.style.display = 'none';
  });
  window.scrollTo({top:0, behavior:'smooth'});
  try{ history.pushState({page:'home'}, '', '#home'); }catch(e){}
}
window.addEventListener('popstate', function(ev){
  var home = document.getElementById('home-sections');
  var hero = document.querySelector('.hero');
  var poster = document.querySelector('.koinonia-poster');
  var countdown = document.querySelector('.koinonia-countdown');
  if(ev.state && ev.state.page && ev.state.page !== 'home'){
    if(home) home.style.display = 'none';
    if(hero) hero.style.display = 'none';
    if(poster) poster.style.display = 'none';
    if(countdown) countdown.style.display = 'none';
    document.querySelectorAll('.page-section').forEach(function(s){
      s.classList.remove('active'); s.style.display = 'none';
    });
    var el = document.getElementById(ev.state.page);
    if(el){
      el.classList.add('active'); el.style.display = 'block';
      el.querySelectorAll('.reveal, .card').forEach(function(c){
        c.classList.add('visible'); c.style.opacity = '1'; c.style.transform = 'none';
      });
    }
  } else {
    if(home) home.style.display = 'block';
    if(hero) hero.style.display = 'block';
    if(poster) poster.style.display = 'flex';
    if(countdown) countdown.style.display = 'flex';
    document.querySelectorAll('.page-section').forEach(function(s){
      s.classList.remove('active'); s.style.display = 'none';
    });
  }
});

/* 1. NO QUIZ - BACK TO ENTRANCE CLEAN */
function backToEntrance(){
  var s = document.getElementById('splash');
  if(s){ s.classList.remove('hide'); s.style.display = 'flex'; s.style.opacity = '1'; s.style.visibility = 'visible'; }
  var btn = document.getElementById('enterBtn'); if(btn){ btn.style.display = ''; btn.textContent = 'ENTER'; }
  document.body.style.overflow = 'hidden';
  window.scrollTo(0,0);
}
function toggleFAQ(){
  var p = document.getElementById('faq-popup');
  var b = document.getElementById('helpBubble');
  if(!p) return;
  var isOpen = p.classList.toggle('open');
  if(b) b.style.display = isOpen ? 'none' : 'block';
}
function toggleAns(btn){ btn.classList.toggle('open'); }

/* 1. NO QUESTION BEFORE ENTER - DIRECT ENTER */
function handleEnter(){
  enterSite();
}
function showQuiz(){ handleEnter(); }
function checkAnswer(){ handleEnter(); }

/* 2. WORD ANIMATIONS - 2819.COM STYLE */
var rotWords = ['Flame.','Light.','Fire.','Voice.'];
var rotI = 0;
setInterval(function(){
  var el = document.getElementById('rotWord');
  if(!el) return;
  el.style.opacity = '0';
  setTimeout(function(){
    rotI = (rotI + 1) % rotWords.length;
    el.textContent = rotWords[rotI];
    el.style.opacity = '1';
  }, 300);
}, 2000);

var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.1});
document.querySelectorAll('#home-sections section, #home-sections .card').forEach(function(el){
  el.classList.add('reveal'); io.observe(el);
});

document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('enterBtn');
  if(btn){ btn.addEventListener('click', handleEnter); }
  var v = document.getElementById('bg-video');
  if(v){ v.muted = true; v.play().catch(function(){}); }
});