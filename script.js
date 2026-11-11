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

/* MODIFIED: clear blur - use removeProperty so it truly clears, not empty string with !important */
function clearBlur(el){
  if(!el) return;
  el.style.removeProperty('filter');
  el.style.removeProperty('opacity');
  el.style.removeProperty('transform');
  if(el.classList && el.classList.contains('hero')){
    el.style.setProperty('filter','blur(0)','important');
    el.style.setProperty('opacity','1','important');
    el.style.setProperty('transform','none','important');
  }
}

/* ===== NEW: REPLAY HOME ANIMATION ===== */
function replayHomeAnim(){
  var home = document.getElementById('home-sections');
  if(!home) return;
  home.style.setProperty('animation','none','important');
  void home.offsetWidth;
  home.style.removeProperty('animation');
  var cards = home.querySelectorAll('.card');
  cards.forEach(function(c,i){
    c.style.setProperty('animation','none','important');
    void c.offsetWidth;
    c.style.removeProperty('animation');
    c.style.setProperty('animation-delay',(i*0.15)+'s','important');
  });
}

function showPage(id){
  var home = document.getElementById('home-sections');
  var hero = document.querySelector('.hero');
  var poster = document.querySelector('.koinonia-poster');
  var countdown = document.querySelector('.koinonia-countdown');
  if(home) home.style.setProperty('display','none','important');
  if(hero){ hero.style.setProperty('display','none','important'); clearBlur(hero); }
  if(poster){ poster.style.setProperty('display','none','important'); clearBlur(poster); }
  if(countdown){ countdown.style.setProperty('display','none','important'); clearBlur(countdown); }
  document.querySelectorAll('.page-section').forEach(function(s){
    s.classList.remove('active');
    s.style.setProperty('display','none','important');
  });
  var el = document.getElementById(id);
  if(el){
    el.classList.add('active');
    el.style.setProperty('display','block','important');
    el.style.setProperty('filter','blur(12px)','important');
    el.style.setProperty('opacity','0','important');
    requestAnimationFrame(function(){
      setTimeout(function(){
        el.style.setProperty('transition','filter .6s ease, opacity .6s ease','important');
        el.style.setProperty('filter','blur(0)','important');
        el.style.setProperty('opacity','1','important');
      }, 30);
    });
    el.querySelectorAll('.reveal, .card, .vision-box, .blur-reveal').forEach(function(c){
      c.classList.add('visible');
      c.style.setProperty('opacity','1','important');
      c.style.setProperty('transform','none','important');
      c.style.setProperty('filter','blur(0)','important');
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
  if(hero){ hero.style.setProperty('display','block','important'); clearBlur(hero); }
  if(poster){ poster.style.setProperty('display','flex','important'); clearBlur(poster); }
  if(countdown){ countdown.style.setProperty('display','flex','important'); clearBlur(countdown); }
  document.querySelectorAll('.page-section').forEach(function(s){
    s.classList.remove('active'); s.style.setProperty('display','none','important');
  });
  replayHomeAnim();
  window.scrollTo({top:0, behavior:'smooth'});
  try{ history.pushState({page:'home'}, '', '#home'); }catch(e){}
}

/* FIX 1 - GIVE BUTTON: go home then scroll to #give */
function showGive(e){
  if(e) e.preventDefault();
  closeMenu();
  showHome(null);
  setTimeout(function(){
    var g = document.getElementById('give');
    if(g){ g.scrollIntoView({behavior:'smooth', block:'start'}); }
    try{ history.pushState({page:'home'}, '', '#give'); }catch(err){}
  }, 150);
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
    replayHomeAnim();
  }
});

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

/* ===== NEW: SCRIPTURE-OPEN ENTRANCE - FIXED ===== */
function handleEnter(){
  var splash = document.getElementById('splash');
  if(splash){
    splash.classList.add('hide');
    splash.style.setProperty('opacity','0','important');
    splash.style.setProperty('visibility','hidden','important');
    splash.style.setProperty('display','none','important');
    splash.style.setProperty('pointer-events','none','important');
  }
  var ov = document.getElementById('entranceOverlay');
  if(ov){
    ov.classList.add('show');
    setTimeout(function(){ ov.classList.add('open'); }, 350);
    setTimeout(function(){
      ov.classList.remove('show','open');
      document.body.style.setProperty('overflow','auto','important');
      document.body.style.setProperty('overflow-y','auto','important');
      showHome(null);
      window.scrollTo(0,0);
      setTimeout(function(){ window.scrollTo(0,0); }, 100);
    }, 1900);
  } else {
    enterSite();
    showHome(null);
    window.scrollTo(0,0);
    setTimeout(function(){ window.scrollTo(0,0); }, 100);
  }
}
function showQuiz(){ handleEnter(); }
function checkAnswer(){ handleEnter(); }

/* FIX 2 - WORD ANIMATIONS - SLOW: 4.5s, 1s fade */
var rotWords = ['Flame.','Light.','Fire.','Voice.'];
var rotI = 0;
setInterval(function(){
  var el = document.getElementById('rotWord');
  if(!el) return;
  el.style.opacity = '0';
  el.style.transform = 'translateY(10px)';
  setTimeout(function(){
    rotI = (rotI + 1) % rotWords.length;
    el.textContent = rotWords[rotI];
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 1000);
}, 4500);

/* FIX 6 - VIDEO + AUDIO BUTTONS */
function playFlameVideo(){
  var v = document.getElementById('flameVideo');
  if(!v) return;
  v.muted = false;
  v.play().catch(function(){ v.muted = true; v.play(); });
  var btn = document.getElementById('audioBtn'); if(btn) btn.textContent = '🔊 PLAY AUDIO';
}
function toggleFlameAudio(){
  var v = document.getElementById('flameVideo');
  if(!v) return;
  if(v.paused){ v.muted = false; v.play(); }
  else { v.muted = !v.muted; }
  var btn = document.getElementById('audioBtn'); if(btn) btn.textContent = v.muted ? '🔊 PLAY AUDIO' : '🔇 MUTE AUDIO';
}

/* ===== NEW: EMBERS - FLOATING FIRE PARTICLES ===== */
function startEmbers(){
  var wrap = document.getElementById('embers');
  if(!wrap || wrap.children.length) return;
  for(var i=0;i<18;i++){
    var e = document.createElement('div');
    e.className = 'ember';
    var s = 3 + Math.random()*5;
    e.style.width = s+'px';
    e.style.height = s+'px';
    e.style.left = (Math.random()*100)+'%';
    e.style.animationDuration = (6+Math.random()*7)+'s';
    e.style.animationDelay = (Math.random()*6)+'s';
    wrap.appendChild(e);
  }
}

/* ========================================================= */
/* ===== MODIFICATION: BLUR - HERO NEVER BLURS ===== */
/* ========================================================= */
document.addEventListener('DOMContentLoaded', function(){
  startEmbers();
  var btn = document.getElementById('enterBtn');
  if(btn){
    btn.addEventListener('click', handleEnter);
  }
  var v = document.getElementById('bg-video');
  if(v){ v.muted = true; v.play().catch(function(){}); }

  var heroEl = document.querySelector('.hero');
  var posterEl = document.querySelector('.koinonia-poster');
  var countEl = document.querySelector('.koinonia-countdown');
  console.log('BLUR CHECK - hero:', !!heroEl, 'poster:', !!posterEl, 'count:', !!countEl);

  if(heroEl){
    heroEl.style.setProperty('filter','blur(0)','important');
    heroEl.style.setProperty('opacity','1','important');
    heroEl.style.setProperty('transform','none','important');
  }

  var ticking = false;
  function onScrollBlur(){
    var y = window.scrollY || 0;
    var splash = document.getElementById('splash');
    var splashOpen = splash && getComputedStyle(splash).display !== 'none' && !splash.classList.contains('hide');
    if(splashOpen){ ticking = false; return; }
    if(heroEl){
      heroEl.style.setProperty('filter','blur(0)','important');
      heroEl.style.setProperty('opacity','1','important');
      heroEl.style.setProperty('transform','none','important');
    }
    if(posterEl){
      var p2 = Math.min(y / 800, 1);
      posterEl.style.setProperty('filter','blur(' + (p2 * 4) + 'px)','important');
      posterEl.style.setProperty('opacity', String(1 - p2 * 0.3), 'important');
    }
    if(countEl){
      var p3 = Math.min(Math.max((y - 400) / 400, 0), 1);
      countEl.style.setProperty('filter','blur(' + (p3 * 4) + 'px)','important');
      countEl.style.setProperty('opacity', String(1 - p3 * 0.3), 'important');
    }
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if(!ticking){ requestAnimationFrame(onScrollBlur); ticking = true; }
  }, {passive:true});
  onScrollBlur();

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: 0.1});
  document.querySelectorAll('#home-sections section, #home-sections .card, #home-sections .give, #event-home .event').forEach(function(el){
    el.classList.add('blur-reveal');
    io.observe(el);
  });
  setTimeout(function(){
    document.querySelectorAll('.blur-reveal').forEach(function(el){ el.classList.add('visible'); });
  }, 2500);
});