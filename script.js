function enterSite(){
  var splash = document.getElementById('splash');
  if(splash){ splash.classList.add('hide'); }
  document.body.style.overflow = 'auto';
  window.scrollTo(0,0);
}

// Only lock scroll if splash exists (index.html only, not saved.html)
if(document.getElementById('splash')){
  document.body.style.overflow = 'hidden';
}

function sendPrayer(){
  var n = document.getElementById('pname').value || '';
  var p = document.getElementById('pphone').value || '';
  var r = document.getElementById('prequest').value || '';
  var msg = "Hello FLAME Prayer Mantle, I need prayer.%0AName: " + encodeURIComponent(n) + "%0AMy Number: " + encodeURIComponent(p) + "%0ARequest: " + encodeURIComponent(r);
  window.open("https://wa.me/254795155158?text=" + msg, "_blank");
}

function sendSaved(){
  var n = document.getElementById('sname').value || '';
  var p = document.getElementById('sphone').value || '';
  var msg = "Hello FLAME Prayer Mantle, I JUST GAVE MY LIFE TO JESUS! 🔥%0AName: " + encodeURIComponent(n) + "%0AMy Number: " + encodeURIComponent(p) + "%0APlease pray for me and help me grow.";
  window.open("https://wa.me/254795155158?text=" + msg, "_blank");
}

// STEP 5 - COUNTDOWN TO NAIROBI - 6th Saturday 2027 = 6 Feb 2027, 10AM
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
    document.getElementById('cd-hours').textContent = h;
    document.getElementById('cd-mins').textContent = m;
    document.getElementById('cd-secs').textContent = s;
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// STEP 6 - MOBILE MENU
function toggleMenu(){
  var nav = document.getElementById('navLinks');
  if(nav){ nav.classList.toggle('open'); }
}
function closeMenu(){
  var nav = document.getElementById('navLinks');
  if(nav){ nav.classList.remove('open'); }
}