document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].currentTime = 0;
      audios[i].pause();
    }
  }
}, true);

function playpause(n) {
  p = document.getElementById('audio' + n);
  if (p.paused) {
    p.play();
  } else {
    p.pause();
  }
}

function switchlang(d,l) {
  en = document.getElementsByClassName("en");
  def = document.getElementsByClassName("def");
  btn_en = document.getElementsByClassName("lang-en");
  if (l == "en") {
    for (var i = 0; i < btn_en.length + 1; i++) {
      en[i].style.display = "block";
      def[i].style.display = "none";
      btn_en[i].innerHTML = d;
      btn_en[i].setAttribute("onclick", "switchlang('" + d + "','" + d + "')");
    }
  } else if (l == d) {
    for (var i = 0; i < btn_en.length + 1; i++) {
      en[i].style.display = "none";
      def[i].style.display = "block";
      btn_en[i].innerHTML = "en";
      btn_en[i].setAttribute("onclick", "switchlang('" + d + "','en')");
    }
  }
}
