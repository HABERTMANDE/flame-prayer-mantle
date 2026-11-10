function enterSite(){
  var splash = document.getElementById('splash');
  if(splash){
    splash.classList.add('hide');
    splash.style.setProperty('opacity','0','important');
    splash.style.setProperty('visibility','hidden','important');
    splash.style.setProperty('display','none','important');
    splash.style.setProperty('pointer-events','none','important');
  }
  document.body.style.setProperty('overflow','auto','important');
  document.body.style.setProperty('overflow-y','auto','important');
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

// === COUNTDOWN ===
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
  if(splash){
    splash.classList.add('hide');
    splash.style.setProperty('display','none','important');
  }
  document.body.style.setProperty('overflow','auto','important');
  window.scrollTo({top:0, behavior:'smooth'});
}

/* === 3. FIXED - MAIN MENU -> NEXT STEPS === */
function showPage(id){
  var home = document.getElementById('home-sections');
  var hero = document.querySelector('.hero');
  var poster = document.querySelector('.koinonia-poster');
  var countdown = document.querySelector('.koinonia-countdown');
  if(home) home.style.setProperty('display','none','important');
  if(hero){ hero.style.setProperty('display','none','important'); hero.style.filter=''; hero.style.opacity=''; hero.style.transform=''; }
  if(poster){ poster.style.setProperty('display','none','important'); poster.style.filter=''; poster.style.opacity=''; }
  if(countdown){ countdown.style.setProperty('display','none','important'); countdown.style.filter=''; countdown.style.opacity=''; }
  document.querySelectorAll('.page-section').forEach(function(s){
    s.classList.remove('active');
    s.style.setProperty('display','none','important');
  });
  var el = document.getElementById(id);
  if(el){
    el.classList.add('active');
    el.style.setProperty('display','block','important');
    // MOD: blur-in for page-section - starts blurred then sharpens
    el.style.filter = 'blur(12px)';
    el.style.opacity = '0';
    requestAnimationFrame(function(){
      setTimeout(function(){
        el.style.transition = 'filter .6s ease, opacity .6s ease';
        el.style.filter = 'blur(0)';
        el.style.opacity = '1';
      }, 30);
    });
    el.querySelectorAll('.reveal, .card, .vision-box, .blur-reveal').forEach(function(c){
      c.classList.add('visible');
      c.style.setProperty('opacity','1','important');
      c.style.setProperty('transform','none','important');
      c.style.filter = 'blur(0)';
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
  if(home) home.style.setProperty('display','block','important');
  if(hero){ hero.style.setProperty('display','block','important'); hero.style.filter=''; hero.style.opacity=''; hero.style.transform=''; }
  if(poster){ poster.style.setProperty('display','flex','important'); poster.style.filter=''; poster.style.opacity=''; }
  if(countdown){ countdown.style.setProperty('display','flex','important'); countdown.style.filter=''; countdown.style.opacity=''; }
  document.querySelectorAll('.page-section').forEach(function(s){
    s.classList.remove('active'); s.style.setProperty('display','none','important');
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
    if(home) home.style.setProperty('display','none','important');
    if(hero) hero.style.setProperty('display','none','important');
    if(poster) poster.style.setProperty('display','none','important');
    if(countdown) countdown.style.setProperty('display','none','important');
    document.querySelectorAll('.page-section').forEach(function(s){
      s.classList.remove('active'); s.style.setProperty('display','none','important');
    });
    var el = document.getElementById(ev.state.page);
    if(el){
      el.classList.add('active'); el.style.setProperty('display','block','important');
      el.querySelectorAll('.reveal, .card').forEach(function(c){
        c.classList.add('visible'); c.style.setProperty('opacity','1','important'); c.style.setProperty('transform','none','important');
      });
    }
  } else {
    if(home) home.style.setProperty('display','block','important');
    if(hero) hero.style.setProperty('display','block','important');
    if(poster) poster.style.setProperty('display','flex','important');
    if(countdown) countdown.style.setProperty('display','flex','important');
    document.querySelectorAll('.page-section').forEach(function(s){
      s.classList.remove('active'); s.style.setProperty('display','none','important');
    });
  }
});

/* 1. NO QUIZ - BACK TO ENTRANCE CLEAN */
function backToEntrance(){
  var s = document.getElementById('splash');
  if(s){
    s.classList.remove('hide');
    s.style.setProperty('display','flex','important');
    s.style.setProperty('opacity','1','important');
    s.style.setProperty('visibility','visible','important');
    s.style.setProperty('pointer-events','auto','important');
  }
  var btn = document.getElementById('enterBtn'); if(btn){ btn.style.display = ''; btn.textContent = 'ENTER'; }
  document.body.style.setProperty('overflow','hidden','important');
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

/* ===== NEW: SCROLL BLUR - AS YOU SCROLL IT BLURS + DISAPPEARS IN ===== */
var heroEl = document.querySelector('.hero');
var posterEl = document.querySelector('.koinonia-poster');
var countEl = document.querySelector('.koinonia-countdown');
var ticking = false;
function onScrollBlur(){
  var y = window.scrollY || 0;
  var p = Math.min(y / 300, 1);
  if(heroEl){
    heroEl.style.filter = 'blur(' + (p * 12) + 'px)';
    heroEl.style.opacity = String(1 - p * 0.9);
    heroEl.style.transform = 'translateY(' + (p * -30) + 'px) scale(' + (1 - p * 0.03) + ')';
  }
  if(posterEl){
    var p2 = Math.min(y / 500, 1);
    posterEl.style.filter = 'blur(' + (p2 * 10) + 'px)';
    posterEl.style.opacity = String(1 - p2 * 0.9);
  }
  if(countEl){
    var p3 = Math.min(Math.max((y - 200) / 300, 0), 1);
    countEl.style.filter = 'blur(' + (p3 * 10) + 'px)';
    countEl.style.opacity = String(1 - p3 * 0.9);
  }
  ticking = false;
}
window.addEventListener('scroll', function(){
  if(!ticking){ requestAnimationFrame(onScrollBlur); ticking = true; }
}, {passive:true});

/* ===== NEW: SECTIONS BLUR-IN AS THEY COME INTO VIEW ===== */
var blurIO = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold: 0.12});
document.querySelectorAll('#home-sections section, #home-sections .card, #home-sections .give, #event-home .event').forEach(function(el){
  el.classList.add('blur-reveal'); blurIO.observe(el);
});

document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('enterBtn');
  if(btn){
    btn.addEventListener('click', handleEnter);
  }
  var v = document.getElementById('bg-video');
  if(v){ v.muted = true; v.play().catch(function(){}); }
});