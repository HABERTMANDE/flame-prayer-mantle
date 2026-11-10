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

// === NEW - SUN / MOON THEME TOGGLE ===
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

// === FIXED - COUNTDOWN - UPDATES BOTH BARS - DAYS TO SECONDS ===
function updateCountdown(){
  var target = new Date("2027-02-06T10:00:00+03:00").getTime();
  var now = new Date().getTime();
  var diff = target - now;
  if(diff < 0){ diff = 0; }
  var d = Math.floor(diff / (1000*60*60*24));
  var h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  var m = Math.floor((diff % (1000*60*60)) / (1000*60));
  var s = Math.floor((diff % (1000*60)) / 1000);

  // Main countdown in NAIROBI page
  var elD = document.getElementById('cd-days');
  if(elD){
    elD.textContent = d;
    var hEl = document.getElementById('cd-hours'); if(hEl) hEl.textContent = h;
    var mEl = document.getElementById('cd-mins'); if(mEl) mEl.textContent = m;
    var sEl = document.getElementById('cd-secs'); if(sEl) sEl.textContent = s;
  }

  // Top Koinonia bar - NEW DAYS/HRS/MINS/SECS
  var td = document.getElementById('cd-top-days'); if(td) td.textContent = d;
  var th = document.getElementById('cd-top-hours'); if(th) th.textContent = h;
  var tm = document.getElementById('cd-top-mins'); if(tm) tm.textContent = m;
  var ts = document.getElementById('cd-top-secs'); if(ts) ts.textContent = s;

  // Backwards compat - old single days id
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
    splash.style.display = 'none';
  }
  document.body.style.overflow = 'auto';
  window.scrollTo({top:0, behavior:'smooth'});
}
function showPage(id){
  var home = document.getElementById('home-sections');
  var hero = document.querySelector('.hero');
  if(home) home.style.display = 'none';
  if(hero) hero.style.display = 'none';
  document.querySelectorAll('.page-section').forEach(function(s){ s.classList.remove('active'); });
  var el = document.getElementById(id);
  if(el){ el.classList.add('active'); }
  window.scrollTo({top:0, behavior:'smooth'});
  try{ history.pushState({page:id}, '', '#'+id); }catch(e){}
}
function showHome(e){
  if(e) e.preventDefault();
  var home = document.getElementById('home-sections');
  var hero = document.querySelector('.hero');
  if(home) home.style.display = 'block';
  if(hero) hero.style.display = 'block';
  document.querySelectorAll('.page-section').forEach(function(s){ s.classList.remove('active'); });
  window.scrollTo({top:0, behavior:'smooth'});
  try{ history.pushState({page:'home'}, '', '#home'); }catch(e){}
}
window.addEventListener('popstate', function(ev){
  var home = document.getElementById('home-sections');
  var hero = document.querySelector('.hero');
  if(ev.state && ev.state.page && ev.state.page !== 'home'){
    if(home) home.style.display = 'none';
    if(hero) hero.style.display = 'none';
    document.querySelectorAll('.page-section').forEach(function(s){ s.classList.remove('active'); });
    var el = document.getElementById(ev.state.page);
    if(el) el.classList.add('active');
  } else {
    if(home) home.style.display = 'block';
    if(hero) hero.style.display = 'block';
    document.querySelectorAll('.page-section').forEach(function(s){ s.classList.remove('active'); });
  }
});
function backToEntrance(){
  var s = document.getElementById('splash');
  if(s){ s.classList.remove('hide'); s.style.display = 'flex'; s.style.opacity = '1'; s.style.visibility = 'visible'; }
  var quiz = document.getElementById('quiz-box'); if(quiz) quiz.style.display = 'none';
  var btn = document.getElementById('enterBtn'); if(btn){ btn.style.display = ''; btn.textContent = 'ENTER'; }
  var msg = document.getElementById('quiz-msg'); if(msg) msg.textContent = '';
  document.querySelectorAll('.quiz-opt').forEach(function(o){ o.classList.remove('correct','wrong'); });
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
function handleEnter(){
  var enterBtn = document.getElementById('enterBtn');
  var quizBox = document.getElementById('quiz-box');
  if(!quizBox) { enterSite(); return; }
  if(quizBox.style.display === 'none' || quizBox.style.display === ''){
    quizBox.style.display = 'block';
    quizBox.style.opacity = '1';
    if(enterBtn) enterBtn.textContent = 'ANSWER TO ENTER ↓';
  }
}
function showQuiz(){
  handleEnter();
}
function checkAnswer(btn, isCorrect){
  var msg = document.getElementById('quiz-msg');
  var quizBox = document.getElementById('quiz-box');
  if(!msg || !quizBox){ return; }
  document.querySelectorAll('.quiz-opt').forEach(function(o){
    o.classList.remove('correct','wrong');
  });
  if(isCorrect){
    btn.classList.add('correct');
    msg.textContent = '✅ CORRECT! The fire never goes out! Entering... 🔥';
    msg.className = 'ok';
    setTimeout(function(){
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
    }, 900);
  } else {
    btn.classList.add('wrong');
    msg.textContent = '❌ Not quite... Try again! Hint: The fire never goes out.';
    msg.className = 'bad';
    quizBox.classList.remove('shake');
    void quizBox.offsetWidth;
    quizBox.classList.add('shake');
  }
}
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('enterBtn');
  if(btn){ btn.addEventListener('click', handleEnter); }
  var v = document.getElementById('bg-video');
  if(v){ v.muted = true; v.play().catch(function(){}); }
});